//Eventos de clicks:
document.body.addEventListener('keyup', (event) => {
    playSound( event.code.toLowerCase() );
});
document.querySelector('.change--button button').addEventListener('click', () => {
    let song = document.getElementById('input').value;

    let waitLoop = 0;
    for (let l of song) {
        setTimeout( () => {
            let newsong = `key${l}`;
            playSound(newsong);
        }, waitLoop);
        waitLoop += 200;
    }
});

//Funções para serem executadas:
function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if(audioElement !== null) {
        audioElement.currentTime = 0;
        audioElement.play();
    }
    if (keyElement !== null) {
        keyElement.classList.add('active');

        setTimeout( () => {
            keyElement.classList.remove('active');
        }, 400);
    }
}