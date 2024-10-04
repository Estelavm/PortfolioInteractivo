document.addEventListener('DOMContentLoaded', function () {
    // Seleccionamos la imagen del monitor y el tooltip
    const monitorImage = document.querySelector('#Monitor_Habilidades'); // Cambié para seleccionar la imagen
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

        // Alternamos el estado de la variable
        tooltipVisible = !tooltipVisible;
    });
});


//Interactividad del celular - Form:
// Selecciona la imagen del celular y el contenedor del formulario
const celular = document.querySelector('#celular-form');
const formContainer = document.querySelector('.form-container');

// Bandera para controlar el estado de visibilidad del formulario
let isFormVisible = false;

// Escucha el evento de clic en la imagen del celular
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

    // Cambia el estado de visibilidad
    isFormVisible = !isFormVisible;
});

//Interactividad del botón para el audio de presentación
// Selecciona el botón y el elemento de audio
const playButton = document.querySelector('#play_audio');

// Crear la referencia a una bandera que indique si el audio ya está creado
let audioCreated = false;
let audioPlayer;

// Escucha el clic en el botón
playButton.addEventListener('click', () => {
    if (!audioCreated) {
        // Crear el elemento de audio dinámicamente
        audioPlayer = document.createElement('audio');
        audioPlayer.id = 'audio_player';  // Asignamos un id
        audioPlayer.src = '../Images/Audio_Bienvenida.mp3';  // Cambia esta ruta a la ubicación de tu archivo
        audioPlayer.type = 'audio/mp3';
        audioPlayer.setAttribute('controls', 'true');  // Opcional: Agrega controles

        // Opcional: Añadir evento para actualizar el botón de reproducción si se termina
        audioPlayer.addEventListener('ended', () => {
            playButton.textContent = 'Reproducir';  // Cambia el texto del botón al terminar
        });

        // Agregar el elemento de audio al DOM
        document.body.appendChild(audioPlayer);

        // Reproducir el audio
        audioPlayer.play();
        
        // Cambia el texto del botón a "Pausar" mientras el audio se reproduce
        playButton.textContent = 'Pausar';

        // Marca que el audio ya fue creado
        audioCreated = true;
    } else {
        // Si ya está creado, pausar o continuar el audio
        if (audioPlayer.paused) {
            audioPlayer.play();
            playButton.textContent = 'Pausar';  // Cambia el texto a "Pausar"
        } else {
            audioPlayer.pause();
            playButton.textContent = 'Reproducir';  // Cambia el texto a "Reproducir"
        }
    }
});



