let square = document.getElementById("square")

let widthSlider = document.getElementById("widthSlider")
let heightSlider = document.getElementById("heightSlider")

let squareSizeParagraph = document.getElementById("squareSizeParagraph")

let selectedLandscapeParagraph = document.getElementById("selectedLandscapeParagraph")

let totalAreaParagraph = document.getElementById("totalAreaParagraph")
let costPerSquareParagraph = document.getElementById("costPerSquareParagraph")
let totalCostParagraph = document.getElementById("totalCostParagraph")

let selectedLandscape

let totalArea = 400

let costPerSquare

widthSlider.addEventListener("input", changeSquareWidth)
heightSlider.addEventListener("input", changeSquareHeight)

function selectDirt() {
  costPerSquare = 1
  square.style.backgroundImage = `url(${"dirt.jpeg"})`
  selectedLandscapeParagraph.innerHTML = "Selected landscape: Dirt"
  updateParagraphs()
}

function selectGrass() {
  costPerSquare = 2
  square.style.backgroundImage = `url(${"grass.jpeg"})` 
  selectedLandscapeParagraph.innerHTML = "Selected landscape: Grass"
  updateParagraphs()
}

function selectPavers() {
  costPerSquare = 3
  square.style.backgroundImage = `url(${"pavers.jpeg"})` 
  selectedLandscapeParagraph.innerHTML = "Selected landscape: Pavers"
  updateParagraphs()
}

function changeSquareWidth() {
  square.style.width = `${widthSlider.value}px`
  totalArea = Math.floor(widthSlider.value / 10 ) * Math.floor(heightSlider.value / 10)
  squareSizeParagraph.innerHTML = `${Math.floor(widthSlider.value / 10)} feet x ${Math.floor(heightSlider.value / 10)} feet`
  updateParagraphs()
}

function changeSquareHeight() {
  square.style.height = `${heightSlider.value}px`
  totalArea = Math.floor(widthSlider.value / 10 ) * Math.floor(heightSlider.value / 10)
  squareSizeParagraph.innerHTML = `${Math.floor(widthSlider.value / 10)} feet x ${Math.floor(heightSlider.value / 10)} feet`
  updateParagraphs()
}

function updateParagraphs() {

  totalAreaParagraph.innerHTML = `Area: ${totalArea} square feet`

  if (costPerSquare != undefined) {
    costPerSquareParagraph.innerHTML = `Cost per square foot: $${costPerSquare}`
    totalCostParagraph.innerHTML = `Total cost: $${totalArea * costPerSquare}`
  }
}
