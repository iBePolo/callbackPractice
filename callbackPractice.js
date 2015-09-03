/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });


and what you should write is the favNum function that makes the code above work,


   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });


*/

  //Code Here for first

  var first = function (arr, func) {
    return func(arr[0]);


  }


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});







/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  //Code Here for last

  var last = function (arr, func) {
    return func(arr[arr.length - 1]);


  }

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */






  //Code Here for multiply

function multiply(num1, num2, func) {
  return func(num1 * num2);
}


multiply(4, 3, function(answer){
  console.log('The answer is ', answer); //should console.log 12
})







/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





  //Code Here for contains

// function contains(arr, compare, func) {  // <----------------------------------------------  Need answer **********
//   return func();
// }
//
// // var result = false;
// for (var i = 0; i < names.length; i++) {
//   if (names["i"] === 'Colt') {
//     var result = "";
//     result = true;
//   }
// }
//
//
// function coltIn (coltArr) {
//   var result = "";
//   for (var i = 0; i < this.length; i++) {
//     if (this.i === 'Colt') {
//       result = true;
//       return coltIn()
//     }
//   }
//   return result;
// }

function isColt(annyArr) {
  var isTrue = false;
  for (var i = 0; i < anyArr.length; i++) {
    if (anyArr[i] === 'Colt') {
      isTrue = true;
    }
  }
  return isTrue;
}






// function contains(anyArr, nameStr, anyFunc) {  // <------- According to Squire it would have worked if I would have var x = function iColt() {}... to something but it's unnecessary. The example below is better

//   var isTrue = false;
//   function isColt(annyArr) {
//
//     for (var i = 0; i < anyArr.length; i++) {
//       if (anyArr[i] === 'Colt') {
//         isTrue = true;
//         // isColt;
//       }
//     }
//
//   }
//   return isTrue;
// }






//           !!!!!! *****************    IMPORTANT!!!        -   RE-READ!!!         ****************** !!!!!!! ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// This works

function contains(anyArr, nameStr, anyFunc) {
  var isTrue = false;
// for (var i = 0; i < anyArr.length; i++) {    <----- did not need
    for (var i = 0; i < anyArr.length; i++) {
      if (anyArr[i] === nameStr) {
        isTrue = true;
        // isColt;
//      }
    }

  }
//    return isTrue;                           <----- did not return a value
      anyFunc(isTrue);                      // <----- returns a value
}



var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for uniq  // <----------------------------------------------  Need answer **********



// function uniq(arr, func) {
//   var arrCopy = arr;
//   var newArr = [];
//   var dups = [];
//   var nonDups = [];
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arrCopy.length; j++) {
//       if (arr[i] === arrCopy[j]) {
//         dups.push(arr[i]);
//       } else {
//         nonDups.push(arr[i]);
//       }
//     }
//   }
//   return func(nonDups);
// }
//
//
//
//
//
//
// function uniq(arr, func) {
//   var arrCopy = arr;
//   var newArr = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrCopy.hasOwnProperty(arr[i]);
//   }
//   return func(arrCopy);
// }






var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for each




function each(anyArr, anyFunc) {   // <---- YES!!!
  var theItem = "";
  var iHold;
  for (var i = 0; i < anyArr.length; i++) {
    iHold = i;
    theItem = anyArr[i];
    anyFunc(theItem, iHold);       // <--- in order for the this to run everytime we need to have it in the loop lol
    }
    // anyFunc(theItem, iHold);
  }







var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});


//  // returns The item in the 0 position is Tyler
// VM74:21 The item in the 1 position is Cahlan
// VM74:21 The item in the 2 position is Ryan
// VM74:21 The item in the 3 position is Colt
// VM74:21 The item in the 4 position is Tyler
// VM74:21 The item in the 5 position is Blaine
// VM74:21 The item in the 6 position is Cahlan






















/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





function getUserById(anyObj, anyFunc) {   // <---- YES!!!
  var theItem = "";
  var iHold;
  for (var key in anyObj) {
    // iHold = i;
    // theItem = anyArr[i];
    // anyFunc(theItem, iHold);       // <--- in order for the this to run everytime we need to have it in the loop lol
    if (this["id"] === "16t") {

    }
    }
    anyFunc(this["email"], this["name"])
    // anyFunc(theItem, iHold);
  }



 //code here for getUserById

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
});
