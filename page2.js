const bgMusic = document.getElementById('bg-music');
const CINEMA_SECRET_KEY = 'بحبك اكتر'; // الباسورد التاني السري المظبوط بالملي

window.addEventListener('load', () => {
    const savedTime = sessionStorage.getItem('musicTime');
    if (savedTime && bgMusic) {
        bgMusic.currentTime = parseFloat(savedTime);
        bgMusic.play().catch(e => console.log("Audio play deferred:", e));
    }
    initAiNeuralNodes();
});

setInterval(() => {
    if (bgMusic && !bgMusic.paused) {
        sessionStorage.setItem('musicTime', bgMusic.currentTime);
    }
}, 200);

function goBackHome() {
    if (bgMusic) sessionStorage.setItem('musicTime', bgMusic.currentTime);
    window.location.href = 'index.html';
}

// 🔒 فحص الباسورد الثاني والتحول الذكي للوحة التحكم 🔒
function unlockAiCinema() {
    const passInput = document.getElementById('cinema-password-input');
    const errorMessage = document.getElementById('cinema-error-message');
    const authPortal = document.getElementById('cinema-auth-portal');
    const consoleDashboard = document.getElementById('ai-console-dashboard');
    
    if (!passInput) return;
    
    if (passInput.value.trim() === CINEMA_SECRET_KEY) {
        if (authPortal) {
            authPortal.style.transition = '0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            authPortal.style.opacity = '0';
            authPortal.style.transform = 'scale(0.95) translateY(-15px)';
        }
        setTimeout(() => {
            if (authPortal) authPortal.style.display = 'none';
            if (consoleDashboard) {
                consoleDashboard.style.display = 'block';
                setTimeout(() => { consoleDashboard.style.opacity = '1'; }, 50);
            }
        }, 500);
    } else {
        if (errorMessage) errorMessage.style.display = 'block';
        if (authPortal) {
            authPortal.classList.remove('shake-box-anim');
            void authPortal.offsetWidth; 
            authPortal.classList.add('shake-box-anim');
        }
        passInput.value = '';
    }
}

// ربط Enter للباسورد الثاني
setTimeout(() => {
    const passInput = document.getElementById('cinema-password-input');
    if (passInput) {
        passInput.addEventListener('keypress', function(e) { if (e.key === 'Enter') unlockAiCinema(); });
    }
}, 500);

// 👑 داتا الرسايل والترجمة الـ 5 كاملين بتوعك يا حسين 👑
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

const glitchLayer = document.getElementById('ai-glitch-layer');
const blurLayer = document.getElementById('ai-blur-layer');
const lightLeak = document.getElementById('ai-light-leak');
const cinemaFrame = document.getElementById('cinema-frame');

let activeVideoId = null;
let weaveInterval = null;

// 👑 دالة الـ AI القوية لتوليد المشهد وإشعال النقلات السينمائية 👑
function compileAndPlayScene(num) {
    if (consoleDashboard) {
        consoleDashboard.style.opacity = '0';
        consoleDashboard.style.transform = 'scale(0.96)';
    }
    
    setTimeout(() => {
        if (consoleDashboard) consoleDashboard.style.display = 'none';
        if (theaterStage) {
            theaterStage.style.display = 'flex';
            setTimeout(() => theaterStage.style.opacity = '1', 50);
        }
        
        // قدح التأثيرات الأربعة المتزامنة (هزة + ومضة ضوء + غليتش تفكيك + بلور عصبى)
        if (glitchLayer) { glitchLayer.classList.add('active'); setTimeout(() => glitchLayer.classList.remove('active'), 350); }
        if (blurLayer) { blurLayer.classList.add('active'); setTimeout(() => blurLayer.classList.remove('active'), 400); }
        if (lightLeak) { lightLeak.classList.add('active'); setTimeout(() => lightLeak.classList.remove('active'), 400); }
        if (cinemaFrame) { cinemaFrame.classList.add('ai-jump-active'); setTimeout(() => cinemaFrame.classList.remove('ai-jump-active'), 500); }
        
        // إخفاء الشرائح وعرض الشريحة المطلوبة بالملي
        document.querySelectorAll('.video-slide').forEach(sl => sl.classList.remove('active'));
        const targetSlide = document.getElementById(`slide-${num}`);
        if (targetSlide) targetSlide.classList.add('active');
        
        // نسج الترجمة كلمة كلمة
        weaveSubtitle(num);
        
        // تشغيل الفيديو الجديد
        const targetVid = document.getElementById(`vid${num}`);
        if (targetVid) {
            targetVid.currentTime = 0;
            targetVid.play().catch(e => console.log("Auto-play deferred"));
            activeVideoId = `vid${num}`;
        }
    }, 350);
}

// العودة للوحة الـ AI
function returnToConsole() {
    if (activeVideoId) {
        const currentVid = document.getElementById(activeVideoId);
        if (currentVid) currentVid.pause();
    }
    if (theaterStage) theaterStage.style.opacity = '0';
    setTimeout(() => {
        if (theaterStage) theaterStage.style.display = 'none';
        if (consoleDashboard) {
            consoleDashboard.style.display = 'block';
            setTimeout(() => { consoleDashboard.style.opacity = '1'; consoleDashboard.style.transform = 'scale(1)'; }, 50);
        }
    }, 350);
}

// دالة نسج الكلام كلمة كلمة بنعومة متناهية
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
            wordSpan.style.transition = 'opacity 0.2s ease';
            subtitleTextField.appendChild(wordSpan);
            
            setTimeout(() => { wordSpan.style.opacity = '1'; }, 20);
            currentWordIndex++;
        } else {
            clearInterval(weaveInterval);
        }
    }, 120); 
}

// توليد نقاط الـ AI العائمة في الخلفية بنعومة فائقة
function initAiNeuralNodes() {
    const container = document.getElementById('ai-neural-canvas');
    if (!container) return;
    for (let i = 0; i < 15; i++) {
        const node = document.createElement('div');
        node.classList.add('neural-point');
        const size = Math.random() * 3 + 2;
        node.style.width = size + 'px'; node.style.height = size + 'px';
        node.style.left = Math.random() * 100 + 'vw';
        node.style.animationDuration = (Math.random() * 8 + 8) + 's';
        node.style.animationDelay = (Math.random() * 5) + 's';
        container.appendChild(node);
    }
}
