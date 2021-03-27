const socket = io.connect('http://localhost:4000');

const link = "http://api.quotable.io/random";

var pera = document.getElementById('pera');
var myText = document.getElementById('myText');
var startBtn = document.getElementById('startBtn');
var timeLeftSpan = document.getElementById('timeLeftSpan');
var textInSmallTag = document.getElementById('textInSmallTag');
var timeLeft = 6;

startBtn.addEventListener('click', () => {
    console.log('clicked');
    startBtn.disabled = true;
    countDown();
    setTimeout(getNextQuote,2000);
});


function countDown() {
    setTimeout(() => {
        timeLeft--;
        
        if (timeLeft >= 0) {
            textInSmallTag.innerText = "starting in: ";
            timeLeftSpan.innerText = timeLeft;
            switch (timeLeft) {
                case 1:
                    myText.disabled = false;
                    myText.focus();
                case 0:
                    timeLeftSpan.innerText = "";
                    console.log('im here');
                    textInSmallTag.innerText = 'Start Typing...';
                    break;
                case 3:
                    textInSmallTag.classList.add('red');
                    textInSmallTag.classList.remove('green');
                    timeLeftSpan.classList.add('red');
                    timeLeftSpan.classList.remove('green');
                    break;
                default:
            }
            // timeLeftSpan.innerText = timeLeft;
            countDown();
        }
    }, 1000)
}





function getRandomQuote() {
    return (fetch(link)
        .then(response => response.json())
        .then(myData => myData.content));
}

//inserting elements from api to pera
async function getNextQuote() {
    const quote = await getRandomQuote();
    // console.log(quote);
    // pera.innerText = '';
    quote.split('').forEach(i => {
        var characterSpan = document.createElement('span'); //this element will created every time newly
        characterSpan.innerText = i;
        characterSpan.classList.add('mySpan');
        pera.appendChild(characterSpan);
        // console.log(characterSpan);

    });
    myText.value = "";  //not neccesary
}


// adding event listener on textarea when stating input

myText.addEventListener('input', () => {
    const quoteArray = document.getElementsByClassName('mySpan');
    // console.log(quoteArray);
    const myTextArray = myText.value.split('');
    // console.log(myTextArray);
    // myTextArray.forEach((element )=> {

    //     console.log(element);
    // });
    for (let i in quoteArray) {
        if (myTextArray[i] == null) {
            quoteArray[i].classList.remove('correct');
            quoteArray[i].classList.remove('incorrect');
        }
        else if (myTextArray[i] === quoteArray[i].innerText) {
            quoteArray[i].classList.add('correct');
            quoteArray[i].classList.remove('incorrect');
        }
        else {
            quoteArray[i].classList.remove('correct');
            quoteArray[i].classList.add('incorrect');
        }
    }
})
