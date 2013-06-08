var dom2D = DOMAIN([[0,1],[0,1]])([30,30])
var dom1D = INTERVALS(1)(32)

function bezierMappata_1D(controlpoints){
	return BEZIER(S0)(controlpoints)
}

function bezierMappata_2D(functions){
	var x = BEZIER(S1)(functions)
	return MAP(x)(dom2D)
}


function cerc(r,z){
	var points = [[1,0,z],[1,1,z],[0,1.62,z],[-1.22,1.22,z],[-2,0,z],[-1.22,-1.22,z],[0,-1.63,z],[1,-1,z],[1,0,z]];
	var c = points.map(function(point){return [point[0]*r,point[1]*r,point[2]]})
	var cerchio = bezierMappata_1D(c);
	return cerchio;
}

var albero = function(r,zBase,z1){
    var base = cerc(r,zBase);
    var fin = cerc(r,z1);
    var tronco = bezierMappata_2D([fin,base]);
    var baseCono = cerc(r+0.5,z1);
    var punto = [0,0,z1+6];
    var punto1 =[0,0,z1]
    var cono = MAP(CONICAL_SURFACE(punto)(baseCono))(dom2D);
    var cono1 = MAP(CONICAL_SURFACE(punto1)(baseCono))(dom2D);
 	 tronco = COLOR([155/255,94/255,94/255])(tronco);
 	 cono = COLOR([0,1,0])(cono);
 	 cono1 = COLOR([0,1,0])(cono1);
    return STRUCT([tronco,cono,cono1])
}

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

function generaAlberi(x_init,x_final,y_init,y_final){
	for (var i=x_init; i<x_final; i++){
		for (var j=y_init; j<y_final; j++){
			if (this.altitude[[i,j]] != undefined){
				var r = Math.random();
				var a = albero(0.5,0,4);
				var r = Math.random();
				a = S([0,1,2])([r,r,r])(a);
				a = T([0,1,2])([i+r,j+r,this.altitude[[i,j]]])(a);
				DRAW(a);
			}
		}
	}
}

this.generaAlberi(20,40,10,20);
this.generaAlberi(-40,-20,10,20);
this.generaAlberi(20,40,-20,-10);
this.generaAlberi(-40,-20,-20,-10);

function lineaInsediamento(x,y,t,n){
    var points = [[0,0],[1,0],[0,1],[1,1],[0.5,1.5]];
    var cells = [[0,1,2],[1,3,2],[2,3,4]];
    var c = SIMPLICIAL_COMPLEX(points)(cells);
    c = EXTRUDE([1.5])(c);
    var c2 = S([0,1,2])([1.5,1.5,1.5])(c);
    var tot = STRUCT(
        REPLICA(n)
        ([c,T([0])([t]),c2,T([0])([t])]));
    tot = R([1,2])([PI/2])(tot);
    tot = T([0,1])([x,y])(tot);
    return tot;
}

function insediamento(x,y,n,d){
	var i = COLOR([(Math.random()*255)/255,(Math.random()*255)/255,(Math.random()*255)/255,])(lineaInsediamento(x,y,n,d));
	var i4 = COLOR([(Math.random()*255)/255,(Math.random()*255)/255,(Math.random()*255)/255,])(lineaInsediamento(x,y-10,n,d));
	var i2 = COLOR([(Math.random()*255)/255,(Math.random()*255)/255,(Math.random()*255)/255,])(lineaInsediamento(x,y-20,n,d));
	var i5 = COLOR([(Math.random()*255)/255,(Math.random()*255)/255,(Math.random()*255)/255,])(lineaInsediamento(x,y-30,n,d));
	var i3 = COLOR([(Math.random()*255)/255,(Math.random()*255)/255,(Math.random()*255)/255,])(lineaInsediamento(x,y-40,n,d));
	var i6 = COLOR([(Math.random()*255)/255,(Math.random()*255)/255,(Math.random()*255)/255,])(lineaInsediamento(x,y-50,n,d));
	return STRUCT([i,i2,i3,i4,i5,i6]);
}

var ins = insediamento(50,50,4,7);
var ins2 = insediamento(-100,40,5,5);


var s = STRUCT([terrain,l,ins,ins2]);
DRAW(s);