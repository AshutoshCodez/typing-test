const quotes = [
  "Success is not final failure is not fatal it is the courage to continue that counts",
  "The best way to predict the future is to create it",
  "Do not wait for opportunity create it",
  "Dream big start small and act now",
  "Every accomplishment starts with the decision to try",
  "Hard work beats talent when talent does not work hard",
  "The secret of getting ahead is getting started",
  "Do something today that your future self will thank you for",
  "Small steps every day lead to big results",
  "Your only limit is your mind",
  "Believe you can and you are halfway there",
  "Action is the foundational key to all success",
  "The journey of a thousand miles begins with a single step",
  "Stay hungry stay foolish",
  "Focus on progress not perfection",
  "Success usually comes to those who are too busy to be looking for it",
  "Do not count the days make the days count",
  "Great things never come from comfort zones",
  "Mistakes are proof that you are trying",
  "Doubt kills more dreams than failure ever will",
  "The harder you work the luckier you get",
  "Discipline is choosing between what you want now and what you want most",
  "Everything you can imagine is real",
  "If you can dream it you can do it",
  "Start where you are use what you have do what you can",
  "Never stop learning because life never stops teaching",
  "The future depends on what you do today",
  "Work hard in silence let success make the noise",
  "Success is the sum of small efforts repeated day in and day out",
  "Do not be afraid to give up the good to go for the great"
];

const quoteDisplay = document.getElementById("qoutedisplay");
const inputbox = document.getElementById("inputbox");
const timeEl = document.getElementById("time");
const wpmEl = document.getElementById("wpm");
const accuracyEl = document.getElementById("accuracy");
let restart = document.getElementById("restartbtn")

let currentQuote = "";

// load quote
function loadQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  currentQuote = quotes[randomIndex];
  quoteDisplay.innerText = currentQuote;
}

loadQuote();

// timer
let time = 0;
let interval;
let started = false;

inputbox.addEventListener("input", () => {
  if (!started) {
    started = true;

    interval = setInterval(() => {
      time++;
      timeEl.innerText = time;
    }, 1000);
  }
  if (inputbox.value.trim() === currentQuote) {

    clearInterval(interval);

    const wordsTyped = currentQuote.split(" ").length;

    const wpm = Math.round(
      wordsTyped / Math.max(time / 60, 1 / 60)
    );

    wpmEl.innerText = wpm;
  }
let correct = 0;

for (let i = 0; i < inputbox.value.length; i++) {
  if (inputbox.value[i] === currentQuote[i]) {
    correct++;
  }
}

const accuracy = Math.round(
  (correct / currentQuote.length) * 100
);

accuracyEl.innerText = accuracy;

const userText = inputbox.value.trim();

if (
    userText.length === currentQuote.length &&
    userText === currentQuote
) {
    clearInterval(interval);

    // WPM calculation
}
});

console.log("working");

restart.addEventListener("click", ()=>{
    timeEl.innerText = 0;
    inputbox.value = "";
    started = false;
    time = 0;
    clearInterval(interval);
    wpmEl.innerText = 0;
accuracyEl.innerText = 0;

    loadQuote();
})

currentQuote = quotes[randomIndex].replace(/[.,!?]/g, "");