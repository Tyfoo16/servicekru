(function () {
  'use strict';

  const STORAGE_KEY = 'skru-lang';
  const SUPPORTED = ['en', 'ms', 'zh'];
  const LABELS = { en: 'EN', ms: 'BM', zh: '中文' };
  const HTML_LANG = { en: 'en', ms: 'ms', zh: 'zh-CN' };

  // Translation dictionary — populated by page-specific edits.
  // Keys are namespaced (e.g. "nav.home", "home.hero.title", "booking.form.name_label").
  const I18N = {
    en: {
      // ===== Shared: navigation =====
      'nav.home': 'Home',
      'nav.services': 'Services',
      'nav.book': 'Book Now',
      'nav.become': 'Become a Kru',
      'nav.cta': 'Book Service',
      'nav.lang_aria': 'Select language',

      // ===== Shared: footer =====
      'footer.tagline': 'Trusted home services by certified women professionals across Malaysia.',
      'footer.col_services': 'Services',
      'footer.col_company': 'Company',
      'footer.col_support': 'Support',
      'footer.link_cleaning': 'Cleaning',
      'footer.link_childcare': 'Childcare',
      'footer.link_eldercare': 'Elder Care',
      'footer.link_about': 'About Us',
      'footer.link_become': 'Become a Kru',
      'footer.link_contact': 'Contact',
      'footer.link_faq': 'FAQ',
      'footer.link_booking': 'Book a Service',
      'footer.link_terms': 'Terms',
      'footer.link_privacy': 'Privacy',
      'footer.copyright': '© 2026 ServiceKru. All rights reserved.',
    },

    ms: {
      'nav.home': 'Utama',
      'nav.services': 'Perkhidmatan',
      'nav.book': 'Tempah Sekarang',
      'nav.become': 'Jadi Kru',
      'nav.cta': 'Tempah Perkhidmatan',
      'nav.lang_aria': 'Pilih bahasa',

      'footer.tagline': 'Perkhidmatan rumah dipercayai oleh wanita profesional bertauliah di seluruh Malaysia.',
      'footer.col_services': 'Perkhidmatan',
      'footer.col_company': 'Syarikat',
      'footer.col_support': 'Sokongan',
      'footer.link_cleaning': 'Pembersihan',
      'footer.link_childcare': 'Penjagaan Anak',
      'footer.link_eldercare': 'Penjagaan Warga Emas',
      'footer.link_about': 'Tentang Kami',
      'footer.link_become': 'Jadi Kru',
      'footer.link_contact': 'Hubungi',
      'footer.link_faq': 'Soalan Lazim',
      'footer.link_booking': 'Tempah Perkhidmatan',
      'footer.link_terms': 'Terma',
      'footer.link_privacy': 'Privasi',
      'footer.copyright': '© 2026 ServiceKru. Hak cipta terpelihara.',
    },

    zh: {
      'nav.home': '首页',
      'nav.services': '服务',
      'nav.book': '立即预订',
      'nav.become': '成为 Kru',
      'nav.cta': '预订服务',
      'nav.lang_aria': '选择语言',

      'footer.tagline': '全马认证的女性专业团队,为您提供值得信赖的家居服务。',
      'footer.col_services': '服务项目',
      'footer.col_company': '关于公司',
      'footer.col_support': '客户支持',
      'footer.link_cleaning': '家居清洁',
      'footer.link_childcare': '儿童看护',
      'footer.link_eldercare': '长者护理',
      'footer.link_about': '关于我们',
      'footer.link_become': '成为 Kru',
      'footer.link_contact': '联络我们',
      'footer.link_faq': '常见问题',
      'footer.link_booking': '立即预订',
      'footer.link_terms': '条款',
      'footer.link_privacy': '隐私政策',
      'footer.copyright': '© 2026 ServiceKru. 版权所有。',
    },
  };

  // Expose for page-specific extension (each page can add I18N_EXTEND before this script).
  if (typeof window !== 'undefined' && window.I18N_EXTEND) {
    for (const lang of SUPPORTED) {
      Object.assign(I18N[lang], (window.I18N_EXTEND[lang] || {}));
    }
  }

  function detectLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED.includes(saved)) return saved;
    const nav = (navigator.language || 'en').toLowerCase();
    if (nav.startsWith('ms') || nav.startsWith('id')) return 'ms';
    if (nav.startsWith('zh')) return 'zh';
    return 'en';
  }

  function applyLang(lang) {
    if (!SUPPORTED.includes(lang)) lang = 'en';
    const dict = I18N[lang] || I18N.en;
    const enDict = I18N.en;
    document.documentElement.lang = HTML_LANG[lang];

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      const val = dict[key] != null ? dict[key] : enDict[key];
      if (val == null) return;
      const attr = el.getAttribute('data-i18n-attr');
      if (attr) {
        el.setAttribute(attr, val);
      } else {
        el.textContent = val;
      }
    });

    document.querySelectorAll('[data-lang-label]').forEach(function (el) {
      el.textContent = LABELS[lang];
    });
    document.querySelectorAll('.lang-menu li').forEach(function (li) {
      li.classList.toggle('active', li.getAttribute('data-lang') === lang);
    });

    localStorage.setItem(STORAGE_KEY, lang);
  }

  function closeAllMenus() {
    document.querySelectorAll('.lang-menu').forEach(function (m) { m.hidden = true; });
    document.querySelectorAll('.lang-current').forEach(function (b) {
      b.setAttribute('aria-expanded', 'false');
    });
  }

  function init() {
    applyLang(detectLang());

    document.querySelectorAll('.lang-switcher').forEach(function (sw) {
      const btn = sw.querySelector('.lang-current');
      const menu = sw.querySelector('.lang-menu');
      if (!btn || !menu) return;

      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        const willOpen = menu.hidden;
        closeAllMenus();
        menu.hidden = !willOpen;
        btn.setAttribute('aria-expanded', String(willOpen));
      });

      menu.querySelectorAll('li').forEach(function (li) {
        li.addEventListener('click', function (e) {
          e.stopPropagation();
          applyLang(li.getAttribute('data-lang'));
          closeAllMenus();
        });
      });
    });

    document.addEventListener('click', closeAllMenus);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeAllMenus();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
