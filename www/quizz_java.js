var questions = ["q1", "q2"];
var reponses = ["faux", "vrai"];

function correction(numero) {
    var radios = document.getElementsByName(questions[numero]);
    for(var i = 0; i < radios.length; i++){
        if(radios[i].checked){
            if(radios[i].value == reponses[numero]) {
                document.getElementsByClassName("resultat")[numero].innerHTML = "Juste!";
            }
            else {
                document.getElementsByClassName("resultat")[numero].innerHTML = "Faux!" ;
            }
        }
    }
}