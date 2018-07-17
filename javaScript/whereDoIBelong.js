/tells you where in an array a number should be placed 
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr = arr.sort(function(a,b){
    return a -b;
  });
  for(var i = 0; i < arr.length; i++){
    if((num > arr[i] && num < arr[i+1]) && num != arr[i])
    {
      return (i+1);
    }
    if(num == arr[i])
    {
      console.log(arr);
      return i;
    }
    if(num > arr[i] && i == arr.length - 1)
    {
      return (i+1);
    }
    if(num == arr[i] && num == arr[i + 1])
    {
    }
  }
}

getIndexToIns([40, 60], 50);
