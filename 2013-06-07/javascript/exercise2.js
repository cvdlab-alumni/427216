var domainMounts = DOMAIN([[-50, 50], [-50, 50]])([32, 32]);
var altitude = {};

var mounts = function(dom){
    var x = dom[0];
    var y = dom[1];
    var z = Math.random()*Math.abs(x%y);
    if (z==0)
    	z = Math.random();
    this.altitude[''+Math.floor(x)+','+Math.floor(y)] = z;
 return [x, y, z];
}
var terrain = MAP(mounts)(domainMounts);

var domainLake = DOMAIN([[-10, 10], [-10, 10]])([32, 32]);

var z_lake = 0;
var z_lake_min = 0;

var lake = function(dom){
    var x = dom[0];
    var y = dom[1];
 	 var z = this.z_lake+0.8;
    return [x, y, z];
}

var zLake = function(dom){
    var x = dom[0];
    var y = dom[1];
 	 var z = this.altitude[''+Math.floor(x)+','+Math.floor(y)];
 	 if (z < this.z_lake)
 	 	this.z_lake = z;
 	 return [x, y, z];
}
MAP(zLake)(domainLake);
var l = COLOR([139/255,232/255,218/255])(MAP(lake)(domainLake));
var s = STRUCT([terrain,l]);
DRAW(s);