let btn1=document.getElementById("change");
let Outer = document.getElementById("outer");

let arr=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];

function returnIndex(){
    
    let index=Math.round((Math.random()*15));

    return index;
}
let colorcode='#';

function changeCol(){
    colorcode='#';
    for(let i=1; i<=6; i++){
        colorcode=colorcode+""+arr[returnIndex()]
    }
    console.log(colorcode);
    document.getElementById("outer").style.backgroundColor=colorcode;
}