function wallpaper(l, w, h) {
	if (l > 0 && w > 0 && h > 0) {
		const numberOfRolls = Math.round(1.15 * (2 * (l + w) / 0.52) / (10 / h))
		//console.log(numberOfRolls)
		const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]
		return numbers[numberOfRolls]
	}

	else {
		return "zero"
	}
}

