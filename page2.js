const bgMusic = document.getElementById('bg-music');
const CINEMA_SECRET_KEY = 'بحبك اكتر'; // الباسورد التاني السري المظبوط بالملي

window.addEventListener('load', () => {
    const savedTime = sessionStorage.getItem('musicTime');
    if (savedTime && bgMusic) {
        bgMusic.currentTime = parseFloat(savedTime);
        bgMusic.play().catch(e => console.log("Audio play deferred:", e));
    }
    initAiNeuralNodes();
    initMagneticButtons();
    init3DTiltEffect();
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

// 🌟 تأثير انفجار النواة وتحول الـ UI السائل 🌟
function triggerCorePulse() {
    const introScreen = document.getElementById('ai-quantum-intro');
    const authPortal = document.getElementById('cinema-auth-portal');
    const coreNucleus = document.querySelector('.core-inner-nucleus');
    
    if (coreNucleus) {
        coreNucleus.style.transform = 'scale(50)';
        coreNucleus.style.background = '#ff4a75';
        coreNucleus.style.opacity = '0';
    }
    
    setTimeout(() => {
        if (introScreen) {
            introScreen.classList.add('core-shattered');
            setTimeout(() => {
                introScreen.style.display = 'none';
                if (authPortal) {
                    authPortal.style.display = 'block';
                    setTimeout(() => { authPortal.style.opacity = '1'; }, 50);
                }
            }, 800);
        }
    }, 300);
}

// 🔒 فحص الباسورد الثاني والتحول الذكي للوحة التحكم 🔒
function unlockAiCinema() {
    const passInput = document.getElementById('cinema-password-input');
    const errorMessage = document.getElementById('cinema-error-message');
    const authPortal = document.getElementById('cinema-auth-portal');
    const consoleDashboard = document.getElementById('ai-console-dashboard');
    
    if (!passInput) return;
    
    if (passInput.value.trim() === CINEMA_SECRET_KEY) {
        if (authPortal) {
            authPortal.style.transition = '0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            authPortal.style.opacity = '0';
            authPortal.style.transform = 'scale(0.92) translateY(-15px)';
        }
        setTimeout(() => {
            if (authPortal) authPortal.style.display = 'none';
            if (consoleDashboard) {
                consoleDashboard.style.display = 'block';
                setTimeout(() => { consoleDashboard.style.opacity = '1'; }, 50);
            }
        }, 500);
    } else {
        if (errorMessage) errorMessage.style.display = 'block';
        if (authPortal) {
            authPortal.classList.remove('shake-box-anim');
            void authPortal.offsetWidth; 
            authPortal.classList.add('shake-box-anim');
        }
        passInput.value = '';
    }
}

// ربط Enter للباسورد الثاني
setTimeout(() => {
    const passInput = document.getElementById('cinema-password-input');
    if (passInput) {
        passInput.addEventListener('keypress', function(e) { if (e.key === 'Enter') unlockAiCinema(); });
    }
}, 500);

// 👑 نصوص الترجمة المنسوجة للفيديوهات الـ 5 كاملة بتوعك يا حسين 👑
const cinematicTexts = {
    1: "المشهد الأول: تم توليد حزمة البيانات بنجاح.. اكتب هنا ذكريات وتفاصيل الفيديو الأول بالكامل لشهد، الكلام بيتنّسج بنعومة بالغة ومريحة للنظر.",
    2: "المشهد الثاني: معالجة القطاع الثاني.. اكتب هنا تفاصيل كلام الفيديو التاني ورسالتك الرومانسية اللي من القلب.",
    3: "المشهد الثالث: اكتب هنا كلامك الحلو وعبر عن اللي جواك في الفيديو الثالث يا بطل.. الخط رايق ومريح للعين.",
    4: "المشهد الرابع: هنا بتكتب تفاصيل وذكرى المقابلة أو الفيديو الرابع بالتفصيل الممتع.",
    5: "المشهد الخامس: نهاية مصفوفة الحكايات.. اكتب هنا وعدك الأخير وكلامك الأبدي لشهودتي لآخر العمر."
};

const consoleDashboard = document.getElementById('ai-console-dashboard');
const theaterStage = document.getElementById('cinema-theater-stage');
const subtitleTextField = document.getElementById('subtitle-text-field');
const lightLeak = document.getElementById('ai-light-leak');
const cinemaFrame = document.getElementById('cinema-frame');
const displacementMap = document.getElementById('liquid-displacement');

let activeVideoId = null;
let weaveInterval = null;

// 👑 دالة تشغيل المشهد بنقلة السيلان المائي الرياضي الفاخر 👑
function compileAndPlayScene(num) {
    if (consoleDashboard) {
        consoleDashboard.style.opacity = '0';
        consoleDashboard.style.transform = 'scale(0.96)';
    }
    
    setTimeout(() => {
        if (consoleDashboard) consoleDashboard.style.display = 'none';
        if (theaterStage) {
            theaterStage.style.display = 'flex';
            setTimeout(() => theaterStage.style.opacity = '1', 50);
        }
        
        // قدح ومضة الضوء الدافئة
        if (lightLeak) { lightLeak.classList.add('active'); setTimeout(() => lightLeak.classList.remove('active'), 500); }
        
        // قدح أنيميشن السيلان المائي (Liquid Morph) عن طريق تحريك فلتر الـ SVG
        if (cinemaFrame && displacementMap) {
            cinemaFrame.classList.add('liquid-morphing');
            let scaleVal = 0;
            let interval = setInterval(() => {
                scaleVal += 8;
                displacementMap.setAttribute('scale', scaleVal);
                if(scaleVal >= 40) {
                    clearInterval(interval);
                    // في قمة السيلان بنقلب الفيديوهات
                    document.querySelectorAll('.video-slide').forEach(sl => sl.classList.remove('active'));
                    const targetSlide = document.getElementById(`slide-${num}`);
                    if (targetSlide) targetSlide.classList.add('active');
                    
                    // العودة للوضع الطبيعي بنعومة
                    let reverseInterval = setInterval(() => {
                        scaleVal -= 8;
                        displacementMap.setAttribute('scale', scaleVal);
                        if(scaleVal <= 0) {
                            clearInterval(reverseInterval);
                            cinemaFrame.classList.remove('liquid-morphing');
                        }
                    }, 40);
                }
            }, 300 / 5);
        } else {
            document.querySelectorAll('.video-slide').forEach(sl => sl.classList.remove('active'));
            const targetSlide = document.getElementById(`slide-${num}`);
            if (targetSlide) targetSlide.classList.add('active');
        }
        
        weaveSubtitle(num);
        
        const targetVid = document.getElementById(`vid${num}`);
        if (targetVid) {
            targetVid.currentTime = 0;
            targetVid.play().catch(e => console.log("Auto-play deferred"));
            activeVideoId = `vid${num}`;
        }
    }, 350);
}

function returnToAiConsole() {
    if (activeVideoId) {
        const currentVid = document.getElementById(activeVideoId);
        if (currentVid) currentVid.pause();
    }
    if (theaterStage) theaterStage.style.opacity = '0';
    setTimeout(() => {
        if (theaterStage) theaterStage.style.display = 'none';
        if (consoleDashboard) {
            consoleDashboard.style.display = 'block';
            setTimeout(() => { consoleDashboard.style.opacity = '1'; consoleDashboard.style.transform = 'scale(1)'; }, 50);
        }
    }, 350);
}

function weaveSubtitle(num) {
    if (!subtitleTextField) return;
    clearInterval(weaveInterval);
    subtitleTextField.innerHTML = '';
    
    const textToShow = cinematicTexts[num] || "";
    const words = textToShow.split(' ');
    let currentWordIndex = 0;
    
    weaveInterval = setInterval(() => {
        if (currentWordIndex < words.length) {
            const wordSpan = document.createElement('span');
            wordSpan.innerText = words[currentWordIndex] + ' ';
            wordSpan.style.opacity = '0';
            wordSpan.style.transition = 'opacity 0.25s ease';
            subtitleTextField.appendChild(wordSpan);
            
            setTimeout(() => { wordSpan.style.opacity = '1'; }, 20);
            currentWordIndex++;
        } else {
            clearInterval(weaveInterval);
        }
    }, 130); 
}

// 👑 برمجة نظام الأزرار المغناطيسية (تنجذب وتقفز لصباعها عند اللمس) 👑
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.magnetic-button');
    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px) scale(1.02)`;
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0px, 0px) scale(1)';
        });
    });
}

// 👑 برمجة تأثير مسرح العرض الطافي ثلاثي الأبعاد (3D Tilt Effect) 👑
function init3DTiltEffect() {
    const frame = document.getElementById('cinema-frame');
    if (!frame) return;
    window.addEventListener('deviceorientation', (e) => {
        // مخصص للموبايل واللمس الطافي
        const tiltX = Math.min(Math.max(e.gamma, -15), 15) * 0.4;
        const tiltY = Math.min(Math.max(e.beta, -15), 15) * 0.4;
        frame.style.transform = `rotateY(${tiltX}px) rotateX(${-tiltY}px)`;
    }, true);
}

function initAiNeuralNodes() {
    const container = document.getElementById('ai-neural-canvas');
    if (!container) return;
    for (let i = 0; i < 15; i++) {
        const node = document.createElement('div');
        node.classList.add('neural-point');
        const size = Math.random() * 3 + 2;
        node.style.width = size + 'px'; node.style.height = size + 'px';
        node.style.left = Math.random() * 100 + 'vw';
        node.style.animationDuration = (Math.random() * 8 + 8) + 's';
        node.style.animationDelay = (Math.random() * 5) + 's';
        container.appendChild(node);
    }
}
