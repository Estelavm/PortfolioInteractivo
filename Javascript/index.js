//Interactividad del monitor
document.addEventListener('DOMContentLoaded', function () {
    // Selecciono la imagen del monitor y el tooltip
    const monitorImage = document.querySelector('#Monitor_Habilidades'); 
    const tooltip = document.querySelector('#tooltip_habilidades');

    // Variable para rastrear si el tooltip está visible
    let tooltipVisible = false;

    // Función que alterna la visibilidad del tooltip al hacer clic en la imagen del monitor
    monitorImage.addEventListener('click', function () {
        if (tooltipVisible) {
            tooltip.style.opacity = '0';
            tooltip.style.visibility = 'hidden';
        } else {
            tooltip.style.opacity = '1';
            tooltip.style.visibility = 'visible';
        }

        // Alterno el estado de la variable
        tooltipVisible = !tooltipVisible;
    });
});


//Interactividad del celular - Form:
// Selecciono la imagen del celular y el contenedor del formulario
const celular = document.querySelector('#celular-form');
const formContainer = document.querySelector('.form-container');

// Controlo el estado de visibilidad del formulario
let isFormVisible = false;

// Evento de clic en la imagen del celular
celular.addEventListener('click', () => {
    if (isFormVisible) {
        // Si el formulario ya es visible, lo oculta
        formContainer.style.opacity = '0';
        formContainer.style.visibility = 'hidden';
    } else {
        // Si el formulario no es visible, lo muestra
        formContainer.style.opacity = '1';
        formContainer.style.visibility = 'visible';
    }

    // Cambio el estado de visibilidad
    isFormVisible = !isFormVisible;
});

//Interactividad del botón para el audio de presentación
// Selecciono el botón y el elemento de audio
const playButton = document.querySelector('#play_audio');

// Creo una referencia que indique si el audio ya está creado
let audioCreated = false;
let audioPlayer;

// Evento de click en el botón
playButton.addEventListener('click', () => {
    if (!audioCreated) {
        // Creo el elemento de audio 
        audioPlayer = document.createElement('audio');
        audioPlayer.id = 'audio_player'; 
        audioPlayer.src = './Images/Audio_Bienvenida.mp3';  
        audioPlayer.type = 'audio/mp3';
        audioPlayer.setAttribute('controls', 'true');  

        audioPlayer.addEventListener('ended', () => {
            playButton.textContent = 'Reproducir'; 
        });

        // Agrego el elemento de audio al DOM
        document.body.appendChild(audioPlayer);

        // Reproducir audio
        audioPlayer.play();
        
        // Cambio el texto del botón a "Pausar" mientras el audio se reproduce
        playButton.textContent = 'Pausar';

        // Marco que el audio ya fue creado
        audioCreated = true;
    } else {
        // Si ya está creado, se pausa o continua el audio
        if (audioPlayer.paused) {
            audioPlayer.play();
            playButton.textContent = 'Pausar';  
        } else {
            audioPlayer.pause();
            playButton.textContent = 'Reproducir'; 
        }
    }
});



