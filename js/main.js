/**
 * American-European Media Association
 * Main JavaScript - Language Switching & Interactions
 */

// Language translations
const translations = {
  en: {
    // Navigation
    'nav_home': 'Home',
    'nav_about': 'About',
    'nav_board': 'Board',
    'nav_mission': 'Mission',
    'nav_activities': 'Activities',
    'nav_contact': 'Contact',

    // Hero Section
    'hero_title': 'American-European Media Association',
    'hero_subtitle': 'AEMA',
    'hero_date': 'Founded: July 25, 2022 | British Columbia, Canada',
    'hero_tagline': '"Pioneering the Future of Media with AI, XR & Blockchain"',
    'hero_learn_more': 'Learn More',
    'hero_contact_us': 'Contact Us',

    // About Section
    'about_title': 'About Us',
    'about_subtitle': 'Advancing media innovation through cutting-edge technology',
    'about_card1_title': 'AI-Powered Media',
    'about_card1_text': 'Harnessing artificial intelligence to transform content creation, distribution, and consumption across the media landscape.',
    'about_card2_title': 'Immersive XR Experiences',
    'about_card2_text': 'Creating breakthrough virtual, augmented, and mixed reality experiences that redefine audience engagement.',
    'about_card3_title': 'Blockchain Innovation',
    'about_card3_text': 'Leveraging decentralized technology to ensure content authenticity, fair compensation, and transparent rights management.',

    // Board Section
    'board_title': 'Board of Directors',
    'board_subtitle': 'Leading with vision and experience',

    // Mission Section
    'mission_title': 'Our Mission',
    'mission_content': 'The Association is organized exclusively for charitable and educational purposes. Specifically, the Association is dedicated to advancing the media industry through the research, development, and application of cutting-edge technologies including Artificial Intelligence, Extended Reality (XR), and Blockchain.',
    'mission_quote': '"Promoting the long-term development and direct benefits of the media industry in North America and Europe through AI, XR, blockchain, and other advanced technologies."',
    'mission_address_label': 'Registered Address',
    'mission_address': '1555 22nd Street, West Vancouver BC V7V 4E1, British Columbia, Canada',

    // Activities Section
    'activities_title': 'Our Activities',
    'activities_subtitle': 'How we drive media innovation',
    'activity1_title': 'AI Integration',
    'activity1_list': [
      'AI-powered content creation tools',
      'Machine learning for audience analytics',
      'Natural language processing for media',
      'Automated content optimization'
    ],
    'activity2_title': 'XR Development',
    'activity2_list': [
      'Virtual reality production pipelines',
      'Augmented reality applications',
      'Mixed reality storytelling platforms',
      'Immersive entertainment experiences'
    ],
    'activity3_title': 'Blockchain Solutions',
    'activity3_list': [
      'NFT and digital asset management',
      'Smart contracts for creators',
      'Decentralized content distribution',
      'Transparent royalty tracking'
    ],

    // Contact Section
    'contact_title': 'Contact Us',
    'contact_subtitle': 'Get in touch with us',
    'contact_email_label': 'Email',
    'contact_email': 'info@aemediaassociation.org',
    'contact_hours_label': 'Business Hours',
    'contact_hours': 'Monday - Friday: 9:00 AM - 6:00 PM (PST)',
    'contact_location_label': 'Location',
    'contact_location': 'British Columbia, Canada',

    // Footer
    'footer_text': 'American-European Media Association. All rights reserved.'
  },
  zh: {
    // Navigation
    'nav_home': '首页',
    'nav_about': '关于我们',
    'nav_board': '董事会',
    'nav_mission': '使命',
    'nav_activities': '活动',
    'nav_contact': '联系我们',

    // Hero Section
    'hero_title': '欧美媒体协会',
    'hero_subtitle': 'American-European Media Association',
    'hero_date': '成立日期：2022年7月25日 | 加拿大不列颠哥伦比亚省',
    'hero_tagline': '"以AI、XR和区块链引领媒体未来"',
    'hero_learn_more': '了解更多',
    'hero_contact_us': '联系我们',

    // About Section
    'about_title': '关于我们',
    'about_subtitle': '通过前沿技术推动媒体创新',
    'about_card1_title': 'AI驱动媒体',
    'about_card1_text': '运用人工智能改变媒体领域的内容创作、分发和消费方式。',
    'about_card2_title': '沉浸式XR体验',
    'about_card2_text': '创造突破性的虚拟现实、增强现实和混合现实体验，重新定义观众参与方式。',
    'about_card3_title': '区块链创新',
    'about_card3_text': '利用去中心化技术确保内容真实性、公平报酬和透明的版权管理。',

    // Board Section
    'board_title': '董事会成员',
    'board_subtitle': '以远见和经验引领协会发展',

    // Mission Section
    'mission_title': '我们的使命',
    'mission_content': '本协会专为慈善和教育目的而组织。具体而言，本协会致力于通过人工智能、扩展现实(XR)和区块链等前沿技术的研究、开发和应用，推动媒体行业发展。',
    'mission_quote': '"通过AI、XR、区块链等先进技术，促进北美和欧洲地区媒体行业的长期发展与直接利益。"',
    'mission_address_label': '注册地址',
    'mission_address': '加拿大不列颠哥伦比亚省，西温哥华V7V 4E1，22街1555号',

    // Activities Section
    'activities_title': '主要活动',
    'activities_subtitle': '我们如何推动媒体创新',
    'activity1_title': 'AI融合',
    'activity1_list': [
      'AI驱动的内容创作工具',
      '用于受众分析的机器学习',
      '媒体自然语言处理',
      '自动化内容优化'
    ],
    'activity2_title': 'XR开发',
    'activity2_list': [
      '虚拟现实制作流程',
      '增强现实应用',
      '混合现实叙事平台',
      '沉浸式娱乐体验'
    ],
    'activity3_title': '区块链方案',
    'activity3_list': [
      'NFT和数字资产管理',
      '创作者智能合约',
      '去中心化内容分发',
      '透明版税追踪'
    ],

    // Contact Section
    'contact_title': '联系我们',
    'contact_subtitle': '与我们取得联系',
    'contact_email_label': '电子邮箱',
    'contact_email': 'info@aemediaassociation.org',
    'contact_hours_label': '办公时间',
    'contact_hours': '周一至周五: 上午9点 - 下午6点 (太平洋时间)',
    'contact_location_label': '所在地',
    'contact_location': '加拿大不列颠哥伦比亚省',

    // Footer
    'footer_text': '欧美媒体协会 版权所有'
  }
};

// Current language state
let currentLang = 'en';

// DOM Elements
const langEnBtn = document.getElementById('lang-en');
const langZhBtn = document.getElementById('lang-zh');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('nav ul');

/**
 * Initialize the website
 */
function init() {
  // Load saved language preference
  const savedLang = localStorage.getItem('preferred-lang');
  if (savedLang && (savedLang === 'en' || savedLang === 'zh')) {
    currentLang = savedLang;
  } else {
    // Auto-detect browser language
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('zh')) {
      currentLang = 'zh';
    }
  }

  // Apply language
  applyLanguage(currentLang);

  // Event Listeners
  if (langEnBtn) {
    langEnBtn.addEventListener('click', () => switchLanguage('en'));
  }
  if (langZhBtn) {
    langZhBtn.addEventListener('click', () => switchLanguage('zh'));
  }

  // Mobile menu toggle
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerOffset = 70;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Close mobile menu if open
        if (navMenu) {
          navMenu.classList.remove('active');
        }
      }
    });
  });

  // Scroll-based navigation highlighting
  highlightNavOnScroll();

  // Header shadow on scroll
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    } else {
      header.style.boxShadow = 'none';
    }
  });
}

/**
 * Switch language
 * @param {string} lang - 'en' or 'zh'
 */
function switchLanguage(lang) {
  if (lang === currentLang) return;

  currentLang = lang;
  localStorage.setItem('preferred-lang', lang);
  applyLanguage(lang);

  // Update URL for bookmarking (optional)
  const url = new URL(window.location);
  url.searchParams.set('lang', lang);
  window.history.pushState({}, '', url);
}

/**
 * Apply language to the page
 * @param {string} lang - 'en' or 'zh'
 */
function applyLanguage(lang) {
  // Update document language
  document.documentElement.lang = lang;

  // Update language buttons
  if (langEnBtn) {
    langEnBtn.classList.toggle('active', lang === 'en');
  }
  if (langZhBtn) {
    langZhBtn.classList.toggle('active', lang === 'zh');
  }

  // Update all translatable elements
  const translatableElements = document.querySelectorAll('[data-i18n]');
  translatableElements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      // Handle different element types
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else if (el.tagName === 'UL' || el.tagName === 'OL') {
        // For lists, we need special handling
        const listKey = el.getAttribute('data-i18n-list');
        if (listKey && translations[lang][listKey]) {
          el.innerHTML = translations[lang][listKey]
            .map(item => `<li>${item}</li>`)
            .join('');
        }
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  // Handle list items with data-i18n-key attribute
  document.querySelectorAll('[data-i18n-key]').forEach(el => {
    const key = el.getAttribute('data-i18n-key');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

/**
 * Toggle mobile menu
 */
function toggleMobileMenu() {
  if (navMenu) {
    navMenu.classList.toggle('active');
  }

  // Animate hamburger menu
  const spans = mobileMenuBtn.querySelectorAll('span');
  mobileMenuBtn.classList.toggle('open');
}

/**
 * Highlight navigation based on scroll position
 */
function highlightNavOnScroll() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  function highlightLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`nav a[href="#${sectionId}"]`);

      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach(link => link.classList.remove('active'));
          navLink.classList.add('active');
        }
      }
    });
  }

  window.addEventListener('scroll', highlightLink);
}

/**
 * Get current language
 * @returns {string}
 */
function getCurrentLang() {
  return currentLang;
}

/**
 * Get translation by key
 * @param {string} key - Translation key
 * @returns {string}
 */
function t(key) {
  if (translations[currentLang] && translations[currentLang][key]) {
    return translations[currentLang][key];
  }
  // Fallback to English
  if (translations.en[key]) {
    return translations.en[key];
  }
  return key;
}

// Make functions globally available
window.switchLanguage = switchLanguage;
window.getCurrentLang = getCurrentLang;
window.t = t;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);
