const allElementsArray = Array.from(document.querySelectorAll('*'));
console.log(allElementsArray);

  function getRandomHue(saturation = 100,lightness = 25) {
	const hue = Math.floor(Math.random() * 360);
	return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

allElementsArray.forEach(element => {
	lightness = (document.children.length)+1
	console.log(document.children.length)
	element.style = `
	background-color:${getRandomHue(100,50-lightness)};
	color: ${getRandomHue(100,lightness-50)};
	`
})