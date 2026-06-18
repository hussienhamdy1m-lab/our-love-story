const bgMusic = document.getElementById('bg-music');
const CINEMA_SECRET_KEY = 'بحبك اكتر';

window.addEventListener('load', () => {
    // تشغيل الأغنية 22 فوراً عند التحميل
    if (bgMusic) {
        bgMusic.currentTime = 0;
        bgMusic.play().catch(e => console.log("Audio play handle:", e));
    }
    setupCoverflowScroll(); // تشغيل مستشعر التقليب الأفقي
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

// 👑 نظام تتبع التقليب الأفقي للكروت بصباعها على الموبايل 👑
let selectedSceneNum = 1; // الافتراضي أول كارت

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
    // سحب الكارت أوتوماتيك لمنتصف شاشة الموبايل عند الضغط
    element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}

// رسايل الـ 5 فيديوهات كاملة
const cinematicTexts = {
    1: "المشهد الأول: تم توليد حزمة البيانات بنجاح.. اكتب هنا ذكريات وتفاصيل الفيديو الأول بالكامل لشهد، الكلام بيتنّسج بنعومة بالغة ومريحة للنظر.",
    2: "المشهد الثاني: معالجة القطاع الثاني.. اكتب هنا تفاصيل كلام الفيديو التاني ورسالتك الرومانسية اللي من القلب.",
    3: "المشهد الثالث: اكتب هنا كلامك الحلو وعبر عن اللي جواك في الفيديو الثالث يا بطل.. الخط رايق ومريح للعين.",
    4: "المشهد الرابع: هنا بتكتب تفاصيل وذكرى المقابلة أو الفيديو الرابع بالتفصيل الممتع.",
    5: "المشهد الخامس: نهاية مصفوفة الحكايات.. اكتب هنا وعدك الأخير وكلامك الأبدي لشهودتي لآخر العمر."
};

const consoleDashboard = document.getElementById('ai-console-dashboard');
const theaterStage = document.getElementById('cinema-theater-stage');
const subtitleTextField = document.getElementById('subtitle-text-field');
const lightLeak = document.getElementById('ai-light-leak');
const cinemaFrame = document.getElementById('cinema-frame');
const displacementMap = document.getElementById('liquid-displacement');

let activeVideoId = null;
let weaveInterval = null;

// 👑 دالة التوليد بنقلة السيلان المائي 👑
function compileSelectedScene() {
    if (consoleDashboard) {
        consoleDashboard.style.opacity = '0';
    }
    
    setTimeout(() => {
        if (consoleDashboard) consoleDashboard.style.display = 'none';
        if (theaterStage) {
            theaterStage.style.display = 'flex';
            setTimeout(() => theaterStage.style.opacity = '1', 50);
        }
        
        if (lightLeak) { lightLeak.classList.add('active'); setTimeout(() => lightLeak.classList.remove('active'), 500); }
        
        if (cinemaFrame && displacementMap) {
            cinemaFrame.classList.add('liquid-morphing');
            let scaleVal = 0;
            let interval = setInterval(() => {
                scaleVal += 8;
                displacementMap.setAttribute('scale', scaleVal);
                if(scaleVal >= 45) {
                    clearInterval(interval);
                    document.querySelectorAll('.video-slide').forEach(sl => sl.classList.remove('active'));
                    const targetSlide = document.getElementById(`slide-${selectedSceneNum}`);
                    if (targetSlide) targetSlide.classList.add('active');
                    
                    let reverseInterval = setInterval(() => {
                        scaleVal -= 8;
                        displacementMap.setAttribute('scale', scaleVal);
                        if(scaleVal <= 0) {
                            clearInterval(reverseInterval);
                            cinemaFrame.classList.remove('liquid-morphing');
                        }
                    }, 40);
                }
            }, 55);
        } else {
            document.querySelectorAll('.video-slide').forEach(sl => sl.classList.remove('active'));
            const targetSlide = document.getElementById(`slide-${selectedSceneNum}`);
            if (targetSlide) targetSlide.classList.add('active');
        }
        
        weaveSubtitle(selectedSceneNum);
        
        const targetVid = document.getElementById(`vid${selectedSceneNum}`);
        if (targetVid) {
            targetVid.currentTime = 0;
            targetVid.play().catch(e => console.log("Auto-play handling"));
            activeVideoId = `vid${selectedSceneNum}`;
        }
    }, 350);
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
