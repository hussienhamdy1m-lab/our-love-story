let currentStoryIndex = 0;
const stories = document.querySelectorAll('.story-page');

function nextStory() {
    // إخفاء الصفحة الحالية بنعومة
    stories[currentStoryIndex].classList.remove('active');
    
    // الانتقال للفصل القادم
    currentStoryIndex++;
    
    // لو الحكايات خلصت نرجع نعيد من الأول
    if (currentStoryIndex >= stories.length) {
        currentStoryIndex = 0;
    }
    
    // إظهار الصفحة الجديدة بأنيميشن مريح للعين
    stories[currentStoryIndex].classList.add('active');
}
