function elements(n){
	a = [];
	for (var i=1; i<=n; i++){
		a.push(i);
	}
	return a;
}

var a = elements(10);

var everyResult = a.filter(function(item) {
 return (item % 2 == 0);
});

var everyDouble = everyResult.map(function(item) {
 return (item * 2);
});

var everyDivisible = everyDouble.filter(function(item) {
 return (item % 4 == 0);
});

var sum = everyDivisible.reduce(function(prev, cur){
 return prev + cur;
});