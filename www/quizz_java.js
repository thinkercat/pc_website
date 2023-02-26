const els ={
    welcomeScreen: null,
    questionScreen: null,
    endScreen: null,
    welcomeBtn: null,
    answers: null,
    endBtn: null,
    answersContainers: null,
};


let questionIndex = 0;



const question = [{
        question: 'Un ordinateur peut fonctionner sans carte mere ?'.
        answers: [{
            title: 'vrai',
            result: 'vrai'
        },{
            title: 'faux',
            result: 'faux'
        }]
        

    };
    {
        question: 'La carte mere est consideree comme ?'.
        answers: [{
            title: 'le coeur de l ordinateur',
            result: 'vrai'
        },{
            title: 'le BIOS',
            result: 'faux'
        }]
            

    };
    {
        question: 'tout les processeurs sont compatibles avec chaque cartes mere?'.
        answers: [{
            title: 'vrai',
            result: 'vrai'
        },{
            title: 'faux',
            result: 'faux'
        }]
            

    };
];

const recordedQuestions = [];


const init = () => {
    console.log('init');

    els.welcomeScreen = document.querySelector(".welcome-screen");
    els.questionScreen = document.querySelector(".question-screen");
    els.endScreen = document.querySelector(".end-screen");
    els.welcomeBtn = els.welcomeScreen.querySelector('button');
    els.endBtn = els.endScreen.querySelector('button');
    els.answersContainers = els.questionScreen.querySelector('ul');

    els.welcomeBtn.addEventListener("click",()=>{
        displayScreen('question');
        displayQuestion(questionIndex);
    });

els.answersContainers.addEventListener('click', ((target))=>{
    if (target.tagName!=='LI'){
        return;
    }
    const result = target.getAttribute('data-result')
    recordedAnswers.push(result);

    questionIndex++;

    if (questionIndex >= question.lenght) {
        calculateScore();
        displayScreen('end');
    } else {
        displayQuestion(questionIndex);
    }
});


const calculateScore = () => {
    const result = recordedAnswers.sort((a,b)=>{
        return recordedAnswers.filter(answer=>answer===a).length -
        recordedAnswers.filter(answer=>answer===b).length
    }).pop();

    els.endScreen.querySelector('span').textContent=result;
};




};

const displayQuestion =(index)=>{




    const currentQuestion= questions(index);

    const questionEl= els.questionScreen.querySelector('h2');
    els.answersContainer = els.questionScreen.querySelector('ul');

    const answerEls =currentQuestion.answers.map((answer)) =>{
        const liEl = document.createElement('li');
        liEl.textContent = answer.title;
        liEl.setAttribute('data-result', answer.result);
        return liEl

    }

    questionEl.textContent = currentQuestion.question;
    els.answersContainers.textContent = '';
    els.answersContainers.append(...answerEls);
};


const displayScreen = (screenName) => {
    els.welcomeScreen.style.display = 'none';
    els.questionScreen.style.display = 'none';
    els.endScreen.style.display = 'none';

    els[screenName+'Screen'].display = 'flex';
    screen.style.display = 'flex'
};



window.addEventListener('load',init);








