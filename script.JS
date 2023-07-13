var number=0;
var number1=0;


function plus() {
    number++;
    total();
}

function minus() {
    if(number > 0) number--;
    total();
}

function total() {
    p = document.getElementById("value");
    if(number < 10) p.innerHTML = "0" + number;
    else p.innerHTML = number;

    a = document.getElementById("price");
    a.innerHTML = "$" + number*12.99;
}





function plus1() {
    number1++;
    total1();
}

function minus1() {
    if(number1 > 0) number1--;
    total1();
}

function total1() {
    p = document.getElementById("value1");
    if(number < 10) p.innerHTML = "0" + number1;
    else p.innerHTML = number1;

    a = document.getElementById("price1");
    a.innerHTML = "$" + number1*12.99;
}