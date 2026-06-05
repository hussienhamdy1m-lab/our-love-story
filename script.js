function checkPassword() {
    const pass = document.getElementById('password-input').value;
    const errorMessage = document.getElementById('error-message');
    const loginScreen = document.getElementById('login-screen');
    
    // كلمة السر الافتراضية هنا هي 'love' (تقدر تعدلها لأي كلمة تانية)
    if (pass === 'love') {
        // أنيميشن الاختفاء السينمائي للبوكس الزجاجي
        loginScreen.style.opacity = '0';
        loginScreen.style.transform = 'scale(0.8) translateY(-30px)';
        
        setTimeout(() => {
            loginScreen.style.display = 'none';
            // إظهار المحتوى الرئيسي
            const mainContent = document.getElementById('main-content');
            mainContent.style.display = 'block';
            // السماح بالسكرول بعد الدخول لرؤية الصور والذكريات
            document.body.style.overflow = 'auto';
        }, 800);
        
    } else {
        // إظهار رسالة الخطأ ومسح الخانة لإعادة المحاولة
        errorMessage.style.display = 'block';
        document.getElementById('password-input').value = '';
    }
}

/* دالة إنشاء مطر القلوب الانسيابي والرومانسي */
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // تشكيلة إيموجيز مريحة للعين ومتناسقة
    const emojis = ['❤️', '💖', '✨', '🌸', '💕', '🥰', '🌹'];
    heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    
    // مكان الظهور العشوائي أفقياً
    heart.style.left = Math.random() * 100 + 'vw';
    
    // أحجام عشوائية هادئة (تأثير ثلاثي الأبعاد)
    const size = Math.random() * 1.2 + 0.6; 
    heart.style.fontSize = `${size}rem`;
    
    // شفافية عشوائية لعمل عمق في الخلفية
    const opacity = Math.random() * 0.5 + 0.3; 
    
    // سرعة هادئة وانسيابية (بين 4 لـ 7 ثواني للنزول)
    const duration = Math.random() * 3 + 4;
    heart.style.animationDuration = `${duration}s`;
    
    // زوايا وقيم التمايل يمين وشمال أثناء السقوط
    const sway1 = (Math.random() * 40 - 20) + 'px'; 
    const sway2 = (Math.random() * 80 - 40) + 'px'; 
    
    // تمرير القيم العشوائية لملف الـ CSS
    heart.style.setProperty('--sway-1', sway1);
    heart.style.setProperty('--sway-2', sway2);
    heart.style.setProperty('--opacity', opacity);

    document.body.appendChild(heart);

    // حذف عنصر القلب بعد انتهائه تماماً حتى لا يثقل المتصفح
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// جعل المطر يهبط بهدوء مريح (قلب جديد كل 500 مللي ثانية)
setInterval(createHeart, 500);
