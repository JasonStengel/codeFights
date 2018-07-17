//Given a string, find the number of different characters in it.
function differentSymbolsNaive(s) {
var temp = [];
    s = s.split("");
    s.forEach((element)=>{
        if(temp.includes(element) == false){
            temp.push(element);
        }
    });
    return temp.length;
}