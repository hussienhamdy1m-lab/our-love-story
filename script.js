const CORRECT_PASSWORD = 'بحبك'; 

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
        passInput.style.animation = 'none';
        setTimeout(() => { passInput.style.animation = 'shake 0.4s ease'; }, 10);
        passInput.value = '';
    }
}
document.getElementById('password-input').addEventListener('keypress', function(e) { if (e.key === 'Enter') checkPassword(); });


const memoriesData = {
    envelope: { title: "الجواب الرومانسي ✉️", text: "فتحتِ الجواب؟ ده أول جواب بكتبهولك من كل قلبي.. عشان أقولك إنك أحلى حاجة في حياتي.", img: "1.jpg" },
    camera: { title: "لقطة من الكاميرا 📸", text: "الضحكة دي هتفضل محفورة في قلبي طول العمر.", img: "2.png" },
    book: { title: "كتاب حكاياتنا 📖", text: "كل صفحة في قصتنا بتثبتلي إنك أجمل تفاصيلي.", img: "3.jpeg" },
    bottle: { title: "رسالة في زجاجة 🍾", text: "وعد مني إني هفضل جنبك ومعاكي لآخر العمر.", img: "4.jpeg" },
    projector: { title: "شريط السينما 📹", text: "لو حياتي فيلم سينما، فإنتي أحلى مشهد فيه.", img: "5.jpeg" }
};

// تشغيل الأنيميشن المرعب قبل ظهور الصورة
function openMemory(type, event) {
    const memory = memoriesData[type];
    document.getElementById('memory-title').innerText = memory.title;
    document.getElementById('memory-text').innerText = memory.text;
    document.getElementById('memory-img').src = memory.img;

    const overlay = document.getElementById('memory-modal');
    const card = document.getElementById('modal-card');

    // إحداثيات الضغطة عشان نطلع منها الانفجارات
    const rect = event.currentTarget.getBoundingClientRect();
    const startX = rect.left + rect.width / 2;
    const startY = rect.top + rect.height / 2;

    let delayBeforeModal = 0; // وقت الانتظار قبل ظهور الصورة

    if (type === 'camera') {
        // 1. شتر الكاميرا بيقفل ويضرب فلاش
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
        }, 500); // الفلاش بيضرب والشتر بيفتح
        
        delayBeforeModal = 700;

    } else if (type === 'bottle') {
        // 2. موجة البحر بتطلع تغطي الشاشة
        const wave = document.getElementById('ocean-wave');
        wave.classList.add('rise');
        setTimeout(() => { wave.classList.remove('rise'); }, 1200);
        delayBeforeModal = 800;

    } else if (type === 'projector') {
        // 3. الشاشة تضلم وشعاع البروجيكتور يشتغل
        const cinema = document.getElementById('cinematic-overlay');
        cinema.classList.add('darken');
        delayBeforeModal = 1000;

    } else if (type === 'envelope') {
        // 4. انفجار جوابات وقلوب من مكان الضغطة
        createBurst(startX, startY, ['✉️', '💖', '💌', '✨']);
        delayBeforeModal = 600;

    } else if (type === 'book') {
        // 5. انفجار سحر ودهب من الكتاب
        createBurst(startX, startY, ['✨', '⭐', '💫', '🌟'], true);
        delayBeforeModal = 600;
    }

    // إظهار الصورة بعد انتهاء الخدعة البصرية
    setTimeout(() => {
        overlay.classList.add('active');
        card.classList.add('show-anim');
    }, delayBeforeModal);
}

// مولد الانفجارات (الجواب والكتاب)
function createBurst(x, y, icons, isGold = false) {
    for (let i = 0; i < 30; i++) {
        const item = document.createElement('div');
        item.classList.add('burst-item');
        item.innerText = icons[Math.floor(Math.random() * icons.length)];
        
        item.style.left = x + 'px';
        item.style.top = y + 'px';
        item.style.fontSize = isGold ? (Math.random() * 2 + 1) + 'rem' : (Math.random() * 2 + 2) + 'rem';
        if(isGold) { item.style.textShadow = '0 0 15px gold'; }
        
        // حساب اتجاه الطيران العشوائي
        const tx = (Math.random() - 0.5) * 800 + 'px';
        const ty = (Math.random() - 0.5) * 800 + 'px';
        const rot = Math.random() * 360 + 'deg';
        
        item.style.setProperty('--tx', tx);
        item.style.setProperty('--ty', ty);
        item.style.setProperty('--rot', rot);
        
        document.body.appendChild(item);
        setTimeout(() => { item.remove(); }, 1200);
    }
}

function closeMemory() {
    document.getElementById('memory-modal').classList.remove('active');
    document.getElementById('modal-card').classList.remove('show-anim');
    
    // إخفاء إيفكت السينما لو كان شغال
    document.getElementById('cinematic-overlay').classList.remove('darken');
}

// مطر خفيف في الخلفية
function createHeartRain() {
    const heart = document.createElement('div');
    heart.classList.add('heart-rain');
    heart.innerText = ['❤️', '💖', '✨'][Math.floor(Math.random() * 3)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 1 + 1) + 'rem';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 7000);
}
setInterval(createHeartRain, 500);
