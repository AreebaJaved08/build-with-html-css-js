
        const counters = document.querySelectorAll('.counter');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const endValue = parseInt(target.getAttribute('data-target'), 10);
                    let currentValue = 0;

                    const interval = setInterval(() => {
                        target.textContent = currentValue;
                        if (currentValue >= endValue) {
                            target.textContent = endValue;
                            clearInterval(interval);
                        } else {
                            currentValue += Math.ceil(endValue / 50); // Adjust speed as needed
                        }
                    }, 20); // Adjust interval as needed
                }
            });
        }, { threshold: 0.5 }); // Adjust threshold as needed

        counters.forEach(counter => observer.observe(counter));

        /*for sliding effect*/

        document.addEventListener("DOMContentLoaded", function () {
            const prevButton = document.querySelector('.angles:first-child');
            const nextButton = document.querySelector('.angles:last-child');

            prevButton.addEventListener('click', function () {
                slide(-1);
            });
            nextButton.addEventListener('click', function () {
                slide(1);
            });
        });

        const textContainer = document.querySelector('.center_text');
        let currentPosition = 0;

        function slide(direction) {
            const containerWidth = textContainer.offsetWidth;
            const slideAmount = containerWidth * 0.8; // Adjust this value to control how much the text slides

            currentPosition += direction * slideAmount;
            const maxPosition = 0;
            const minPosition = Math.min(-1 * (textContainer.scrollWidth - containerWidth), 0);

            currentPosition = Math.max(minPosition, Math.min(maxPosition, currentPosition));

            textContainer.style.transform = `translateX(${currentPosition}px)`;
        }
        function showSidebar() {
            const sidebar = document.querySelector('.side_bar')
            sidebar.style.display = 'flex'
        }
        function hideSidebar() {
            const sidebar = document.querySelector('.side_bar')
            sidebar.style.display = 'none'
        }
    
