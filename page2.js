let currentStoryIndex = 0;
const stories = document.querySelectorAll('.story-page');

function nextStory() {
    stories[currentStoryIndex].classList.remove('active');
    currentStoryIndex++;
    if (currentStoryIndex >= stories.length) {
        currentStoryIndex = 0;
    }
    stories[currentStoryIndex].classList.add('active');
}

// التحكم في الدخول السينمائي للكتاب
function openBookTransition() {
    const closedScene = document.getElementById('closed-book-scene');
    const closedImg = document.querySelector('.closed-book-img');
    const clickHint = document.querySelector('.click-hint');
    const openScene = document.getElementById('open-book-scene');

    // إخفاء النص
    clickHint.style.opacity = '0';
    
    // عمل زووم سينمائي للصورة كأننا بندخل جواها
    closedImg.classList.add('dive-into-book');

    // بعد ثانية ونص (مدة الزووم)، نظهر الكتاب المفتوح
    setTimeout(() => {
        closedScene.style.display = 'none'; 
        openScene.style.display = 'flex'; 
        void openScene.offsetWidth; // تحديث فوري للشاشة
        openScene.style.opacity = '1'; 
    }, 1200);
}
