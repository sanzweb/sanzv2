const images = document.querySelectorAll('.fade-img');
let currentIndex = images.length - 1;
const totalImages = images.length;
const intervalTime = 5000; // 5 detik

function showNextImage() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % totalImages;
  images[currentIndex].classList.add('active');
}

setInterval(showNextImage, intervalTime);

const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('neon');
  } else {
    header.classList.remove('neon');
  }
});

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    // Cek jika href dimulai dengan '#' → anchor dalam halaman
    if (href.startsWith('#')) {
      e.preventDefault(); // Hanya cegah default untuk anchor scroll
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offset = document.getElementById('header').offsetHeight;
        const targetPosition = targetElement.offsetTop - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    }
    // Kalau bukan anchor (#), biarkan default (navigasi ke halaman baru)
  });
});


const words = ["Fresh Graduated", "Freelance", "Gaming"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const speed = 350;
  const target = document.getElementById("typing-text");

  function type() {
    const currentWord = words[wordIndex];
    const currentText = currentWord.substring(0, charIndex);

    target.textContent = currentText;

    if (!isDeleting && charIndex < currentWord.length) {
      charIndex++;
      setTimeout(type, speed);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(type, speed / 2);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        wordIndex = (wordIndex + 1) % words.length;
      }
      setTimeout(type, 1000); // jeda antar kata
    }
  }

  type();
  