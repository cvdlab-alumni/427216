function larToObject(v,fv){
	var l = v.length;
	var s = '';
	for (var i=0; i<l; i++){
		if (v[i][2]!=undefined)
			s+='v '+' '+v[i][0]+' '+v[i][1]+' '+v[i][2]+'\n';
		else
			s+='v '+' '+v[i][0]+' '+v[i][1]+' 0 \n';
	}

	var l = v.length;
	for(var i=0; i<l; i++){
		var k = fv[i].length;
		for(var j=0; j<k;j++){
			var c = k-1;
			switch(j){
				case(0):
					s+='f '+fv[i][j]+' '; break;
				case(k-1):
					s+=fv[i][j]+'\n'; break;
				default:
					s+=fv[i][j]+' '; break;
			}
 		}
	}
	return s;
}

/* ESEMPIO PRESO DALLE SLIDE  2013-06-04/examples.py  */

fv = [[5,6,7,8],
[0,5,8],
[0,4,5],
[1,2,4,5],
[2,3,5,6],
[0,8,7], [3,6,7], [1,2,3], [0,1,4]
];
v = [[0,6],
[0,0],
[3,0],
[6,0,4],
[0,3,4],
[3,3],
[6,3],
[6,6],
[3,6]];

/* LANCIO LA FUNZIONE */
larToObject(v,fv);
