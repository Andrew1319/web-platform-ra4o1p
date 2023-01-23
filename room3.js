const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');

answer4.addEventListener('click', correctAnswer);
answer1.addEventListener('click', wrongAnswer);
answer2.addEventListener('click', wrongAnswer);
answer3.addEventListener('click', wrongAnswer);

function correctAnswer(){
    alert("Correct! The answer is a dinosaur.");
    window.location.href = "room4.html";
}

function wrongAnswer(){
    alert("Wrong! Try again.");
}