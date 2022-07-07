function getReceipt() {
    //this initializes our string so it can get passed from
    //function to function, growing line by line into a full receipt
    var text1="<h3>You Ordered:</h3>";//the text that appears when submit is pressed
    //our variables
    var runningTotal=0;
    var sizeTotal=0;
    //getting our elements from our html file
    var sizeArray= document.getElementsByClassName("size");
    //i = 0 starts at 0 as long as i is less than array length each loop we increment
    for(var i=0; i<sizeArray.length;i++){
        if(sizeArray[i].checked){
            var selectedSize=sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }//depending of what size selected, the total has a different value 
    if(selectedSize ==="Kid Pizza"){
        sizeTotal=5;
        }
        else if(selectedSize==="Personal Pizza"){
            sizeTotal=6;
        }
        else if(selectedSize==="Medium Pizza"){
            sizeTotal=10;
        }
        else if(selectedSize==="Large Pizza"){
            sizeTotal=14;
        }
        else if(selectedSize==="Extra Large Pizza"){
            sizeTotal=16;
        }
        //running total is the size that was selected and that specific price
        runningTotal=sizeTotal;
        console.log(selectedSize+" = $"+sizeTotal+".00");
        console.log("size text1: "+text1);
        console.log("subtotal: $"+runningTotal+" .00");
        //these variables will get passed on to each function
        getTopping(runningTotal,text1);
    };
    //the topping function  
    function getTopping(runningTotal,text1){
        var toppingTotal = 0;
        var selectedTopping = [];
        var toppingArray = document.getElementsByClassName("toppings");
        //our for loop with variable j 
        for (var j = 0; j < toppingArray.length; j++){
            if (toppingArray[j].checked){
                selectedTopping.push(toppingArray[j].value);
                console.log("selected topping item: ("+toppingArray[j].value+")");
                text1=text1+toppingArray[j].value+"<br>";
        
                
            }
        }
        //our toppinCount is what was selected 
        var toppingCount = selectedTopping.length;
        if(toppingCount >1 ){
            toppingTotal = (toppingCount - 1);
        }else{
            toppingTotal = 0;
        }
        //this section is the addition of the items and total 
        runningTotal=(runningTotal+toppingTotal);
        console.log("total selected topping items: "+toppingCount);
        console.log(toppingCount+" topping - 1 free topping ="+"$"+toppingTotal+".00");
        console.log("topping text1: "+text1);
        console.log("Purchase Total: "+"$"+runningTotal+".00");
        document.getElementById("showText").innerHTML=text1;
        document.getElementById("totalPrice").innerHTML="<h3>Total: <strong>$"+
            runningTotal+".00"+"</strong></h3>";
    
    };
