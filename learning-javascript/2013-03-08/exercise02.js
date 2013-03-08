var a = function random(n){
	var a = [];
	for (var i=0; i<n; i++){
		a[i] = parseInt(Math.random() * 100);
	}
	return a;
}

var even = a.filter(function (item){
	return item % 2 == 1;
});

var s = even.sort(function (first, second) {
	return first-second;
});