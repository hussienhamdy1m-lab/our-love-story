const bgMusic = document.getElementById('bg-music');

window.addEventListener('load', () => {
    const savedTime = sessionStorage.getItem('musicTime');
    if (savedTime && bgMusic) {
        bgMusic.currentTime = parseFloat(savedTime);
        bgMusic.play().catch(e => console.log("Audio play deferred:", e));
    }
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

// 👑 اكتب الرسايل والترجمة بتاعت الـ 5 فيديوهات هنا براحتك 👑
const cinematicTexts = {
    1: "المشهد الأول: تم توليد حزمة البيانات بنجاح.. اكتب هنا ذكريات وتفاصيل الفيديو الأول بالكامل لشهد، الكلام بيتنّسج بنعومة بالغة ومريحة للنظر.",
    2: "المشهد الثاني: معالجة القطاع الثاني.. اكتب هنا تفاصيل كلام الفيديو التاني ورسالتك الرومانسية اللي من القلب.",
    3: "المشهد الثالث: اكتب هنا كلامك الحلو وعبر عن اللي جواك في الفيديو الثالث يا بطل.. الخط رايق ومريح للعين.",
    4: "المشهد الرابع: هنا بتكتب تفاصيل وذكرى المقابلة أو الفيديو الرابع بالتفصيل الممتع.",
    5: "المشهد الخامس: نهاية مصفوفة الحكايات.. اكتب هنا وعدك الأخير وكلامك الأبدي لشهودتي لآخر العمر."
};

const consoleStage = document.getElementById('ai-console');
const theaterStage = document.getElementById('cinema-theater');
const subtitleText = document.getElementById('subtitle-text');

const glitchOverlay = document.getElementById('ai-glitch');
const blurOverlay = document.getElementById('ai-blur');
const leakOverlay = document.getElementById('light-leak');
const cinemaFrame = document.getElementById('cinema-frame');

let activeVideoId = null;
let weaveInterval = null;

// 👑 دالة تفعيل السيستم وتشغيل النقلات الاحترافية المدمجة بالـ AI 👑
function generateAiMemory(num) {
    if (consoleStage) {
        consoleStage.style.opacity = '0';
        consoleStage.style.transform = 'scale(0.96)';
    }
    
    setTimeout(() => {
        if (consoleStage) consoleStage.style.display = 'none';
        if (theaterStage) {
            theaterStage.style.display = 'flex';
            setTimeout(() => theaterStage.style.opacity = '1', 50);
        }
        
        // قدح شرارة النقلات السينمائية المتقاطعة (هزة + ومضة + غليتش + بلور)
        if (glitchOverlay) { glitchOverlay.classList.add('active'); setTimeout(() => glitchOverlay.classList.remove('active'), 300); }
        if (blurOverlay) { blurOverlay.classList.add('active'); setTimeout(() => blurOverlay.classList.remove('active'), 400); }
        if (leakOverlay) { leakOverlay.classList.add('active'); setTimeout(() => leakOverlay.classList.remove('active'), 400); }
        if (cinemaFrame) { cinemaFrame.classList.add('ai-impact'); setTimeout(() => cinemaFrame.classList.remove('ai-impact'), 500); }
        
        // إخفاء الفيديوهات السابقة وعرض المطلوب
        document.querySelectorAll('.video-slide').forEach(sl => sl.classList.remove('active'));
        const targetSlide = document.getElementById(`slide-${num}`);
        if (targetSlide) targetSlide.classList.add('active');
        
        // تشغيل نسج الترجمة كلمة كلمة
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

// دالة العودة للكونسول
function returnToConsole() {
    if (activeVideoId) {
        const currentVid = document.getElementById(activeVideoId);
        if (currentVid) currentVid.pause();
    }
    
    if (theaterStage) theaterStage.style.opacity = '0';
    
    setTimeout(() => {
        if (theaterStage) theaterStage.style.display = 'none';
        if (consoleStage) {
            consoleStage.style.display = 'block';
            setTimeout(() => { consoleStage.style.opacity = '1'; consoleStage.style.transform = 'scale(1)'; }, 50);
        }
    }, 350);
}

// دالة نسج النص الذكية المريحة للعين
function weaveSubtitle(num) {
    if (!subtitleText) return;
    clearInterval(weaveInterval);
    subtitleText.innerHTML = '';
    
    const textToShow = cinematicTexts[num] || "";
    const words = textToShow.split(' ');
    let currentWordIndex = 0;
    
    weaveInterval = setInterval(() => {
        if (currentWordIndex < words.length) {
            const wordSpan = document.createElement('span');
            wordSpan.innerText = words[currentWordIndex] + ' ';
            wordSpan.style.opacity = '0';
            wordSpan.style.transition = 'opacity 0.2s ease';
            subtitleText.appendChild(wordSpan);
            
            setTimeout(() => { wordSpan.style.opacity = '1'; }, 20);
            currentWordIndex++;
        } else {
            clearInterval(weaveInterval);
        }
    }, 120); 
}
