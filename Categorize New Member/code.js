
// function openOrSenior(data){
// 	function determineMembership(member){
// 	  console.log(member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open';
// 	}
// 	console.log(data.map(determineMembership));
//   }

//   openOrSenior([45, 12],[55,21],[19, -2],[104, 20])

const promise = new Promise(res => {
	setTimeout(() =>res((2), 0));
	res(1);
});
promise.then(res=> console.log(res))
