function htmlspecialchars(formData) {
	let x = formData.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
	console.log(x);
		
	return x;


}


htmlspecialchars('Жора&&&,<>Жопа');