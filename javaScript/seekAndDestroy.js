//removes all unwanted values from an array
function destroyer(arr) {
 // Remove all the values
  var temp = Array.from(arguments);
  temp.splice(0,1);
  return arr.filter(function(i) {
    return temp.indexOf(i) === -1;
  });
}
//this version can be used in MOZ JS extension or ES6
/*
  var temp = Array.from(arguments);
  temp.splice(0,1);
  leftOver = [];
  for(var num of arr){
    if(temp.indexOf(num) === -1){
      leftOver.push(num);
    }    
  }
  console.log(arr);
  return arr;
}*/
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
