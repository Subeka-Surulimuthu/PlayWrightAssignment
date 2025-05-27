function gradeSelection(score){

    switch(score/10){
        case 10:{
        return "S"
        break;
        }

       case 9:{
        return "A"
        break;

       }

       case 8:{
        return "B"
        break;

       }
       case 7:{
       return "C"
        break;

       }
       case 6:{
        return "D"
        break;

       }
       default:
        return "invalid"





    }

}

let studentScore=100;
console.log(gradeSelection(studentScore));