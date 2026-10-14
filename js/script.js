// VARIABLES (this is the state of the page)
let energy = 50;
let studyCount = 0;
let userName = "friend";
let hadCoffee = false; // boolean: coffee can only be used once

// Checks the energy and what the user did before, then decides which state to show
function updatePage() {
  document.getElementById("energy").innerHTML = energy;
  document.getElementById("studyCount").innerHTML = studyCount;

  if (studyCount >= 6 && energy >= 40) {
    // State 1: On a Roll (studied a lot AND still has energy)
    document.getElementById("face").innerHTML = "🏆";
    document.getElementById("mood").innerHTML = "On a Roll";
    document.getElementById("message").innerHTML = "Wow " + userName + ", you studied " + studyCount + " times and still have energy!";
    document.body.style.backgroundColor = "#c4dcff";
  } else if (energy >= 70) {
    // State 2: Energized
    document.getElementById("face").innerHTML = "😄";
    document.getElementById("mood").innerHTML = "Energized";
    document.getElementById("message").innerHTML = "You feel great, " + userName + ". Good time to study!";
    document.body.style.backgroundColor = "#c8f0c0";
  } else if (energy >= 40 && energy < 70) {
    // State 3: Doing Okay
    document.getElementById("face").innerHTML = "🙂";
    document.getElementById("mood").innerHTML = "Doing Okay";
    document.getElementById("message").innerHTML = "You can keep going for a bit, " + userName + ".";
    document.body.style.backgroundColor = "#fff3c4";
  } else if (energy >= 10 && energy < 40) {
    // State 4: Tired
    document.getElementById("face").innerHTML = "😴";
    document.getElementById("mood").innerHTML = "Tired";
    document.getElementById("message").innerHTML = "You are getting tired, " + userName + ". Maybe take a break.";
    document.body.style.backgroundColor = "#ffd0a8";
  } else {
    // State 5: Burnt Out
    document.getElementById("face").innerHTML = "😵";
    document.getElementById("mood").innerHTML = "Burnt Out";
    document.getElementById("message").innerHTML = "No energy left, " + userName + ". You need a break!";
    document.body.style.backgroundColor = "#f5a3a3";
  }
}

// Saves the name the user typed in
function setName() {
  let typedName = document.getElementById("nameInput").value;

  // if the box is empty, keep calling them "friend"
  if (typedName === "") {
    userName = "friend";
  } else {
    userName = typedName;
  }

  updatePage();
}

// Studying takes away energy
function study() {
  // can't study with no energy left
  if (energy === 0) {
    document.getElementById("message").innerHTML = "You are too tired to study, " + userName + ". Take a break first!";
    return;
  }

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

// Coffee gives a big boost, but only once
function drinkCoffee() {
  if (!hadCoffee) {
    energy += 30;
    if (energy > 100) {
      energy = 100;
    }
    hadCoffee = true;
    document.getElementById("coffeeText").innerHTML = "Coffee: already had one";
    document.getElementById("coffeeBtn").style.opacity = "0.5";
    updatePage();
  } else {
    document.getElementById("message").innerHTML = "Sorry " + userName + ", you already had your coffee. Try a break instead.";
  }
}

// Starts everything over (asks first)
function reset() {
  let answer = confirm("Are you sure you want to start over?");

  if (answer === true) {
    energy = 50;
    studyCount = 0;
    hadCoffee = false;
    document.getElementById("coffeeText").innerHTML = "Coffee: not had yet";
    document.getElementById("coffeeBtn").style.opacity = "1";
    updatePage();
  }
}

document.getElementById("nameBtn").addEventListener("click", setName);
document.getElementById("studyBtn").addEventListener("click", study);
document.getElementById("breakBtn").addEventListener("click", takeBreak);
document.getElementById("coffeeBtn").addEventListener("click", drinkCoffee);
document.getElementById("resetBtn").addEventListener("click", reset);

// show the starting state when the page loads
updatePage();
