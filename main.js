const songs = [
  {
    title: "Chaiyya Chaiyya",
    translation:
      "That friend is like a fragrance\nWhose speech is like poetry\nMy evening, my night, my whole universe\nThat friend is my beloved\nWalk in the shade, walk in the shade, walk in the shade, walk in the shade\nWalk in the shade, walk in the shade, walk in the shade, walk in the shade",
  },
  {
    title: "Channa Mereya",
    translation:
      "All right, I will leave\nRemember me in your prayers\nKeep the taste of my mention on your tongue\nIn the boxes of your heart, keep my good deeds\nEven in letters and in the stars, keep my greeting\nI took your darkness\nI named my bright star after you\nOh moon, my love, my love\nOh moon, my love, my love",
  },
  {
    title: "Subah Hone Na De",
    translation:
      "I love you\nI love you without reason\nCome into my arms, my love\nJust for tonight\nOur style is native\nFall for us\nCome into my arms, my love\nJust for tonight\nDo not let the morning come\nDo not let us be apart\nLet us not let each other sleep\nYou are my hero, oh oh oh\nYou are my hero, oh oh oh",
  },
  {
    title: "Chikni Chameli",
    translation:
      "My eyes are scorpions\nThey strike with a deadly glance\nThis young waist of mine\nKills with a single dance move\nI came to make change for the notes\nI came to light a cigarette and a water pipe with the spark of beauty\nSlippery Jasmine has arrived\nQuietly, all alone\nDressed up and ready\nSlippery Jasmine has arrived\nQuietly, all alone\nDressed up and ready",
  },
  {
    title: "Jeene Ke Hain Chaar Din",
    translation:
      "There are four days to live\nThe rest are useless days\nThere are four days to live\nThe rest are useless days\nOnce youth goes away, it will not return\nHey, hey, youth will not return",
  },
];

const roundCount = document.querySelector("#roundCount");
const lyrics = document.querySelector("#lyrics");
const revealToggle = document.querySelector("#revealToggle");
const hideHint = document.querySelector("#hideHint");
const hintLabel = document.querySelector("#hintLabel");
const statusMessage = document.querySelector("#statusMessage");
const copyLyrics = document.querySelector("#copyLyrics");
const turnMain = document.querySelector("#teamMain");
const turnSub = document.querySelector("#teamSub");
const teamABox = document.querySelector("#teamABox");
const teamBBox = document.querySelector("#teamBBox");
const welcomeModal = document.querySelector("#welcomeModal");
const gameScreen = document.querySelector("#gameScreen");
const bottomBar = document.querySelector("#bottomBar");
const startGame = document.querySelector("#startGame");
const setupTeamA = document.querySelector("#setupTeamA");
const setupTeamB = document.querySelector("#setupTeamB");
const lyricsCard = document.querySelector("#lyricsCard");
const editTeamButtons = document.querySelectorAll(".edit-team");
const editScoresModal = document.querySelector("#editScoresModal");
const closeEditScores = document.querySelector("#closeEditScores");
const saveEditScores = document.querySelector("#saveEditScores");
const editTeamAName = document.querySelector("#editTeamAName");
const editTeamAScore = document.querySelector("#editTeamAScore");
const editTeamBName = document.querySelector("#editTeamBName");
const editTeamBScore = document.querySelector("#editTeamBScore");
const openAddSong = document.querySelector("#openAddSong");
const addSongModal = document.querySelector("#addSongModal");
const closeAddSong = document.querySelector("#closeAddSong");
const newTitle = document.querySelector("#newTitle");
const newTranslation = document.querySelector("#newTranslation");
const newOriginal = document.querySelector("#newOriginal");
const addSong = document.querySelector("#addSong");
const endRound = document.querySelector("#endRound");
const roundModal = document.querySelector("#roundModal");
const closeRound = document.querySelector("#closeRound");
const confirmRound = document.querySelector("#confirmRound");
const winnerButtons = document.querySelectorAll(".winner-button");
const toast = document.querySelector("#toast");

const baseDeck = [...songs];
let deck = [];
let currentIndex = 0;
let currentSong = null;
let playedCount = 1;
let totalCount = 0;
let activeTeam = 0;
const scores = [0, 0];
const teamNames = ["Team A", "Team B"];
let isRevealed = false;
const addedQueue = [];
let selectedWinner = "none";
let toastTimeout = null;

const shuffleDeck = () => {
  deck = baseDeck
    .map((song) => ({ sort: Math.random(), value: song }))
    .sort((a, b) => a.sort - b.sort)
    .map((entry) => entry.value);
};

const updateScores = () => {
  updateTurnDisplay();
};

const updateTeamNames = () => {
  winnerButtons.forEach((button) => {
    if (button.dataset.winner === "0") {
      button.textContent = teamNames[0];
    }
    if (button.dataset.winner === "1") {
      button.textContent = teamNames[1];
    }
  });
  updateTurnDisplay();
};

const updateRoundCount = () => {
  roundCount.textContent = `Song ${playedCount} of ${totalCount}`;
};

const updateTurnDisplay = () => {
  const teamALabel = `${teamNames[0]} (${scores[0]})${activeTeam === 0 ? " turn" : ""}`;
  const teamBLabel = `${teamNames[1]} (${scores[1]})${activeTeam === 1 ? " turn" : ""}`;
  turnMain.textContent = teamALabel;
  turnSub.textContent = teamBLabel;
  teamABox.classList.toggle("active", activeTeam === 0);
  teamBBox.classList.toggle("active", activeTeam === 1);
  teamABox.classList.toggle("inactive", activeTeam !== 0);
  teamBBox.classList.toggle("inactive", activeTeam !== 1);
  lyricsCard.classList.toggle("team-a-active", activeTeam === 0);
  lyricsCard.classList.toggle("team-b-active", activeTeam === 1);
};

const updateTeamUI = () => {
  updateTurnDisplay();
};

const setStatus = (message) => {
  statusMessage.textContent = message;
};

const showToast = (message) => {
  toast.textContent = message;
  toast.classList.add("show");
  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
};

const WORKER_URL = "https://songgame-translate.abhi98krishna.workers.dev/translate";

const translateOriginal = async (text) => {
  const response = await fetch(WORKER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      q: text,
      source: "auto",
      target: "en",
      format: "text",
    }),
  });
  if (!response.ok) {
    throw new Error("Translate failed");
  }
  const data = await response.json();
  if (!data || !data.translatedText) {
    throw new Error("Translate failed");
  }
  return data.translatedText;
};

const renderSong = (song) => {
  currentSong = song;
  updateRoundCount();
  lyrics.textContent = song.translation;
  isRevealed = false;
  hintLabel.textContent = "Hint: song name";
  revealToggle.classList.remove("revealed");
  hideHint.classList.add("is-hidden");
  setStatus("");
};

const openModal = (modal) => {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
};

const closeModal = (modal) => {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
};

const startGameFlow = () => {
  const nameA = setupTeamA.value.trim();
  const nameB = setupTeamB.value.trim();
  if (nameA) {
    teamNames[0] = nameA;
  }
  if (nameB) {
    teamNames[1] = nameB;
  }
  updateTeamNames();
  welcomeModal.classList.remove("open");
  welcomeModal.setAttribute("aria-hidden", "true");
  gameScreen.classList.remove("is-hidden");
  bottomBar.classList.remove("is-hidden");
};

const setWinnerSelection = (value) => {
  selectedWinner = value;
  winnerButtons.forEach((button) => {
    const isSelected = button.dataset.winner === value;
    button.classList.toggle("selected", isSelected);
  });
};

const syncEditModal = () => {
  editTeamAName.value = teamNames[0];
  editTeamAScore.value = scores[0];
  editTeamBName.value = teamNames[1];
  editTeamBScore.value = scores[1];
};

const applyRoundScore = () => {
  if (selectedWinner === "none") {
    return;
  }
  const winnerIndex = Number.parseInt(selectedWinner, 10);
  if (winnerIndex === activeTeam) {
    scores[winnerIndex] += 10;
  } else {
    scores[winnerIndex] += 5;
  }
  updateScores();
  updateTurnDisplay();
};

const advanceSong = () => {
  if (addedQueue.length > 0) {
    playedCount += 1;
    const nextAdded = addedQueue.shift();
    activeTeam = activeTeam === 0 ? 1 : 0;
    updateTeamUI();
    renderSong(nextAdded);
    return;
  }

  if (currentIndex >= deck.length - 1) {
    shuffleDeck();
    currentIndex = 0;
    playedCount = 1;
    totalCount = deck.length + addedQueue.length;
    setStatus("Playlist shuffled. New round!");
  } else {
    currentIndex += 1;
    playedCount += 1;
  }

  activeTeam = activeTeam === 0 ? 1 : 0;
  updateTeamUI();
  renderSong(deck[currentIndex]);
};

revealToggle.addEventListener("click", () => {
  if (!currentSong || isRevealed) {
    return;
  }
  isRevealed = true;
  hintLabel.textContent = currentSong.title;
  revealToggle.classList.add("revealed");
  hideHint.classList.remove("is-hidden");
});

hideHint.addEventListener("click", (event) => {
  event.stopPropagation();
  if (!isRevealed) {
    return;
  }
  isRevealed = false;
  hintLabel.textContent = "Hint: song name";
  revealToggle.classList.remove("revealed");
  hideHint.classList.add("is-hidden");
});

copyLyrics.addEventListener("click", async () => {
  const text = lyrics.textContent.trim();
  if (!text) {
    showToast("Nothing to copy.");
    return;
  }
  try {
    await navigator.clipboard.writeText(text);
    showToast("Lyrics copied");
  } catch (error) {
    showToast("Copy failed");
  }
});

startGame.addEventListener("click", () => {
  startGameFlow();
});

openAddSong.addEventListener("click", () => {
  openModal(addSongModal);
});

closeAddSong.addEventListener("click", () => {
  closeModal(addSongModal);
});

editTeamButtons.forEach((button) => {
  button.addEventListener("click", () => {
    syncEditModal();
    openModal(editScoresModal);
  });
});

closeEditScores.addEventListener("click", () => {
  closeModal(editScoresModal);
});

saveEditScores.addEventListener("click", () => {
  const nameA = editTeamAName.value.trim();
  const nameB = editTeamBName.value.trim();
  const scoreA = Number.parseInt(editTeamAScore.value, 10);
  const scoreB = Number.parseInt(editTeamBScore.value, 10);
  if (!nameA || !nameB) {
    showToast("Enter both team names");
    return;
  }
  teamNames[0] = nameA;
  teamNames[1] = nameB;
  scores[0] = Number.isNaN(scoreA) ? scores[0] : scoreA;
  scores[1] = Number.isNaN(scoreB) ? scores[1] : scoreB;
  updateTeamNames();
  updateScores();
  closeModal(editScoresModal);
  showToast("Scores updated");
});

addSong.addEventListener("click", async () => {
  const title = newTitle.value.trim();
  const translation = newTranslation.value.trim();
  const original = newOriginal.value.trim();
  if (!title || !translation) {
    if (!title) {
      showToast("Add a title");
      return;
    }
    if (!original) {
      showToast("Add a translation or original lyrics");
      return;
    }
  }
  let finalTranslation = translation;
  if (!finalTranslation && original) {
    try {
      addSong.disabled = true;
      addSong.textContent = "Translating...";
      finalTranslation = await translateOriginal(original);
      newTranslation.value = finalTranslation;
    } catch (error) {
      showToast("Translation failed. Paste English manually.");
      addSong.disabled = false;
      addSong.textContent = "Submit";
      return;
    }
  }
  addedQueue.push({
    title,
    translation: finalTranslation,
  });
  totalCount += 1;
  updateRoundCount();
  newTitle.value = "";
  newTranslation.value = "";
  newOriginal.value = "";
  closeModal(addSongModal);
  showToast("Song added");
  addSong.disabled = false;
  addSong.textContent = "Submit";
});

endRound.addEventListener("click", () => {
  setWinnerSelection("none");
  openModal(roundModal);
});

closeRound.addEventListener("click", () => {
  closeModal(roundModal);
});

winnerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setWinnerSelection(button.dataset.winner);
  });
});

confirmRound.addEventListener("click", () => {
  applyRoundScore();
  advanceSong();
  closeModal(roundModal);
});

shuffleDeck();
updateScores();
updateTeamNames();
updateTeamUI();
totalCount = deck.length + addedQueue.length;
renderSong(deck[currentIndex]);
