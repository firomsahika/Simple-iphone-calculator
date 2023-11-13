
let input = document.querySelector(".input");


const AC = document.querySelector(".Ac");  
const negative = document.querySelector(".negative");   
const modulo = document.querySelector(".modulo");   
const division = document.querySelector(".division");  
const no7 = document.querySelector(".no7");   
const no8 = document.querySelector(".no8");  
const no9 = document.querySelector(".no9");  
const multiply = document.querySelector(".multiply");   
const no4 = document.querySelector(".no4");  
const no5 = document.querySelector(".no5");
const no6 = document.querySelector(".no6");
const subtract = document.querySelector(".subtract");
const no1 = document.querySelector(".no1");
const no2 = document.querySelector(".no2");
const no3 = document.querySelector(".no3");
const addition = document.querySelector(".addition");




const buttons = document.querySelectorAll("button");   
for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
        const btnSwitch = buttons[i].innerHTML;
        let myArr = [];
        let  inputValue = input.value;
        let convert = parseInt(input.value);
        let numberArr = [];
        let operators = []
        function store(){
            myArr.push(inputValue);
            for(let j=0;j<myArr.length;j++){
                input.value = myArr[j]+input.value;
            }
        };

        switch(btnSwitch){
        case "+":
            input.value = "+";
            store();
            operators = operators + operators.push(input.value);
            console.log(operators);
            break;
        case "-":
            input.value = "-";
            store();
            
            console.log(operators);
            break;
        case "X":
            input.value = "*";
            store();
            
            break;
        case "/":
            input.value = "/";
            store();
            operators.push(input.value);
            break;
        case "%":
            input.value = "%";
            store();
            operators.push(input.value);
            break;
        case "+/-":
            input.value = "-";
            myArr.push(inputValue);
            for(let j=0;j<myArr.length;j++){
                input.value = input.value + myArr[j];
            }
            break;
        case "1":
            input.value = "1";
            store();
            convert;    
            numberArr.push(convert);
            console.log(numberArr);
            break;
        case "2":
            input.value = "2";
            store();
            convert;
            numberArr.push(convert);
            break;
        case "3":
            input.value = "3";
            store();
            convert;
            numberArr.push(convert);
            break;
        case "4":
            input.value = "4";
            store();
            convert;
            numberArr.push(convert);
            break;
        case "5":
            input.value = "5";
            store();
            convert;
            numberArr.push(convert);
            break;
        case "6":
            input.value = "6";
            store();
            convert;
            numberArr.push(convert);
            break;
        case "7":
            input.value = "7";
            store();
            convert;
            numberArr.push(convert);
            break;
        case "8":
            input.value = "8";
            store();
            convert;
            numberArr.push(convert);
            break;
        case "9":
            input.value = "9";
            store();
            convert;
            numberArr.push(convert);
            break;
        case "0":
            input.value = "0";
            store();
            convert;
            numberArr.push(convert);
            break;
        case ".":
            input.value = ".";
            store();
            break;
        case "=":
            input.value = eval(input.value);
            break;
        case "AC":
            input.value = " ";
            break;
        }
    })       
}





