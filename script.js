'use strict';

const translations = {
  fr: {
    nav_about: 'À propos',
    nav_destinations: 'Catégories',
    nav_why: 'Pourquoi moi',
    nav_contact: 'Contact',
    nav_home: 'Accueil',
    nav_overview: 'Aperçu',
    nav_included: 'Inclus',
    nav_bestfor: 'Idéal pour',
    lang_toggle: 'EN',

    hero_eyebrow: 'Conseiller voyages pour familles canadiennes',
    hero_title: 'Planifiez un voyage familial qui vous ressemble',
    hero_sub: 'Disney, Club Med, Sandals et séjours premium, pensés pour les familles canadiennes',
    hero_cta: 'Voir mes catégories de voyage',

    about_heading: 'À propos de Jonathan',
    about_badge: '2 ans expérience | Nexion Canada',
    about_p1: 'Je suis conseiller en voyages basé à L Orignal en Ontario. J accompagne les familles canadiennes pour des voyages sur mesure, des parcs Disney aux resorts tout inclus.',
    about_p2: 'Je vous guide dans la planification, le budget, les promotions et le choix du bon itinéraire, pour des vacances simples à réserver et agréables à vivre.',
    about_affil: 'Agent indépendant avec Nexion Canada, affilié au Travel Leaders Network.',

    dest_heading: 'Catégories de voyage',
    dest_disneyparks_title: 'Voyages Disney parcs pour Canadiens',
    dest_disneyparks_desc: 'Stratégie parcs, hôtels, restauration et conseils adaptés aux familles canadiennes.',
    dest_disneycruises_title: 'Croisières Disney pour Canadiens',
    dest_disneycruises_desc: 'Choix du navire, de la cabine et de l itinéraire, avec accompagnement avant départ.',
    dest_clubmed_title: 'Vacances Club Med pour Canadiens',
    dest_clubmed_desc: 'Resorts tout inclus, activités pour enfants et options adaptées à votre rythme.',
    dest_sandals_title: 'Vacances Sandals pour Canadiens',
    dest_sandals_desc: 'Séjours adultes en formule tout inclus, parfaits pour couples et lunes de miel.',
    dest_premium_title: 'Vacances familiales premium pour Canadiens',
    dest_premium_desc: 'Expériences familiales haut confort avec service attentionné et rythme détendu.',
    dest_card_cta: 'Ouvrir la page',

    why_heading: 'Pourquoi travailler avec moi',
    why_1_title: 'Accompagnement personnalisé',
    why_1_desc: 'Je prends le temps de comprendre vos priorités pour recommander des options réalistes et adaptées à votre famille.',
    why_2_title: 'Expertise orientée familles canadiennes',
    why_2_desc: 'Je tiens compte des promotions, des périodes de voyage et des besoins des voyageurs canadiens.',
    why_3_title: 'Planification claire',
    why_3_desc: 'Vous recevez un plan simple, étape par étape, pour réserver en confiance et partir l esprit tranquille.',
    why_4_title: 'Conseils basés sur l expérience',
    why_4_desc: 'Je recommande des expériences que je connais et des options qui apportent du confort aux familles.',

    contact_heading: 'Planifier votre voyage',
    contact_sub: 'Remplissez le formulaire ou écrivez moi directement, je vous réponds rapidement.',
    contact_direct_heading: 'Contact direct',
    contact_email_label: 'Écrivez moi par courriel',
    contact_note: 'Je réponds généralement dans les 24 heures. Il me fera plaisir de discuter de votre prochain voyage en famille.',
    form_placeholder_title: 'Formulaire Google à configurer',
    form_placeholder_text: 'Remplacez ce bloc par votre code intégration Google Forms avec iframe.',

    footer_indie: 'Agent indépendant avec Nexion Canada, affilié au Travel Leaders Network. Jonathan Voyages n est pas affilié à The Walt Disney Company ni à ses filiales.',
    footer_copy: '© 2026 Jonathan Bourgon | Jonathan Voyages | L Orignal, Ontario, Canada',

    lp_overview_heading: 'Aperçu',
    lp_included_heading: 'Ce que je planifie pour vous',
    lp_bestfor_heading: 'Idéal pour',
    lp_contact_heading: 'Parlons de votre projet',
    lp_contact_cta: 'Contacter Jonathan',
    lp_back_home: 'Retour vers la page principale',

    lp_dp_eyebrow: 'Destination famille',
    lp_dp_title: 'Voyages Disney parcs pour Canadiens',
    lp_dp_sub: 'Planification complète des parcs Disney pour des vacances fluides et bien organisées.',
    lp_dp_overview_text: 'Je vous accompagne pour choisir les bonnes dates, le bon hôtel et le bon rythme de journées dans les parcs. L objectif est simple, vivre la magie sans surcharge et sans stress.',
    lp_dp_inc1: 'Sélection hôtel Disney selon budget et style familial',
    lp_dp_inc2: 'Plan de journées parcs avec conseils Lightning Lane et repas',
    lp_dp_inc3: 'Optimisation des promotions accessibles aux Canadiens',
    lp_dp_best1: 'Familles qui veulent une première visite bien structurée',
    lp_dp_best2: 'Voyageurs qui veulent réduire les files et mieux gérer le temps',
    lp_dp_best3: 'Parents qui veulent profiter du voyage au lieu de tout gérer sur place',
    lp_dp_contact_text: 'Écrivez moi pour commencer votre plan de voyage Disney parcs pour le Canada.',

    lp_dc_eyebrow: 'Destination famille',
    lp_dc_title: 'Croisières Disney pour Canadiens',
    lp_dc_sub: 'Accompagnement de la réservation jusqu au jour embarquement, avec conseils concrets pour chaque étape.',
    lp_dc_overview_text: 'Je vous aide à choisir le navire, la cabine et l itinéraire qui conviennent à votre famille. Vous partez préparés, avec un plan clair pour profiter de la croisière dès le premier jour.',
    lp_dc_inc1: 'Comparaison des itinéraires selon vos priorités et votre budget',
    lp_dc_inc2: 'Conseils cabines, activités familles et escales',
    lp_dc_inc3: 'Préparation complète avant départ, documents, étapes et rappels',
    lp_dc_best1: 'Familles qui veulent découvrir Disney Cruise Line en confiance',
    lp_dc_best2: 'Voyageurs qui veulent éviter les oublis avant embarquement',
    lp_dc_best3: 'Parents qui veulent une organisation simple et rassurante',
    lp_dc_contact_text: 'Écrivez moi pour préparer votre prochaine croisière Disney au départ du Canada ou des États Unis.',

    lp_cm_eyebrow: 'Destination tout inclus',
    lp_cm_title: 'Vacances Club Med pour Canadiens',
    lp_cm_sub: 'Resorts Club Med pensés pour les familles qui veulent équilibre, activités et détente.',
    lp_cm_overview_text: 'Je vous aide à choisir le village Club Med qui correspond à vos attentes, que vous voyagiez avec jeunes enfants, ados ou en groupe multigénérationnel.',
    lp_cm_inc1: 'Comparatif des villages selon saison, ambiance et niveau confort',
    lp_cm_inc2: 'Conseils sur clubs enfants, activités sportives et restauration',
    lp_cm_inc3: 'Organisation transport et planification globale du séjour',
    lp_cm_best1: 'Familles qui veulent un séjour tout inclus simple à gérer',
    lp_cm_best2: 'Parents qui veulent activités pour enfants et temps repos pour adultes',
    lp_cm_best3: 'Groupes familiaux qui cherchent un cadre convivial et flexible',
    lp_cm_contact_text: 'Écrivez moi pour construire votre prochain séjour Club Med pour votre famille.',

    lp_sa_eyebrow: 'Destination tout inclus',
    lp_sa_title: 'Vacances Sandals pour Canadiens',
    lp_sa_sub: 'Séjours Sandals bien planifiés pour couples qui veulent détente, service et confort.',
    lp_sa_overview_text: 'Je vous guide dans le choix du resort Sandals selon vos préférences, plage, ambiance, restaurants et activités. Vous obtenez un séjour cohérent, sans décisions compliquées à la dernière minute.',
    lp_sa_inc1: 'Comparaison des resorts Sandals selon style et budget',
    lp_sa_inc2: 'Conseils chambres, expériences incluses et options romantiques',
    lp_sa_inc3: 'Planification complète avant départ et recommandations pratiques',
    lp_sa_best1: 'Couples qui veulent un séjour adulte tout inclus',
    lp_sa_best2: 'Voyageurs qui veulent une lune de miel organisée avec soin',
    lp_sa_best3: 'Clients qui veulent service constant et expérience confortable',
    lp_sa_contact_text: 'Écrivez moi pour préparer vos vacances Sandals avec un plan précis et adapté.',

    lp_pf_eyebrow: 'Destination premium',
    lp_pf_title: 'Vacances familiales premium pour Canadiens',
    lp_pf_sub: 'Expériences haut confort pour familles qui veulent un rythme serein et un service attentionné.',
    lp_pf_overview_text: 'Je conçois des séjours premium où chaque détail est aligné avec votre style de voyage. Le but est de profiter en famille avec plus de confort, moins de friction et plus de temps de qualité.',
    lp_pf_inc1: 'Sélection destinations, hôtels et suites avec standards premium',
    lp_pf_inc2: 'Itinéraire équilibré entre activités familles et périodes repos',
    lp_pf_inc3: 'Coordination complète pour une expérience fluide du départ au retour',
    lp_pf_best1: 'Familles qui veulent confort élevé et service constant',
    lp_pf_best2: 'Parents qui veulent du temps de qualité plutôt que gérer la logistique',
    lp_pf_best3: 'Voyageurs qui recherchent une expérience familiale plus raffinée',
    lp_pf_contact_text: 'Écrivez moi pour bâtir votre prochain séjour familial premium selon vos priorités.'
  },
  en: {
    nav_about: 'About',
    nav_destinations: 'Categories',
    nav_why: 'Why Me',
    nav_contact: 'Contact',
    nav_home: 'Home',
    nav_overview: 'Overview',
    nav_included: 'Included',
    nav_bestfor: 'Best for',
    lang_toggle: 'FR',

    hero_eyebrow: 'Travel advisor for Canadian families',
    hero_title: 'Plan a family trip that fits your style',
    hero_sub: 'Disney, Club Med, Sandals, and premium trips designed for Canadian families',
    hero_cta: 'See my travel categories',

    about_heading: 'About Jonathan',
    about_badge: '2 years experience | Nexion Canada',
    about_p1: 'I am a travel advisor based in L Orignal, Ontario. I support Canadian families with custom vacations, from Disney parks to all inclusive resorts.',
    about_p2: 'I guide you through planning, budget, promotions, and itinerary choices so your vacation is easy to book and enjoyable to live.',
    about_affil: 'Independent agent with Nexion Canada, a Travel Leaders Network affiliate.',

    dest_heading: 'Travel categories',
    dest_disneyparks_title: 'Disney park travel for Canadians',
    dest_disneyparks_desc: 'Park strategy, resorts, dining, and practical guidance for Canadian families.',
    dest_disneycruises_title: 'Disney cruises for Canadians',
    dest_disneycruises_desc: 'Support for ship, stateroom, and itinerary selection with pre departure guidance.',
    dest_clubmed_title: 'Club Med vacations for Canadians',
    dest_clubmed_desc: 'All inclusive resorts, kid friendly activities, and options matched to your pace.',
    dest_sandals_title: 'Sandals vacations for Canadians',
    dest_sandals_desc: 'Adult all inclusive stays that work well for couples and honeymoons.',
    dest_premium_title: 'Premium family vacations for Canadians',
    dest_premium_desc: 'High comfort family experiences with thoughtful service and relaxed pacing.',
    dest_card_cta: 'Open page',

    why_heading: 'Why work with me',
    why_1_title: 'Personal support',
    why_1_desc: 'I take time to understand your priorities and recommend practical options that match your family.',
    why_2_title: 'Canadian family focused expertise',
    why_2_desc: 'I account for promotions, travel timing, and priorities common to Canadian travelers.',
    why_3_title: 'Clear planning',
    why_3_desc: 'You get a simple step by step plan so you can book with confidence and travel with peace of mind.',
    why_4_title: 'Experience based advice',
    why_4_desc: 'I recommend experiences I know and options that bring comfort to families.',

    contact_heading: 'Plan your trip',
    contact_sub: 'Complete the form or email me directly, I respond quickly.',
    contact_direct_heading: 'Direct contact',
    contact_email_label: 'Email me',
    contact_note: 'I usually reply within 24 hours. I would be happy to discuss your next family trip.',
    form_placeholder_title: 'Google Form to configure',
    form_placeholder_text: 'Replace this block with your Google Forms iframe embed code.',

    footer_indie: 'Independent agent with Nexion Canada, a Travel Leaders Network affiliate. Jonathan Voyages is not affiliated with The Walt Disney Company or its subsidiaries.',
    footer_copy: '© 2026 Jonathan Bourgon | Jonathan Voyages | L Orignal, Ontario, Canada',

    lp_overview_heading: 'Overview',
    lp_included_heading: 'What I plan for you',
    lp_bestfor_heading: 'Best for',
    lp_contact_heading: 'Let us discuss your trip',
    lp_contact_cta: 'Contact Jonathan',
    lp_back_home: 'Back to main page',

    lp_dp_eyebrow: 'Family destination',
    lp_dp_title: 'Disney park travel for Canadians',
    lp_dp_sub: 'Complete Disney park planning for smooth and organized vacations.',
    lp_dp_overview_text: 'I help you choose the right dates, resort, and daily park rhythm. The goal is simple, enjoy the magic without overload and without stress.',
    lp_dp_inc1: 'Disney resort selection based on budget and family style',
    lp_dp_inc2: 'Daily park planning with Lightning Lane and dining guidance',
    lp_dp_inc3: 'Optimization of promotions available to Canadians',
    lp_dp_best1: 'Families who want a strong plan for a first visit',
    lp_dp_best2: 'Travelers who want to reduce lines and manage time better',
    lp_dp_best3: 'Parents who want to enjoy the trip instead of managing everything onsite',
    lp_dp_contact_text: 'Email me to start planning your Disney park trip for Canada.',

    lp_dc_eyebrow: 'Family destination',
    lp_dc_title: 'Disney cruises for Canadians',
    lp_dc_sub: 'Support from booking to embarkation day with practical guidance at every step.',
    lp_dc_overview_text: 'I help you choose the ship, stateroom, and itinerary that fit your family. You leave prepared with a clear plan so you can enjoy your cruise from day one.',
    lp_dc_inc1: 'Itinerary comparison based on priorities and budget',
    lp_dc_inc2: 'Advice on staterooms, family activities, and ports',
    lp_dc_inc3: 'Complete pre departure preparation, documents, steps, and reminders',
    lp_dc_best1: 'Families who want to discover Disney Cruise Line with confidence',
    lp_dc_best2: 'Travelers who want to avoid pre embarkation mistakes',
    lp_dc_best3: 'Parents who want simple and reassuring organization',
    lp_dc_contact_text: 'Email me to prepare your next Disney cruise from Canada or the United States.',

    lp_cm_eyebrow: 'All inclusive destination',
    lp_cm_title: 'Club Med vacations for Canadians',
    lp_cm_sub: 'Club Med resorts for families who want balance, activities, and rest.',
    lp_cm_overview_text: 'I help you select the Club Med village that fits your expectations whether you travel with young children, teens, or a multi generational group.',
    lp_cm_inc1: 'Village comparison by season, atmosphere, and comfort level',
    lp_cm_inc2: 'Guidance on kids clubs, sports activities, and dining',
    lp_cm_inc3: 'Transport organization and overall trip planning',
    lp_cm_best1: 'Families who want an easy to manage all inclusive vacation',
    lp_cm_best2: 'Parents who want kids activities and rest time for adults',
    lp_cm_best3: 'Family groups seeking a social and flexible setting',
    lp_cm_contact_text: 'Email me to build your next Club Med stay for your family.',

    lp_sa_eyebrow: 'All inclusive destination',
    lp_sa_title: 'Sandals vacations for Canadians',
    lp_sa_sub: 'Well planned Sandals stays for couples who want rest, service, and comfort.',
    lp_sa_overview_text: 'I guide you in choosing the Sandals resort that matches your preferences for beach, atmosphere, dining, and activities. You get a coherent stay with fewer last minute decisions.',
    lp_sa_inc1: 'Sandals resort comparison by style and budget',
    lp_sa_inc2: 'Guidance on room categories, included experiences, and romantic options',
    lp_sa_inc3: 'Complete pre departure planning and practical recommendations',
    lp_sa_best1: 'Couples who want an adults only all inclusive stay',
    lp_sa_best2: 'Travelers planning a honeymoon with strong organization',
    lp_sa_best3: 'Clients who want consistent service and comfort',
    lp_sa_contact_text: 'Email me to prepare your Sandals vacation with a precise and practical plan.',

    lp_pf_eyebrow: 'Premium destination',
    lp_pf_title: 'Premium family vacations for Canadians',
    lp_pf_sub: 'High comfort experiences for families who want calm pacing and thoughtful service.',
    lp_pf_overview_text: 'I design premium trips where every detail aligns with your travel style. The objective is family enjoyment with more comfort, less friction, and more quality time.',
    lp_pf_inc1: 'Destination, hotel, and suite selection with premium standards',
    lp_pf_inc2: 'Balanced itinerary with family activities and rest periods',
    lp_pf_inc3: 'Full coordination for a smooth experience from departure to return',
    lp_pf_best1: 'Families who want elevated comfort and consistent service',
    lp_pf_best2: 'Parents who want quality time instead of handling logistics',
    lp_pf_best3: 'Travelers seeking a more refined family experience',
    lp_pf_contact_text: 'Email me to build your next premium family stay around your priorities.'
  }
};

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

const toggleBtn = document.getElementById('lang-toggle');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    const current = document.documentElement.lang || 'fr';
    const next = current === 'fr' ? 'en' : 'fr';
    applyLang(next);
  });
}

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', String(open));
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('jv-lang') || 'fr';
  applyLang(saved);
});
