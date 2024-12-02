// Create and add a header
const header = document.createElement("header");
header.textContent = "Wonders of the Universe";
header.style.fontSize = "200%";
header.style.color = "#ffffff";
header.style.backgroundColor = "#1a1a40"; // Dark space-themed background
header.style.textAlign = "center";
header.style.padding = "10px";
document.body.appendChild(header);

// Create and add a paragraph
const paragraph = document.createElement("p");
paragraph.textContent =
    "The universe is vast and filled with fascinating celestial objects. From stars to galaxies, each object tells a story about the origins of our cosmos. Explore some of the wonders below.";
document.body.appendChild(paragraph);

// Create and add an ordered list
const flowerList = document.createElement("ol");

// Add list items for Indiana spring flowers
const flowers = [
    "Black Holes: Mysterious regions where gravity is so strong that even light cannot escape.",
    "Nebulae: Vast clouds of gas and dust, often the birthplace of new stars.",
    "Galaxies: Gigantic systems of stars, planets, and cosmic dust, like the Milky Way."
];

flowers.forEach(flower => {
  const listItem = document.createElement("li");
  listItem.textContent = flower;
  flowerList.appendChild(listItem);
});

document.body.appendChild(flowerList);
