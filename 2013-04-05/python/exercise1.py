from pyplasm import *

GRID = COMP([INSR(PROD),AA(QUOTE)])
circle = CIRCLE(0.18)([30,1])
circleColumn = EXTRUDE([1,circle,3.58])
circleColumns = STRUCT(NN(5)([circleColumn,T([1])([3.94])]))
columnOnBalcony = T([2])([7.55])(circleColumn)

# piano terra
squarePillar = GRID([[0.36, -1.86,0.36, -3.58+0.36, 0.36, -3.58,0.36],[0.36],[3.29]])
squarePillar = T([1,2])([-0.18,-0.18])(squarePillar)
squarePillars = T([1,2,3])([2.08,7.55,0.29])(squarePillar)

# primo piano
squarePillarsFront1 = GRID([[0.36,-3.58,0.36, -3.58, 0.36],[0.36],[3.15+3.15+0.43]])
squarePillarsFront1 = T([1,2,3])([-0.18,-0.18,(3.58+0.43)])(squarePillarsFront1)
squarePillarsFront2b = GRID([[0.36,-3.58,0.36],[0.36],[3.15]])
squarePillarsFront2b = T([1,2,3])([-0.18,-0.18,(3.58+0.43)])(squarePillarsFront2b)
squarePillarsFront2b = T([1])([0.36+3.58+0.36+3.58+0.36+3.58])(squarePillarsFront2b)

squarePillarsBehind1b = GRID([[0.36,-3.94,0.36],[0.36],[3.15+3.15+0.43]])
squarePillarsBehind1b = T([1,2,3])([-0.18,-0.18,(3.58+0.43)])(squarePillarsBehind1b)
squarePillarsBehind1b = T([2])([7.55])(squarePillarsBehind1b)

squarePillarsBehind2b = GRID([[-(0.36*2+3.58*2),0.36,-(3.58*2),0.36],[0.36],[3.15]])
squarePillarsBehind2b = T([1,2,3])([-0.18,-0.18,(3.58+0.43)])(squarePillarsBehind2b)
squarePillarsBehind2b = T([2])([7.55])(squarePillarsBehind2b)

circle1 = CIRCLE(0.18)([30,1])
circleColumn1 = EXTRUDE([1,circle,3.15])
circleColumn1 = T([1,2,3])([(0.36*3+3.58*3),7.55,(3.58+0.43)])(circleColumn1)

# secondo piano
squarePillarsFront2 = GRID([[-(0.36*4+3.58*4),0.36],[0.36],[3.15]])
squarePillarsFront2 = T([1,2,3])([-0.18,-0.18,(3.58*2+0.43)])(squarePillarsFront2)

squarePillarsBehindFront2b = GRID([[-(0.36*2+3.58*2),0.36, -3.58, 0.36, -3.58+0.36, 0.36],[0.36],[3.15]])
squarePillarsBehindFront2b = T([1,2,3])([-0.18,-0.18,(3.58*2+0.43)])(squarePillarsBehindFront2b)
squarePillarsBehindFront2b = T([2])([7.55])(squarePillarsBehindFront2b)

# terzo piano
squarePillarsBehind3 = GRID([[-(3.58+0.11+0.07+0.18+0.36), 0.22],[0.22],[2.58]])
squarePillarsBehind3 = T([1,2,3])([-0.11,-0.11,(3.58*3+0.43)])(squarePillarsBehind3)
squarePillarsBehind3 = T([2])([7.55])(squarePillarsBehind3)

squarePillarsBehind3b = GRID([[0.22],[0.22],[1.57]])
squarePillarsBehind3b = T([1,2,3])([-0.18,-0.11,(3.58*3+0.43+1)])(squarePillarsBehind3b)
squarePillarsBehind3b = T([2])([7.55])(squarePillarsBehind3b)

squarePillarsBehind3c = GRID([[-(0.36*2+3.58*2),0.36, -3.58, 0.36, -3.58+0.36, 0.36],[0.36],[3.15]])
squarePillarsBehind3c = T([1,2,3])([-0.18,-0.18,(3.58*3+0.43)])(squarePillarsBehind3c)
squarePillarsBehind3c = T([2])([7.55])(squarePillarsBehind3c)

squarePillarsFront3 = GRID([[-(0.36*2+3.58*2),0.36, -3.58*2-0.36, 0.36],[0.36],[3.15]])
squarePillarsFront3 = T([1,2,3])([-0.18,-0.18,(3.58*3+0.43)])(squarePillarsFront3)

pillars0 = STRUCT([columnOnBalcony,circleColumns, squarePillars])
pillars1 = STRUCT([circleColumn1,squarePillarsFront1,squarePillarsFront2,squarePillarsFront2b,squarePillarsBehind1b,squarePillarsBehind2b])
pillars2 = STRUCT([squarePillarsFront2,squarePillarsBehindFront2b])
pillars3 = STRUCT([squarePillarsBehind3,squarePillarsBehind3b,squarePillarsBehind3c,squarePillarsFront3])
building = STRUCT([pillars0,pillars1,pillars2,pillars3])
VIEW(building)