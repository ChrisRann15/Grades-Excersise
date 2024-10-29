var testGrade = Math.floor(Math.random() * 100);

console.log(testGrade);

 if(testGrade >= 0 && testGrade <= 65) {
    console.log('You Got an F');
 } else if(testGrade >= 66 && testGrade <= 70) {
    console.log('You Got a D');
 } else if(testGrade >= 71 && testGrade <= 79) {
    console.log('You Got a C');
 } else if(testGrade >= 80 && testGrade <= 89) {
    console.log('You Got a B');
 } else if(testGrade >= 90) {
    console.log('Congrats! You Got an A!');
 } else {
    console.log('Sorry you need to retake the test');
 }
