document.addEventListener('DOMContentLoaded', () => {
    const AMAZON_BASE_URL = 'https://www.amazon.co.jp/dp/B0GY8549WX';
    const landingParams = new URLSearchParams(window.location.search);
    const landing = {
        source: landingParams.get('utm_source') || 'direct',
        medium: landingParams.get('utm_medium') || '',
        campaign: landingParams.get('utm_campaign') || '',
        referrer: document.referrer || '',
        path: window.location.pathname,
        ts: new Date().toISOString()
    };

    try {
        sessionStorage.setItem('kabukimono_landing', JSON.stringify(landing));
    } catch (error) {
        console.debug('Landing source unavailable', error);
    }

    function recordClick(eventName, href) {
        let storedLanding = landing;
        try {
            storedLanding = JSON.parse(sessionStorage.getItem('kabukimono_landing') || 'null') || landing;
        } catch (error) {
            console.debug('Landing source read unavailable', error);
        }

        const payload = {
            event: eventName,
            href,
            path: window.location.pathname,
            landing: storedLanding,
            ts: new Date().toISOString()
        };

        try {
            const key = 'kabukimono_clicks';
            const current = JSON.parse(localStorage.getItem(key) || '[]');
            current.push(payload);
            localStorage.setItem(key, JSON.stringify(current.slice(-50)));
        } catch (error) {
            console.debug('Click log unavailable', error);
        }

        window.dispatchEvent(new CustomEvent('kabukimono:click', { detail: payload }));
    }

    document.querySelectorAll('[data-track]').forEach(link => {
        link.addEventListener('click', () => {
            recordClick(link.dataset.track, link.href);
        });
    });

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

    function updateFloatingCta() {
        if (heroSection) {
            const heroHeight = heroSection.offsetHeight;
            const visiblePrimaryCta = [...document.querySelectorAll('.page .btn-premium')]
                .some(button => {
                    const rect = button.getBoundingClientRect();
                    return rect.top > 0 && rect.bottom < window.innerHeight - 16;
                });

            // Show only when the user has left the hero and no main CTA is already visible.
            if (snapContainer.scrollTop > heroHeight * 0.5 && !visiblePrimaryCta) {
                floatingCta.style.display = 'block';
            } else {
                floatingCta.style.display = 'none';
            }
        }
    }

    snapContainer.addEventListener('scroll', updateFloatingCta);
    updateFloatingCta();

    // Initial state for hero
    setTimeout(() => {
        if(heroSection) heroSection.classList.add('active');
    }, 100);

    window.KABUKIMONO = {
        amazonUrl: AMAZON_BASE_URL,
        getLanding: () => JSON.parse(sessionStorage.getItem('kabukimono_landing') || 'null'),
        getClickLog: () => JSON.parse(localStorage.getItem('kabukimono_clicks') || '[]')
    };
});
