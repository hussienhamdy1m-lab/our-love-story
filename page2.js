let currentClassIndex = 0;
// بنجيب كل الصفحات المرصوصة جوة الكتاب
const pages = document.querySelectorAll('.page');

function flipPage() {
    // لو لسه مخلصناش صفحات الكتاب كلها
    if (currentClassIndex < pages.length) {
        // نقلب الصفحة الحالية لورا (بإضافة كلاس الـ CSS)
        pages[currentClassIndex].classList.add('flipped');
        
        // نرفع الـ Z-Index للصفحة اللي اتقلبت عشان متبوظش ترتيب الرؤية
        pages[currentClassIndex].style.zIndex = currentClassIndex;
        
        currentClassIndex++;
    } else {
        // لو الكتاب خلص وعايزة تقفله خالص من الأول وتفتحه تاني (ريست)
        for (let i = 0; i < pages.length; i++) {
            pages[i].classList.remove('flipped');
            // بنرجع الـ zIndex للوضع الأصلي (الغلاف هو اللي فوق)
            pages[i].style.zIndex = pages.length - i;
        }
        currentClassIndex = 0;
    }
}

// دالة مبدئية لترتيب صفحات الكتاب فوق بعضها في الأول
function initBook() {
    for (let i = 0; i < pages.length; i++) {
        // الغلاف (الصفحة 0) بياخد أعلى z-index، والصفحة اللي بعدها أقل، وهكذا
        pages[i].style.zIndex = pages.length - i;
    }
}

// تشغيل الترتيب المبدئي
initBook();
