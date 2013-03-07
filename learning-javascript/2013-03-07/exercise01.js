function identity(n){
	var matrix = '';

	for(var i=1; i<=n; i++){
		for (var j=1; j<=n; j++){
			if (i===j)
				matrix += '\t 1';
			else
				matrix += '\t 0';
		}
		matrix += '\n';
	}
	return matrix;
}