// Translating functions

T = function (dims) {
  dims = dims.map(function (dim) {
    return dim - 1;
  });

  return function (values) {
    return function (object) {
     return object.clone().translate(dims, values);
    };
  };
};
  
R = function (dims) {
  dims = dims.map(function (dim) {
    return dim - 1;
  });
   
  return function (angle) {
    return function (object) {
      return object.clone().rotate(dims, angle);
    };
  };
};
  
S = function (dims) {
  dims = dims.map(function (dim) {
    return dim - 1;
  });

  return function (values) {
    return function (object) {
      return object.clone().scale(dims, values);
    };
  };
};

S3 = S2;
S2 = S1;
S1 = S0;

GRID = SIMPLEX_GRID;

NN = REPLICA;

VIEW = DRAW;

/***********************/

circle = DISK([0.18])([30,1])
circleColumn = EXTRUDE([3.58])(circle)
circleColumns = STRUCT(NN(5)([circleColumn,T([1])([3.94])]))
columnOnBalcony = T([2])([7.55])(circleColumn)

// piano terra
squarePillar = GRID([[0.36, -1.86,0.36, -3.58+0.36, 0.36, -3.58,0.36],[0.36],[3.29]])
squarePillar = T([1,2])([-0.18,-0.18])(squarePillar)
squarePillars = T([1,2,3])([2.08,7.55,0.29])(squarePillar)

// primo piano

squarePillarsFront1 = GRID([[0.36,-3.58,0.36, -3.58, 0.36],[0.36],[3.15+3.15+0.43]])
squarePillarsFront1 = T([1,2,3])([-0.18,-0.18,(3.58+0.43)])(squarePillarsFront1)
squarePillarsFront2b = GRID([[0.36,-3.58,0.36],[0.36],[3.15]])
squarePillarsFront2b = T([1,2,3])([-0.18,-0.18,(3.58+0.43)])(squarePillarsFront2b)
squarePillarsFront2b = T([1])([0.36+3.58+0.36+3.58+0.36+3.58])(squarePillarsFront2b)

squarePillarsBehind1b = GRID([[0.36,-3.94,0.36],[0.36],[3.15+3.15+0.43]])
squarePillarsBehind1b = T([1,2,3])([-0.18,-0.18,(3.58+0.43)])(squarePillarsBehind1b)
squarePillarsBehind1b = T([2])([7.55])(squarePillarsBehind1b)

squarePillarsBehind2b = GRID([[0.36,-(3.58*2),-0.36,0.36],[0.36],[3.15]])
squarePillarsBehind2b = T([1,2,3])([0.18+0.36+3.58*2,-0.18,(3.58+0.43)])(squarePillarsBehind2b)
squarePillarsBehind2b = T([2])([7.55])(squarePillarsBehind2b)

circle1 = DISK([0.18])([30,1])
circleColumn1 = EXTRUDE([3.58])(circle1)
circleColumn1 = T([1,2,3])([(0.36*3+3.58*3),7.55,(3.58+0.43)])(circleColumn1)

// terzo piano
squarePillarsFront2 = GRID([[-(0.36*4+3.58*4),0.36],[0.36],[3.15]])
squarePillarsFront2 = T([1,2,3])([-0.18,-0.18,(3.58*2+0.43)])(squarePillarsFront2)

squarePillarsBehindFront2b = GRID([[-(0.36*2+3.58*2),0.36, -3.58, 0.36, -3.58, 0.36],[0.36],[3.15]])
squarePillarsBehindFront2b = T([1,2,3])([-0.18,-0.18,(3.58*2+0.43)])(squarePillarsBehindFront2b)
squarePillarsBehindFront2b = T([2])([7.55])(squarePillarsBehindFront2b)

// quarto piano
squarePillarsBehind3 = GRID([[-(3.58+0.11+0.07+0.18+0.36), 0.22],[0.22],[2.58]])
squarePillarsBehind3 = T([1,2,3])([-0.11,-0.11,(3.58*3+0.43)])(squarePillarsBehind3)
squarePillarsBehind3 = T([2])([7.55])(squarePillarsBehind3)

squarePillarsBehind3b = GRID([[0.22],[0.22],[1.57]])
squarePillarsBehind3b = T([1,2,3])([-0.18,-0.11,(3.58*3+0.43+1.62)])(squarePillarsBehind3b)
squarePillarsBehind3b = T([2])([7.55])(squarePillarsBehind3b)

squarePillarsBehind3c = GRID([[-(0.36*2+3.58*2),0.36, -3.58, 0.36, -3.58, 0.36],[0.36],[3.15]])
squarePillarsBehind3c = T([1,2,3])([-0.18,-0.18,(3.58*3+0.43)])(squarePillarsBehind3c)
squarePillarsBehind3c = T([2])([7.55])(squarePillarsBehind3c)

squarePillarsFront3 = GRID([[-(0.36*2+3.58*2),0.36, -3.58*2-0.36, 0.36],[0.36],[3.15]])
squarePillarsFront3 = T([1,2,3])([-0.18,-0.18,(3.58*3+0.43)])(squarePillarsFront3)


pillars0 = STRUCT([columnOnBalcony,circleColumns, squarePillars])
pillars1 = STRUCT([circleColumn1,squarePillarsFront1,squarePillarsFront2,squarePillarsFront2b,squarePillarsBehind1b,squarePillarsBehind2b])
pillars2 = STRUCT([squarePillarsFront2,squarePillarsBehindFront2b])
pillars3 = STRUCT([squarePillarsBehind3,squarePillarsBehind3b,squarePillarsBehind3c,squarePillarsFront3])
building1 = STRUCT([pillars0,pillars1,pillars2,pillars3])

// piano terra
bigFloorZero = T([1,2])([1.90,2.64])(CUBOID([10.09,6.81,0.29]))
circleBassoZero = DISK([0.86])([30,1])
circleBassoZero = T([1,2])([2.76,2.6])(circleBassoZero)
circleBassoZero = EXTRUDE([0.29])(circleBassoZero)
floor01 = STRUCT([bigFloorZero,circleBassoZero])
floor02 = T([1,2])([-0.18,7.55-0.18])(CUBOID([2.08,2.08,0.29]))
floor03 = T([1,2])([11.63+0.36,5.72])(CUBOID([1.81,3.73,0.29]))
circle03 = DISK([1.86])([30,1])
circle03 = T([1,2])([11.63+0.36+1.82,5.72+1.86])(circle03)
circle03 = EXTRUDE([0.29])(circle03)
floor04 = T([1,2])([11.63+0.36,5.72-1.17])(CUBOID([0.93,1.17,0.29]))

// primo piano
floor11 = T([1,2,3])([-0.18,-0.18,3.58])(CUBOID([3.44,7.55+1.9,0.43]))
floor12 = T([1,2,3])([3.44-0.18,-0.18,3.58])(CUBOID([16.1-3.40,7.59,0.43]))
floor13 = T([1,2,3])([8.5-0.18,7.59-0.18,3.58])(CUBOID([16.1-8.45,9.13-7.59,0.43]))
floor14 = CUBOID([16.1-8.5-0.14,9.09-7.59,0.43])
floor14 = T([1,2,3])([8.5,7.59-0.18,3.58])(floor14)

// secondo piano
floor21 = CUBOID([16.1-8.5+0.25,7.59,0.43])
floor21 = T([1,2,3])([8.5-0.45,-0.18,3.58*2])(floor21)
floor22 = CUBOID([16.1-6.83,9.09-7.59,0.43])
floor22 = T([1,2,3])([6.83-0.18,7.59-0.18,3.58*2])(floor22)
triangole = SIMPLICIAL_COMPLEX([[6.63,7.45],[8.27,7.45],[8.27,0.05],[7.72,0.05]])([[0,1,2],[2,3,0]])
triangole = EXTRUDE([0.43])(triangole)
triangole = T([3])([3.58*2])(triangole)

// terzo piano
floor31 = CUBOID([16.15,7.87,0.43])
floor31 = T([1,2,3])([-0.18,-0.18,3.58*3])(floor31)
floor32 = CUBOID([8.23,1.5,0.43])
floor32 = T([1,2,3])([-0.18,7.59,3.58*3])(floor32)
floor33 = CUBOID([3.5,1.5,0.43])
floor33 = T([1,2,3])([12.45,7.59,3.58*3])(floor33)

// quinto piano
floor41 = CUBOID([10,9,1.3])
floor41 = T([1,2,3])([-0.2,-0.2,3.58*4])(floor41)


floor0 = STRUCT([floor01,floor02,floor03,floor04,circle03])
floor1 = STRUCT([floor11, floor12, floor13, floor14])
floor2 = STRUCT([floor21, floor22, triangole])
floor3 = STRUCT([floor31, floor32, floor33])
floor4 = STRUCT([floor41])
building = STRUCT([building1,floor0,floor1,floor2,floor3,floor4])
VIEW(building)