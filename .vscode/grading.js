grades(95);
grades(60);
grades(72);
function grades(percent){
  
    if (percent >= 90 ) {console.log("A");}
    else if (percent >= 70 ) {console.log("B");}
    else if (percent >=60 ) {console.log("C");}
    else if (percent>50 ) {console.log("D");}
    else  {console.log("E");}
    
}

// console.log(grades)

// let marks=[25, 65, 46, 98, 78, 65];
 
// let max_marks = marks.length * 100;
 

// let total = 0;
//         let grade = 'A';
//         for (let i = 0; i < marks.length; i++) {
//             total += marks[i];
//         }
   
//         let percentage
//             = ((total) / max_marks) * 100;
   
//         if (percentage >= 90) {
//             grade = 'A';
//         }
//         else {
//             if (percentage >= 80 && percentage <= 89) {
//                 grade = 'B';
//             }
//             else {
//                 if (percentage >= 60 && percentage <= 79) {
//                     grade = 'C';
//                 }
//                 else {
//                     if (percentage >= 33 && percentage <= 59) {
//                         grade = 'D';
//                     }
//                     else {
//                         grade = 'F';
//                     }
//                 }
//             }
//         }
   
//         document.write(grade);