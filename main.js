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
	let counter = 1;
	let newString = "";

	let filteredArray = copyStringToArray.filter((symbol) => symbol.match(/[A-Za-z]/))

	console.log(filteredArray)
	

	for (let i = 0; i < filteredArray.length; i++) {
		if (filteredArray[i] !== filteredArray[i+1]) {
			newString += counter + filteredArray[i]
			counter = 0
		}
		counter++
	}

	console.log(newString);
	return myString;
}

transform(string); // 9A4A2B4C2D
