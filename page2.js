const bgMusic = document.getElementById('bg-music');
const CINEMA_SECRET_KEY = 'بحبك اكتر';

window.addEventListener('load', () => {
    if (bgMusic) {
        bgMusic.currentTime = 0;
        bgMusic.play().catch(e => console.log("Audio play deferred:", e));
    }
    setupCoverflowScroll(); 
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
                consoleDashboard.style.display = 'flex';
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

let selectedSceneNum = 1; 

function setupCoverflowScroll() {
    const container = document.getElementById('coverflow-mesh');
    if (!container) return;
    
    container.addEventListener('scroll', () => {
        const cards = document.querySelectorAll('.coverflow-card');
        let closestCard = null;
        let minDistance = Infinity;
        const containerCenter = container.getBoundingClientRect().left + container.offsetWidth / 2;
        
        cards.forEach(card => {
            const cardCenter = card.getBoundingClientRect().left + card.offsetWidth / 2;
            const distance = Math.abs(containerCenter - cardCenter);
            if (distance < minDistance) {
                minDistance = distance;
                closestCard = card;
            }
        });
        
        if (closestCard) {
            cards.forEach(c => c.classList.remove('active'));
            closestCard.classList.add('active');
            selectedSceneNum = parseInt(closestCard.getAttribute('data-index'));
        }
    });
}

function selectCard(element, num) {
    const cards = document.querySelectorAll('.coverflow-card');
    cards.forEach(c => c.classList.remove('active'));
    element.classList.add('active');
    selectedSceneNum = num;
    element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}

// رسايل الـ 5 فيديوهات بالعامية الرومانسية الدافية
const cinematicTexts = {
    1: "هنا بتكتب كلامك الحلو والذكرى بتاعة أول فيديو ليكم سوا.. الكلام هيظهر كلمة كلمة بنعومة مريحة جداً للعين والخلفية مفيهاش أي كآبة.",
    2: "حكايتنا التانية.. اكتب هنا التفاصيل والضحكة واليوم الجميل اللي كان بينكم في الفيديو التاني.",
    3: "كل يوم معاكي هو أجمل يوم في عمري.. هنا رسايل الفيديو الثالث اللي من قلبك لشهد.",
    4: "التفاصيل الصغيرة دي هي اللي مخلية حياتي منورة.. هنا كلام وتفاصيل الفيديو الرابع.",
    5: "لآخر العمر وجنبك ومعاكي دايماً.. دي الرسالة الأخيرة والوعد الأبدي لشهودتي في الفيديو الخامس."
};

const consoleDashboard = document.getElementById('ai-console-dashboard');
const theaterStage = document.getElementById('cinema-theater-stage');
const subtitleTextField = document.getElementById('subtitle-text-field');
const lightLeak = document.getElementById('ai-light-leak');
const cinemaFrame = document.getElementById('cinema-frame');
const displacementMap = document.getElementById('liquid-displacement');

let activeVideoId = null;
let weaveInterval = null;

function compileSelectedScene() {
    if (consoleDashboard) { consoleDashboard.style.opacity = '0'; }
    
    setTimeout(() => {
        if (consoleDashboard) consoleDashboard.style.display = 'none';
        if (theaterStage) {
            theaterStage.style.display = 'flex';
            setTimeout(() => theaterStage.style.opacity = '1', 50);
        }
        executeLiquidTransition(selectedSceneNum);
    }, 350);
}

// 👑 دالة الانتقال السريع بين الفيديوهات بأزرار "التالي" و "السابق" الفورية 👑
function navigateInlineScene(direction) {
    // حساب رقم الفيديو الجديد بالدوران حول الـ 5 فيديوهات
    selectedSceneNum = selectedSceneNum + direction;
    if (selectedSceneNum > 5) selectedSceneNum = 1;
    if (selectedSceneNum < 1) selectedSceneNum = 5;
    
    // تنفيذ نقلة السيلان والتشغيل الفوري من جوة المسرح
    executeLiquidTransition(selectedSceneNum);
}

// المحرك الموحد لنقلة السيلان والتشغيل
function executeLiquidTransition(sceneNum) {
    if (activeVideoId) {
        const prevVid = document.getElementById(activeVideoId);
        if (prevVid) prevVid.pause();
    }

    if (lightLeak) { lightLeak.classList.add('active'); setTimeout(() => lightLeak.classList.remove('active'), 500); }
    
    if (cinemaFrame && displacementMap) {
        cinemaFrame.classList.add('liquid-morphing');
        let scaleVal = 0;
        let interval = setInterval(() => {
            scaleVal += 10;
            displacementMap.setAttribute('scale', scaleVal);
            if(scaleVal >= 50) {
                clearInterval(interval);
                
                // قلب الفيديو
                document.querySelectorAll('.video-slide').forEach(sl => sl.classList.remove('active'));
                const targetSlide = document.getElementById(`slide-${sceneNum}`);
                if (targetSlide) targetSlide.classList.add('active');
                
                // إرجاع الفلتر لوضعه الطبيعي بنعومة
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
    
    // إعادة نسج التراك النصي الجديد كلمة كلمة
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
            consoleDashboard.style.display = 'flex';
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
