function matrix(){
	var matrix = '';
	var cost = 11;
	var init = 1;

	for(var i=1; i<=100; i++){
		if (i==1 || i===init+cost){
			matrix += 1;
			init = cost+init;
		} else
			matrix += 0;
		if (i%10==0)
			matrix+="\n";
		else
			matrix+=",";

	}
	console.log(matrix);
}