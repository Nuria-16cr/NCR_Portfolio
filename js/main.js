/**
 * Portfolio — Smooth scroll, active nav, scroll animations, mobile menu
 */

(function () {
  'use strict';

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id === '#') return;
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Active section in nav
  var navLinks = document.querySelectorAll('.nav__link[data-section]');
  var sections = [];
  navLinks.forEach(function (link) {
    var id = link.getAttribute('data-section');
    var section = document.getElementById(id);
    if (section) sections.push({ id: id, section: section, link: link });
  });

  function setActiveSection() {
    var scrollY = window.scrollY;
    var headerHeight = document.getElementById('header').offsetHeight;
    var threshold = headerHeight + 100;

    for (var i = sections.length - 1; i >= 0; i--) {
      var top = sections[i].section.getBoundingClientRect().top + scrollY;
      if (scrollY >= top - threshold) {
        sections.forEach(function (s) { s.link.classList.remove('active'); });
        sections[i].link.classList.add('active');
        return;
      }
    }
    sections.forEach(function (s) { s.link.classList.remove('active'); });
  }

  window.addEventListener('scroll', function () {
    requestAnimationFrame(setActiveSection);
  });
  setActiveSection();

  // Scroll-triggered animations
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reducedMotion) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -100px 0px', threshold: 0 }
    );

    var hero = document.getElementById('hero');
    if (hero) {
      hero.classList.add('animate-in');
    }

    document.querySelectorAll('.section, .statement-bold').forEach(function (section) {
      observer.observe(section);
    });
  } else {
    document.getElementById('hero') && document.getElementById('hero').classList.add('animate-in');
    document.querySelectorAll('.section, .statement-bold').forEach(function (s) { 
      s.classList.add('animate-in'); 
    });
  }

  // Mobile menu
  var menuBtn = document.getElementById('menu-btn');
  var navList = document.getElementById('nav-list');
  if (menuBtn && navList) {
    menuBtn.addEventListener('click', function () {
      var open = navList.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open);
    });
    navList.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        navList.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
