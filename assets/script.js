var startButtonEl = document.querySelector("#start-button");

var containerEl = document.querySelector("#container");
var container2El = document.querySelector("#container2");
var container3El = document.querySelector("#container3");
var container4El = document.querySelector("#container4");
var container5El = document.querySelector("#container5");
var container6El = document.querySelector("#container6");
var container7El = document.querySelector("#container7");

var question1El = document.querySelector("#question1");
var question2El = document.querySelector("#question2");
var question3El = document.querySelector("#question3");
var question4El = document.querySelector("#question4");
var question5El = document.querySelector("#question5");



var timeEl = document.querySelector("#time");

startButtonEl.addEventListener("click", start);
function start() {
    containerEl.style.display = "none";
    container2El.style.display = "block";
    timeEl.style.display = "block";
    timer();
    question1();
    // question2();
    // question3();
    // question4();
    // question5();
}

var count = 75;
var timer;
var finalCount;
function timer() {
    timer = setInterval(function () {
        count = count - 1;
        timeEl.textContent = "Time: " + count;

        //If time runs out display initials page
        if (count <= 0) {
            clearInterval(timer);
            containerEl.style.display = "none";
            container2El.style.display = "none";
            container3El.style.display = "none";
            container4El.style.display = "none";
            container5El.style.display = "none";
            container6El.style.display = "none";

            container7El.style.display = "block";
        }
    }, 1000);


}

function question1() {
    question1El.textContent = batQuestions[0].question;

    var a = document.getElementById('a1');
    a.textContent = batQuestions[0].answerChoicesArr[0];


    var b = document.getElementById('b1');
    b.textContent = batQuestions[0].answerChoicesArr[1];


    var c = document.getElementById('c1');
    c.textContent = batQuestions[0].answerChoicesArr[2];


    var d = document.getElementById('d1');
    d.textContent = batQuestions[0].answerChoicesArr[3];

}

function clickedQ1(buttonID) {
    if (buttonID.textContent != batQuestions[0].answerChoicesArr[0]) {
        count = count - 10;
    }
    container2El.style.display = "none";
    container3El.style.display = "block";
    question2();

}

function question2() {
    question2El.textContent = batQuestions[1].question;

    console.log(question2El.textContent);

    var a = document.getElementById('a2');
    a.textContent = batQuestions[1].answerChoicesArr[0];


    var b = document.getElementById('b2');
    b.textContent = batQuestions[1].answerChoicesArr[1];


    var c = document.getElementById('c2');
    c.textContent = batQuestions[1].answerChoicesArr[2];


    var d = document.getElementById('d2');
    d.textContent = batQuestions[1].answerChoicesArr[3];
}
function clickedQ2(buttonID) {
    if (buttonID.textContent != batQuestions[1].answerChoicesArr[2]) {
        count = count - 10;
    }
    container3El.style.display = "none";
    container4El.style.display = "block";
    question3();
}

function question3() {
    question3El.textContent = batQuestions[2].question;

    var a = document.getElementById('a3');
    a.textContent = batQuestions[2].answerChoicesArr[0];


    var b = document.getElementById('b3');
    b.textContent = batQuestions[2].answerChoicesArr[1];


    var c = document.getElementById('c3');
    c.textContent = batQuestions[2].answerChoicesArr[2];


    var d = document.getElementById('d3');
    d.textContent = batQuestions[2].answerChoicesArr[3];
}
function clickedQ3(buttonID) {
    if (buttonID.textContent != batQuestions[2].answerChoicesArr[3]) {
        count = count - 10;
    }
    container4El.style.display = "none";
    container5El.style.display = "block";
    question4();
}

function question4() {
    question4El.textContent = batQuestions[3].question;

    var a = document.getElementById('a4');
    a.textContent = batQuestions[3].answerChoicesArr[0];


    var b = document.getElementById('b4');
    b.textContent = batQuestions[3].answerChoicesArr[1];


    var c = document.getElementById('c4');
    c.textContent = batQuestions[3].answerChoicesArr[2];


    var d = document.getElementById('d4');
    d.textContent = batQuestions[3].answerChoicesArr[3];
}
function clickedQ4(buttonID) {
    if (buttonID.textContent != batQuestions[3].answerChoicesArr[1]) {
        count = count - 10;
    }
    container5El.style.display = "none";
    container6El.style.display = "block";
    question5();

}

function question5() {
    question5El.textContent = batQuestions[4].question;

    var a = document.getElementById('a5');
    a.textContent = batQuestions[4].answerChoicesArr[0];


    var b = document.getElementById('b5');
    b.textContent = batQuestions[4].answerChoicesArr[1];


    var c = document.getElementById('c5');
    c.textContent = batQuestions[4].answerChoicesArr[2];


    var d = document.getElementById('d5');
    d.textContent = batQuestions[4].answerChoicesArr[3];
}
function clickedQ5(buttonID) {
    if (buttonID.textContent != batQuestions[4].answerChoicesArr[2]) {
        count = count - 10;
    }
    finalCount = count;
    clearInterval(timer);
    timeEl.textContent = "Time: " + finalCount;
    container6El.style.display = "none";
    container7El.style.display = "block";

}


var batQuestions = [
    {
        question: "What is Batman's secret identity?",
        answerChoicesArr: ["Bruce Wayne", "Damian Wayne", "Clark Kent", "James Gordon"],
        answerID: 0
    },
    {
        question: "What is Batman's biological son?",
        answerChoicesArr: ["Dick", "Jason", "Damien", "Tim"],
        answerID: 2
    },
    {
        question: "Which of the robins died and came back to life?",
        answerChoicesArr: ["Tim Drake", "Dick Grayson", "Damian Wayne", "Jason Todd"],
        answerID: 3
    },
    {
        question: "What is the name of Batgirl?",
        answerChoicesArr: ["Kathy Kane", "Barbara Gordon", "Selina Kyle", "Harley Quinn"],
        answerID: 1
    },
    {
        question: "What villian mainly antagonized Dick Grayson when he was the leader of the teen Titans?",
        answerChoicesArr: ["Bane", "Joker", "Deathstroke", "Deadshot"],
        answerID: 2
    }
]
var initialList = document.querySelector("#initial-list");
var submitButtonEl = document.querySelector("#submitInit");
var initialInput = document.querySelector("#initial-text");
var initials = [];
showInit();

function renderInit() {
    initialList.innerHTML = "";

    for (var i = 0; i < initials.length; i++) {
        var init = initials[i];

        var li = document.createElement("li");
        li.textContent = init;
        li.appendChild(li);
    }
}
function showInit() {
    var storedInits = localStorage.getItem("initials");
    if (storedInits != null) {
        initials = JSON.parse(storedInits);
    }
    renderInit();
}

function storeInit() {
    localStorage.setItem("initials", JSON.stringify(initials));
}

submitButtonEl.addEventListener("submit", function (e) {
    e.preventDefault();
    var initialText = initialInput.nodeValue.trim();
    if (initialText === "") {
        return;
    }

    initials.push(initialText);
    initialInput.value = "";
    storeInit();
    renderInit();
});