var arr =   [1,2,4,7,9];
 
function MaxMin(arr) {
  var length = arr.length;
  let ma = 0 ;
  let mi = 0 ; 
  
  if ( length ===1    ) {
         return [arr[0],arr[0]]; 
       } 
  if (length>1) {
    ma = Math.max (...arr);  
    mi = Math.min (...arr);  
    return  [mi,ma];
  } 
   
  return  "no"//[arr[0],arr[0]]
}

console.log(MaxMin(arr));

const redundant = (function(x){
    return function f1(){
        return x;
    };
}("apple"));

console.log(redundant());