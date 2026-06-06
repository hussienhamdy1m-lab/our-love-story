const CORRECT_PASSWORD = 'انا بحبك يا شهد'; 
const bgMusic = document.getElementById('bg-music');

// 1. أول ما الصفحة الأولى تفتح، بتشوف هل في وقت متسجل للأغنية؟ لو فيه بتكمل منه
window.addEventListener('load', () => {
    const savedTime = sessionStorage.getItem('musicTime');
    if (savedTime && bgMusic) {
        bgMusic.currentTime = parseFloat(savedTime);
        bgMusic.play().catch(e => console.log("Audio auto-play prevented:", e));
    }
});

// 2. العداد السحري: بيسجل ثواني الأغنية أول بأول في الذاكرة طول ما هي شغالّہ
setInterval(() => {
    if (bgMusic && !bgMusic.paused) {
        sessionStorage.setItem('musicTime', bgMusic.currentTime);
    }
}, 200);

// ظهور صندوق كلمة السر
function showPasswordBox() {
    const welcomeScreen = document.getElementById('welcome-screen');
    const loginScreen = document.getElementById('login-screen');
    
    if(bgMusic) {
        bgMusic.volume = 0.6; 
        bgMusic.play().catch(e => console.log("Audio play failed:", e));
    }
    
    welcomeScreen.style.opacity = '0';
    welcomeScreen.style.transform = 'scale(0.8) translateY(-50px)';
    
    setTimeout(() => {
        welcomeScreen.style.display = 'none';
        loginScreen.style.display = 'block';
        setTimeout(() => { loginScreen.style.opacity = '1'; }, 50);
    }, 600);
}

// فحص كلمة السر
function checkPassword() {
    const passInput = document.getElementById('password-input');
    const errorMessage = document.getElementById('error-message');
    const loginScreen = document.getElementById('login-screen');
    
    if (passInput.value.toLowerCase() === CORRECT_PASSWORD) {
        loginScreen.style.opacity = '0';
        loginScreen.style.transform = 'scale(0.8) translateY(-50px)';
        setTimeout(() => {
            loginScreen.style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
            document.body.style.overflow = 'auto'; 
        }, 800);
    } else {
        errorMessage.style.display = 'block';
        loginScreen.classList.remove('shake-box');
        void loginScreen.offsetWidth; 
        loginScreen.classList.add('shake-box');
        passInput.value = '';
    }
}
document.getElementById('password-input').addEventListener('keypress', function(e) { if (e.key === 'Enter') checkPassword(); });

// دالة الانتقال لصفحة السينما التانية بدون ما الأغنية تعيد
function goToCinemaPage() {
    if (bgMusic) {
        sessionStorage.setItem('musicTime', bgMusic.currentTime);
    }
    window.location.href = 'page2.html';
}

// 👑 هنا السحر كله: ربطنا الصور الـ 5 بتاعتك بالـ 5 عناصر بتوع الصفحة الأولى 👑
const memoriesData = {
    envelope: { 
        title: "اهم لحظه عدت عليا لحد دلوقتي ولحد سنين جايه ✉️", 
        text: "دي كانت اول مره اشوفك واول مره نتفق اننا ننزل بعد وقت كبير كنا سوا ومشوفناش بعض وكنت جايب طقم العيد وملبستهوش فضلت شايله عشان البسهولك وكان الطقم كله جديد زي ما انا بحب علطول اجيبلك حاجه جديده اشوفك بيها 
يوم عمري ما هنساه ولا عمره هيروح من دماغي بكل تفصيله فيه من اول ما شوفتك وكان معايا ازازه المايه ومن اول ما عيني جت عليكي وفضلت متنح من كتر جمالك ومن كتر ما انا اتأكدت اني محظوظ ان اجمل واحده ربنا خلقها قلبها بيحبني انا وبيتمناني انا واللي حصل في اليوم ده من اول ما اتمشينا جوه الشوارع لحد الاكل والضحك وشكلك وعينك بتلمعلي وبصالي وانا مسبتش عينك لحظه وانتي عارفه اني مش بعملها بس من كتر جمالك وقلبي اللي مكنش هادي مكنتش عارف امنع نفسي اكلك ودي كانت بدايه لاجمل ايام عدت عليا في حياتي ايام اتحفرت في كل مكان وكل ساعه وثانيه عدوا ايام عمري ما هبطل افتكرها ولا احسها تاني لو عدا عليها سنين هتفضلي احلي حاجه ولسه لحد دلوقتي فاكر وانتي ماشيه قدامي وانا لازم فيكي وكلامي لما قولتلك الفستان ضيق وماسك عليكي وانتي كنتي عارفه يا زباله بس انتي كنتي نازله اليوم ده عشان تخليني ابلم ف قد ايه انتي كامله من كل حاجه طريقه وجمال وقرب 
انا بحبك وزي ما قولتلك دي اول خطوه لحبنا وتفاصيلنا اللي عشناها سوا", 
        img: "11.jpg" /* صورتك الأولى */
    },
    camera: { 
        title: "تاني احلي يوم حصلي في حياتي 📸", 
        text: "تاني مره وتاني مقابله اللي قربت اكتر منك بس مش اوي برضو بس قربنا في الكلام والضحك والانبساط والاكل والفيديوهات واول تيك توك كنا مخلين كل صوت عشان نعمله ومحضرين وبرضو نزلت قبلها ب يوم جبتلك طقم برضو بس انا عمري ما هنكر انك كنتي احلي مني برضو ساعتها وباين من الصوره ملامح مين الاحلي ومين اللي مخلي الصوره تنور ب ضحكته ورغم برضو ي زباله لبستي طقم ضيق ودي كانت بدايه لعنه التعب واني مكنتش قادر اسيطر علي لظلظتك وعلي حلاوتك ولحد دلوقتي انتي بطه وعيني هتطلع عليكي وطبعا الحاجه المعلمه ف يوم هي الكفته وكمان فيديوهاتي وانا برقص واكتر فيديو فضلنا نضحك عليه بتاع يا نننننووووررررر مخبيها فين يا رچدي 
وتاني اكتر يوم علقني بيكي اكتر وثبتك اكتر قدام عيني وخلاني امسك فيكي اكتر واكتر لاني ابتديت اعرف اني بعشقك مش بحبك بس.", 
        img: "22.jpg" /* صورتك الثانية */
    },
    bottle: { 
        title: "يوم الفرهده  🍾", 
        text: "اخترت الصوره دي بالذات عشان اليوم ده كان فيه احلي صوره اخدناها اللي هتفضل الاقرب لقلبي صورتك وانتي ف حضني وماسكه الفون ومخلياه بعيد بدراعك كده واليوم اللي اتصورنا فيه وانا بشاور ع القمر بس انا قمري كان ع الارض مش ف السما وده مش محن دي حقيقه 
واليوم ضحكنا فيه اوي وبهدلت هدوم اوي واظن باين من ملامحك انا عملت فيكي ايه وخليتك ازاي لاني اتغابيت وعملت فيديو بضربك فيه بس مش هنسي وانتي قدامي وبين رجلي وبتعدلي هدومك وفتحتيلي الجاكت وقربتيني منك وشفايفك ورمت من كتر ما انا بوظتها واكلتها حبيت افكرك باليوم ده بسبب الصوره وانا فرحان اني قتلتك وانتي مش قادره تفتحي عينك ومريحه جسمك علي اكتر مكان بترتاحي فيه وهو حضني وبحبك.", 
        img: "33.jpg" /* صورتك الثالثة */
    },
    projector: {
        title: "اول قرب واول لمسه  ✨",
        text: "نيجي بقا لليوم الاهم والاقرب والاحن اول يوم نقرب فعليا من بعض اول يوم تنسي الدنيا وانا انسي انا فين واركز في شفايفك بس واديكي اول بوسه واحلي بوسه طلعت مني كانت بكل حنيه وحب واكل لاكتر شفايف وحشتني اول مره تيجي في حضني متحسيش بالدنيا تيجي وتترمي فيا وميهمكيش انتي فين ولا احنا بنعمل ايه وتغمضي عينك وتسرحي ومتخفيش مني ولا من اي حاجه تحصل 
اول لمسه لقرب جسمك مني اول حضن ونومه علي صدري اول ضمه بحب واشتياق ومسكتي لبطنك وقربي من ضهرك رغم انك مكنتيش بتحبيني المسك بس انتي اللي اترميتي ونسيتي الدنيا والناس وخلتيني اسرح فيكي وفي اللحظه اني شوفتنا ف مكان مفيهوش اي حاجه وحتي مش سامعين غير صوت بعض وانا باصصلك بعيني وببوسك تاني وانك حبيتي تحسي تاني وحبيتي تخليني ادوب تاني 
انتي اجمل حاجه انا طلعت بيها من الدنيا رغم اي ظروف انتي الاهم والاحن والاحلي والاحسن 
انتي امي واختي وبنتي وصحبتي واهلي وناسي وده مش مجرد كلام انتي بنتي حرفيا وفعليا وجسديا وروحيا وكل حاجه انتي جوهرتي وضحكتي وفرحتي وعياطي وكسرتي 
انتي شهد وميوصفكيش كلام يا احن شهد 
اتمني لحظه في قربك تخليني اثبتلك انتي عندي ايه وانا لسه جوايا الاكتر من اللي طلعلك قبل كده.",
        img: "44.jpg" /* صورتك الرابعة */
    },
    book: {
        title: "الذكري الخامسه اللي متتنسيش 📖",
        text: "اليوم اللي قررت فيه اتهبل في عقلي بقا وانزل ازاكرلك وكنت مفكرك شاطره بس انتي قلبتي القاعده لاكتر قاعده فيها نار قلبتي الترابيره لاوضه نوم ولما سبتيني احط رجلي بين رجلك واقرب منك وفضلت مقربه وشك مني اوي وبتعضي علي شفايفك وماسكه ف ايدي وعينك كلها بتقولي بوسني كلني بعينك انا ملكك اللحظه اللي عرفت واتأكدت فيها اننا مش بنعتمد ناس ولا اماكن ولا حد يبصلنا ولا يركز اني فضلت متنحلك ورجلي فيكي ومش سيباكي وزاكرتلك صفحه بالعافيه ونسيتي ونسيت كليتك وامتحاناتك وكل حاجه وركزت ف لحظه اني مع مراتي ونصي التاني ومرايتي وراحتي 
اليوم اللي برضو لبستلك فيه قميص جديد اول مره البسه كان ليكي وصورتيني احلي صوره وصورتك صور احلي من حياتي بسبب شكلك وحلاوتك ودلعك اللي طالع فيها وانتي بتبصيلي انا مش بتبصي للكاميرا وسرحانه فيا انا وعينك بتلمعلي انا وبعديها اتمشينا في الشارع وأتصورنا وعملنا تيك توك وفضلنا ماشين ميتين علي بعض ومش مهمتمين بالناس ولا اي حد وفضلتي تتلزقي فيا 
انا بحبك وهفضل طول عمري عايش عشان احبك معايا او لا هفضل احبك واعشقك واتمناكي من ربنا واتمني قربك.",
        img: "55.jpg" /* صورتك الخامسة */
    }
};

function openMemory(type, event) {
    const memory = memoriesData[type];
    if(!memory) return;
    
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
        topShutter.classList.add('close'); bottomShutter.classList.add('close');
        setTimeout(() => { 
            flash.style.opacity = '1'; 
            setTimeout(() => { flash.style.opacity = '0'; }, 150);
            topShutter.classList.remove('close'); bottomShutter.classList.remove('close');
        }, 500); 
        delayBeforeModal = 700;
    } else if (type === 'envelope') {
        createBurst(startX, startY, ['✉️', '💖', '💌', '✨']);
        delayBeforeModal = 600;
    } else {
        delayBeforeModal = 200;
    }

    setTimeout(() => { overlay.classList.add('active'); card.classList.add('show-anim'); }, delayBeforeModal);
}

function createBurst(x, y, icons) {
    for (let i = 0; i < 25; i++) {
        const item = document.createElement('div');
        item.classList.add('burst-item');
        item.innerText = icons[Math.floor(Math.random() * icons.length)];
        item.style.left = x + 'px'; item.style.top = y + 'px';
        item.style.fontSize = (Math.random() * 1.5 + 1.5) + 'rem';
        item.style.setProperty('--tx', (Math.random() - 0.5) * 600 + 'px');
        item.style.setProperty('--ty', (Math.random() - 0.5) * 600 + 'px');
        item.style.setProperty('--rot', Math.random() * 360 + 'deg');
        document.body.appendChild(item);
        setTimeout(() => { item.remove(); }, 1200);
    }
}

function closeMemory() {
    document.getElementById('memory-modal').classList.remove('active');
    document.getElementById('modal-card').classList.remove('show-anim');
}

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
