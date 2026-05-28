// انتظار تحميل محتوى الصفحة بالكامل
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('slider');
    const slides = document.querySelectorAll('.slider img');
    
    // إعدادات السلايدر
    let currentIndex = 0;
    const totalSlides = slides.length;
    const intervalTime = 3000; // التغيير كل 3 ثواني

    /**
     * وظيفة تحريك السلايدر
     */
    function updateSlider() {
        // في المواقع التي تستخدم dir="rtl"، المتصفح يتعامل مع المحاور بشكل مختلف
        // القيمة index * 100 تعني تحريك السلايدر بنسبة مئوية بناءً على رقم الصورة
        const movePercentage = currentIndex * 100;
        slider.style.transform = `translateX(${movePercentage}%)`;
    }

    /**
     * الانتقال للصورة التالية
     */
    function nextSlide() {
        currentIndex++;
        
        // إذا وصلنا لآخر صورة، نعود للبداية
        if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }
        
        updateSlider();
    }

    // تشغيل الحركة التلقائية
    let slideInterval = setInterval(nextSlide, intervalTime);

    // تحسين: إيقاف الحركة مؤقتاً عند وضع الماوس على الهاتف (اختياري)
    const phoneContainer = document.querySelector('.phone-container');
    if (phoneContainer) {
        phoneContainer.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });

        phoneContainer.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, intervalTime);
        });
    }

    // معالجة الأخطاء في حال عدم تحميل الصور (اختياري)
    slides.forEach(img => {
        img.onerror = function() {
            console.error("فشل في تحميل الصورة: " + this.src);
            this.style.display = 'none'; // إخفاء الصورة المكسورة
        };
    });
});
