const btn__container = document.getElementById("btn__container");

btn__container.addEventListener("click", (e) => {
    if (e.target.id) {
        const sound_id = e.target.id;
        const sound_element = document.getElementById(sound_id);
        sound_element.play();
    }
})