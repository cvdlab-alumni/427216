from pyplasm import *
from numpy import *

dom1D = INTERVALS(50)(32)
domain = PROD([dom1D,dom1D])

altitude = {};

def mounts(dom):
	x = dom[0];
	y = dom[1];
	z = random.random();
 	return [x, y, z];

terrain = MAP(mounts)(domain);

domainLake1d = INTERVALS(20)(32)
domainLake = PROD([domainLake1d,domainLake1d])


z_lake = 0;
z_lake_min = 0;

def lake(dom):
	x = dom[0];
	y = dom[1];
	z = z_lake+0.8;
 	return [x, y, z];

def zLake(dom):
	x = dom[0];
	y = dom[1];
	z=0.8;
	return [x, y, z];

MAP(zLake)(domainLake);
l = T([1,2])([20,20])(COLOR(BLUE)(MAP(lake)(domainLake)));
s = STRUCT([terrain,l,terrain]);
VIEW(s);