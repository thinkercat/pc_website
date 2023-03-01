window.addEventListener('load', () => {

    console.log('Initialisation du script...');

    //Screen
    let welcomeScreen = document.getElementById("welcome-screen-container");
    let questionScreen = document.getElementById("question-screen-container");
    let endScreen = document.getElementById("end-screen-container");

    welcomeScreen.style.visibility = 'visible';

    //Buttons
    const welcomeBtn = document.getElementById("welcomeBtn");
    const questionBtn = document.getElementById("questionBtn");


    
    //Score
    let scoreContainer = document.getElementById("score");
    let score = 0 ;


    // FUNCTIONS //

    // changement d'affichage
    const showScreen = (screen) =>{
        console.log("change screen...")
        document.querySelector('section').style.visibility = 'hidden';
        screen.style.visibility = 'visible';
    }

    // calcul du score
    const verifyAnswers = () =>{
        //set questions
        const questions = {
            question01 :{
                answer1: document.getElementById('question01_1'),
                answer2: document.getElementById('question01_2'),
                selectedAnswer: document.querySelector('input[name="question01"]:checked'),
                goodAnswer : 'faux'
            },
            question02 :{
                answer1: document.getElementById('question02_1'),
                answer2: document.getElementById('question02_2'),
                selectedAnswer: document.querySelector("input[name='question02']:checked"),
                goodAnswer : 'faux'
            },
            question03 :{
                answer1: document.getElementById('question03_1'),
                answer2: document.getElementById('question03_2'),
                selectedAnswer: document.querySelector('input[name="question03"]:checked'),
                goodAnswer : 'vrai'
            },
            question04 :{
                answer1: document.getElementById('question04_1'),
                answer2: document.getElementById('question04_2'),
                selectedAnswer: document.querySelector('input[name="question04"]:checked'),
                goodAnswer : 'faux'
            },
            question05 :{
                answer1: document.getElementById('question05_1'),
                answer2: document.getElementById('question05_2'),
                selectedAnswer: document.querySelector('input[name="question05"]:checked'),
                goodAnswer : 'faux'
            },
        };

        for(i in questions){
            if (questions[i].goodAnswer === questions[i].selectedAnswer.value){
                score ++;
            }
            console.log(score)
        }
        let scoreString = score.toString();
        scoreContainer.textContent = scoreString;
    }

    // Buttons
    welcomeBtn.addEventListener("click", () => {
        showScreen(questionScreen);
    });
    questionBtn.addEventListener("click", () => {
        verifyAnswers();
        showScreen(endScreen);
    });

});
