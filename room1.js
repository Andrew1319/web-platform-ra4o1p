const startButton = document.getElementById('start-button');
startButton.addEventListener('click', function(){
    const username = document.getElementById('username').value;
    localStorage.setItem("username",username);
    window.location.href = 'room2.html';
});
