const bgMusic = document.getElementById('bg-music');
// كلمة السر الإلزامية بالملي وبنفس المسافات
const CORRECT_PASSWORD = 'انا بحبك يا شهد'; 

// 1. مزامنة الموسيقى وإكمالها من ثواني التوقف السابقة
window.addEventListener('load', () => {
    const savedTime = sessionStorage.getItem('musicTime');
    if (savedTime && bgMusic) {
        bgMusic.currentTime = parseFloat(savedTime);
        bgMusic.play().catch(e => console.log("Audio play deferred:", e));
    }
});

// حفظ ثواني الأغنية أول بأول
setInterval(() => {
    if (bgMusic && !bgMusic.paused) {
        sessionStorage.setItem('musicTime', bgMusic.currentTime);
    }
}, 200);

// دالة تفعيل الموسيقى عند المحاولة الأولى للأمان
function startMusicIfNeeded() {
    if (bgMusic && bgMusic.paused) {
        bgMusic.volume = 0.6;
        bgMusic.play().catch(e => console.log("Audio trigger fail:", e));
    }
}

// 👑 فحص كلمة السر الإلزامي الدقيق 👑
function checkPassword() {
    startMusicIfNeeded();
    
    const passInput = document.getElementById('password-input');
    const errorMessage = document.getElementById('error-message');
    const loginScreen = document.getElementById('login-screen');
    const mainContent = document.getElementById('main-content');
    
    if (!passInput) return;
    
    // إزالة الفراغات الزائدة من الأطراف لمساعدة شهد
    const enteredText = passInput.value.trim();
    
    if (enteredText === CORRECT_PASSWORD) {
        // اختفاء بوكس الزجاج الترحيبي بالأنيميشن العكسي الممتع
        if (loginScreen) {
            loginScreen.style.transition = '0.6s ease';
            loginScreen.style.opacity = '0';
            loginScreen.style.transform = 'scale(0.8) translateY(-30px)';
        }
        
        setTimeout(() => {
            if (loginScreen) loginScreen.style.display = 'none';
            if (mainContent) {
                mainContent.style.display = 'block';
                setTimeout(() => {
                    mainContent.style.style = 'transition: 0.6s ease';
                    mainContent.style.opacity = '1';
                }, 50);
            }
        }, 600);
    } else {
        // تأثير اهتزاز البوكس البصري الرائع لو كتبت غلط
        if (errorMessage) errorMessage.style.display = 'block';
        if (loginScreen) {
            loginScreen.classList.remove('shake-box');
            void loginScreen.offsetWidth; 
            loginScreen.classList.add('shake-box');
        }
        passInput.value = '';
    }
}

// تشغيل الفحص التلقائي لو ضغطت زر Enter من لوحة المفاتيح
document.addEventListener('DOMContentLoaded', () => {
    const passInput = document.getElementById('password-input');
    if (passInput) {
        passInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') checkPassword();
        });
    }
});

// دالة ترحيل ثواني الأغنية والانتقال لصفحة السينما الثانية
function goToCinemaPage() {
    if (bgMusic) {
        sessionStorage.setItem('musicTime', bgMusic.currentTime);
    }
    window.location.href = 'page2.html';
}

// 👑 صندوق معلومات حكاياتكم الفخم والصور بصيغة .jpeg 👑
const memoriesData = {
    envelope: { 
        title: "اهم لحظه عدت عليا لحد دلوقتي ولحد سنين جايه ✉️", 
        text: "دي كانت اول مره اشوفك واول مره نتفق اننا ننزل بعد وقت كبير كنا سوا ومشوفناش بعض وكنت جايب طقم العيد وملبستهوش فضلت شايله عشان البسهولك وكان الطقم كله جديد زي ما انا بحب علطول اجيبلك حاجه جديده اشوفك بيها.\n\nيوم عمري ما هنساه ولا عمره هيروح من دماغي بكل تفصيله فيه من اول ما شوفتك وكان معايا ازازه المايه ومن اول ما عيني جت عليكي وفضلت متنح من كتر جمالك ومن كتر ما انا اتأكدت اني محظوظ ان اجمل واحده ربنا خلقها قلبها بيحبني انا وبيتمناني انا واللي حصل في اليوم ده من اول ما اتمشينا جوه الشوارع لحد الاكل والضحك وشكلك وعينك بتلمعلي وبصالي وانا مسبتش عينك لحظه وانتي عارفه اني مش بعملها بس من كتر جمالك وقلبي اللي مكنش هادي مكنتش عارف امنع نفسي اكلك ودي كانت بدايه لاجمل ايام عدت عليا في حياتي ايام اتحفرت في كل مكان وكل ساعه وثانيه عدوا ايام عمري ما هبطل افتكرها ولا احسها تاني لو عدا عليها سنين هتفضلي احلي حاجه ولسه لحد دلوقتي فاكر وانتي ماشيه قدامي وانا لازم فيكي وكلامي لما قولتلك الفستان ضيق وماسك عليكي وانتي كنتي عارفه يا زباله بس انتي كنتي نازله اليوم ده عشان تخليني ابلم ف قد ايه انتي كامله من كل حاجه طريقة وجمال وقرب.\n\nانا بحبك وزي ما قولتلك دي اول خطوة لحبنا وتفاصيلنا اللي عشناها سوا.", 
        img: "11.jpeg"
    },
    camera: { 
        title: "تاني احلي يوم حصلي في حياتي 📸", 
        text: "تاني مره وتاني مقابله اللي قربت اكتر منك بس مش اوي برضو بس قربنا في الكلام والضحك والانبساط والاكل والفيديوهات واول تيك توك كنا مخلين كل صوت عشان نعمله ومحضرين وبرضو نزلت قبلها ب يوم جبتلك طقم برضو بس انا عمري ما هنكر انك كنتي احلي مني برضو ساعتها وباين من الصوره ملامح مين الاحلي ومين اللي مخلي الصوره تنور ب ضحكته ورغم برضو ي زباله لبستي طقم ضيق ودي كانت بدايه لعنه التعب واني مكنتش قادر اسيطر علي لظلظتك وعلي حلاوتك ولحد دلوقتي انتي بطه وعيني هتطلع عليكي وطبعا الحاجه المعلمه ف يوم هي الكفته وكمان فيديوهاتي وانا برقص واكتر فيديو فضلنا نضحك عليه بتاع يا نننننووووررررر مخبيها فين يا رچدي.\n\nوتاني اكتر يوم علقني بيكي اكتر وثبتك اكتر قدام عيني وخلاني امسك فيكي اكتر واكتر لاني ابتديت اعرف اني بعشقك مش بحبك بس.", 
        img: "22.jpeg"
    },
    bottle: { 
        title: "يوم الفرهده 🍾", 
        text: "اخترت الصوره دي بالذات عشان اليوم ده كان فيه احلي صوره اخدناها اللي هتفضل الاقرب لقلبي صورتك وانتي ف حضني وماسكه الفون ومخلياه بعيد بدراعك كده واليوم اللي اتصورنا فيه وانا بشاور ع القمر بس انا قمري كان ع الارض مش ف السما وده مش محن دي حقيقه.\n\nواليوم ضحكنا فيه اوي وبهدلت هدوم اوي واظن باين من ملامحك انا عملت فيكي ايه وخليتك ازاي لاني اتغابيت وعملت فيديو بضربك فيه بس مش هنسي وانتي قدامي وبين رجلي وبتعدلي هدومك وفتحتيلي الجاكت وقربتيني منك وشفايفك ورمت من كتر ما انا بوظتها واكلتها حبيت افكرك باليوم ده بسبب الصوره وانا فرحان اني قتلتك وانتي مش قادره تفتحي عينك ومريحه جسمك علي اكتر مكان بترتاحي فيه وهو حضني وبحبك.", 
        img: "33.jpeg"
    },
    projector: {
        title: "اول قرب واول لمسه ✨",
        text: "نيجي بقا لليوم الاهم والاقرب والاحن اول يوم نقرب فعليا من بعض اول يوم تنسي الدنيا وانا انسي انا فين واركز في شفايفك بس واديكي اول بوسه واحلي بوسه طلعت مني كانت بكل حنيه وحب واكل لاكتر شفايف وحشتني اول مره تيجي في حضني متحسيش بالدنيا تيجي وتترمي فيا وميهمكيش انتي فين ولا احنا بنعمل ايه وتغمضي عينك وتسرحي ومتخفيش مني ولا من اي حاجه تحصل.\n\nاول لمسه لقرب جسمك مني اول حضن ونومه علي صدري اول ضمه بحب واشتياق ومسكتي لبطنك وقربي من ضهرك رغم انك مكنتيش بتحبيني المسك بس انتي اللي اترميتي ونسيتي الدنيا والناس وخلتيني اسرح فيكي وفي اللحظه اني شوفتنا ف مكان مفيهوش اي حاجه وحتي مش سامعين غير صوت بعض وانا باصصلك بعيني وببوسك تاني وانك حبيتي تحسي تاني وحبيتي تخليني ادوب تاني.\n\nانتي اجمل حاجه انا طلعت بيها من الدنيا رغم اي ظروف انتي الاهم والاحن والاحلي والاحسن.\n\nانتي امي واختي وبنتي وصحبتي واهلي وناسي وده مش مجرد كلام انتي بنتي حرفيا وفعليا وجسديا وروحيا وكل حاجه انتي جوهرتي وضحكتي وفرحتي وعياطي وكسرتي.\n\nانتي شهد وميوصفكيش كلام يا احن شهد.\n\nاتمني لحظه في قربك تخليني اثبتلك انتي عندي ايه وانا لسه جوايا الاكتر من اللي طلعلك قبل كده.",
        img: "44.jpeg"
    }
};

// تشغيل نافذة البوب أب المطاطية بالأنيميشن
function openMemory(type, event) {
    const memory = memoriesData[type];
    if(!memory) return;
    
    document.getElementById('memory-title').innerText = memory.title;
    document.getElementById('memory-text').innerText = memory.text;
    document.getElementById('memory-img').src = memory.img;
    
    const overlay = document.getElementById('memory-modal');
    const card = document.getElementById('modal-card');
    
    let startX = window.innerWidth / 2;
    let startY = window.innerHeight / 2;
    
    if (event && event.currentTarget) {
        const rect = event.currentTarget.getBoundingClientRect();
        startX = rect.left + rect.width / 2;
        startY = rect.top + rect.height / 2;
    }

    if (type === 'envelope') {
        createBurst(startX, startY, ['✉️', '💖', '💌', '✨']);
    }

    setTimeout(() => { 
        if(overlay) overlay.classList.add('active'); 
        if(card) card.classList.add('show-anim'); 
    }, 150);
}

function createBurst(x, y, icons) {
    for (let i = 0; i < 20; i++) {
        const item = document.createElement('div');
        item.classList.add('burst-item');
        item.innerText = icons[Math.floor(Math.random() * icons.length)];
        item.style.left = x + 'px'; item.style.top = y + 'px';
        item.style.fontSize = (Math.random() * 1.2 + 1.2) + 'rem';
        item.style.setProperty('--tx', (Math.random() - 0.5) * 500 + 'px');
        item.style.setProperty('--ty', (Math.random() - 0.5) * 500 + 'px');
        item.style.setProperty('--rot', Math.random() * 360 + 'deg');
        document.body.appendChild(item);
        setTimeout(() => { item.remove(); }, 1200);
    }
}

function closeMemory() {
    const overlay = document.getElementById('memory-modal');
    const card = document.getElementById('modal-card');
    if(overlay) overlay.classList.remove('active');
    if(card) card.classList.remove('show-anim');
}

// هطول الأمطار الرومانسية (القلوب)
function createHeartRain() {
    const rainLayer = document.getElementById('rain-layer');
    if (!rainLayer) return;
    const heart = document.createElement('div');
    heart.classList.add('heart-rain');
    heart.innerText = ['❤️', '💖', '✨', '💕', '🥰'][Math.floor(Math.random() * 5)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 1.2 + 0.8) + 'rem';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    rainLayer.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 6000);
}
setInterval(createHeartRain, 450);
