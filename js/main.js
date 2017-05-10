 class CoolNumbers {
     constructor(min, max) {
         this.min = min;
         this.max = max;
         this.sumCoolNumbers = 0;
         this.codeLetters = "_";
     }
     getCoolNumbers() {
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
                     console.log('current cool number: ' + i);
                 }
             }
         }
         this.sumCoolNumbers = resultSum;
         return resultSum;
     }

     serverRequest(sum) {
         let sumCoolNumbers = sum + "";
         let iterator = 1;
         let startRequest = function delay() {
             if (iterator <= 100) {
                 console.log(iterator);
                 ajaxRequest(iterator);
                 iterator++;
                 setTimeout(delay, 2000);
             }
         }
         startRequest();

         function ajaxRequest(i) {
             $.ajax({
                 method: 'POST',
                 url: 'http://dev.getethos.com/code' + iterator,
                 //  beforeSend: function(request) {
                 //      request.setRequestHeader('X-COOL-SUM', '70601040511');
                 //  },
                 headers: {
                     //  'X-COOL-SUM': '70601040511'
                     'X-COOL-SUM': sumCoolNumbers
                 },
                 success: function(data) {
                     this.codeLetters += data;
                     console.log(this.codeLetters);
                 }
             });
         }
         return this.codeLetters;
     }
     checkIfCoolNumber(num) {
         let currentNum = num;
         let currentSum = 0;
         while ((currentSum !== 1) && (currentSum !== 4)) {
             currentSum = 0;
             let currentDigitToString = currentNum + "";
             let arr = [];
             arr = currentDigitToString.split("");
             console.log(arr);

             for (let j = 0; j < arr.length; j++) {
                 let current = parseInt(arr[j]);
                 currentSum += Math.pow(current, 2);
                 console.log('step' + j + ' --' + currentSum);
             }
             currentNum = currentSum;
             if (currentSum === 1) {
                 console.log('True! It is cool number!!!');
             } else {
                 if (currentSum === 4) {
                     console.log('False! It is not cool number!!!')
                 }
             }
         }
     }
 }

 let coolNumber = new CoolNumbers(1, 1000000);
 let sumCoolNumbers = coolNumber.getCoolNumbers();
 console.log('The result sum of cool numbers: ' + sumCoolNumbers);
 let codeLetters = coolNumber.serverRequest(sumCoolNumbers);
 console.log(coolNumber.codeLetters);