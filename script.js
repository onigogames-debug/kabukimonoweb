document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.2
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const elementsToObserve = [
        document.querySelector('.hero'),
        document.querySelector('.content-split'),
        document.querySelector('.footer-wrap')
    ];

    elementsToObserve.forEach(el => {
        if (el) revealObserver.observe(el);
    });

    // Audio Control
    const audio = document.getElementById('bg-audio');
    const audioToggle = document.getElementById('audio-toggle');
    let isPlaying = false;

    audioToggle.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            audioToggle.innerHTML = '<i class="fas fa-volume-mute"></i> 音声なし';
            isPlaying = false;
        } else {
            audio.play().catch(e => console.log("Autoplay blocked: ", e));
            audioToggle.innerHTML = '<i class="fas fa-volume-up"></i> 音声あり';
            isPlaying = true;
        }
    });

    // Floating CTA visibility inside snap container
    const floatingCta = document.querySelector('.floating-cta');
    const snapContainer = document.querySelector('.snap-container');
    const heroSection = document.querySelector('.hero');

    snapContainer.addEventListener('scroll', () => {
        if (heroSection) {
            const heroHeight = heroSection.offsetHeight;
            // When user scrolls past first page
            if (snapContainer.scrollTop > heroHeight * 0.5) {
                floatingCta.style.display = 'block';
            } else {
                floatingCta.style.display = 'none';
            }
        }
    });

    // Initial state for hero
    setTimeout(() => {
        if(heroSection) heroSection.classList.add('active');
    }, 100);
});
