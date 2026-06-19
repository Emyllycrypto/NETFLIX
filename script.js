function abrirVideo() {
    document.getElementById("modal-video").style.display = "flex";
    document.getElementById("meu-video").play();
}

function fecharVideo() {
    const video = document.getElementById("meu-video");

    video.pause();
    video.currentTime = 0;

    document.getElementById("modal-video").style.display = "none";
}

