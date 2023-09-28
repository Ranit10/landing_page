let currentIndex = 0;
        const slides = document.querySelectorAll('.slider img');
        const slider = document.querySelector('.slider');
        const intervalDuration = 3000; // Change slide every 3 seconds (adjust as needed)

        function showSlide(index) {
            slider.style.transform = `translateX(-${index * 100}%)`;
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }

        function autoSlide() {
            nextSlide();
        }

        setInterval(autoSlide, intervalDuration); // Automatically change slide

        showSlide(currentIndex);