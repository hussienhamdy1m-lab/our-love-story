const bgMusic = document.getElementById('bg-music');

// استرجاع الأغنية وتكملتها تلقائياً
window.addEventListener('load', () => {
    const savedTime = sessionStorage.getItem('musicTime');
    if (savedTime && bgMusic) {
        bgMusic.currentTime = parseFloat(savedTime);
        bgMusic.play().catch(e => console.log("Audio play deferred:", e));
    }
});

// حفظ ثواني الموسيقى
setInterval(() => {
    if (bgMusic && !bgMusic.paused) {
        sessionStorage.setItem('musicTime', bgMusic.currentTime);
    }
}, 200);

function goBackHome() {
    if (bgMusic) sessionStorage.setItem('musicTime', bgMusic.currentTime);
    window.location.href = 'index.html';
}

// 👑 دالة فتح الجواب وطيران القلوب وظهور شاشة العرض 👑
function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    const envelopeStage = document.getElementById('envelope-stage');
    const cinemaStage = document.getElementById('cinema-stage');
    
    if (envelope.classList.contains('open')) return;
    
    // 1. تفعيل حركات فتح الجواب بالـ CSS
    envelope.classList.add('open');
    
    // 2. تفجير قلوب طايرة من نص الشاشة لفوق
    for (let i = 0; i < 25; i++) {
        setTimeout(createFlyingHeart, i * 40);
    }
    
    // 3. إخفاء الجواب بنعومة بعد ما يتفتح.. وظهور شاشة السينما فجأة بالأنيميشن الفخم
    setTimeout(() => {
        envelopeStage.style.opacity = '0';
        envelopeStage.style.transform = 'scale(0.5)';
        
        setTimeout(() => {
            envelopeStage.style.display = 'none';
            
            // إظهار مسرح السينما
            cinemaStage.style.display = 'flex';
            setTimeout(() => {
                cinemaStage.style.opacity = '1';
                // لو حابب الفيديو الأول يشتغل لوحده أول ما السينما تفتح فك السطر ده:
                // document.getElementById('main-video').play();
            }, 50);
            
        }, 800);
    }, 1800); // الجواب بيفضل مفتوح ثانيتين والورقة طالعة قبل ما السينما تفتح
}

// دالة تخليق القلوب الطايرة العشوائية
function createFlyingHeart() {
    const heart = document.createElement('div');
    heart.classList.add('flying-heart');
    heart.innerText = ['❤️', '💖', '💕', '🥰', '✨'][Math.floor(Math.random() * 5)];
    heart.style.left = (window.innerWidth / 2 + (Math.random() - 0.5) * 150) + 'px';
    heart.style.top = (window.innerHeight / 2) + 'px';
    heart.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
    heart.style.setProperty('--r', (Math.random() - 0.5) * 360 + 'deg');
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 1500);
}
