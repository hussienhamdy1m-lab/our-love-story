const CORRECT_PASSWORD = 'love'; 

// 1. نظام التحقق من الباسورد
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
            document.body.style.overflow = 'auto'; // تشغيل السكرول
        }, 800);
    } else {
        errorMessage.style.display = 'block';
        passInput.style.animation = 'none';
        setTimeout(() => { passInput.style.animation = 'shake 0.4s ease'; }, 10);
        passInput.value = '';
    }
}

document.getElementById('password-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') { checkPassword(); }
});


// 2. قاعدة بيانات الذكريات (الخمس صور بتوعك والكلام بتاعهم)
const memoriesData = {
    envelope: {
        title: "الجواب الرومانسي ✉️",
        text: "فتحتِ الجواب؟ ده أول جواب بكتبهولك من كل قلبي.. عشان أقولك إنك أحلى وأجمل حاجة حصلت في دنيتي كلها، وكل كلمة هنا طالعة من روحي ليكي. 💖",
        img: "1.jpg"
    },
    camera: {
        title: "لقطة من الكاميرا 📸",
        text: "كل صورة بناخدها سوا هي لقطة متثبتة في الزمن.. الضحكة دي، واليوم ده بالذات، هيفضل محفور في قلبي وعقلي كأنه حصل النهاردة بالظبط. 🥰",
        img: "2.png"
    },
    book: {
        title: "كتاب حكاياتنا 📖",
        text: "قصتنا مش مجرد أيام بتعدي، دي رواية جميلة بنكتبها سوا سطر بسطر ويوم ورا يوم.. وكل صفحة فيها بتثبتلي إنك بطلي الوحيد وأجمل تفاصيلي. 🌸",
        img: "3.jpeg"
    },
    bottle: {
        title: "رسالة في زجاجة 🍾",
        text: "لو الرسالة دي لفت بحور العالم كله، كانت هتوصلك إنتي برضو.. لأن المكتوب على الورق القديم ده هو وعد مني إني هفضل جنبك ومعاكي لآخر العمر. ❤️",
        img: "4.jpeg"
    },
    projector: {
        title: "شريط السينما الخاص بنا 📹",
        text: "لو حياتي فيلم سينما، فإنتي أحلى مشهد فيه.. مشهد بيتعاد كل يوم في بالي ومبشبعش منه، وبدعي يفضل شغال وميكملش أبداً طول ما إحنا سوا. 💖",
        img: "5.jpeg"
    }
};


// 3. فتح الذكرى بأنيميشن مخصص وإيفكتات
function openMemory(type) {
    const memory = memoriesData[type];
    
    // ربط البيانات بالبوب اب
    document.getElementById('memory-title').innerText = memory.title;
    document.getElementById('memory-text').innerText = memory.text;
    document.getElementById('memory-img').src = memory.img;

    const overlay = document.getElementById('memory-overlay');
    const modalOverlay = document.getElementById('memory-modal');
    const card = document.getElementById('modal-card');

    // إيفكت مخصوص للكاميرا (فلاش أبيض سريع)
    if (type === 'camera') {
        const flash = document.getElementById('flash-effect');
        flash.style.opacity = '1';
        setTimeout(() => { flash.style.opacity = '0'; }, 200);
    }

    // تفعيل البوب اب والأنيميشن
    modalOverlay.classList.add('active');
    card.className = 'modal-content'; // ريست للأنيميشن القديم
    
    // استدعاء أنيميشن مخصص بناءً على النوع
    setTimeout(() => {
        card.classList.add(`${type}-anim`);
    }, 50);

    // تفجير قلوب مكثف احتفالاً بالضغط
    for(let i=0; i<10; i++) {
        setTimeout(createHeartRain, i * 80);
    }
}

// قفل صندوق الذكريات
function closeMemory() {
    const modalOverlay = document.getElementById('memory-modal');
    const card = document.getElementById('modal-card');
    
    modalOverlay.classList.remove('active');
    card.className = 'modal-content'; // إلغاء الأنيميشن
}


// 4. مطر القلوب المستمر
function createHeartRain() {
    const heart = document.createElement('div');
    heart.classList.add('heart-rain');
    
    const emojis = ['❤️', '💖', '✨', '💕', '🥰', '🌸', '🌹'];
    heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    
    heart.style.left = Math.random() * 100 + 'vw';
    const size = Math.random() * 1.5 + 1.2; 
    heart.style.fontSize = size + 'rem';
    
    const duration = Math.random() * 3 + 4; 
    heart.style.animationDuration = duration + 's';
    
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, duration * 1000);
}
setInterval(createHeartRain, 300);
