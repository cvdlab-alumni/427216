var dom2D = DOMAIN([[0,1],[0,1]])([30,30])
var dom1D = INTERVALS(1)(32)

function bezierMappata_1D(controlpoints){
	return BEZIER(S0)(controlpoints)
}
function bezierMappata_2D(functions){
	var x = BEZIER(S1)(functions)
	return MAP(x)(dom2D)
}

function cercS0(r,z){
	var points = [[1,0,0],[1,1,0],[0,1.7,0],[-1.7,1,0],[-1.7,0,0],[-1,-1.4,0],[0,-1.6,0],[1,-0.9,0],[1,0,0]];
	var c = points.map(function(point){return [point[0]*r,point[1]*r,point[2]+z]})
	var cerchio = BEZIER(S0)(c);
	return cerchio;
}
function cercS1(r,z){
	var points = [[1,0,0],[1,1,0],[0,1.7,0],[-1.7,1,0],[-1.7,0,0],[-1,-1.4,0],[0,-1.6,0],[1,-0.9,0],[1,0,0]];
	var c = points.map(function(point){return [point[0]*r,point[1]*r,point[2]+z]})
	var cerchio = BEZIER(S1)(c);
	return cerchio;
}

/* FORCHETTA */

var c = [[3.94, -3.27,0], [3.22, -3.33,0], [3.76, -1.7,0.4], [3.77, 0.2,0.4]];
var c = BEZIER(S0)(c);

var c2 = [[3.94, -3.27,0], [4.58, -3.37,0], [3.94, -1,0.4], [3.97, 0.2,0.4]];
var c2 = BEZIER(S0)(c2);

var cd = [[3.94, -3.27,0.1], [3.22, -3.33,0.1], [3.76, -1.7,0.5], [3.77, 0.2,0.5]];
var cd = BEZIER(S0)(cd);

var c2d = [[3.94, -3.27,0.1], [4.58, -3.37,0.1], [3.94, -1,0.5], [3.97, 0.2,0.5]];
var c2d = BEZIER(S0)(c2d);

var p1 = bezierMappata_2D([c,c2]);
var p2 = bezierMappata_2D([cd,c2d]);
var p3 = bezierMappata_2D([c,cd]);
var p4 = bezierMappata_2D([c2,c2d]);

var c3 = [[3.37, 3.09,0], [3.46, 1.53,0], [4.01, 3.12,0.4], [3.77, 0.2,0.4]];
var c3 = BEZIER(S0)(c3);

var c4 = [[4.33, 3.09,0], [4.3, 1.57,0], [3.8, 3.14,0.4], [3.97, 0.2,0.4]];
var c4 = BEZIER(S0)(c4);

var c3d = [[3.37, 3.09,0.1], [3.46, 1.53,0.1], [4.01, 3.12,0.5], [3.77, 0.2,0.5]];
var c3d = BEZIER(S0)(c3d);

var c4d = [[4.33, 3.09,0.1], [4.3, 1.57,0.1], [3.8, 3.14,0.5], [3.97, 0.2,0.5]];
var c4d = BEZIER(S0)(c4d);

var cc = [[3.37, 3.09,0],[4.33, 3.09,0]];
var cc = BEZIER(S0)(cc);

var ccd = [[3.37, 3.09,0.1],[4.33, 3.09,0.1]];
var ccd = BEZIER(S0)(ccd);

var p5 = bezierMappata_2D([c3,c4]);
var p6 = bezierMappata_2D([c3d,c4d]);
var p7 = bezierMappata_2D([c3,c3d]);
var p8 = bezierMappata_2D([c4,c4d]);
var pp = bezierMappata_2D([cc,ccd]);

var c5 = [[4.33, 3.09,0], [4.34, 3.64,0], [4.29, 4,0.1], [4.2, 4.92,0.4]];
var c5 = BEZIER(S0)(c5);

var c6 = [[4.15, 3.09,0], [4.17, 3.64,0], [4.12, 4,0.1], [4.2, 4.92,0.4]];
var c6 = BEZIER(S0)(c6);

var c5d = [[4.33, 3.09,0.1], [4.34, 3.64,0.1], [4.29, 4,0.2], [4.2, 4.92,0.5]];
var c5d = BEZIER(S0)(c5d);

var c6d = [[4.15, 3.09,0.1], [4.17, 3.64,0.1], [4.12, 4,0.2], [4.2, 4.92,0.5]];
var c6d = BEZIER(S0)(c6d);

var p9 = bezierMappata_2D([c5,c6]);
var p10 = bezierMappata_2D([c5d,c6d]);
var p11 = bezierMappata_2D([c5,c5d]);
var p12 = bezierMappata_2D([c6,c6d]);

var c7 = [[4.06, 3.09,0], [4.06, 3.63,0], [4.03, 4.01,0.1], [3.99, 4.92,0.4]];
var c7 = BEZIER(S0)(c7);

var c8 = [[3.9, 3.09,0], [3.91, 3.66,0], [3.91, 4.05,0.1], [3.99, 4.92,0.4]];
var c8 = BEZIER(S0)(c8);

var c7d = [[4.06, 3.09,0.1], [4.06, 3.63,0.1], [4.03, 4.01,0.2], [3.99, 4.92,0.5]];
var c7d = BEZIER(S0)(c7d);

var c8d = [[3.9, 3.09,0.1], [3.91, 3.66,0.1], [3.91, 4.05,0.2], [3.99, 4.92,0.5]];
var c8d = BEZIER(S0)(c8d);

var p13 = bezierMappata_2D([c7,c8]);
var p14 = bezierMappata_2D([c7d,c8d]);
var p15 = bezierMappata_2D([c7,c7d]);
var p16 = bezierMappata_2D([c8,c8d]);

var c9 = [[3.79, 3.09,0], [3.84, 3.76,0], [3.82, 4.05,0.1], [3.79, 4.92,0.4]];
var c9 = BEZIER(S0)(c9);

var c10 = [[3.66, 3.09,0], [3.67, 3.78,0], [3.69, 4.09,0.1], [3.79, 4.92,0.4]];
var c10 = BEZIER(S0)(c10);

var c9d = [[3.79, 3.09,0.1], [3.84, 3.76,0.1], [3.82, 4.05,0.2], [3.79, 4.92,0.5]];
var c9d = BEZIER(S0)(c9d);

var c10d = [[3.66, 3.09,0.1], [3.67, 3.78,0.1], [3.69, 4.09,0.2], [3.79, 4.92,0.5]];
var c10d = BEZIER(S0)(c10d);

var p17 = bezierMappata_2D([c9,c10]);
var p18 = bezierMappata_2D([c9d,c10d]);
var p19 = bezierMappata_2D([c9,c9d]);
var p20 = bezierMappata_2D([c10,c10d]);

var c11 = [[3.55, 3.09,0], [3.58, 3.81,0], [3.57, 4.08,0.1], [3.56, 4.92,0.4]];
var c11 = BEZIER(S0)(c11);

var c12 = [[3.37, 3.09,0], [3.39, 3.81,0], [3.43, 4.09,0.1], [3.56, 4.92,0.4]];
var c12 = BEZIER(S0)(c12);

var c11d = [[3.55, 3.09,0.1], [3.58, 3.81,0.1], [3.57, 4.08,0.2], [3.56, 4.92,0.5]];
var c11d = BEZIER(S0)(c11d);

var c12d = [[3.37, 3.09,0.1], [3.39, 3.81,0.1], [3.43, 4.09,0.2], [3.56, 4.92,0.5]];
var c12d = BEZIER(S0)(c12d);

var p21 = bezierMappata_2D([c11,c12]);
var p22 = bezierMappata_2D([c11d,c12d]);
var p23 = bezierMappata_2D([c11,c11d]);
var p24 = bezierMappata_2D([c12,c12d]);

var forchetta = STRUCT([p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,pp,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24]);

var forchetta = T([0,1])([-3.94,3.27])(forchetta);

/* BICCHIERE */

var Su0 = BEZIER(S0)([[0,0,0], [-1.07, 0,0.55], [-0.93,0, 1.12], [-0.48, 0,2.27]]);
var curve0 = MAP(Su0)(dom1D);

var Su1 = cercS1(1,0);
var Su1Draw = cercS0(1,0);
var curve1 = MAP(Su1Draw)(dom1D);
var b1 = MAP(PROFILEPROD_SURFACE([Su0,Su1]))(dom2D);

var Su2 = BEZIER(S0)([[0,0,0],[0.3,0, -0.97],[0.33, 0,-1.12],[-0.55,0,-1.91]]);
var curve0 = MAP(Su2)(dom1D);

var b2 = MAP(PROFILEPROD_SURFACE([Su2,Su1]))(dom2D);

var bicchiere = STRUCT([b1,b2]);
bicchiere = COLOR([148/255,229/255,255/255])(bicchiere)
bicchiere = SCALE([0,1,2])([1.5,1.5,1.5])(bicchiere)

/* COLTELLO */

var s1 = [[2.04, 4.2,0], [2.06, 3.66,0], [2.2, 2.37,0], [2.02, 2.58,0]];
var s1 = BEZIER(S0)(s1);

var s2 = [[1.92, 4.2,0], [1.95, 3.29,0], [1.78, 2.48,0], [2.02, 2.58,0]];
var s2 = BEZIER(S0)(s2);

var s1d = [[2.04, 4.2,0.1], [2.06, 3.66,0.1], [2.2, 2.37,0.1], [2.02, 2.58,0.1]];
var s1d = BEZIER(S0)(s1d);

var s2d = [[1.92, 4.2,0.1], [1.95, 3.29,0.1], [1.78, 2.48,0.1], [2.02, 2.58,0.1]];
var s2d = BEZIER(S0)(s2d);

var sc = [[2.04, 4.2,0],[1.92, 4.2,0]];
var sc = BEZIER(S0)(sc);

var scd = [[2.04, 4.2,0.1],[1.92, 4.2,0.1]];
var scd = BEZIER(S0)(scd);

var w1 = bezierMappata_2D([s1,s2]);
var w2 = bezierMappata_2D([s1d,s2d]);
var w3 = bezierMappata_2D([s1,s1d]);
var w4 = bezierMappata_2D([s2,s2d]);
var w5 = bezierMappata_2D([sc,scd]);

var s3 = [[1.94, 4.2,0.03], [1.74, 4.83,0.03], [1.67, 5.3,0.03], [1.96, 5.45,0.03]]
var s3 = BEZIER(S0)(s3);

var s4 = [[2.02, 4.2,0.03], [2.06, 4.87,0.03], [2.14, 5.48,0.03], [1.96, 5.45,0.03]];
var s4 = BEZIER(S0)(s4);

var s3d = [[1.94, 4.2,0.07], [1.74, 4.83,0.07], [1.67, 5.3,0.07], [1.96, 5.45,0.07]]
var s3d = BEZIER(S0)(s3d);

var s4d = [[2.02, 4.2,0.07], [2.06, 4.87,0.07], [2.14, 5.48,0.07], [1.96, 5.45,0.07]];
var s4d = BEZIER(S0)(s4d);

var w6 = bezierMappata_2D([s3,s4]);
var w7 = bezierMappata_2D([s3d,s4d]);
var w8 = bezierMappata_2D([s3,s3d]);
var w9 = bezierMappata_2D([s4,s4d]);

var manico = COLOR([0,0,0])(STRUCT([w1,w2,w3,w4,w5]));
var lama = COLOR([253/255,253/255,253/255])(STRUCT([w6,w7,w8,w9]));

var coltello = STRUCT([manico,lama]);
coltello = TRANSLATE([0,1])([-2.02,-2.58])(coltello);
coltello = SCALE([0,1,2])([3,3,3])(coltello);

var t1 = cercS0(5,0);
var t2 = cercS0(10,0.6);
var t3 = cercS0(0.01,0);

var tt = bezierMappata_2D([t1,t2]);
var tt2 = bezierMappata_2D([t1,t3]);
var piatto = COLOR([255/255,244/255,167/255])(STRUCT([tt,tt2]));
piatto = SCALE([0,1])([0.4,0.4])(piatto);
piatto = T([0,1])([4.8,4])(piatto);

var tavolo = CUBOID([16, 14, 1]);
tavolo = TRANSLATE([2])([-1.1])(tavolo);
tavolo = COLOR([221/255,180/255,133/255])(tavolo);
tavolo = TRANSLATE([0,1])([-2,-2])(tavolo);

var forchetta = T([0])([10])(forchetta);
var forchetta2 = forchetta;
var forchetta3 = forchetta;
forchetta2 = T([0])([1.5])(forchetta2);
forchetta3 = SCALE([0,1,2])([0.5,0.5,0.5])(forchetta3);
forchetta3 = ROTATE([0,1])(3*PI/2)(forchetta3);
forchetta3 = TRANSLATE([0,1])([3,14])(forchetta3);

/* TOVAGLIOLO */

var r = [[0,0,0],[0,8,0]];
var r = BEZIER(S0)(r);

var r2 = [[4,0,0],[4,8,0]];
var r2 = BEZIER(S0)(r2);

var tovagliolo = bezierMappata_2D([r,r2]);
tovagliolo = COLOR([123/255,183/255,250/255])(T([0])([8.6])(tovagliolo));
var bicchiere = T([0,1,2])([10,10,2.8])(bicchiere);
var model = STRUCT([forchetta,bicchiere,coltello,piatto,tavolo,forchetta2,forchetta3,tovagliolo]);

