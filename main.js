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
const statusMessage = document.querySelector("#statusMessage");
const copyLyrics = document.querySelector("#copyLyrics");
const turnMain = document.querySelector("#turnMain");
const turnSub = document.querySelector("#turnSub");
const openEditScores = document.querySelector("#openEditScores");
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
  const activeLabel = `${teamNames[activeTeam]} (${scores[activeTeam]}) turn`;
  const otherIndex = activeTeam === 0 ? 1 : 0;
  const otherLabel = `${teamNames[otherIndex]} (${scores[otherIndex]})`;
  turnMain.textContent = activeLabel;
  turnSub.textContent = otherLabel;
  turnMain.classList.toggle("team-a", activeTeam === 0);
  turnMain.classList.toggle("team-b", activeTeam === 1);
  turnSub.classList.toggle("team-b", activeTeam === 0);
  turnSub.classList.toggle("team-a", activeTeam === 1);
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

const renderSong = (song) => {
  currentSong = song;
  updateRoundCount();
  lyrics.textContent = song.translation;
  isRevealed = false;
  revealToggle.textContent = "Hint: song name";
  revealToggle.classList.remove("revealed");
  hideHint.classList.add("is-hidden");
  setStatus("Pass the phone to the singer.");
};

const openModal = (modal) => {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
};

const closeModal = (modal) => {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
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
  revealToggle.textContent = currentSong.title;
  revealToggle.classList.add("revealed");
  hideHint.classList.remove("is-hidden");
});

hideHint.addEventListener("click", () => {
  if (!isRevealed) {
    return;
  }
  isRevealed = false;
  revealToggle.textContent = "Hint: song name";
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

openAddSong.addEventListener("click", () => {
  openModal(addSongModal);
});

closeAddSong.addEventListener("click", () => {
  closeModal(addSongModal);
});

openEditScores.addEventListener("click", () => {
  syncEditModal();
  openModal(editScoresModal);
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

addSong.addEventListener("click", () => {
  const title = newTitle.value.trim();
  const translation = newTranslation.value.trim();
  if (!title || !translation) {
    showToast("Add a title and lyrics");
    return;
  }
  addedQueue.push({
    title,
    translation,
  });
  totalCount += 1;
  updateRoundCount();
  newTitle.value = "";
  newTranslation.value = "";
  closeModal(addSongModal);
  showToast("Song added");
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
