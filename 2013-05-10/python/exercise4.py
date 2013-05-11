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

def scalaRaggio(radius):
 	def prova(punto):
 		return [punto[0]*radius,punto[1]*radius,punto[2]]
 	return prova

def bezCircle(radius,z):
 	controlpoints = [[1,0,z],[1,1,z],[0,1.62,z],[-1.22,1.22,z],[-2,0,z],[-1.22,-1.22,z],[0,-1.63,z],[1,-1,z],[1,0,z]]
 	controlpoints = AA(scalaRaggio(radius))(controlpoints)
 	return BEZIER(S1)(controlpoints)

def scambia(elemento):
	return [S1(elemento),S3(elemento),S2(elemento)]

def invertiXZ(array):
	return AA(scambia)(array)

def scambiaYZ(elemento):
	return [S3(elemento),S2(elemento),S1(elemento)]

def invertiYZ(array):
	return AA(scambiaYZ)(array)

def wheel():
	c1 = bezCircle(1,0)
	c2 = bezCircle(1.2,0)
	c3 = bezCircle(1.5,0)


	# cCentro = bezCircle(1.8,0.5)


	c4 = bezCircle(1,1)
	c5 = bezCircle(1.2,1)
	c6 = bezCircle(1.5,1)

	cc1 = bezierMappata_2D([c1,c4])
	cc2 = bezierMappata_2D([c2,c5])
	cc3 = COLOR(BLACK)(bezierMappata_2D([c3,c6])) #cCentro,

	cc4 = COLOR(BLACK)(bezierMappata_2D([c2,c3]))
	cc5 = bezierMappata_2D([c1,c2])

	cc6 = bezierMappata_2D([c4,c5])
	cc7 = COLOR(BLACK)(bezierMappata_2D([c5,c6]))

	return STRUCT([cc1,cc2,cc3,cc4,cc5,cc6,cc7])


def profile():
	#PIANO XY

	p1 = [[7.73, 1.68], [6.55, 1.68], [6.58, 2.3], [6.68, 2.47]]
	p1Bez = bezierMappata_1D(p1);

	p2 = [[8.89, 3.43], [8.27, 3.2], [6.95, 2.99], [6.68, 2.47]]
	p2Bez = bezierMappata_1D(p2);

	p3 = [[8.89, 3.43], [10.46, 3.76], [10.93, 3.44], [11.81, 2.83]]
	p3Bez = bezierMappata_1D(p3);

	p4 = [[14.25, 1.9], [14.38, 2.59], [12.31, 2.84], [11.81, 2.83]]
	p4Bez = bezierMappata_1D(p4);

	p5 = [[14.25, 1.9], [14.02, 1.52], [13.6, 1.62], [13.1, 1.59]]
	p5Bez = bezierMappata_1D(p5);

	p6 = [[11.81, 1.62], [11.55, 2.56], [13.29, 2.98], [13.1, 1.59]]
	p6Bez = bezierMappata_1D(p6);

	p7 = [[11.81, 1.62], [10.18, 1.66], [9.69, 1.65], [9.12, 1.56]]
	p7Bez = bezierMappata_1D(p7);

	p8 = [[7.73, 1.68], [7.95, 2.98], [9.24, 2.61], [9.12, 1.56]]
	p8Bez = bezierMappata_1D(p8)

	xy = STRUCT([p1Bez,p2Bez,p3Bez,p4Bez,p5Bez,p6Bez, p7Bez,p8Bez])
	xy = T([1,2])([-10.03,-2.58])(xy)

	# PIANO XZ

	y1 = [[7.85, 0.29,0], [6.64, 0.65,0], [6.72, 0.68,0], [6.63, 1.9,0]]
	y1 = invertiXZ(y1)
	y1Bez = bezierMappata_1D(y1)

	y2 = [[7.85, 3.39,0], [6.47, 2.99,0], [6.73, 2.74,0], [6.63, 1.9,0]]
	y2 = invertiXZ(y2)
	y2Bez = bezierMappata_1D(y2)

	y3 = [[7.85, 3.39,0], [8.66, 3.32,0], [11.18, 3.28,0], [12.93, 3.29,0]]
	y3 = invertiXZ(y3)
	y3Bez = bezierMappata_1D(y3)

	y4 = [[14.26, 1.81,0], [14.06, 2.44,0], [14.32, 3.12,0], [12.93, 3.29,0]]
	y4 = invertiXZ(y4)
	y4Bez = bezierMappata_1D(y4)

	y5 = [[14.26, 1.81,0], [13.91, 0.31,0], [13.71, 0.56,0], [12.83, 0.37,0]]
	y5 = invertiXZ(y5)
	y5Bez = bezierMappata_1D(y5)

	y6 = [[7.85, 0.29,0], [9.52, 0.33,0], [11.33, 0.41,0], [12.83, 0.37,0]]
	y6 = invertiXZ(y6)
	y6Bez = bezierMappata_1D(y6)

	xz = STRUCT([y1Bez,y2Bez,y3Bez,y4Bez,y5Bez,y6Bez])
	xz = T([1,3])([-10.1,-1.8])(xz)

	# PIANO YZ

	x1 = [[11.11, 1.62,0], [10.64, 2.94,0], [11.2, 2.69,0], [11.24, 2.82,0]]
	x1 = invertiYZ(x1)
	x1Bez = bezierMappata_1D(x1)

	x2 = [[12.53, 3.57,0], [11.33, 3.52,0], [11.53, 3.43,0], [11.24, 2.82,0]]
	x2 = invertiYZ(x2)
	x2Bez = bezierMappata_1D(x2)

	x3 = [[12.53, 3.57,0], [13.23, 3.53,0], [13.44, 3.6,0], [13.69, 2.79,0]]
	x3 = invertiYZ(x3)
	x3Bez = bezierMappata_1D(x3)

	x4 = [[13.85, 1.61,0], [14.04, 1.97,0], [14.21, 2.79,0], [13.69, 2.79,0]]
	x4 = invertiYZ(x4)
	x4Bez = bezierMappata_1D(x4)

	x5 = [[13.85, 1.61,0], [13.09, 1.64,0], [12.4, 1.59,0], [11.11, 1.62,0]]
	x5 = invertiYZ(x5)
	x5Bez = bezierMappata_1D(x5)

	yz = STRUCT([x1Bez,x2Bez,x3Bez,x4Bez,x5Bez])
	yz = T([2,3])([-2.58,-12.48])(yz)

	return STRUCT([xy,xz,yz])

p = profile()
s1 = wheel()
s2 = wheel()
s3 = wheel()
s4 = wheel()

s1 = SCALE([1,2,3])([0.35,0.35,0.35])(s1)
s2 = SCALE([1,2,3])([0.35,0.35,0.35])(s2)
s3 = SCALE([1,2,3])([0.35,0.35,0.35])(s3)
s4 = SCALE([1,2,3])([0.35,0.35,0.35])(s4)

s1 = T([1,2,3])([2.38,-0.8,-1.6])(s1)
s2 = T([1,2,3])([2.38,-0.8,1.6])(s2)
s3 = T([1,2,3])([-1.60,-0.8,-1.6])(s3)
s4 = T([1,2,3])([-1.60,-0.8,1.6])(s4)

f = STRUCT([s1,s2,s3,s4,p])

c1 = bezCircle(1,0)
c2 = bezCircle(1,0.2)
c3 = bezCircle(1.1,0.1)
c4 = bezCircle(0.9,0.1)

est = COLOR(BLACK)(bezierMappata_2D([c1,c3,c2]))
est2 = COLOR(BLACK)(bezierMappata_2D([c1,c4,c2]))

# INTERNO

i1 = [[1.05, 3.84,0], [1.86, 3.55,0], [2.17, 3.69,0], [2.23, 3.71,0]]
i1Bez = BEZIER(S1)(i1)

i2 = [[2.96, 3.66,0], [2.78, 3.94,0], [2.42, 3.82,0], [2.23, 3.71,0]]
i2Bez = BEZIER(S1)(i2)

i3 = [[2.96, 3.66,0], [3.47, 3.65,0], [3.66, 3.74,0], [4.11, 3.83,0]]
i3Bez = BEZIER(S1)(i3)

i4 = [[4.18, 3.39,0], [4.24, 3.55,0], [4.25, 3.66,0], [4.11, 3.83,0]]
i4Bez = BEZIER(S1)(i4)

i5 = [[2.96, 3.66,0], [3.47, 3.65,0], [3.66, 3.74,0], [4.11, 3.83,0]]
i5Bez = BEZIER(S1)(i5)

i6 = [[4.18, 3.39,0], [3.8, 3.37,0], [3.43, 3.35,0], [3.07, 3.2,0]]
i6Bez = BEZIER(S1)(i6)

i7 = [[2.84, 1.78,0], [2.77, 2.55,0], [2.57, 2.77,0], [3.07, 3.2,0]]
i7Bez = BEZIER(S1)(i7)

i8 = [[2.84, 1.78,0], [2.62, 1.66,0], [2.39, 1.73,0], [2.34, 1.79,0]]
i8Bez = BEZIER(S1)(i8)

i9 = [[2.08, 3.26,0], [2.52, 3.05,0], [2.46, 2.1,0], [2.34, 1.79,0]]
i9Bez = BEZIER(S1)(i9)

i10 = [[2.08, 3.26,0], [1.91, 3.27,0], [1.42, 3.52,0], [1, 3.36,0]]
i10Bez = BEZIER(S1)(i10)

i11 = [[1.05, 3.84,0], [0.98, 3.78,0], [0.87, 3.59,0], [1, 3.36,0]]
i11Bez = BEZIER(S1)(i11)

m1 = [[4.19, 3.58], [2.55, 3.26], [2.53, 3.39], [0.98, 3.59]]
m1 = BEZIER(S1)(m1)

m2 = [[2.59, 1.72], [2.58, 3.28], [2.58, 3.39], [2.6, 3.8]]
m2 = BEZIER(S1)(m2)

m3 = [[2.62, 2.65], [2.65, 3.01], [2.69, 3.31], [2.43, 3.32]]
m3 = BEZIER(S1)(m3)

r1 = bezierMappata_2D([m1,i2Bez])
r2 = bezierMappata_2D([m1,i6Bez])
r3 = bezierMappata_2D([m1,i5Bez])
r4 = bezierMappata_2D([m1,i4Bez])
r5 = bezierMappata_2D([m1,i1Bez])
r6 = bezierMappata_2D([m1,i3Bez])
r7 = bezierMappata_2D([m1,i10Bez])
r8 = bezierMappata_2D([m1,i11Bez])
r9 = bezierMappata_2D([m2,i7Bez])
r10 = bezierMappata_2D([m2,i8Bez])
r11 = bezierMappata_2D([m3,i9Bez])
r12 = bezierMappata_2D([m3,i10Bez])
r13 = bezierMappata_2D([m3,i8Bez])

i1r = [[1.05, 3.84,0.2], [1.86, 3.55,0.2], [2.17, 3.69,0.2], [2.23, 3.71,0.2]]
i1rBez = BEZIER(S1)(i1r)

i2r = [[2.96, 3.66,0.2], [2.78, 3.94,0.2], [2.42, 3.82,0.2], [2.23, 3.71,0.2]]
i2rBez = BEZIER(S1)(i2r)

i3r = [[2.96, 3.66,0.2], [3.47, 3.65,0.2], [3.66, 3.74,0.2], [4.11, 3.83,0.2]]
i3rBez = BEZIER(S1)(i3r)

i4r = [[4.18, 3.39,0.2], [4.24, 3.55,0.2], [4.25, 3.66,0.2], [4.11, 3.83,0.2]]
i4rBez = BEZIER(S1)(i4r)

i5r = [[2.96, 3.66,0.2], [3.47, 3.65,0.2], [3.66, 3.74,0.2], [4.11, 3.83,0.2]]
i5rBez = BEZIER(S1)(i5r)

i6r = [[4.18, 3.39,0.2], [3.8, 3.37,0.2], [3.43, 3.35,0.2], [3.07, 3.2,0.2]]
i6rBez = BEZIER(S1)(i6r)

i7r = [[2.84, 1.78,0.2], [2.77, 2.55,0.2], [2.57, 2.77,0.2], [3.07, 3.2,0.2]]
i7rBez = BEZIER(S1)(i7r)

i8r = [[2.84, 1.78,0.2], [2.62, 1.66,0.2], [2.39, 1.73,0.2], [2.34, 1.79,0.2]]
i8rBez = BEZIER(S1)(i8r)

i9r = [[2.08, 3.26,0.2], [2.52, 3.05,0.2], [2.46, 2.1,0.2], [2.34, 1.79,0.2]]
i9rBez = BEZIER(S1)(i9r)

i10r = [[2.08, 3.26,0.2], [1.91, 3.27,0.2], [1.42, 3.52,0.2], [1, 3.36,0.2]]
i10rBez = BEZIER(S1)(i10r)

i11r = [[1.05, 3.84,0], [0.98, 3.78,0], [0.87, 3.59,0], [1, 3.36,0]]
i11rBez = BEZIER(S1)(i11r)


m1r = [[4.19, 3.58], [2.55, 3.26], [2.53, 3.39], [0.98, 3.59]]
m1r = BEZIER(S1)(m1r)

m2r = [[2.59, 1.72], [2.58, 3.28], [2.58, 3.39], [2.6, 3.8]]
m2r = BEZIER(S1)(m2r)

m3r = [[2.62, 2.65], [2.65, 3.01], [2.69, 3.31], [2.43, 3.32]]
m3r = BEZIER(S1)(m3r)

r1r = bezierMappata_2D([m1r,i2rBez])
r2r = bezierMappata_2D([m1r,i6rBez])
r3r = bezierMappata_2D([m1r,i5rBez])
r4r = bezierMappata_2D([m1r,i4rBez])
r5r = bezierMappata_2D([m1r,i1rBez])
r6r = bezierMappata_2D([m1r,i3rBez])
r7r = bezierMappata_2D([m1r,i10rBez])
r8r = bezierMappata_2D([m1r,i11rBez])
r9r = bezierMappata_2D([m2r,i7rBez])
r10r = bezierMappata_2D([m2r,i8rBez])
r11r = bezierMappata_2D([m3r,i9rBez])
r12r = bezierMappata_2D([m3r,i10rBez])
r13r = bezierMappata_2D([m3r,i8rBez])


p1 = bezierMappata_2D([i1Bez,i1rBez])
p2 = bezierMappata_2D([i2Bez,i2rBez])
p3 = bezierMappata_2D([i3Bez,i3rBez])
p4 = bezierMappata_2D([i4Bez,i4rBez])
p5 = bezierMappata_2D([i5Bez,i5rBez])
p6 = bezierMappata_2D([i6Bez,i6rBez])
p7 = bezierMappata_2D([i7Bez,i7rBez])
p8 = bezierMappata_2D([i8Bez,i8rBez])
p9 = bezierMappata_2D([i9Bez,i9rBez])
p10 = bezierMappata_2D([i10Bez,i10rBez])
p11 = bezierMappata_2D([i11Bez,i11rBez])

e = STRUCT([p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r1r,r2r,r3r,r4r,r5r,r6r,r7r,r8r,r9r,r10r,r11r,r12r,r13r])
e = S([1,2])([0.6,0.6])(e)
e = T([1,2])([-1.55,-2])(e)
n = STRUCT([est,est2])

volante = COLOR(BLACK)(STRUCT([e,n]))
volante = S([1,2])([0.5,0.5])(volante)
volante = R([1,3])(PI/2)(volante)
volante = T([1,3])([1.2,-0.5])(volante)

finale = STRUCT([f,volante])

VIEW(finale)