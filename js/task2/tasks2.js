
/*
1
Correct the syntax error
 let arr=[ 1,7,  9,  45 ];

let arr= ["Str" "alex","moh",'the','fox' 'over' lazy, 'dog',  ];

*/


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
// 1 0 

/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/

let favfood= ['mansaf ', 'pizza ', 'shawrma' , 'fesh' ];
let favsport=["football","baskitball","wwe"];
let favmovie=["blue", "hello" , "50 days"];
/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array


Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
function firstofarray(x){
return x[0];
}; 


/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
function lastofarray(x){
return x[-1];

};

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

=> [1,3,4,6,8,9,10]
*/

// var array = [0,5,7,9];
// array.push(10);
// array.shift();
// array.shift();
// array.shift();
// array.unshift(8);
// array.unshift(6);
// array.unshift(4);
// array.unshift(3);
// array.unshift(1);
// console.log(array);

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

*/
var array2 = [5,9,-7,3.5]
console.log(array2.pop());
console.log(array2.shift());
console.log(array2.unshift());
console.log(array2.push());

/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
function middleOfArray(x){
if(x.length%2 !=0){
  let y =[];
y=y.indexOf((x.length/2.));

}
};

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
var animals = ['cat', 'ele', 'bird'];

animals[0] = 'zebra';
animals[1] = 'elephant';

console.log(animals); 

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
function indexOfArray(x,y){
return x[y];
};


/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
function arrayExceptLast(x){
    let y=[];
for (i=0; i<x.length-1;i++){
    y+=x[i];

}
return y;
};

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
function addToEnd(x,y) {
x.push[y];
return x;
}

// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function sumArray(a){
let sum =0;
    for(let i=0;i<a.length;i++){
sum +=a[i];

}
let i=0;
while(i<a.length){
sum +=a[i];
i++
}


return sum;
};
/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function minInArray(x){
let result =0;
for(let i=0;i<x.length;i++){
    if(x[i] <x[i+1]){
        result =x[i];
}
else{
    result=[i+1];
}}
let z=0;
while(z<x.length){
    
        if(x[i] <x[i+1]){
            result =x[i];
    }
    else{
        result=[i+1];
    }

z++;


}};

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// function removeFromArray(x,y){
// for(let i=0; i<x.length;i++){
//     if( )


// }


// };


/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function oddArray(x){
    let y=[];    
for(let i=0; i<x.length;i++){
if(x[i]%2 !=0){
y.push(x[i])

}

}

};

/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function aveArray(x){
let  avg=0;
for(let i =0;i<x.length;i++){
avg+=x[i];


}
return avg/x.length;

}

/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function shorterInArray(x){
    let result=-1;
    for (let i = 0; i< x.length; i++) {
        if (x[i].length<x[x+1]) {
            result=x[i];
        }
       }
       return result;
}

/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function repeatChar(x,y){
let counter=0;    
for(let i=0; i<x.length;i++){
if (x[i]==y){
counter++;
}


}
return counter;

};

/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenIndexOddLength(x){
let result=0;
    for(let i=0; i<x.length; i++){
        if(x[i].length%2 !=0 && x.indexOf(x[i])%2==0){
            result=x[i];

        }

    }
    return result;
}

/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function powerElementIndex(x){
let y=[];
for (let i=0; i<x.length;i++) {
let u =x[i]*x[i];
y.push(u);

}
return y;
};

/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenNumberEvenIndex(x) {
    let y=[];
    for(let i=0; i<x.length;i++){
if (x[i]%2==0 && x.indexOf(x[i])%2==0){
    y.push(x[i]);
}

    }
    return y;
}