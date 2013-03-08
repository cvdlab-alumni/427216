function select(data, key, values){
	var result = [];
	for(var i=0; i<data.length; i++){
		if ((values.indexOf(data[i][key])) != -1)
			result.push(data[i]);
	}
	return result;
}