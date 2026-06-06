let isBookOpened = false;
let currentStoryIndex = 0;
const stories = document.querySelectorAll('.dynamic-page');
const bookElement = document.getElementById('interactive-book');

function handleBookClick() {
    // لو الكتاب مقفول، افتحه أولاً وعش التجربة السينمائية
    if (!isBookOpened) {
        bookElement.classList.add('opened');
        isBookOpened = true;
        return; // نقف هنا عشان ميعملش قلب للصفحة في أول ضغطة
    }
    
    // لو الكتاب مفتوح بالفعل، اقلب الصفحات بنعومة
    nextStory();
}

function nextStory() {
    stories[currentStoryIndex].classList.remove('active');
    currentStoryIndex++;
    if (currentStoryIndex >= stories.length) {
        currentStoryIndex = 0;
    }
    stories[currentStoryIndex].classList.add('active');
}
