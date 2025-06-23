const calculationArray=new Array(); 
 
 
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



 function operatorClick(operator,clearScreen){

    calculationArray[0]=screen.value;
    calculationArray[1]=operator;


    clearScreen();
console.log(calculationArray)


 }

 function calculateResult(screenLengthChecker){
    calculationArray[2]=screen.value;
    const StrigifyCalculationArray=`${calculationArray[0]}${calculationArray[1]}${calculationArray[2]}`
    const result=eval(StrigifyCalculationArray);
    screen.value=result;
     screenLengthChecker();

    calculationArray=["","",""];
   
 }


