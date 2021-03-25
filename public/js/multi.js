const socket = io.connect('http://localhost:4000');
var pera = document.getElementById('pera').innerText.split(' ');
var myText = document.getElementById('myText');
var myText1;
var i=0;
// console.log(pera);

myText.addEventListener('onInput',()=>{
    myText1 = myText.innerText;
    console.log(i);
    if(myText1 == pera[i]){
        console.log('true');
        myText.innerText= "";
    }
})
