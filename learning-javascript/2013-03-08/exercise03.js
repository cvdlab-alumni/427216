function capitalized (word){
	word = word.charAt(0).toUpperCase().concat(word.slice(1,word.lenght).toLowerCase());
	return word;
}

function capitalizedAll (word){
	var s = word.split(' ');
	for (var i=0; i<s.length; i++){
		s[i] = capitalized (s[i]);
	}
	return s.join(' ');
}
