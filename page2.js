const bgMusic = document.getElementById('bg-music');

window.addEventListener('load', () => {
    const savedTime = sessionStorage.getItem('musicTime');
    if (savedTime && bgMusic) {
        bgMusic.currentTime = parseFloat(savedTime);
        bgMusic.play().catch(e => console.log("Audio play deferred:", e));
    }
    initMatrixBackground();
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

// 👑 اكتب كابشن ورسائل الفيديوهات هنا يا بطل 👑
const cinematicTexts = [
    "المشهد الأول: تم توليد حزمة البيانات بنجاح.. اكتب هنا ذكريات الفيديو الأول بالكامل، الكلام بيتنّسج بنعومة مريحة جداً للعين.",
    "المشهد الثاني: معالجة القطاع الثاني.. اكتب هنا تفاصيل كلام الفيديو التاني ورسالتك لشهد.",
    "المشهد الثالث: نهاية مصفوفة الحكايات.. اكتب هنا وعدك الأخير وكلامك اللي من القلب يا حسين."
];

const consoleStage = document.getElementById('ai-console');
const theaterStage = document.getElementById('cinema-theater');
const slides = document.querySelectorAll('.video-slide');
const videos = document.querySelectorAll('.video-slide video');
const subtitleText = document.getElementById('subtitle-text');

const glitchOverlay = document.getElementById('ai-glitch');
const blurOverlay = document.getElementById('ai-blur');
const leakOverlay = document.getElementById('light-leak');
const cinemaFrame = document.getElementById('cinema-frame');

// 👑 دالة توليد الـ AI وتشغيل نقلات المونتاج الذكية 👑
function generateAiMemory(index) {
    // 1. إخفاء لوحة التحكم وظهور مسرح العرض بالأنيميشن
    if (consoleStage) { consoleStage.style.opacity = '0'; consoleStage.style.transform = 'scale(0.9)'; }
    
    setTimeout(() => {
        if (consoleStage) consoleStage.style.display = 'none';
        if (theaterStage) { theaterStage.style.display = 'flex'; setTimeout(() => theaterStage.style.opacity = '1', 50); }
        
        // 2. تفعيل الصدمة الضوئية والغليتش الـ AI
        if (glitchOverlay) { glitchOverlay.classList.add('active'); setTimeout(() => glitchOverlay.classList.remove('active'), 300); }
        if (blurOverlay) { blurOverlay.classList.add('active'); setTimeout(() => blurOverlay.classList.remove('active'), 400); }
        if (leakOverlay) { leakOverlay.classList.add('active'); setTimeout(() => leakOverlay.classList.remove('active'), 500); }
        if (cinemaFrame) { cinemaFrame.classList.add('ai-impact'); setTimeout(() => cinemaFrame.classList.remove('ai-impact'), 500); }
        
        // 3. عرض شريحة الفيديو المطلوبة
        slides.forEach(sl => sl.classList.remove('active'));
        const targetSlide = document.getElementById(`slide-${index}`);
        if (targetSlide) targetSlide.classList.add('active');
        
        // 4. نسج الترجمة كلمة كلمة تلقائياً
        weaveSubtitle(index);
        
        // 5. تشغيل الفيديو المختار
        const targetVid = document.getElementById(`vid${index}`);
        if (targetVid) {
            targetVid.currentTime = 0;
            targetVid.play().catch(e => console.log("Auto-play trigger required"));
        }
    }, 400);
}

// العودة للوحة الـ AI لاختيار فيديو تاني
function returnToConsole() {
    videos.forEach(vid => vid.pause());
    if (theaterStage) { theaterStage.style.opacity = '0'; }
    
    setTimeout(() => {
        if (theaterStage) theaterStage.style.display = 'none';
        if (consoleStage) {
            consoleStage.style.display = 'block';
            setTimeout(() => { consoleStage.style.opacity = '1'; consoleStage.style.transform = 'scale(1)'; }, 50);
        }
    }, 400);
}

// دالة نسج الكلام كلمة كلمة
function weaveSubtitle(index) {
    if (!subtitleText) return;
    subtitleText.innerHTML = '';
    
    const words = cinematicTexts[index].split(' ');
    let currentWordIndex = 0;
    
    const weaveInterval = setInterval(() => {
        if (currentWordIndex < words.length) {
            const wordSpan = document.createElement('span');
            wordSpan.innerText = words[currentWordIndex] + ' ';
            wordSpan.style.opacity = '0';
            wordSpan.style.transition = 'opacity 0.2s ease';
            subtitleText.appendChild(wordSpan);
            
            setTimeout(() => { wordSpan.style.opacity = '1'; }, 30);
            currentWordIndex++;
        } else {
            clearInterval(weaveInterval);
        }
    }, 120); 
}

// مصفوفة الخطوط الخلفية الهادئة جداً (Matrix Rain style)
function initMatrixBackground() {
    const container = document.getElementById('ai-matrix-bg');
    if (!container) return;
    for (let i = 0; i < 12; i++) {
        const line = document.createElement('div');
        line.classList.add('matrix-line');
        line.style.left = Math.random() * 100 + 'vw';
        line.style.animationDuration = (Math.random() * 3 + 3) + 's';
        line.style.animationDelay = (Math.random() * 4) + 's';
        container.appendChild(line);
    }
}
