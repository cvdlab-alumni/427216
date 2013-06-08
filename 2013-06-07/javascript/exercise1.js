var domain = DOMAIN([[-50, 50], [-50, 50]])([24, 24]);

var mounts = function(dom, dz){
    var x = dom[0];
    var y = dom[1];
    var z = Math.random()*Math.abs(x%y);
    if (z==0)
    	z = Math.random();
    return [x, y, z];
}

var terrain = MAP(mounts)(domain);

DRAW(terrain);