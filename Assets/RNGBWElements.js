const allElementsArray = Array.from(document.querySelectorAll('*'));
console.log(allElementsArray);

  function getRandomHue(saturation = 100,lightness = 25) {
	const hue = Math.floor(Math.random() * 360);
	const lightness = Math.floor(Math.random() * 100);
	return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

allElementsArray.forEach(element => {
	lightness = Math.floor(Math.random() * 100);
	element.style = `
	background-color:hsl(0,0%,${lightness}%);
	color:hsl(0,0%,${lightness}%);
	`
})