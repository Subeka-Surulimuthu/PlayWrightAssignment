let fun1=(browserName)=>{

    if(browserName==="Chrome"){
        console.log("browser name is"+ browserName);
    }else if(browserName==="Edge"){
         console.log("browser name is"+ browserName);
    }else if(browserName==="Firefox"){
        console.log("browser name is"+ browserName);
    }else{
        console.log("Input is invalid");
    }

}

let functio2=function(testType){

    switch(testType){

        case "Smoke":
            
                console.log("Smoke testing");
                break;
            
            case "Sanity":
                
                    console.log("Sanity testing");
                    break;
                
            case "Regression":
                
                    console.log("Regression testing");
                    break;
                  
                
             default:
                console.log("Smoke testing");
                
             


}}

let browserName="Chrome";
let testType="invalid";
functio2(testType);
fun1(browserName);