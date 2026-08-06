let numbers = [10,20,30,40,50];

display();

function display(){
    document.getElementById("array").innerHTML = numbers.join(", ");
}

function pushItem(){

    let value = Number(document.getElementById("value").value);

    numbers.push(value);

    display();

    document.getElementById("result").innerHTML="push() executed";
}

function popItem(){

    let removed = numbers.pop();

    display();

    document.getElementById("result").innerHTML="Removed : "+removed;
}

function shiftItem(){

    let removed = numbers.shift();

    display();

    document.getElementById("result").innerHTML="Removed : "+removed;
}

function unshiftItem(){

    let value = Number(document.getElementById("value").value);

    numbers.unshift(value);

    display();

    document.getElementById("result").innerHTML="unshift() executed";
}

function spliceItem(){

    let value = Number(document.getElementById("value").value);

    numbers.splice(2,0,value);

    display();

    document.getElementById("result").innerHTML="Inserted at index 2";
}

function sliceItem(){

    let newArray = numbers.slice(1,4);

    document.getElementById("result").innerHTML=
    "Slice : "+newArray;
}

function mapItem(){

    let newArray = numbers.map(num=>num*2);

    document.getElementById("result").innerHTML=
    "Map : "+newArray;
}

function filterItem(){

    let newArray = numbers.filter(num=>num>25);

    document.getElementById("result").innerHTML=
    "Filter : "+newArray;
}

function reduceItem(){

    let total = numbers.reduce((sum,num)=>sum+num,0);

    document.getElementById("result").innerHTML=
    "Sum = "+total;
}

function forEachItem(){

    let text="";

    numbers.forEach(function(num){

        text += num+" ";

    });

    document.getElementById("result").innerHTML=text;
}