const CORRECT_PASSWORD = 'love'; 

// 1. إظهار بوكس الباسورد بعد شاشة الترحيب
function showPasswordBox() {
    const welcomeScreen = document.getElementById('welcome-screen');
    const loginScreen = document.getElementById('login-screen');
    
    welcomeScreen.style.opacity = '0';
    welcomeScreen.style.transform = 'scale(0.8) translateY(-50px)';
    
    setTimeout(() => {
        welcomeScreen.style.display = 'none';
        loginScreen.style.display = 'block';
        
        // تأثير ظهور ناعم لبوكس الباسورد
        setTimeout(() => {
            loginScreen.style.opacity = '1';
        }, 50);
    }, 600);
}

// 2. التحقق من الباسورد وهزة البوكس الصحيحة
function checkPassword() {
    const passInput = document.getElementById('password-input');
    const errorMessage = document.getElementById('error-message');
    const loginScreen = document.getElementById('login-screen');
    
    if (passInput.value === CORRECT_PASSWORD) {
        loginScreen.style.opacity = '0';
        loginScreen.style.transform = 'scale(0.8) translateY(-50px)';
        setTimeout(() => {
            loginScreen.style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
            document.body.style.overflow = 'auto'; 
        }, 800);
    } else {
        errorMessage.style.display = 'block';
        
        // هزة البوكس بالكامل 
        loginScreen.classList.remove('shake-box');
        void loginScreen.offsetWidth; // ريفريش للأنيميشن
        loginScreen.classList.add('shake-box');
        
        passInput.value = '';
    }
}
document.getElementById('password-input').addEventListener('keypress', function(e) { if (e.key === 'Enter') checkPassword(); });


// 3. قاعدة بيانات الذكريات
const memoriesData = {
    envelope: { title: "الجواب الرومانسي ✉️", text: "فتحتِ الجواب؟ ده أول جواب بكتبهولك من كل قلبي.. عشان أقولك إنك أحلى حاجة في حياتي يا شهد.", img: "1.jpg" },
    camera: { title: "لقطة من الكاميرا 📸", text: "الضحكة دي هتفضل محفورة في قلبي طول العمر.", img: "2.png" },
    book: { title: "كتاب حكاياتنا 📖", text: "كل صفحة في قصتنا بتثبتلي إنك أجمل تفاصيلي.", img: "3.jpeg" },
    bottle: { title: "رسالة في زجاجة 🍾", text: "وعد مني إني هفضل جنبك ومعاكي لآخر العمر.", img: "4.jpeg" },
    projector: { title: "الضوء الذهبي الساحر ✨", text: "انتي النور اللي نور حياتي كلها يا أحلى شهد في الدنيا.", img: "5.jpeg" }
};

// 4. تشغيل الأنيميشن للصورة
function openMemory(type, event) {
    const memory = memoriesData[type];
    document.getElementById('memory-title').innerText = memory.title;
    document.getElementById('memory-text').innerText = memory.text;
    document.getElementById('memory-img').src = memory.img;

    const overlay = document.getElementById('memory-modal');
    const card = document.getElementById('modal-card');

    const rect = event.currentTarget.getBoundingClientRect();
    const startX = rect.left + rect.width / 2;
    const startY = rect.top + rect.height / 2;

    let delayBeforeModal = 0; 

    if (type === 'camera') {
        const topShutter = document.getElementById('shutter-top');
        const bottomShutter = document.getElementById('shutter-bottom');
        const flash = document.getElementById('flash-effect');
        topShutter.classList.add('close');
        bottomShutter.classList.add('close');
        setTimeout(() => { 
            flash.style.opacity = '1'; 
            setTimeout(() => { flash.style.opacity = '0'; }, 150);
            topShutter.classList.remove('close');
            bottomShutter.classList.remove('close');
        }, 500); 
        delayBeforeModal = 700;
    } else if (type === 'bottle') {
        const wave = document.getElementById('ocean-wave');
        wave.classList.add('rise');
        setTimeout(() => { wave.classList.remove('rise'); }, 1200);
        delayBeforeModal = 800;
    } else if (type === 'projector') {
        // الإيفكت الذهبي الجديد بديل البروجيكتور المظلم
        const glow = document.getElementById('golden-glow');
        glow.classList.add('active');
        delayBeforeModal = 800;
    } else if (type === 'envelope') {
        createBurst(startX, startY, ['✉️', '💖', '💌', '✨']);
        delayBeforeModal = 600;
    } else if (type === 'book') {
        createBurst(startX, startY, ['✨', '⭐', '💫', '🌟'], true);
        delayBeforeModal = 600;
    }

    setTimeout(() => {
        overlay.classList.add('active');
        card.classList.add('show-anim');
    }, delayBeforeModal);
}

// الانفجارات (جواب وكتاب)
function createBurst(x, y, icons, isGold = false) {
    for (let i = 0; i < 30; i++) {
        const item = document.createElement('div');
        item.classList.add('burst-item');
        item.innerText = icons[Math.floor(Math.random() * icons.length)];
        item.style.left = x + 'px'; item.style.top = y + 'px';
        item.style.fontSize = isGold ? (Math.random() * 2 + 1) + 'rem' : (Math.random() * 2 + 2) + 'rem';
        if(isGold) { item.style.textShadow = '0 0 15px gold'; }
        
        const tx = (Math.random() - 0.5) * 800 + 'px';
        const ty = (Math.random() - 0.5) * 800 + 'px';
        item.style.setProperty('--tx', tx);
        item.style.setProperty('--ty', ty);
        item.style.setProperty('--rot', Math.random() * 360 + 'deg');
        
        document.body.appendChild(item);
        setTimeout(() => { item.remove(); }, 1200);
    }
}

function closeMemory() {
    document.getElementById('memory-modal').classList.remove('active');
    document.getElementById('modal-card').classList.remove('show-anim');
    document.getElementById('golden-glow').classList.remove('active'); // نقفل النور الدهبي
}

// 5. مطر القلوب (بينزل في الطبقة المخصصة ليه عشان ميزقش البوكس)
function createHeartRain() {
    const rainLayer = document.getElementById('rain-layer');
    if (!rainLayer) return;

    const heart = document.createElement('div');
    heart.classList.add('heart-rain');
    heart.innerText = ['❤️', '💖', '✨', '💕', '🥰'][Math.floor(Math.random() * 5)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 1.2 + 1) + 'rem';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    
    rainLayer.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 7000);
}
setInterval(createHeartRain, 400);
