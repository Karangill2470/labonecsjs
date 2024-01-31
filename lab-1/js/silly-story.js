var customName = document.getElementById("customname");
var randomize = document.querySelector(".randomize");
var story = document.querySelector(".story");

var storyText =
  "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

var insertX = ["Donald Trump", "Jackie Chan", "Santa Claus"];
var insertY = ["Area 51", "Death Valley", "Aruba"];
var insertZ = [
  "spontaneously combusted",
  "rapidly sublimated",
  "evaporated instantly",
];

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function result() {
  var newStory = storyText;

  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(":insertx:", xItem);
  newStory = newStory.replace(":inserty:", yItem);
  newStory = newStory.replace(":insertz:", zItem);

  if (customName.value !== "") {
    newStory = newStory.replace("Bob", customName.value);
  }

  if (document.getElementById("metric").checked) {
    var weight = Math.round(300 * 0.453592); // Convert pounds to kilograms
    newStory = newStory.replace("300 pounds", weight + " kilograms");

    var temp = Math.round(((94 - 32) * 5) / 9); // Convert Fahrenheit to Celsius
    newStory = newStory.replace("94 fahrenheit", temp + " celsius");
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}

// EVENT LISTENERS
randomize.addEventListener("click", result);
