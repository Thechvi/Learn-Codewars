//const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//console.log(mpg * fuelLeft >= distanceToPump ? true : false)
//};
//zeroFuel(50, 25, 2)

function openOrSenior(data) {
	let result = [];
	for (i = 0; i < data.length; i++) {
		for (j = 0; j < data[i].length; j++) {
			if (data[i][0] > 55 && data[i][1] > 7) {
				// console.log(data[i][0], data[i][1])
				data[i] = "Senior"
			}
			else {
				data[i] = "Open"
			}
			return result.push(data[i][j])
		}

	}

	
}

console.log(openOrSenior([[57, 12], [55, 21], [19, -2], [104, 20]]))