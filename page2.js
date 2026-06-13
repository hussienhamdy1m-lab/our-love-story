const bgMusic = document.getElementById('bg-music');

// مزامنة أغنية الخلفية
window.addEventListener('load', () => {
    const savedTime = sessionStorage.getItem('musicTime');
    if (savedTime && bgMusic) {
        bgMusic.currentTime = parseFloat(savedTime);
        bgMusic.play().catch(e => console.log("Audio play deferred:", e));
    }
    // تحديث الترجمة لأول فيديو
    weaveSubtitle(0);
    // تشغيل خلفية الـ AI العصبية
    initNeuralBackground();
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

// 👑 نصوص الترجمة السينمائية (اكتب الكلام الكتير بتاعك هنا يا بطل) 👑
const cinematicTexts = [
    "المشهد الأول: اكتب هنا الذكرى الكتيرة والرسالة الرومانسية الرايقة بتاعة الفيديو الأول.. الكلام هيظهر كلمة بكلمة كأنه بيتنّسج، مريح جداً للنظر.",
    "المشهد الثاني: اكتب هنا كلام الفيديو التاني وتفاصيله الممتعة.. التصميم وقور وهادي وبيجبر العين تركز في ملامحكم في الفيديو وبس.",
    "المشهد الثالث: اكتب هنا وعدك وكلامك الحلو للفيديو الثالث، يا رب نفضل سوا لآخر العمر."
];

let currentSlide = 0;
const slides = document.querySelectorAll('.video-slide');
const videos = document.querySelectorAll('.video-slide video');
const subtitleText = document.getElementById('subtitle-text');
const tvStatic = document.getElementById('tv-static');

function changeScene(direction) {
    // إيقاف الفيديوهات الحالية
    videos.forEach(vid => vid.pause());

    // حجب النص القديم لعمل تأثير النسج الجديد
    if (subtitleText) subtitleText.classList.add('text-hidden');
    // تشغيل الوشيش السريع
    if (tvStatic) tvStatic.classList.add('show');

    setTimeout(() => {
        slides[currentSlide].classList.remove('active');
        
        // حساب المشهد الجديد
        currentSlide = (currentSlide + direction + slides.length) % slides.length;
        
        slides[currentSlide].classList.add('active');
        
        // تحديث النص بنسج جديد
        weaveSubtitle(currentSlide);
        
        if (tvStatic) tvStatic.classList.remove('show'); // إيقاف الوشيش

        // تشغيل الفيديو الجديد تلقائياً
        const activeVid = videos[currentSlide];
        if (activeVid) {
            activeVid.currentTime = 0;
            activeVid.play().catch(e => console.log("Auto-play click required"));
        }
    }, 400); // تأثير وشيش سريع
}

// 👑 دالة الـ AI الخاصة لنسج النص كلمة بكلمة بنعومة 👑
function weaveSubtitle(index) {
    if (!subtitleText) return;
    
    // إزالة النص المخفي
    subtitleText.classList.remove('text-hidden');
    subtitleText.innerHTML = ''; // تفريغ الصندوق
    
    const words = cinematicTexts[index].split(' ');
    let currentWordIndex = 0;
    
    const weaveInterval = setInterval(() => {
        if (currentWordIndex < words.length) {
            const wordSpan = document.createElement('span');
            wordSpan.innerText = words[currentWordIndex] + ' ';
            wordSpan.style.opacity = '0';
            wordSpan.style.transition = 'opacity 0.3s ease';
            
            subtitleText.appendChild(wordSpan);
            
            // جعل الكلمة تظهر بنعومة (fade-in)
            setTimeout(() => {
                wordSpan.style.opacity = '1';
            }, 50);
            
            currentWordIndex++;
        } else {
            clearInterval(weaveInterval); // نهاية النسج
        }
    }, 150); // سرعة النسج (150 مللي ثانية بين كل كلمة)
}

// تخليق تأثير الخلفية العصبية العائمة (Procedural Art)
function initNeuralBackground() {
    const container = document.getElementById('ai-neural-bg');
    if (!container) return;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('neural-node');
        
        const size = Math.random() * 4 + 2; // جزيئات صغيرة غير مزعجة
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = (Math.random() * 8 + 8) + 's'; // حركة بطيئة جداً
        particle.style.animationDelay = (Math.random() * 5) + 's';
        
        container.appendChild(particle);
    }
}
