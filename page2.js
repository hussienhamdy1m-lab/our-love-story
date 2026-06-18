const bgMusic = document.getElementById('bg-music');
const CINEMA_SECRET_KEY = 'بحبك اكتر';

window.addEventListener('load', () => {
    if (bgMusic) {
        bgMusic.currentTime = 0;
        bgMusic.play().catch(e => console.log("Audio play deferred:", e));
    }
});

function goBackHome() {
    window.location.href = 'index.html';
}

function triggerCorePulse() {
    const introScreen = document.getElementById('ai-quantum-intro');
    const authPortal = document.getElementById('cinema-auth-portal');
    const coreNucleus = document.querySelector('.core-inner-nucleus');
    
    if (coreNucleus) {
        coreNucleus.style.transform = 'scale(60)';
        coreNucleus.style.background = '#ff4a75';
        coreNucleus.style.opacity = '0';
    }
    
    setTimeout(() => {
        if (introScreen) {
            introScreen.classList.add('core-shattered');
            setTimeout(() => {
                introScreen.style.display = 'none';
                if (authPortal) {
                    authPortal.style.display = 'block';
                    setTimeout(() => { authPortal.style.opacity = '1'; }, 50);
                }
            }, 800);
        }
    }, 300);
}

function unlockAiCinema() {
    const passInput = document.getElementById('cinema-password-input');
    const errorMessage = document.getElementById('cinema-error-message');
    const authPortal = document.getElementById('cinema-auth-portal');
    const consoleDashboard = document.getElementById('ai-console-dashboard');
    
    if (!passInput) return;
    
    if (passInput.value.trim() === CINEMA_SECRET_KEY) {
        if (authPortal) {
            authPortal.style.transition = '0.5s ease';
            authPortal.style.opacity = '0';
            authPortal.style.transform = 'scale(0.92) translateY(-15px)';
        }
        setTimeout(() => {
            if (authPortal) authPortal.style.display = 'none';
            if (consoleDashboard) {
                consoleDashboard.style.display = 'block';
                setTimeout(() => { consoleDashboard.style.opacity = '1'; }, 50);
            }
        }, 500);
    } else {
        if (errorMessage) { errorMessage.style.display = 'block'; }
        if (authPortal) {
            authPortal.classList.remove('shake-box-anim');
            void authPortal.offsetWidth; 
            authPortal.classList.add('shake-box-anim');
        }
        passInput.value = '';
    }
}

setTimeout(() => {
    const passInput = document.getElementById('cinema-password-input');
    if (passInput) {
        passInput.addEventListener('keypress', function(e) { if (e.key === 'Enter') unlockAiCinema(); });
    }
}, 500);

// 👑 الرسايل الـ 5 كاملة بالعامية الرومانسية الدافية 👑
const cinematicTexts = {
    1: "هنا بتكتب كلامك الحلو والذكرى بتاعة أول فيديو ليكم سوا.. الكلام هيظهر كلمة كلمة بنعومة مريحة جداً للعين والخلفية مفيهاش أي كآبة.",
    2: "حكايتنا التانية.. اكتب هنا التفاصيل والضحكة واليوم الجميل اللي كان بينكم في الفيديو التاني.",
    3: "كل يوم معاكي هو أجمل يوم في عمري.. هنا رسايل الفيديو الثالث اللي من قلبك لشهد.",
    4: "التفاصيل الصغيرة دي هي اللي مخلية حياتي منورة.. هنا كلام وتفاصيل الفيديو الرابع.",
    5: "لآخر العمر وجنبك ومعاكي دايماً.. دي الرسالة الأخيرة والوعد الأبدي لشهودتي في الفيديو الخامس."
};

let currentSceneNum = 1; 
const consoleDashboard = document.getElementById('ai-console-dashboard');
const theaterStage = document.getElementById('cinema-theater-stage');
const subtitleTextField = document.getElementById('subtitle-text-field');
const cinemaFrame = document.getElementById('cinema-frame');
const displacementMap = document.getElementById('liquid-displacement');

let activeVideoId = null;
let weaveInterval = null;

// تشغيل المشهد مباشرة عند اللمس من الشبكة العنقودية
function playSceneFromGrid(num) {
    currentSceneNum = num;
    if (consoleDashboard) { consoleDashboard.style.opacity = '0'; }
    
    setTimeout(() => {
        if (consoleDashboard) consoleDashboard.style.display = 'none';
        if (theaterStage) {
            theaterStage.style.display = 'flex';
            setTimeout(() => theaterStage.style.opacity = '1', 50);
        }
        executeLiquidTransition(currentSceneNum);
    }, 350);
}

// دالة الانتقال السريع بأزرار "اللي بعده" و "اللي قبله" الفورية
function navigateInlineScene(direction) {
    currentSceneNum = currentSceneNum + direction;
    if (currentSceneNum > 5) currentSceneNum = 1;
    if (currentSceneNum < 1) currentSceneNum = 5;
    
    executeLiquidTransition(currentSceneNum);
}

// محرك نقلة السيلان المائي ومزامنة الفيديو والترجمة المنسوجة
function executeLiquidTransition(sceneNum) {
    if (activeVideoId) {
        const prevVid = document.getElementById(activeVideoId);
        if (prevVid) prevVid.pause();
    }
    
    if (cinemaFrame && displacementMap) {
        cinemaFrame.classList.add('liquid-morphing');
        let scaleVal = 0;
        let interval = setInterval(() => {
            scaleVal += 10;
            displacementMap.setAttribute('scale', scaleVal);
            if(scaleVal >= 50) {
                clearInterval(interval);
                
                document.querySelectorAll('.video-slide').forEach(sl => sl.classList.remove('active'));
                const targetSlide = document.getElementById(`slide-${sceneNum}`);
                if (targetSlide) targetSlide.classList.add('active');
                
                let reverseInterval = setInterval(() => {
                    scaleVal -= 10;
                    displacementMap.setAttribute('scale', scaleVal);
                    if(scaleVal <= 0) {
                        clearInterval(reverseInterval);
                        cinemaFrame.classList.remove('liquid-morphing');
                    }
                }, 35);
            }
        }, 40);
    } else {
        document.querySelectorAll('.video-slide').forEach(sl => sl.classList.remove('active'));
        const targetSlide = document.getElementById(`slide-${sceneNum}`);
        if (targetSlide) targetSlide.classList.add('active');
    }
    
    weaveSubtitle(sceneNum);
    
    const targetVid = document.getElementById(`vid${sceneNum}`);
    if (targetVid) {
        targetVid.currentTime = 0;
        targetVid.play().catch(e => console.log("Auto-play handling"));
        activeVideoId = `vid${sceneNum}`;
    }
}

function returnToAiConsole() {
    if (activeVideoId) {
        const currentVid = document.getElementById(activeVideoId);
        if (currentVid) currentVid.pause();
    }
    if (theaterStage) theaterStage.style.opacity = '0';
    setTimeout(() => {
        if (theaterStage) theaterStage.style.display = 'none';
        if (consoleDashboard) {
            consoleDashboard.style.display = 'block';
            setTimeout(() => { consoleDashboard.style.opacity = '1'; }, 50);
        }
    }, 350);
}

function weaveSubtitle(num) {
    if (!subtitleTextField) return;
    clearInterval(weaveInterval);
    subtitleTextField.innerHTML = '';
    
    const textToShow = cinematicTexts[num] || "";
    const words = textToShow.split(' ');
    let currentWordIndex = 0;
    
    weaveInterval = setInterval(() => {
        if (currentWordIndex < words.length) {
            const wordSpan = document.createElement('span');
            wordSpan.innerText = words[currentWordIndex] + ' ';
            wordSpan.style.opacity = '0';
            wordSpan.style.transition = 'opacity 0.25s ease';
            subtitleTextField.appendChild(wordSpan);
            
            setTimeout(() => { wordSpan.style.opacity = '1'; }, 20);
            currentWordIndex++;
        } else {
            clearInterval(weaveInterval);
        }
    }, 130); 
}
