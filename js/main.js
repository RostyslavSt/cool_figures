 class CoolFigures {
     constructor(min, max) {
         this.min = min;
         this.max = max;
     }
     getCoolFigures() {
         //  let arrCoolFigures = []; //create array for cool figures. Optinal. It is not necessary in task
         let resultSum = 0; // for sum cool figures

         for (let i = this.min; i <= this.max; i++) {
             let currentSum = 0;
             let currentDigit = i;
             while ((currentSum !== 1) && (currentSum !== 4)) {
                 currentSum = 0;
                 let currentDigitToString = currentDigit + "";
                 let arrSingleDigits = [];
                 arrSingleDigits = currentDigitToString.split("");

                 for (let j = 0; j < arrSingleDigits.length; j++) {
                     let current = parseInt(arrSingleDigits[j]);
                     currentSum += Math.pow(current, 2);
                 }
                 currentDigit = currentSum;
                 if (currentSum === 1) {
                     //  arrCoolFigures.push(i);
                     resultSum += i;
                 }
                 console.log('currentSum:' + currentSum);
             }
         }
         return {
             resultSum: resultSum
                 //  array: arrCoolFigures
         };
     }
 }

 let result = new CoolFigures(1, 100000);
 console.log(result.getCoolFigures());