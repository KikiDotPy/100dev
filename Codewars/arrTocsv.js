function toCsvText(array) {
    // good luck
   let csvStr = ""
   for (arr of array){
     let lastNum = arr.pop()
     for (num of arr) {
       csvStr += num + ",";
     }
     if (arr == array[array.length-1]){
       csvStr += lastNum
       continue
     }
     csvStr += lastNum + "\n"
   }
   return csvStr
 }


 function toCsvText(array) {
    return array.join('\n');
 }

 const toCsvText = array => array.map(row => row.join(',')).join('\n');