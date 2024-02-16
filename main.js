let DeepNestedObject = {
    misha:{
        sensey:{
            madafaca:{
                assdfasfsadf:{
                    asdisdfv: "abutala"
                }
            }
        }
    }
}

function clearNested(obj) {

    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            console.log(obj)
            clearNested(obj[key])
            // obj[key] = undefined
            delete obj[key]
        }   
    }
}
console.log(DeepNestedObject)

clearNested(DeepNestedObject)

console.log("finish")

console.log(DeepNestedObject)
