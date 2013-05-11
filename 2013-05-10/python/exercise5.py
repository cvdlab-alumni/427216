from pyplasm import *

# FUNZIONI DI SUPPORTO
dom1D = INTERVALS(1)(32)
dom2D = PROD([dom1D,dom1D])

def bezierS1(controlpoints):
	return BEZIER(S1)(controlpoints)

def bezierS2(f):
	return BEZIER(S2)(f)

def bezierMappata_1D(controlpoints):
	return MAP(bezierS1(controlpoints))(INTERVALS(1)(32))

def bezierMappata_2D(functions):
	return MAP(BEZIER(S2)(functions))(dom2D)

v1 = [[11.44, 2.81,0], [11.23, 2.94,0], [10.82, 3.22,0], [10.67, 3.4,0]]
v1 = BEZIER(S1)(v1)

v1 = [[12.44, 3.81,0.4], [12.23, 3.94,0.4], [11.82, 4.22,0.4], [11.67, 4.4,0.4]]
v1 = BEZIER(S1)(v1)


v1r = [[11.44, 2.81,0.8], [11.23, 2.94,0.8], [10.82, 3.22,0.8], [10.67, 3.4,0.8]]
v1r = BEZIER(S1)(v1r)



l1 = bezierMappata_2D([v1,v1r])
l1 = T([1,2])([-11.44,-2.81])(l1)

a = STRUCT([l1])
VIEW(a)