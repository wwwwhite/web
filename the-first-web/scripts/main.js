let myImage=document.querySelector('img');


myImage.onclick=function() {
    let mySrc=myImage.getAttribute('src');
    if(mySrc==='images/huang.jpg'){
        myImage.setAttribute('src','images/waterfall.jpg');
    }else{
        myImage.setAttribute('src','images/huang.jpg');
    } 
}
function setHeading(name){
    let myHeading=document.querySelector('h1');
    myHeading.textContent='white snake,'+name+'!';
}

function setUserName(){
    let myName=prompt('enter your name');
    localStorage.setItem('name',myName);
    setHeading(myName);
}

let storedName=localStorage.getItem('name');
if(!storedName){
    setUserName();

}else{
    setHeading(storedName);
}

let myButton=document.querySelector('button');
myButton.onclick=setUserName;




