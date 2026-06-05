// غير الباسورد من هنا لأي حاجة إنت عايزها
const CORRECT_PASSWORD = 'وحشتيني'; 

function checkPassword() {
    const passInput = document.getElementById('password-input');
    const errorMessage = document.getElementById('error-message');
    const loginScreen = document.getElementById('login-screen');
    
    if (passInput.value === CORRECT_PASSWORD) {
        // تأثير اختفاء البوكس السينمائي
        loginScreen.style.opacity = '0';
        loginScreen.style.transform = 'scale(0.8) translateY(-50px)';
        
        setTimeout(() => {
            loginScreen.style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
            document.body.style.overflow = 'auto'; // تشغيل السكرول
            
            // إخفاء دوائر الإضاءة عشان متأثرش على الصور
            const bokehs = document.querySelectorAll('.bokeh');
            bokehs.forEach(b => b.style.display = 'none');
        }, 800);
    } else {
        errorMessage.style.display = 'block';
        passInput.style.animation = 'none';
        setTimeout(() => {
            passInput.style.animation = 'shake 0.4s ease';
        }, 10);
        passInput.value = '';
    }
}

// تشغيل الدخول بـ Enter
document.getElementById('password-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkPassword();
    }
});

// دالة مطر القلوب المكثف
function createHeartRain() {
    const heart = document.createElement('div');
    heart.classList.add('heart-rain');
    
    const emojis = ['❤️', '💖', '✨', '💕', '🥰', '🤍', '🌸'];
    heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    
    // مكان عشوائي بالعرض
    heart.style.left = Math.random() * 100 + 'vw';
    
    // أحجام واضحة ومختلفة (من 1.5 لـ 3.5 rem عشان تبان بقوة)
    const size = Math.random() * 2 + 1.5; 
    heart.style.fontSize = size + 'rem';
    
    // سرعة السقوط (بين 3 و 6 ثواني)
    const duration = Math.random() * 3 + 3; 
    heart.style.animationDuration = duration + 's';
    
    document.body.appendChild(heart);
    
    // مسح القلب بعد ما ينزل عشان المتصفح ميهنجش
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// تكرار إنزال القلوب كل 200 مللي ثانية (عشان يعمل مطر حقيقي وكثيف)
setInterval(createHeartRain, 200);
