/* ===================================
   HAPPY BIRTHDAY NAINA
   SCRIPT PART 1
=================================== */

// ==============================
// Pages
// ==============================

const pages = document.querySelectorAll(".page");

let currentPage = 0;

function showPage(index){

    pages.forEach(page=>{

        page.classList.remove("active");

    });

    pages[index].classList.add("active");

    currentPage=index;

}

showPage(0);

// ==============================
// Welcome Button
// ==============================

const startBtn=document.getElementById("startBtn");

const countNumber=document.getElementById("countNumber");

let countdown=5;

let countdownInterval;

startBtn.addEventListener("click",()=>{

    showPage(1);

    startCountdown();

});

// ==============================
// Countdown
// ==============================

function startCountdown(){

    countdown=5;

    countNumber.textContent=countdown;

    clearInterval(countdownInterval);

    countdownInterval=setInterval(()=>{

        countdown--;

        countNumber.textContent=countdown;

        if(countdown<=0){

            clearInterval(countdownInterval);

            document.body.classList.add("night");

            setTimeout(()=>{

                showPage(2);

            },700);

        }

    },1000);

}

// ==============================
// Hearts
// ==============================

const hearts=document.getElementById("hearts");

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(16+Math.random()*18)+"px";

    heart.style.animationDuration=(5+Math.random()*3)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },8000);

}

setInterval(createHeart,450);

// ==============================
// Petals
// ==============================

const petals=document.getElementById("petals");

function createPetal(){

    const petal=document.createElement("div");

    petal.className="petal";

    petal.innerHTML="🌸";

    petal.style.left=Math.random()*100+"vw";

    petal.style.animationDuration=(6+Math.random()*4)+"s";

    petals.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },10000);

}

setInterval(createPetal,700);

// ==============================
// Sparkles
// ==============================

const sparkles=document.getElementById("sparkles");

function createSpark(){

    const spark=document.createElement("div");

    spark.className="spark";

    spark.style.left=Math.random()*100+"vw";

    spark.style.top=Math.random()*100+"vh";

    sparkles.appendChild(spark);

    setTimeout(()=>{

        spark.remove();

    },2000);

}

setInterval(createSpark,150);

// ==============================
// Butterflies
// ==============================

const butterflies=document.getElementById("butterflies");

function createButterfly(){

    const butterfly=document.createElement("div");

    butterfly.className="butterfly";

    butterfly.innerHTML="🦋";

    butterfly.style.top=Math.random()*70+"vh";

    butterflies.appendChild(butterfly);

    setTimeout(()=>{

        butterfly.remove();

    },12000);

}

setInterval(createButterfly,5000);
/* ===================================
   SCRIPT PART 2
   GIFT + GALLERY
=================================== */

// ==============================
// Photos
// ==============================

const photos = [
"https://cdn.phototourl.com/free/2026-07-21-80cb2095-7095-4134-b933-9f5ab43ab87d.jpg",
"https://cdn.phototourl.com/free/2026-07-21-63f975fc-db35-4d53-95b9-d1788e1980ca.jpg",
"https://cdn.phototourl.com/free/2026-07-21-a7d22aa6-53f6-4391-983a-00864d03503d.jpg",
"https://cdn.phototourl.com/free/2026-07-21-4bb1a70d-d095-422b-885a-c4b04d58afcb.jpg",
"https://cdn.phototourl.com/free/2026-07-21-aa6f7c9d-f9f0-4c34-9ede-794b46c411ce.jpg",
"https://cdn.phototourl.com/free/2026-07-21-d5f6c653-ff99-4735-80ad-c8a062525d5d.jpg",
"https://cdn.phototourl.com/free/2026-07-21-3921484c-557e-4405-8402-35c87eae0288.jpg",
"https://cdn.phototourl.com/free/2026-07-21-7a2dbbef-59ec-4d79-8f10-3ba61c3e356b.jpg",
"https://cdn.phototourl.com/free/2026-07-21-df76ee9b-99e2-4050-a3d8-19dc1e33e227.jpg"
];

const captions = [
"Just Perfect ❤️",
"Pure Beauty ✨",
"Sweet Vibes 💕",
"Lovely Smile 😊",
"Golden Moment 🌸",
"Forever Lovely 💖",
"Best Memory 📸",
"Always Special 🤍",
"Happy Birthday Naina 🎂"
];

let currentPhoto = 0;
let autoPlay = null;

// ==============================
// Elements
// ==============================

const giftBox = document.getElementById("giftBox");
const scrapbookImage = document.getElementById("scrapbookImage");
const scrapbookCaption = document.getElementById("scrapbookCaption");

const prevPhoto = document.getElementById("prevPhoto");
const nextPhoto = document.getElementById("nextPhoto");
const autoPlayBtn = document.getElementById("autoPlay");

// ==============================
// Load Photo
// ==============================

function loadPhoto(){

    scrapbookImage.src = photos[currentPhoto];
    scrapbookCaption.textContent = captions[currentPhoto];

}

// ==============================
// Gift Open
// ==============================

giftBox.addEventListener("click",()=>{

    giftBox.classList.add("open");

    setTimeout(()=>{

        showPage(3);

        loadPhoto();

    },1000);

});

// ==============================
// Next
// ==============================

nextPhoto.addEventListener("click",()=>{

    currentPhoto++;

    if(currentPhoto>=photos.length){

        currentPhoto=0;

    }

    loadPhoto();

});

// ==============================
// Previous
// ==============================

prevPhoto.addEventListener("click",()=>{

    currentPhoto--;

    if(currentPhoto<0){

        currentPhoto=photos.length-1;

    }

    loadPhoto();

});

// ==============================
// Auto Play
// ==============================

autoPlayBtn.addEventListener("click",()=>{

    if(autoPlay){

        clearInterval(autoPlay);

        autoPlay=null;

        autoPlayBtn.textContent="▶ Auto Play";

        return;

    }

    autoPlayBtn.textContent="⏸ Stop";

    autoPlay=setInterval(()=>{

        currentPhoto++;

        if(currentPhoto>=photos.length){

            currentPhoto=0;

        }

        loadPhoto();

    },3000);

});

// ==============================
// Modal
// ==============================

const photoModal=document.getElementById("photoModal");

const modalImage=document.getElementById("modalImage");

const closeModal=document.getElementById("closeModal");

scrapbookImage.addEventListener("click",()=>{

    modalImage.src=scrapbookImage.src;

    photoModal.style.display="flex";

});

closeModal.addEventListener("click",()=>{

    photoModal.style.display="none";

});

photoModal.addEventListener("click",(e)=>{

    if(e.target===photoModal){

        photoModal.style.display="none";

    }

});
/* ===================================
   SCRIPT PART 3
   LETTER + CAKE + CELEBRATION
=================================== */

// ==============================
// Letter
// ==============================

const openLetter = document.getElementById("openLetter");
const finalLetter = document.getElementById("finalLetter");
const nextCake = document.getElementById("nextCake");

const letter = `Dear Naina ❤️,

Happy Birthday!

I hope this special day brings lots of happiness,
beautiful memories and endless smiles into your life.

You deserve all the love, success and joy in the world.

Keep smiling because your smile is truly beautiful.

May all your dreams come true.

Once Again,

Happy Birthday Naina ❤️🎂`;

let typingIndex = 0;
let typingInterval = null;

function typeLetter(){

    finalLetter.textContent = "";

    typingIndex = 0;

    clearInterval(typingInterval);

    typingInterval = setInterval(()=>{

        finalLetter.textContent += letter.charAt(typingIndex);

        typingIndex++;

        if(typingIndex >= letter.length){

            clearInterval(typingInterval);

        }

    },35);

}

openLetter.addEventListener("click",()=>{

    if(autoPlay){

        clearInterval(autoPlay);

        autoPlay = null;

        autoPlayBtn.textContent = "▶ Auto Play";

    }

    showPage(4);

    typeLetter();

});

// ==============================
// Cake
// ==============================

nextCake.addEventListener("click",()=>{

    showPage(5);

});

// ==============================
// Celebration
// ==============================

const celebrateBtn = document.getElementById("celebrateBtn");

celebrateBtn.addEventListener("click",()=>{

    showPage(6);

    launchConfetti();

    launchFireworks();

});

// ==============================
// Confetti
// ==============================

const confetti = document.getElementById("confetti");

function launchConfetti(){

    for(let i=0;i<120;i++){

        const piece=document.createElement("div");

        piece.style.position="absolute";
        piece.style.left=Math.random()*100+"vw";
        piece.style.top="-20px";
        piece.style.width="8px";
        piece.style.height="14px";
        piece.style.background=`hsl(${Math.random()*360},100%,60%)`;
        piece.style.transform=`rotate(${Math.random()*360}deg)`;
        piece.style.transition="4s linear";

        confetti.appendChild(piece);

        requestAnimationFrame(()=>{

            piece.style.top="110vh";
            piece.style.opacity="0";

        });

        setTimeout(()=>{

            piece.remove();

        },4200);

    }

}

// ==============================
// Fireworks
// ==============================

const fireworks=document.getElementById("fireworks");

function launchFireworks(){

    for(let i=0;i<20;i++){

        setTimeout(()=>{

            const blast=document.createElement("div");

            blast.style.position="absolute";
            blast.style.left=Math.random()*100+"vw";
            blast.style.top=Math.random()*70+"vh";
            blast.style.width="18px";
            blast.style.height="18px";
            blast.style.borderRadius="50%";
            blast.style.background=`hsl(${Math.random()*360},100%,60%)`;
            blast.style.boxShadow="0 0 35px white";
            blast.style.opacity="1";
            blast.style.transition=".8s";

            fireworks.appendChild(blast);

            requestAnimationFrame(()=>{

                blast.style.transform="scale(8)";
                blast.style.opacity="0";

            });

            setTimeout(()=>{

                blast.remove();

            },900);

        },i*250);

    }

}

// ==============================
// Restart
// ==============================

const restartBtn=document.getElementById("restartBtn");

restartBtn.addEventListener("click",()=>{

    document.body.classList.remove("night");

    if(autoPlay){

        clearInterval(autoPlay);

        autoPlay=null;

        autoPlayBtn.textContent="▶ Auto Play";

    }

    currentPhoto=0;

    showPage(0);

});

// ==============================
// Cursor Sparkles
// ==============================

const cursorSparkles=document.getElementById("cursorSparkles");

document.addEventListener("mousemove",(e)=>{

    const dot=document.createElement("div");

    dot.style.position="absolute";
    dot.style.left=e.clientX+"px";
    dot.style.top=e.clientY+"px";
    dot.style.width="6px";
    dot.style.height="6px";
    dot.style.borderRadius="50%";
    dot.style.background="white";
    dot.style.pointerEvents="none";
    dot.style.transition=".8s";

    cursorSparkles.appendChild(dot);

    requestAnimationFrame(()=>{

        dot.style.transform="scale(3)";
        dot.style.opacity="0";

    });

    setTimeout(()=>{

        dot.remove();

    },800);

});
