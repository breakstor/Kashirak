// =========================================================
// KASHIERK TUTORIAL PAGE
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

    // =====================================================
    // TOGGLE LESSON CONTENT
    // =====================================================

    const toggleButtons =
        document.querySelectorAll('.lesson-toggle');

    toggleButtons.forEach((button) => {

        button.addEventListener('click', () => {

            const lessonContent =
                button.nextElementSibling;

            const isActive =
                lessonContent.classList.contains('active');

            // =============================================
            // CLOSE ALL OTHER LESSONS
            // =============================================

            document
                .querySelectorAll('.lesson-content')
                .forEach((content) => {

                    content.classList.remove('active');
                });

            document
                .querySelectorAll('.lesson-toggle')
                .forEach((btn) => {

                    btn.textContent =
                        'عرض خطوات الشرح';
                });

            // =============================================
            // OPEN CURRENT LESSON
            // =============================================

            if (!isActive) {

                lessonContent.classList.add('active');

                button.textContent =
                    'إخفاء خطوات الشرح';
            }
        });
    });

    // =====================================================
    // SCROLL ANIMATION
    // =====================================================

    const cards =
        document.querySelectorAll('.video-card');

    const observer =
        new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = '1';

                        entry.target.style.transform =
                            'translateY(0)';
                    }
                });
            },

            {
                threshold: 0.15
            }
        );

    cards.forEach((card, index) => {

        card.style.opacity = '0';

        card.style.transform =
            'translateY(40px)';

        card.style.transition =
            `all 0.6s ease ${index * 0.1}s`;

        observer.observe(card);
    });

    // =====================================================
    // SMOOTH SCROLL FOR INTERNAL LINKS
    // =====================================================

    const internalLinks =
        document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach((link) => {

        link.addEventListener('click', (e) => {

            const targetId =
                link.getAttribute('href');

            if (targetId.length > 1) {

                e.preventDefault();

                const targetElement =
                    document.querySelector(targetId);

                if (targetElement) {

                    targetElement.scrollIntoView({

                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // =====================================================
    // HEADER SHADOW ON SCROLL
    // =====================================================

    const header =
        document.querySelector('.tutorial-header');

    window.addEventListener('scroll', () => {

        if (window.scrollY > 30) {

            header.style.boxShadow =
                '0 10px 30px rgba(0,0,0,0.08)';
        }

        else {

            header.style.boxShadow =
                'none';
        }
    });

    // =====================================================
    // AUTO CLOSE ON ESCAPE
    // =====================================================

    document.addEventListener('keydown', (event) => {

        if (event.key === 'Escape') {

            document
                .querySelectorAll('.lesson-content')
                .forEach((content) => {

                    content.classList.remove('active');
                });

            document
                .querySelectorAll('.lesson-toggle')
                .forEach((button) => {

                    button.textContent =
                        'عرض خطوات الشرح';
                });
        }
    });

    // =====================================================
    // ACTIVE VIDEO HIGHLIGHT
    // =====================================================

    const videoCards =
        document.querySelectorAll('.video-card');

    videoCards.forEach((card) => {

        card.addEventListener('mouseenter', () => {

            card.style.borderColor =
                'rgba(189,56,42,0.25)';
        });

        card.addEventListener('mouseleave', () => {

            card.style.borderColor =
                'rgba(0,0,0,0.05)';
        });
    });

});

// =========================================================
// END FILE
// =========================================================