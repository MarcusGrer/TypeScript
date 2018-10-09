let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("convInput");
let outputElement: HTMLOutputElement = <HTMLOutputElement> document.getElementById("convOutput");

function toOunces():void{

    let a:string = inputElement.value;  
    let b:number = parseFloat(a)/28.34952;
    outputElement.innerHTML = b.toString();

}

function toGrams():void{

    let a:string = inputElement.value;  
    let b:number = parseFloat(a)*28.34952;
    outputElement.innerHTML = b.toString();

}

let ouncesButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button1");
let gramsButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button2");

ouncesButton.addEventListener("click",toOunces);
gramsButton.addEventListener("click",toGrams);