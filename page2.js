const bgMusic = document.getElementById('bg-music');
const CINEMA_SECRET_KEY = 'بحبك اكتر';

window.addEventListener('load', () => {
    // تشغيل الأغنية الجديدة فوراً عند فتح الصفحة الثانية تلقائياً
    if (bgMusic) {
        bgMusic.currentTime = 0;
        bgMusic.play().catch(e => console.log("Audio autoplay block handled:", e));
    }
    initAiNeuralNodes();
    initMagneticButtons();
    initUltimate3DMatrix(); 
});

function goBackHome() {
    window.location.href = 'index.html';
}

function triggerCorePulse() {
    const introScreen = document.getElementById('ai-quantum-intro');
    const authPortal = document.getElementById('cinema-auth-portal');
    const coreNucleus = document.querySelector('.core-inner-nucleus');
    
    if (coreNucleus) {
        coreNucleus.style.transform = 'scale(60)';
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
            authPortal.style.transform = 'scale(0.88) translateY(-15px) translateZ(0px)';
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

setTimeout(() => {
    const passInput = document.getElementById('cinema-password-input');
    if (passInput) {
        passInput.addEventListener('keypress', function(e) { if (e.key === 'Enter') unlockAiCinema(); });
    }
}, 500);

// 👑 اكتب الرسايل بتاعتك للـ 5 فيديوهات هنا يا بطل 👑
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
        
        if (lightLeak) { lightLeak.classList.add('active'); setTimeout(() => lightLeak.classList.remove('active'), 500); }
        
        if (cinemaFrame && displacementMap) {
            cinemaFrame.classList.add('liquid-morphing');
            let scaleVal = 0;
            let interval = setInterval(() => {
                scaleVal += 8;
                displacementMap.setAttribute('scale', scaleVal);
                if(scaleVal >= 45) {
                    clearInterval(interval);
                    document.querySelectorAll('.video-slide').forEach(sl => sl.classList.remove('active'));
                    const targetSlide = document.getElementById(`slide-${num}`);
                    if (targetSlide) targetSlide.classList.add('active');
                    
                    let reverseInterval = setInterval(() => {
                        scaleVal -= 8;
                        displacementMap.setAttribute('scale', scaleVal);
                        if(scaleVal <= 0) {
                            clearInterval(reverseInterval);
                            cinemaFrame.classList.remove('liquid-morphing');
                        }
                    }, 40);
                }
            }, 55);
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

function initMagneticButtons() {
    const buttons = document.querySelectorAll('.magnetic-button');
    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate3d(${x * 0.35}px, ${y * 0.35}px, 25px) scale(1.02)`;
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate3d(0px, 0px, 20px) scale(1)';
        });
    });
}

function initUltimate3DMatrix() {
    const mesh = document.getElementById('magnetic-mesh');
    if (!mesh) return;
    
    window.addEventListener('mousemove', (e) => {
        if (window.innerWidth < 768) return;
        const xAxis = (window.innerWidth / 2 - e.clientX) / 25;
        const yAxis = (window.innerHeight / 2 - e.clientY) / 25;
        mesh.style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`;
    });
    
    window.addEventListener('mouseleave', () => {
        mesh.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });

    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', (e) => {
            if (window.innerWidth >= 768) return;
            const tiltX = Math.min(Math.max(e.gamma, -20), 20) * 0.6;
            const tiltY = Math.min(Math.max(e.beta, -20), 20) * 0.6;
            mesh.style.transform = `rotateY(${tiltX}deg) rotateX(${-tiltY}deg)`;
        }, true);
    }
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
