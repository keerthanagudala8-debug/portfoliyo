const words=[
"Web Developer",
"Python Programmer",
"ECE Student",
"Frontend Developer"
];

let i=0;
let j=0;
let current="";
let isDeleting=false;

function typing(){

current=words[i];

if(!isDeleting){

document.getElementById("typing").textContent=current.substring(0,j++);

if(j>current.length){
isDeleting=true;
setTimeout(typing,1000);
return;
}

}

else{

document.getElementById("typing").textContent=current.substring(0,j--);

if(j==0){
isDeleting=false;
i=(i+1)%words.length;
}

}

setTimeout(typing,isDeleting?70:120);

}

typing()
