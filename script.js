'use strict';

/* ── Translations ──────────────────────────────────────────────── */
const translations = {
  fr: {
    nav_about:           'À propos',
    nav_specialties:     'Spécialités',
    nav_why:             'Pourquoi moi',
    nav_contact:         'Contact',
    lang_toggle:         'EN',

    hero_eyebrow:        'Spécialiste Disney certifié',
    hero_title:          'Votre spécialiste Disney au Canada',
    hero_sub:            'Des vacances magiques, planifiées sur mesure pour votre famille',
    hero_cta:            'Planifier mon voyage',

    about_heading:       'À propos de Jonathan',
    about_badge:         '2 ans d\'expérience · Nexion Canada',
    about_p1:            'Je suis conseiller en voyages spécialisé dans les voyages en famille — qu\'il s\'agisse de voyages multigénérationnels ou de voyages en famille. Mon objectif est de trouver la meilleure option de voyage pour votre famille.',
    about_p2:            'J\'ai une connaissance approfondie et une expérience personnelle avec Disney Cruise Line et Walt Disney World. Je vous conseille sur les heures d\'ouverture anticipées, les Lightning Lane, les plans de repas et les promotions Disney pour maximiser chaque moment.',
    about_affil:         'Agent indépendant avec Nexion Canada, affilié au Travel Leaders Network.',

    spec_heading:        'Mes spécialités',
    spec_wdw_label:      'Walt Disney World · Orlando, Floride',
    spec_wdw_title:      'Walt Disney World',
    spec_wdw_desc:       'J\'ai une expérience personnelle des parcs et des hôtels Disney World. Je vous aide à planifier chaque détail : Lightning Lane, heures d\'ouverture anticipées, plans de repas et promotions — pour que votre famille profite pleinement de chaque journée dans la magie.',
    spec_wdw_li1:        'Choix des hôtels Disney selon votre budget',
    spec_wdw_li2:        'Stratégie Lightning Lane et réservations de restaurants',
    spec_wdw_li3:        'Promotions canadiennes et forfaits Disney',
    spec_cruise_label:   'Disney Cruise Line · Caraïbes & au-delà',
    spec_cruise_title:   'Disney Cruise Line',
    spec_cruise_desc:    'J\'ai personnellement navigué sur Disney Cruise Line. Je connais chaque navire et chaque itinéraire. De la réservation jusqu\'au départ, je vous guide à chaque étape pour que vous montiez à bord en toute confiance.',
    spec_cruise_li1:     'Sélection du navire et de l\'itinéraire idéaux',
    spec_cruise_li2:     'Conseils sur les cabines, activités et escales',
    spec_cruise_li3:     'Préparation complète avant l\'embarquement',

    why_heading:         'Pourquoi choisir un conseiller Disney canadien?',
    why_1_title:         'Aucun frais supplémentaire',
    why_1_desc:          'Mes services sont entièrement gratuits pour vous. Disney me rémunère directement. Vous obtenez le même prix qu\'en réservant vous-même, avec l\'expertise en plus.',
    why_2_title:         'Promotions et offres canadiennes',
    why_2_desc:          'Je surveille les promotions Disney pour les Canadiens et je m\'assure que vous bénéficiez de toutes les économies disponibles au moment de votre réservation.',
    why_3_title:         'Planification personnalisée',
    why_3_desc:          'Chaque famille est unique. Je prends le temps de comprendre vos besoins, votre budget et vos attentes pour créer le voyage parfait — sans stress.',
    why_4_title:         'Expérience personnelle',
    why_4_desc:          'J\'ai vécu ces voyages. Je ne recommande que ce que je connais personnellement — Disney Cruise Line, Walt Disney World — pour des conseils fiables et authentiques.',

    contact_heading:         'Planifier votre voyage',
    contact_sub:             'Remplissez le formulaire ou écrivez-moi directement — je vous réponds rapidement.',
    contact_direct_heading:  'Contact direct',
    contact_email_label:     'Écrivez-moi par courriel :',
    contact_note:            'Je réponds généralement dans les 24 heures. Il me fera plaisir de discuter de votre prochain voyage en famille.',

    footer_indie:  'Agent indépendant avec Nexion Canada, affilié au Travel Leaders Network. Jonathan Voyages n\'est pas affilié à The Walt Disney Company ni à ses filiales.',
    footer_copy:   '© 2026 Jonathan Bourgon · Jonathan Voyages · L\'Orignal, Ontario, Canada',
  },

  en: {
    nav_about:           'About',
    nav_specialties:     'Specialties',
    nav_why:             'Why Me',
    nav_contact:         'Contact',
    lang_toggle:         'FR',

    hero_eyebrow:        'Certified Disney Specialist',
    hero_title:          'Your Disney Specialist in Canada',
    hero_sub:            'Magical vacations, personally tailored for your family',
    hero_cta:            'Plan my trip',

    about_heading:       'About Jonathan',
    about_badge:         '2 Years Experience · Nexion Canada',
    about_p1:            'I am a travel advisor focused on family travel — whether multi-generational trips or single-family getaways. My goal is to find the best fit for your family\'s next adventure.',
    about_p2:            'I have in-depth personal knowledge and hands-on experience with Disney Cruise Line and Walt Disney World. I advise on early park hours, Lightning Lane, dining plans, and Disney promotions to help you make the most of every moment.',
    about_affil:         'Independent agent with Nexion Canada, a Travel Leaders Network affiliate.',

    spec_heading:        'My Specialties',
    spec_wdw_label:      'Walt Disney World · Orlando, Florida',
    spec_wdw_title:      'Walt Disney World',
    spec_wdw_desc:       'I have first-hand experience with Disney World\'s parks and resorts. I help you plan every detail: Lightning Lane strategy, early park hours, dining plans, and promotions — so your family gets the most out of every magical day.',
    spec_wdw_li1:        'Disney hotel selection to match your budget',
    spec_wdw_li2:        'Lightning Lane strategy and restaurant reservations',
    spec_wdw_li3:        'Canadian promotions and Disney package deals',
    spec_cruise_label:   'Disney Cruise Line · Caribbean & beyond',
    spec_cruise_title:   'Disney Cruise Line',
    spec_cruise_desc:    'I have personally sailed on Disney Cruise Line and know each ship and itinerary in depth. From booking to boarding day, I guide you every step of the way so you set sail with complete confidence.',
    spec_cruise_li1:     'Selecting the right ship and itinerary for your family',
    spec_cruise_li2:     'Tips on cabins, activities, and port excursions',
    spec_cruise_li3:     'Full pre-departure preparation and guidance',

    why_heading:         'Why choose a Canadian Disney advisor?',
    why_1_title:         'No extra cost to you',
    why_1_desc:          'My services are completely free. Disney compensates me directly, so you pay the same price as booking yourself — but with expert guidance every step of the way.',
    why_2_title:         'Canadian promotions & offers',
    why_2_desc:          'I track Disney promotions available to Canadians so you never miss a saving. I make sure every booking takes full advantage of current offers.',
    why_3_title:         'Personalized planning',
    why_3_desc:          'Every family is different. I take the time to understand your needs, budget, and expectations to build the perfect stress-free trip.',
    why_4_title:         'First-hand experience',
    why_4_desc:          'I have lived these vacations myself. I only recommend what I know personally — Disney Cruise Line, Walt Disney World — so my advice is always reliable and genuine.',

    contact_heading:         'Plan your trip',
    contact_sub:             'Fill out the form or email me directly — I respond quickly.',
    contact_direct_heading:  'Direct contact',
    contact_email_label:     'Email me at:',
    contact_note:            'I typically reply within 24 hours. I would love to chat about your family\'s next big adventure.',

    footer_indie:  'Independent agent with Nexion Canada, a Travel Leaders Network affiliate. Jonathan Voyages is not affiliated with The Walt Disney Company or its subsidiaries.',
    footer_copy:   '© 2026 Jonathan Bourgon · Jonathan Voyages · L\'Orignal, Ontario, Canada',
  }
};

/* ── Apply language ─────────────────────────────────────────────── */
function applyLang(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  localStorage.setItem('jv-lang', lang);
}

/* ── Language toggle ─────────────────────────────────────────────── */
const toggleBtn = document.getElementById('lang-toggle');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    const current = document.documentElement.lang || 'fr';
    const next = current === 'fr' ? 'en' : 'fr';
    applyLang(next);
  });
}

/* ── Mobile nav ──────────────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ── Init ───────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('jv-lang') || 'fr';
  applyLang(saved);
});
