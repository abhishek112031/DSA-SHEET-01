
function shape(length){
    return function(width){
        return function (height){
            return length*width*height
        }
    }
}
console.log(shape(2)(3)(4));