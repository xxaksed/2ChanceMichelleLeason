// memory complexity
// time complexity
// brute force/samii tupo variant
// hashMap
// let stringsExample1 = ["abc", "bbcdbb", "cbacccccccccd"];

// let hashMap = {};

// // "bbcdbb" -> "bcd" -> ['b', 'b', 'c', 'd', 'b', 'b']
// function commonCharacters(strings) {
// 		// initial map
// 		for(let i = 0; i < strings[0].length; i++) {
//     	hashMap[strings[0][i]] = 1
//     }

//     for (let y = 1; y < strings.length; y++) {// po slovam

//     	for (let z = 0; z < strings[y].length; z++) {  // po bukvam

//         // strings[1][0] -> b
//         // hashMap[strings[y][z]] -> 1

//         if (hashMap[strings[y][z]]) {
//         	if (hashMap[strings[y][z]] > y) {
//           // SKIP NAHYI
//           } else {
//            hashMap[strings[y][z]]++;
//           }

//         } else {
//         	hashMap[strings[y][z]] = 1
//         }
//       }
//     }

// }

// commonCharacters(stringsExample1) // ["b", "c"]

// console.log(hashMap)

let string = "........__=========AAAA AAA  BBB   BBBB";

function transform(myString) {
	let copyStringToArray = myString.split("");
	let newString = "";
	let hashMap = {};
	console.log(copyStringToArray);

	for (let i = 0; i < copyStringToArray.length; i++) {
		if (copyStringToArray[i].match(/[A-Za-z]/)) {
			hashMap[copyStringToArray[i]] += 1
			if(hashMap[copyStringToArray[i]]){
				hashMap[copyStringToArray[i]] + 1
			}
				else{hashMap[copyStringToArray[i]] = 1}
		}					
	}

	console.log(hashMap);
	return myString;
}

transform(string); // 9A4A2B4C2D
