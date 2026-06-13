const bgMusic = document.getElementById('bg-music');

// مزامنة أغنية الخلفية
window.addEventListener('load', () => {
    const savedTime = sessionStorage.getItem('musicTime');
    if (savedTime && bgMusic) {
        bgMusic.currentTime = parseFloat(savedTime);
        bgMusic.play().catch(e => console.log("Audio play deferred:", e));
    }
    // تشغيل أول فيديو تلقائياً بصوت صامت عشان المتصفح ميعلقش
    playCurrentVideo();
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

// 👑 داتا قنوات التلفزيون ورسائل الترجمة الخاصة بيك 👑
const tvData = [
    "المشهد الأول: هنا بتكتب الكلام الكتير الرايق بتاع الفيديو الأول، هيظهر سطر تحت سطر زي ترجمة الأفلام الأجنبية الفخمة تماماً بدون زحمة ألوان.",
    "المشهد الثاني: اكتب هنا ذكريات الفيديو التاني وتفاصيله.. الخط مريح للعين والخلفية مظلمة ومفيش أي قلوب أو إيموجيز تضايق النظر.",
    "المشهد الثالث: اكتب هنا وعدك وكلامك الحلو للفيديو الثالث يا بطل."
];

let currentChannel = 0;
const channels = document.querySelectorAll('.tv-channel');
const videos = document.querySelectorAll('.tv-channel video');
const tvStatic = document.getElementById('tv-static');
const subtitleText = document.getElementById('subtitle-text');

function changeChannel(index) {
    if (tvStatic) tvStatic.classList.add('show'); // تشغيل الوشيش ثانية

    // إيقاف جميع الفيديوهات فوراً
    videos.forEach(vid => vid.pause());

    setTimeout(() => {
        channels.forEach(ch => ch.classList.remove('active'));
        channels[index].classList.add('active');
        
        // تحديث نص الترجمة الهادي
        if (subtitleText) subtitleText.innerText = tvData[index];
        
        if (tvStatic) tvStatic.classList.remove('show'); // إيقاف الوشيش
        
        playCurrentVideo();
    }, 400); // مدة تأثير الوشيش 400 مللي ثانية
}

function playCurrentVideo() {
    const activeVideo = videos[currentChannel];
    if (activeVideo) {
        activeVideo.currentTime = 0;
        // بنشغله بصوت عادي، ولو شهد عايزة تسمعه بتعلي الموبايل
        activeVideo.play().catch(e => console.log("Video auto-play prevented:", e));
    }
}

function nextChannel() {
    currentChannel = (currentChannel + 1) % channels.length;
    changeChannel(currentChannel);
}

function prevChannel() {
    currentChannel = (currentChannel - 1 + channels.length) % channels.length;
    changeChannel(currentChannel);
}

// زرار الريموت لتشغيل وإيقاف الفيديو مؤقتاً
function togglePlayVideo() {
    const activeVideo = videos[currentChannel];
    if (activeVideo) {
        if (activeVideo.paused) {
            activeVideo.play();
        } else {
            activeVideo.pause();
        }
    }
}
