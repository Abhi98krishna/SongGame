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
  {
    title: "Tumse Milke Dil Ka Hai Jo Haal",
    translation:
      "Love is like a storm, love is like a cyclone\nEvery person in the world is helpless before love\nIn love, everyone is crazy, in love, everyone is amazed\nIn love, everything is difficult, in love, everything is easy\nLook, dear, these sights, these mad ones, these lovers\nHow lost they are in love\nAfter meeting you, the state of my heart, what can I say\nWhat a wonder this has become, what can I say\nAfter meeting you, the state of my heart, what can I say\nWhat a wonder this has become, what can I say",
  },
  {
    title: "Ainvayi Ainvayi",
    translation:
      "Your eyes carry bowls of kohl\nThose show-offs look very high-class\nThey scare my heart, they strike with their walk\nThey make my heart flip and ask why, why\nA biscuit soaked in tea\nI just like that, just like that\nJust like that I got looted",
  },
  {
    title: "Badtameez Dil",
    translation:
      "Some ghost has climbed on it\nIt does not know how to stop\nNow it cannot tell good from bad\nIt does not know the difference\nThe stubborn fool stands his ground\nIt does not know how to let go\nMischievous heart, rude heart\nIt does not listen, it does not listen",
  },
  {
    title: "Lat Lag Gayi",
    translation:
      "Faithless, this heart is very faithless\nIt is not easy to explain it\nFaithless, this heart is very faithless\nFor you it is a devil\nIt did not listen to me even once\nWhether the heart wins or I win\nYou will see\nThe bet is placed with the heart\nI got addicted to you\nThe world says this addiction is wrong",
  },
  {
    title: "Mauja Hi Mauja",
    translation:
      "The whole world has blossomed\nNow love has scattered in the air\nThe whole world has blossomed\nNow love has scattered in the air\nYour heart touches the skies\nIt takes flight, see it reach the peaks\nNow it is only joy morning and evening\nNow it is only joy in your love\nNow it is only joy, rock the party",
  },
  {
    title: "Tujhe Dekha Toh Yeh Jaana Sanam",
    translation:
      "When I saw you, I knew it, my love\nLove makes one crazy, my love\nWhen I saw you, I knew it, my love\nLove makes one crazy, my love\nWhere do we go from here\nLet us die in your arms",
  },
  {
    title: "Khaike Paan Banaras Waala",
    translation:
      "Eating the Banaras paan\nIt opens the locked mind's latch\nEating the Banaras paan\nIt opens the locked mind's latch\nThen it creates such a commotion\nIt straightens everyone's walk\nOh boy from the banks of the Ganga\nOh boy from the banks of the Ganga",
  },
  {
    title: "Tere Liye",
    translation:
      "I decorated heavens for you\nI left even divinity for you\nI decorated heavens for you\nI left even divinity for you\nFor you I dance like a madman\nMy promise is I am yours\nNever be separated",
  },
  {
    title: "Uff Teri Adaa",
    translation:
      "Swaying and bending, forget the world and dance\nHum a tune, sing and dance\nGet lost in colors, drink and dance\nWith intoxicated eyes, meet my eyes and dance\nOh your style, I like the way you move\nOh your body, I like to see you groove\nOh your gaze, it says I want to dance with you",
  },
  {
    title: "O O Jaane Jaana",
    translation:
      "She must be like a beautiful fairy\nWhat do I know\nWhat might my beloved be like\nShe must be like a beautiful fairy\nWhat do I know\nWhat might my beloved be like\nI think of you, I want you\nMy heart says erase all the distance\nOh oh my love\nThis crazy one searches for you\nYou come in dreams every day\nCome into my life",
  },
  {
    title: "Chand Sifarish",
    translation:
      "The moon makes a request\nTell you about it\nLower the curtains of modesty and shame\nWe must commit a mistake\nNow the stubborn wish is\nTo erase myself, to vanish into you\nThe moon makes a request\nTell you about it\nLower the curtains of modesty and shame\nWe must commit a mistake",
  },
  {
    title: "O Mere Dil Ke Chain",
    translation:
      "When will you come, queen of my dreams\nWhen will the charming season come\nLife keeps passing, when will you come\nCome on, come to me\nWhen will you come, queen of my dreams\nWhen will the charming season come\nLife keeps passing, when will you come\nCome on, come to me, come",
  },
  {
    title: "Haule Haule",
    translation:
      "Slowly the breeze feels like medicine\nSlowly it feels like a prayer\nSlowly the moon grows\nSlowly the veil lifts\nSlowly the intoxication rises\nBe patient, my friend\nTake a breath, my beloved\nLet worries be shot down, my friend\nLife has only four days\nSlowly, slowly love will happen",
  },
  {
    title: "Dus Bahane",
    translation:
      "In her eyes are stories\nIn her words is magic\nWe got lost in the magic, we lost control\nI looked at you, you looked at me\nAnd it became difficult\nAnd you became my destiny, you are my destination\nMaking ten excuses, they stole my heart",
  },
  {
    title: "Tere Mast Mast Do Nain",
    translation:
      "I keep looking at you morning and evening\nYou live in my eyes, like these eyes are yours\nYour two intoxicated eyes\nThey took away my heart's peace\nYour two intoxicated eyes",
  },
];

const roundCount = document.querySelector("#roundCount");
const lyrics = document.querySelector("#lyrics");
const revealToggle = document.querySelector("#revealToggle");
const hideHint = document.querySelector("#hideHint");
const hintLabel = document.querySelector("#hintLabel");
const statusMessage = document.querySelector("#statusMessage");
const copyLyrics = document.querySelector("#copyLyrics");
const readAloud = document.querySelector("#readAloud");
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
let awaitingConfirm = false;
let lastOriginalTranslated = "";
let isSpeaking = false;

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

readAloud.addEventListener("click", () => {
  const text = lyrics.textContent.trim();
  if (!text) {
    showToast("Nothing to read.");
    return;
  }
  if (!("speechSynthesis" in window)) {
    showToast("Read aloud not supported.");
    return;
  }
  if (window.speechSynthesis.speaking || isSpeaking) {
    window.speechSynthesis.cancel();
    isSpeaking = false;
    showToast("Read aloud stopped.");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.95;
  utterance.pitch = 1;
  utterance.onend = () => {
    isSpeaking = false;
  };
  utterance.onerror = () => {
    isSpeaking = false;
    showToast("Read aloud failed.");
  };
  isSpeaking = true;
  window.speechSynthesis.speak(utterance);
});

startGame.addEventListener("click", () => {
  startGameFlow();
});

openAddSong.addEventListener("click", () => {
  openModal(addSongModal);
  showToast("20 default songs are already loaded.");
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
  if (original && original !== lastOriginalTranslated) {
    try {
      addSong.disabled = true;
      addSong.textContent = "Translating...";
      finalTranslation = await translateOriginal(original);
      newTranslation.value = finalTranslation;
      lastOriginalTranslated = original;
      awaitingConfirm = true;
      addSong.disabled = false;
      addSong.textContent = "Confirm & add";
      showToast("Review translation, then confirm.");
      return;
    } catch (error) {
      showToast("Translation failed. Paste English manually.");
      addSong.disabled = false;
      addSong.textContent = "Submit";
      return;
    }
  }
  if (awaitingConfirm && !finalTranslation) {
    showToast("Translation missing. Paste English.");
    return;
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
  lastOriginalTranslated = "";
  closeModal(addSongModal);
  showToast("Song added");
  awaitingConfirm = false;
  addSong.disabled = false;
  addSong.textContent = "Submit";
});

newOriginal.addEventListener("input", () => {
  awaitingConfirm = false;
  lastOriginalTranslated = "";
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
