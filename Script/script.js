 var screen=document.getElementById("screen");
let screenLengthChecker=()=>{
  
if(screen.value.length>14){
     screen.type="text"
   
    screen.value="syntax error!!!"
    

}
}

function screenEntry(keyValue,screenLengthChecker){
    document.getElementById("screen").value+=keyValue;
    screenLengthChecker()
}
 let clearScreen=()=>screen.value=""


