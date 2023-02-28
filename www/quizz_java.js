


const els ={
    welcomeScreen: null,
    questionScreen: null,
    endScreen: null,
    welcomeBtn: null,
    answers: null,
    endBtn: null,
    answersContainers: null,
};




let questionIndex = 0,

// affichage des questions et affectation de valeur en fonction de la reponse

const question = [{
        question: 'Un ordinateur peut fonctionner sans carte mere ?',
        answers: [{
            title: 'vrai',
            result: 'vrai'
        },{
            title: 'faux',
            result: 'faux'
        }]
        

    },
    {
        question: 'La carte mere est compatible avec tout les processeurs ?',
        answers: [{
            title: 'oui',
            result: 'faux'
        },{
            title: 'non',
            result: 'vrai'
        }]
            

    },
    {
        question: 'Qu est ce que la RAM ?',
        answers: [{
            title: 'memoire vive',
            result: 'vrai'
        },{
            title: 'memoire morte',
            result: 'faux'
        }]
            

    },
    {
        question: 'A quoi set le processeur ?',
        answers: [{
            title: 'caluler',
            result: 'vrai'
        },{
            title: 'adapter des images',
            result: 'faux'
        }]
            

    },
    {
        question: 'Quel est le nom du BIOS ?',
        answers: [{
            title: 'firmware',
            result: 'vrai'
        },{
            title: 'software',
            result: 'faux'
        }]
            

    },
];




// changement de page et de question


const recordedQuestions = [];


const init = () => {
    console.log('init'),

    els.welcomeScreen = document.querySelector(".welcome-screen"),
    els.questionScreen = document.querySelector(".question-screen"),
    els.endScreen = document.querySelector(".end-screen"),
    els.welcomeBtn = els.welcomeScreen.querySelector('button'),
    els.endBtn = els.endScreen.querySelector('button'),
    els.answersContainers = els.questionScreen.querySelector('ul'),
    els.welcomeBtn.addEventListener("click",()=>{
        displayScreen('question');
        displayQuestion(questionIndex);
    }),

    els.endBtn.addEventListener("click",()=>{
        displayScreen('welcome'),
        questionIndex = 0.
    });
    
    
    els.answersContainers.addEventListener('click', ((target))=>{
        if (target.tagName!=='LI'){
            return;
        };
        const result = target.getAttribute('data-result')
        recordedAnswers.push(result);

        questionIndex++;

        if (questionIndex >= question.lenght) {
            calculateScore(),
            displayScreen('end');
        } else {
            displayQuestion(questionIndex);
        };
    });

};


// calcul du score moyen 




const calculateScore = () => {
    const result = recordedAnswers.sort((a,b)=>{
        return recordedAnswers.filter(answer=>answer===a).length -
        recordedAnswers.filter(answer=>answer===b).length
    }).pop();

    els.endScreen.querySelector('span').textContent=result;
};








// changement d'affichage de l'ecriture de la question et de la liste

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


// fonction de changement d'etat de screen


const displayScreen = (screenName) => {
    els.welcomeScreen.style.display = 'none';
    els.questionScreen.style.display = 'none';
    els.endScreen.style.display = 'none';

    els[screenName+'Screen'].display = 'flex';
    screen.style.display = 'flex'
};



window.addEventListener('load',init);
