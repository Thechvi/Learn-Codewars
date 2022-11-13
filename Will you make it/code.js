const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
	console.log(mpg * fuelLeft >= distanceToPump ? true : false)
};
zeroFuel(50, 25, 2)