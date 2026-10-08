// VARIABLES (this is the state of the page)
let energy = 50;
let studyCount = 0;

// Checks the energy and decides which state to show
function updatePage() {
  document.getElementById("energy").innerHTML = energy;
  document.getElementById("studyCount").innerHTML = studyCount;

  if (energy >= 70) {
    // State 1: Energized
    document.getElementById("face").innerHTML = "😄";
    document.getElementById("mood").innerHTML = "Energized";
    document.getElementById("message").innerHTML = "You feel great. Good time to study!";
    document.body.style.backgroundColor = "#c8f0c0";
  } else if (energy >= 40 && energy < 70) {
    // State 2: Doing Okay
    document.getElementById("face").innerHTML = "🙂";
    document.getElementById("mood").innerHTML = "Doing Okay";
    document.getElementById("message").innerHTML = "You can keep going for a bit.";
    document.body.style.backgroundColor = "#fff3c4";
  } else if (energy >= 10 && energy < 40) {
    // State 3: Tired
    document.getElementById("face").innerHTML = "😴";
    document.getElementById("mood").innerHTML = "Tired";
    document.getElementById("message").innerHTML = "You are getting tired. Maybe take a break.";
    document.body.style.backgroundColor = "#ffd0a8";
  } else {
    // State 4: Burnt Out
    document.getElementById("face").innerHTML = "😵";
    document.getElementById("mood").innerHTML = "Burnt Out";
    document.getElementById("message").innerHTML = "No energy left. You need a break!";
    document.body.style.backgroundColor = "#f5a3a3";
  }
}

// Studying takes away energy
function study() {
  energy -= 15;
  studyCount += 1;

  // energy can not go below 0
  if (energy < 0) {
    energy = 0;
  }

  updatePage();
}

// A break gives energy back
function takeBreak() {
  energy += 10;

  // energy can not go above 100
  if (energy > 100) {
    energy = 100;
  }

  updatePage();
}

// Starts everything over
function reset() {
  energy = 50;
  studyCount = 0;
  updatePage();
}

document.getElementById("studyBtn").addEventListener("click", study);
document.getElementById("breakBtn").addEventListener("click", takeBreak);
document.getElementById("resetBtn").addEventListener("click", reset);

// show the starting state when the page loads
updatePage();
