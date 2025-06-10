// Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }); 
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Fade in animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Form submission (removed since contact form is removed)
        // Dynamic typing effect for hero title
        const heroTitle = document.querySelector('.hero h1');
        const titleText = "Hi, I'm Sudeep Sakpal";
        let i = 0;
        
        function typeWriter() {
            if (i < titleText.length) {
                heroTitle.innerHTML = titleText.slice(0, i + 1) + '<span style="opacity: 0.7;">|</span>';
                i++;
                setTimeout(typeWriter, 100);
            } else {
                heroTitle.innerHTML = titleText;
            }
        }
        
        // Start typing effect after page load
        window.addEventListener('load', () => {
            setTimeout(typeWriter, 1000);
        });