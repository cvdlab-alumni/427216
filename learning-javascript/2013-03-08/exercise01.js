a = function push(n){
	var a = [];
	for (var i=1; i<=n; i++){
		a.push(i);
	}
	return a;
}

var everyResult = a.filter(function(item, index, array) {
 return (item % 2 == 0);
});

var everyDouble = everyResult.map(function(item, index, array) {
 return (item * 2);
});

var everyDivisible = everyDouble.filter(function(item, index, array) {
 return (item % 4 == 0);
});

var sum = everyDivisible.reduce(function(prev, cur, index, array){
 return prev + cur;
});