function matrix(){
	var matrix = '';

	for(var i=1; i<=100; i++){
		if (i%10==0)
			matrix+=''+i+"\n";
		else
			matrix+=i+" ";

	}
	console.log(matrix);
}