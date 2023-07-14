const btn__container = document.getElementById("btn__container");
const audioElements = document.querySelectorAll("audio");

btn__container.addEventListener("click", (e) => {
    if (e.target.id) {

        audioElements.forEach((audio) => {
            audio.pause();
            audio.currentTime = 0;
        })

        const sound_id = e.target.id;
        const sound_element = document.getElementById(sound_id);
        if (sound_element) {
            sound_element.play();
        }

    }
})