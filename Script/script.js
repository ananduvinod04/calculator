let calculationArray=new Array(); 
calculationArray[0]=""
 
 
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
    if(calculationArray[0]===""){

    calculationArray[0]=screen.value;
    calculationArray[1]=operator;


    clearScreen();


    }else if(calculationArray[0]!==""){
        
        calculationArray[2]=screen.value;
        console.log(calculationArray[2]);
       
        const StrigifyCalculationArray=`${calculationArray[0]}${calculationArray[1]}${calculationArray[2]}`
    const result=eval(StrigifyCalculationArray);
    screen.value=result;

    calculationArray[2]=""
        
    }

 }

 function calculateResult(screenLengthChecker){
    calculationArray[2]=screen.value;
    const StrigifyCalculationArray=`${calculationArray[0]}${calculationArray[1]}${calculationArray[2]}`
    const result=eval(StrigifyCalculationArray);
    screen.value=result;
     screenLengthChecker();

    calculationArray=["","",""];
   
 }


