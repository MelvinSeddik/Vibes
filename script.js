/* CLICK EVENT BURGER MENU */
document.querySelector("#burger").addEventListener("click", function () {
    document.querySelector("nav").classList.toggle("responsive");
    document.querySelector("#burger").classList.toggle("close-transform");
})

/* BURGER NAV LINKS */
const navLinks = document.querySelectorAll("header nav a");
for (link of navLinks) {
    link.addEventListener("click", function () {
        document.querySelector("nav").classList.toggle("responsive");
        document.querySelector("#burger").classList.toggle("close-transform");
    })
}

/* COLOR PICKER */
const colors = document.querySelectorAll("#color-picker-content div");
let colorPicker = document.querySelector("#color-picker");
colorPicker.addEventListener("click", function () {
    colorPicker.classList.toggle("color-picker-active");
})

/* CLICK EVENT COLOR PICKER*/
for (color of colors) {
    color.addEventListener("click", function () {
        switch (this.title) {
            case colors[0].title: colorChanger(this.title, "white", "black"); break; /* red */
            case colors[1].title: colorChanger(this.title, "black", "#865E0D"); break; /* yellow */
            case colors[2].title: colorChanger(this.title, "white", "#094100"); break; /* green */
            case colors[3].title: colorChanger(this.title, "white", "#3C0041"); break; /* purple */
            case colors[4].title: colorChanger(this.title, "white", "#241080"); break; /* lavender-blue */
            case colors[5].title: colorChanger(this.title, "black", "#0A586B"); break; /* light-blue */
        }
    })
}

document.querySelector("#reset-color").addEventListener("click", function(){
    colorChanger("", "", "", "");
})

/* FUNCTION COLOR CHANGER */
function colorChanger(bg, text, icon, bouton) {
    const all = document.querySelector("*");
    const sections = document.querySelectorAll("section:not(.banner)");
    const iTags = document.querySelectorAll("i:not(#modal i):not(#gallery i):not(#color-picker i)"); /* Pose problème sur le navigateur Opéra GX (invalid selector) */
    
    for (section of sections) {
        section.style.background = bg;
        all.style.color = text;
    }
    for (iTag of iTags) {
        iTag.style.color = icon;
    }
}

/* CLICK EVENT GALLERY IMAGES */
const images = document.querySelectorAll("#gallery .image");
let modal = document.querySelector("#modal");
let modalImg = document.querySelector("#modal img");

for (image of images) {
    image.addEventListener("click", function () {
        modalImg.src = this.querySelector("img").src;
        document.querySelector("#lecteurbg").style.display = "none";
        modal.style.display = "block";
        document.querySelector("#close-modal").style.display = "block";
        leftSlide.style.display = "block";
        rightSlide.style.display = "block";
    })
}

/* CLICK EVENT VIDEOS */
const videos = document.querySelectorAll("#gallery .video");
let modalVideo = document.querySelector("#modal video");

for (video of videos) {
    video.addEventListener("click", function () {
        modalVideo.src = this.querySelector("video").src;
        document.querySelector("#lecteurbg").style.display = "none";
        leftSlide.style.display = "none";
        rightSlide.style.display = "none";
        document.querySelector("#close-modal").style.display = "block";
        modal.style.display = "block";
        modalVideo.style.display = "block";

    })
}

/* HIDE MODAL FUNCTION */
function hideModal() {
    modal.style.display = "none";
    modalVideo.style.display = "none";
    modalImg.src = "";
    modalVideo.src = "";
    modalAudio.pause();
    modalAudio.currentTime = 0;
}

/* CLOSE MODAL BUTTON*/
document.querySelector("#close-modal").addEventListener("click", () => { hideModal() });

/* CLOSE MODAL OUTSIDE CLICK */
window.onclick = function (event) {
    if (event.target === modal) {
        hideModal();
    }
}


/* SORT GALLERY BY TITLE AND FADED TRANSITION */
const options = document.querySelectorAll("#gallery-options div a");
const gallery = document.querySelectorAll("#gallery figure");
const audios = document.querySelectorAll("#gallery .audio");
for (option of options) {
    option.addEventListener("click", function () {

        /* On commence par mettre l'opacité a 0 pour tous les éléments, on attend un peu... puis on enlève les attributs pour laisser les classes faire l'animation de réapparition */
        switch (this.innerHTML) {
            case "ALL": gallery.forEach(element => element.style.transition = "opacity .5s ease-out");
                gallery.forEach(element => element.style.opacity = "0");
                options.forEach(option => option.style.color = "");
                this.style.color="red";
                setTimeout(function () {
                    gallery.forEach(element => element.style.transition = "");
                    gallery.forEach(element => element.style.opacity = "");
                    document.querySelector("#gallery").classList.add("tri-all");
                    document.querySelector("#gallery").classList.remove("tri-images", "tri-videos", "tri-audios");
                }, 500);
                break;

            case "IMAGE": gallery.forEach(element => element.style.transition = "opacity .5s ease-out");
                gallery.forEach(element => element.style.opacity = "0");
                options.forEach(option => option.style.color = "");
                this.style.color="red";
                setTimeout(function () {
                    gallery.forEach(element => element.style.transition = "");
                    gallery.forEach(element => element.style.opacity = "");
                    document.querySelector("#gallery").classList.add("tri-images");
                    document.querySelector("#gallery").classList.remove("tri-all", "tri-videos", "tri-audios");
                }, 500);
                break;

            case "VIDEO": gallery.forEach(element => element.style.transition = "opacity .5s ease-out");
                gallery.forEach(element => element.style.opacity = "0");
                options.forEach(option => option.style.color = "");
                this.style.color="red";
                setTimeout(function () {
                    gallery.forEach(element => element.style.transition = "");
                    gallery.forEach(element => element.style.opacity = "");
                    document.querySelector("#gallery").classList.add("tri-videos");
                    document.querySelector("#gallery").classList.remove("tri-images", "tri-all", "tri-audios");
                }, 500);
                break;

            case "AUDIO": gallery.forEach(element => element.style.transition = "opacity .5s ease-out");
                gallery.forEach(element => element.style.opacity = "0");
                options.forEach(option => option.style.color = "");
                this.style.color="red";
                setTimeout(function () {
                    gallery.forEach(element => element.style.transition = "");
                    gallery.forEach(element => element.style.opacity = "");
                    document.querySelector("#gallery").classList.add("tri-audios");
                    document.querySelector("#gallery").classList.remove("tri-images", "tri-videos", "tri-all");
                }, 500);
                break;
        }
    })
    /* MOUSE OVER EFFECT FOR TITLES */
    option.addEventListener("mouseover", function (event) {
        actualColor= event.target.style.color;
        event.target.style.color = "red";
        setTimeout(function () {
            event.target.style.color = actualColor;
        }, 10);
    }, false);
}


/* SLIDER */
/* On stock nos images dans un tableau */
const imgs = document.querySelectorAll("#gallery .image img");
rightSlide = document.querySelector("#right-slide");
leftSlide = document.querySelector("#left-slide");

/* RIGHT SLIDE */
rightSlide.addEventListener("click", function () {
    /* On cherche à quel image du tableau correspond celle de la modal  */
    for (image of imgs) {
        if (modalImg.src === image.src) {
            /* Une fois trouvé, on cherche son index dans le tableau */
            for (let i = 0; i < imgs.length; i++) {
                if (image.src === imgs[i].src) {
                    /* Si c'est le dernier index alors on revient a l'index 0 */
                    if (i === imgs.length - 1) {
                        modalImg.src = imgs[0].src;
                    }
                    /* Sinon on incrémente l'index */
                    else {
                        modalImg.src = imgs[i + 1].src;
                    }
                }
            }
            /* Break pour finir la loop dès qu'on a eu ce qu'on voulait. */
            break;
        }
    }
})

/* LEFT SLIDE */
leftSlide.addEventListener("click", function () {
    for (image of imgs) {
        if (modalImg.src === image.src) {
            for (let i = 0; i < imgs.length; i++) {
                if (image.src === imgs[i].src) {
                    if (i === 0) {
                        modalImg.src = imgs[imgs.length - 1].src;
                    }
                    else {
                        modalImg.src = imgs[i - 1].src;
                    }
                }
            }
            break;
        }
    }
})


/* STICKY HEADER */
window.onscroll = function () { myFunction() };

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

/* MUSIC PLAYER */
let lecteur = document.querySelector("#lecteur");
let lecteurImg = document.querySelector("#lecteur-img div");
let modalAudio = document.querySelector("#modal audio");
let modalAudioSource = document.querySelector("#modal audio source");
let audioTitle = document.querySelector("#audio-title");

/* CLICK EVENT ON AUDIO IMAGES => TRANSFERT THE ELEMENTS INTO THE MODAL THEN DISPLAY IT */
for (audio of audios) {
    audio.addEventListener("click", function () {
        let imgSrc = this.querySelector("img").src;
        let audioSrc = this.querySelector("source").src;
        modalAudioSource.src = audioSrc;
        document.querySelector("#lecteurbg").style.background = "url(\'" + imgSrc + "\') no-repeat center / cover";
        lecteurImg.style.background = "url(\'" + imgSrc + "\') no-repeat center / cover";
        leftSlide.style.display = "none";
        rightSlide.style.display = "none";
        document.querySelector("#close-modal").style.display = "none";
        modalAudio.load();
        document.querySelector("#lecteurbg").style.display = "block";
        document.querySelector("#play").style.display = "none";
        document.querySelector("#repeat").style.display = "none";
        document.querySelector("#pause").style.display = "block";
        modal.style.display = "block";
    })
}

/* CLOSE PLAYER */
document.querySelector("#close-player").addEventListener("click", function () {
    hideModal();
})

/* PLAY */
document.querySelector("#play").addEventListener("click", function () {
    modalAudio.play();
    document.querySelector("#play").style.display = "none";
    document.querySelector("#repeat").style.display = "none";
    document.querySelector("#pause").style.display = "block";
})

/* PAUSE */
document.querySelector("#pause").addEventListener("click", function () {
    modalAudio.pause();
    document.querySelector("#play").style.display = "block";
    document.querySelector("#pause").style.display = "none";
})

/* REPLAY */
document.querySelector("#repeat").addEventListener("click", function () {
    modalAudio.play();
    document.querySelector("#play").style.display = "none";
    document.querySelector("#repeat").style.display = "none";
    document.querySelector("#pause").style.display = "block";

})


/* PROGRESS BAR */
let progress = document.querySelector("#progress");
let time = document.querySelector("#time");

setInterval(() => {
    progress.style.width = modalAudio.currentTime / modalAudio.duration * 100 + "%";
    time.innerHTML = convertTime(modalAudio);
    let myImg = document.querySelector("#lecteur-img");
    myImg.style.height = myImg.clientWidth + "px";

    /* Si l'audio est terminé on affiche le bouton replay */
    if (modalAudio.ended === true) {
        document.querySelector("#play").style.display = "none";
        document.querySelector("#repeat").style.display = "block";
        document.querySelector("#pause").style.display = "none";
    }
}, 100);


/* RETURN ELAPSED TIME AND DURATION OF AN AUDIO WITH THE RIGHT FORMAT */
function convertTime(audio) {
    let duration = ("0" + Math.trunc(audio.duration / 3600)).slice(-2) + ":" + ("0" + Math.trunc(audio.duration / 60)).slice(-2) + ":" + ("0" + Math.trunc(audio.duration % 60)).slice(-2);
    let hours = Math.floor(audio.currentTime / 3600);
    let minutes = Math.floor(audio.currentTime / 60 - 60 * hours);
    let seconds = audio.currentTime - 60 * minutes;
    if (audio.duration < 3600) {
        return ('0' + minutes).slice(-2) + ":" + ('0' + Math.trunc(seconds)).slice(-2) + " / " + ("0" + Math.trunc(audio.duration / 60)).slice(-2) + ":" + ("0" + Math.trunc(audio.duration % 60)).slice(-2);
    }
    else {
        return ('0' + hours).slice(-2) + ":" + ('0' + minutes).slice(-2) + ":" + ('0' + Math.trunc(seconds)).slice(-2) + " / " + duration;
    }
}

/* ACCORDION CLICK EVENT */
const accordions = document.querySelectorAll(".accordion-box");
for (accordion of accordions) {
    accordion.addEventListener("click", function () {
        this.classList.toggle("accordion-active");
        this.querySelector("span").classList.toggle("accordion-open");
        let nextElem = this.nextElementSibling;
        if (nextElem.style.maxHeight) {
            nextElem.style.maxHeight = null;
        }
        else {
            nextElem.style.maxHeight = nextElem.scrollHeight + "px";
        }
    })
}

/* NEXT AND PREVIOUS AUDIO CHANGE ON CLICK */
let lecteurBg = document.querySelector("#lecteurbg");
/* NEXT AUDIO */
document.querySelector("#next-audio").addEventListener("click", function(){  
    console.log(lecteurBg);
    for(let i = 0; i < audios.length; i++){
        if(modalAudioSource.src === audios[i].querySelector("audio source").src){
            if(i === audios.length-1){
                modalAudioSource.src = audios[0].querySelector("audio source").src;
                lecteurBg.style.background = "url(\'" + audios[0].querySelector("img").src + "\') no-repeat center/cover";
                lecteurImg.style.background = "url(\'" + audios[0].querySelector("img").src + "\') no-repeat center / cover";
                modalAudio.load();
                break;
            }
            else{
                modalAudioSource.src = audios[i+1].querySelector("audio source").src;
                lecteurBg.style.background = "url(\'" + audios[i+1].querySelector("img").src + "\') no-repeat center/cover";
                lecteurImg.style.background = "url(\'" + audios[i+1].querySelector("img").src + "\') no-repeat center / cover";
                modalAudio.load();
                break;
            }
        }
        
    }
})

/* PREV AUDIO */
document.querySelector("#prev-audio").addEventListener("click", function(){  
    console.log(lecteurBg);
    for(let i = 0; i < audios.length; i++){
        if(modalAudioSource.src === audios[i].querySelector("audio source").src){
            if(i === 0){
                modalAudioSource.src = audios[audios.length-1].querySelector("audio source").src;
                lecteurBg.style.background = "url(\'" + audios[audios.length-1].querySelector("img").src + "\') no-repeat center/cover";
                lecteurImg.style.background = "url(\'" + audios[audios.length-1].querySelector("img").src + "\') no-repeat center / cover";
                modalAudio.load();
                break;
            }
            else{
                modalAudioSource.src = audios[i-1].querySelector("audio source").src;
                lecteurBg.style.background = "url(\'" + audios[i-1].querySelector("img").src + "\') no-repeat center/cover";
                lecteurImg.style.background = "url(\'" + audios[i-1].querySelector("img").src + "\') no-repeat center / cover";
                modalAudio.load();
                break;
            }
        }
        
    }
})

function audioChanger(audioSrcList, currentAudio, direction){
    if(direction === "next"){
        /* On parcourt toute la liste d'audio */
        for(let i = 0; i < audioSrcList.length; i++){
            /* On cherche l'index de l'audio actuellement joué dans notre liste d'audio*/
            if (currentAudio.src === audioSrcList[i]){
                /* Si l'audio actuellement joué est le dernier de la liste alors on revient au premier */
                if(i === audios.length-1){
                    currentAudio.src = audioSrcList[0];
                    currentAudio.load();
                    break;
                }
                /* Sinon on passe à l'audio suivant */
                else{
                    currentAudio.src = audioSrcList[i+1];
                    currentAudio.load();
                    break;
                }
            }
        }
    }

    else if(direction === "prev"){
        /* On parcourt toute la liste d'audio */
        for(let i = 0; i < audioSrcList.length; i++){
            /* On cherche l'index de l'audio actuellement joué dans notre liste d'audio*/
            if (currentAudio.src === audioSrcList[i]){
                /* Si l'audio actuellement joué est le premier de la liste on passe alors au dernier */
                if(i === 0){
                    currentAudio.src = audioSrcList[audioSrcList-1];
                    currentAudio.load();
                    break;
                }
                /* Sinon on passe à l'audio précédent*/
                else{
                    currentAudio.src = audioSrcList[i-1];
                    currentAudio.load();
                    break;
                }
            }
        }
    }
}
