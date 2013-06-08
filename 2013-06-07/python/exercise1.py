from pyplasm import *
from numpy import *

dom1D = INTERVALS(50)(32)
domain = PROD([dom1D,dom1D])

def mounts(dom):
	x = dom[0];
	y = dom[1];
	z = random.random();
 	return [x, y, z];

terrain = MAP(mounts)(domain);

VIEW(terrain);