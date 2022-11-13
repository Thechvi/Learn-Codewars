function isPalindrome(x) {
	let newStr1 = x.toUpperCase();
	let newStr2 = newStr1.split('').reverse().join('');
	if (newStr1 == newStr2) {
		// return true
		console.log(true)
	}
	else {
		//return false
		console.log(false)
	}
}
isPalindrome('a');
isPalindrome('aba');
isPalindrome('Abba');
isPalindrome('hello');
isPalindrome('Bob');
isPalindrome('Madam');
isPalindrome('AbBa');
isPalindrome('');
