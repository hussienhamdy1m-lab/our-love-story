// --- إعدادات اللعبة الرومانسية والأمان ---
const CORRECT_PASSWORD = 'love'; // تقدر تغير الباسورد من هنا

// 1. دالة التحقق من الباسورد (مع تأثير السينما)
function checkPassword() {
    const passInput = document.getElementById('password-input');
    const errorMessage = document.getElementById('error-message');
    const loginScreen = document.getElementById('login-screen');
    
    if (passInput.value === CORRECT_PASSWORD) {
        // أنيميشن الاختفاء السينمائي (يصغر ويلف ويختفي)
        loginScreen.style.opacity = '0';
        loginScreen.style.transform = 'scale(0.8) translateY(-50px) rotate(-5deg)';
        
        setTimeout(() => {
            loginScreen.style.display = 'none';
            const mainContent = document.getElementById('main-content');
            mainContent.style.display = 'block';
            document.body.style.overflow = 'auto'; // تشغيل السكرول للصور
        }, 800);
    } else {
        // تأثير الهزة لو الباسورد غلط
        errorMessage.style.display = 'block';
        passInput.style.animation = 'none';
        setTimeout(() => {
            passInput.style.animation = 'shake 0.4s ease';
        }, 10);
        passInput.value = '';
    }
}

// تشغيل الدخول بمجرد الضغط على زرار Enter في الكيبورد
document.getElementById('password-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkPassword();
    }
});


// 2. نظام مطر القلوب الاحترافي (High-Performance Engine)
const heartsArray = [];
const emojis = ['❤️', '💖', '✨', '🌸', '💕', '🥰', '🌹'];

function createRainHeart() {
    // نحدد حد أقصى للقلوب على الشاشة عشان الأداء يفضل سريع جداً
    if (heartsArray.length > 40) return;

    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    
    // إعدادات عشوائية انسيابية
    const size = Math.random() * 1.2 + 0.6;
    const speed = Math.random() * 2 + 1.5; // سرعة الهبوط
    
    heart.style.cssText = `
        position: fixed;
        top: -50px;
        left: ${Math.random() * 100}vw;
        font-size: ${size}rem;
        opacity: ${Math.random() * 0.5 + 0.3};
        pointer-events: none;
        z-index: 1;
    `;
    
    document.body.appendChild(heart);
    
    // نحدد خواص الحركة المخصصة للقلب ده
    heartsArray.push({
        element: heart,
        y: -50,
        x: parseFloat(heart.style.left),
        speed: speed,
        swaySpeed: Math.random() * 0.02 + 0.01,
        swayAmplitude: Math.random() * 30 + 10,
        angle: Math.random() * 100
    });
}

// 3. تأثير تتبع الماوس السحري (Mouse Trail)
window.addEventListener('mousemove', function(e) {
    // بنعمل قلب صغير كل ما الماوس يتحرك مسافة معينة
    if (Math.random() > 0.15) return; 
    
    const magicHeart = document.createElement('div');
    magicHeart.innerText = '✨';
    magicHeart.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        font-size: ${Math.random() * 0.8 + 0.5}rem;
        pointer-events: none;
        z-index: 200;
        transition: all 1s ease;
        transform: translate(-50%, -50%);
    `;
    document.body.appendChild(magicHeart);
    
    // تأثير الانفجار والاختفاء الصغير للماوس
    setTimeout(() => {
        magicHeart.style.transform = `translate(-50%, -100%) scale(0)`;
        magicHeart.style.opacity = '0';
    }, 50);
    
    setTimeout(() => { magicHeart.remove(); }, 1000);
});

// لدعم شاشات اللمس والموبايل في تأثير الماوس
window.addEventListener('touchmove', function(e) {
    const touch = e.touches[0];
    const magicHeart = document.createElement('div');
    magicHeart.innerText = '💖';
    magicHeart.style.cssText = `
        position: fixed;
        left: ${touch.clientX}px;
        top: ${touch.clientY}px;
        font-size: 0.8rem;
        pointer-events: none;
        z-index: 200;
        transition: all 0.8s ease;
    `;
    document.body.appendChild(magicHeart);
    setTimeout(() => {
        magicHeart.style.transform = 'translateY(-30px) scale(0)';
        magicHeart.style.opacity = '0';
    }, 50);
    setTimeout(() => { magicHeart.remove(); }, 800);
});


// 4. محرك الأنيميشن الأساسي (الانسيابية المطلقة)
function updateAnimation() {
    // توليد قلب هبوط جديد بنسبة تحكم هادية
    if (Math.random() < 0.04) {
        createRainHeart();
    }
    
    // تحديث حركة كل قلب في المطر
    for (let i = heartsArray.length - 1; i >= 0; i--) {
        const h = heartsArray[i];
        h.y += h.speed; // حركة النزول لأسفل
        h.angle += h.swaySpeed; // زاوية التمايل
        
        // التمايل يمين وشمال بالمعادلة الرياضية الهادية
        const currentX = h.x + Math.sin(h.angle) * h.swayAmplitude / window.innerWidth * 100;
        
        h.element.style.top = h.y + 'px';
        h.element.style.left = currentX + 'vw';
        h.element.style.transform = `rotate(${h.y * 0.2}deg)`; // يلف بالراحة وهو نازل
        
        // لو القلب وصل لآخر الشاشة، نمسحه فوراً
        if (h.y > window.innerHeight) {
            h.element.remove();
            heartsArray.splice(i, 1);
        }
    }
    
    // استدعاء الفريم القادم بنعومة بدون تقطيع
    requestAnimationFrame(updateAnimation);
}

// تشغيل محرك الأنيميشن فوراً عند فتح الصفحة
requestAnimationFrame(updateAnimation);
