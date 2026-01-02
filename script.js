// script.js - Vanilla JS for interactions
// - Hamburger menu (mobile-first)
// - Smooth scroll for internal links
// - Simple contact form simulation (no backend)
// - Lightbox for gallery/profile images
// - Lazy loading images (IntersectionObserver)
// - Mini quiz for kids
// - Small accessibility considerations (aria attributes)

// Wait for DOM
document.addEventListener('DOMContentLoaded', () => {
  // ---------- Hamburger / Navigation ----------
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('main-nav');

  function openNav() {
    nav.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    // prevent scroll when nav open on small screens
    document.body.style.overflow = 'hidden';
  }
  function closeNav() {
    nav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', (e) => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    if (expanded) closeNav(); else openNav();
  });

  // Close nav when clicking a link (mobile)
  document.querySelectorAll('#main-nav a').forEach(a => {
    a.addEventListener('click', () => {
      if (nav.classList.contains('open')) closeNav();
    });
  });

  // Close nav on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (nav.classList.contains('open')) closeNav();
      // close lightbox if open
      if (lightbox.getAttribute('aria-hidden') === 'false') closeLightbox();
    }
  });

  // ---------- Smooth scroll for internal links ----------
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior: 'smooth', block:'start'});
      }
    });
  });

  // ---------- Lazy load images ----------
  const lazyImgs = document.querySelectorAll('img.lazy, img[data-src]');
  if ('IntersectionObserver' in window && lazyImgs.length) {
    const imgObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.dataset.src || img.getAttribute('data-src');
          if (src) {
            img.src = src;
            img.classList.remove('lazy');
            img.removeAttribute('data-src');
          }
          obs.unobserve(img);
        }
      });
    }, {rootMargin: '50px 0px'});

    lazyImgs.forEach(img => imgObserver.observe(img));
  } else {
    // fallback: load immediately
    lazyImgs.forEach(img => {
      const src = img.dataset.src || img.getAttribute('data-src');
      if (src) img.src = src;
    });
  }

  // ---------- Lightbox ----------
  const lightbox = document.getElementById('lightbox');
  const lbImage = document.getElementById('lbImage');
  const lbCaption = document.getElementById('lbCaption');
  const lbClose = document.getElementById('lbClose');

  function openLightbox(src, alt) {
    lbImage.src = src;
    lbImage.alt = alt || '';
    lbCaption.textContent = alt || '';
    lightbox.setAttribute('aria-hidden', 'false');
    lbClose.focus();
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    lightbox.setAttribute('aria-hidden', 'true');
    lbImage.src = '';
    lbCaption.textContent = '';
    document.body.style.overflow = '';
  }
  lbClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Attach lightbox to profile/gallery images (delegation)
  document.addEventListener('click', (e) => {
    const el = e.target.closest('img');
    if (!el) return;
    // Only open if image has data-src or src and is inside profile/gallery area
    const inProfile = el.closest('.profile') || el.closest('.gallery-item');
    if (inProfile) {
      const src = el.src || el.dataset.src;
      const alt = el.alt || el.getAttribute('data-caption') || '';
      if (src) openLightbox(src, alt);
    }
  });

  // ---------- Contact form (simulate) ----------
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const msg = contactForm.message.value.trim();
      if (!name || !email || !msg) {
        formStatus.textContent = 'Бүх талбарыг гүйцэд бөглөнө үү.';
        return;
      }
      // Simulate sending (no backend)
      formStatus.textContent = 'Зурвас илгээгдлээ. Баярлалаа!';
      contactForm.reset();
      setTimeout(() => formStatus.textContent = '', 6000);
    });
  }

  // ---------- Mini Quiz ----------
  const quiz = document.getElementById('quiz');
  const qText = document.getElementById('qText');
  const qAnswers = document.getElementById('qAnswers');
  const qStart = document.getElementById('qStart');
  const qResult = document.getElementById('qResult');

  const questions = [
    {
      q: 'Уртын дуу юунаараа онцлог вэ?',
      a: ['Богино, хурдан', 'Урт, сунжирсан фраз', 'Гар утсаар бичигддэг'],
      correct: 1
    },
    {
      q: 'Уртын дууг юу дагаж ихэвчлэн тоглодог вэ?',
      a: ['Пианино', 'Морин хуур', 'Саксофон'],
      correct: 1
    },
    {
      q: 'Өвлөн тээгч гэж юу вэ?',
      a: ['Дууг үргэлжлүүлэн дамжуулагч', 'Цагийн тэмдэг', 'Зөвхөн сурагч'],
      correct: 0
    }
  ];

  let qi = 0;
  let score = 0;
  let inQuiz = false;

  function showQuestion(index) {
    const item = questions[index];
    qText.textContent = item.q;
    qAnswers.innerHTML = '';
    item.a.forEach((opt, i) => {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = opt;
      btn.addEventListener('click', () => {
        if (!inQuiz) return;
        // disable further clicks
        inQuiz = false;
        if (i === item.correct) {
          btn.classList.add('correct');
          score++;
          qResult.textContent = 'Зөв!';
        } else {
          btn.classList.add('wrong');
          qResult.textContent = 'Буруу';
          // highlight correct
          Array.from(qAnswers.querySelectorAll('button')).forEach((b, idx) => {
            if (idx === item.correct) b.classList.add('correct');
          });
        }
        qResult.setAttribute('aria-hidden', 'false');
        qStart.textContent = (index < questions.length - 1) ? 'Дараагийнх' : 'Дуусгах';
      });
      li.appendChild(btn);
      qAnswers.appendChild(li);
    });
    qResult.textContent = '';
    qResult.setAttribute('aria-hidden', 'true');
    qStart.textContent = (index === 0) ? 'Эхлэх' : 'Дараагийнх';
    inQuiz = true;
  }

  if (qStart) {
    qStart.addEventListener('click', () => {
      if (!inQuiz && qStart.textContent === 'Эхлэх') {
        qi = 0; score = 0;
        showQuestion(qi);
      } else if (!inQuiz && qStart.textContent === 'Дараагийнх') {
        qi++;
        if (qi < questions.length) {
          showQuestion(qi);
        } else {
          // finished
          qText.textContent = `Тест дууслаа! Таны оноо: ${score} / ${questions.length}`;
          qAnswers.innerHTML = '';
          qStart.textContent = 'Дахин эхлэх';
          qResult.textContent = '';
        }
      } else if (!inQuiz && qStart.textContent === 'Дуусгах') {
        qText.textContent = `Тест дууслаа! Таны оноо: ${score} / ${questions.length}`;
        qAnswers.innerHTML = '';
        qStart.textContent = 'Дахин эхлэх';
      } else if (qStart.textContent === 'Дахин эхлэх') {
        qi = 0; score = 0;
        showQuestion(qi);
      }
    });
  }

  // ---------- Accessibility helpers ----------
  // Focus visible polyfill: add class when keyboard used
  function handleFirstTab(e) {
    if (e.key === 'Tab') {
      document.body.classList.add('user-is-tabbing');
      window.removeEventListener('keydown', handleFirstTab);
      window.addEventListener('mousedown', handleMouseDownOnce);
    }
  }
  function handleMouseDownOnce() {
    document.body.classList.remove('user-is-tabbing');
    window.removeEventListener('mousedown', handleMouseDownOnce);
    window.addEventListener('keydown', handleFirstTab);
  }
  window.addEventListener('keydown', handleFirstTab);

  // ---------- Small utility: focus trap when nav open (optional) ----------
  // Keep simple: close nav on click outside for small screens
  document.addEventListener('click', (e) => {
    if (!nav.classList.contains('open')) return;
    if (e.target.closest('#main-nav') || e.target.closest('#hamburger')) return;
    closeNav();
  });

  // ---------- End of DOMContentLoaded ----------
});
