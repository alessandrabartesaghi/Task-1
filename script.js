console.log ("hello world")


function fattoriale(n) {
    var i,f
    f=1
    for (i=n; i>1; i--)
    {
        f=f*i
    }
    return(f)
}

function Factorial(inputNumber) {

    var inputNumber = document.getElementById("number-to-factor").value;

    var factorNumber = fattoriale(inputNumber);
    document.getElementById("factorial-result").innerText = factorNumber;

}


// 2 exercise

function checkPalindrome(string){

var str = document.getElementById("string-palindrome").value;

var strReverse = str.split("").reverse().join("");

if (str == strReverse) {
    window.alert("it's palindrome");
 } else {
        window.alert("it is not palindrome");
    }

}

// 3 exercise

function stringCheck(stri){

var stri = document.getElementById("string-check").value;

const uniqueCount = new Set(stri).size;

var resto= uniqueCount / 2;

            if(resto == 0) { 
                    window.alert("true");
                } else { 
                    window.alert("false");
                }
            
            }

 function stringCheck1(strin, letter){
    var strin = document.getElementById("string-check").value;
 var count = 0

 for (let i=0; i < strin.lenght; i++ ){

    if (strin.charAt(i)== letter ) {
        count += 1;
    }
 }

var resto = count/2
if(resto == 0) { 
    window.alert("true");
} else { 
    window.alert("false");
}


 }


 