/* ============================================================
   Wood-Biz — Landing page logic
   i18n (RU / EN / KO / ZH-CN) + form validation + submission
   Vanilla JS, no dependencies.
   ============================================================ */

(function () {
  "use strict";

  /* ---------------- Translations ----------------
     Business-style translations for all four languages.
     Key message: independent agents building trust between
     timber suppliers and buyers worldwide. Customs clearance
     is explicitly NOT part of the services. */
  const I18N = {
    ru: {
      "meta.title": "Wood-Biz — Мост доверия между поставщиками и покупателями древесины",
      "meta.description":
        "Wood-Biz: независимые агенты между поставщиками и покупателями лесоматериалов по всему миру. Агентирование сделок, инспектирование качества, документальное сопровождение (без таможенного оформления).",
      "og.title": "Wood-Biz — Мост доверия между поставщиками и покупателями древесины",
      "og.description":
        "Агентирование сделок, инспекция качества и документальное сопровождение. Поставщики и покупатели лесоматериалов по всему миру.",

      "hero.eyebrow": "Агентирование · Инспекция · Документация",
      "hero.title": "Wood-Biz — Мост доверия между поставщиками и покупателями древесины",
      "hero.subtitle":
        "Мы выступаем независимыми агентами, создающими основу для доверительных отношений между поставщиками и покупателями лесоматериалов по всему миру.",
      "cta.button": "Оставить заявку",

      "services.title": "Наши услуги",
      "services.s1.title": "Агентирование сделок",
      "services.s1.desc": "Обеспечиваем прозрачность и безопасность взаимодействия между сторонами.",
      "services.s2.title": "Инспектирование качества",
      "services.s2.desc": "Проверяем продукцию на соответствие заявленным стандартам.",
      "services.s3.title": "Документальное сопровождение",
      "services.s3.desc": "Готовим полный пакет документов для сделки (без таможенного оформления).",

      "contact.title": "Оставить заявку",
      "contact.subtitle": "Заполните форму — мы свяжемся с вами в течение 24 часов.",
      "contact.phone_label": "Или позвоните нам:",
      "form.name.label": "Имя",
      "form.name.placeholder": "Ваше имя",
      "form.email.label": "Email",
      "form.email.placeholder": "you@example.com",
      "form.phone.label": "Телефон",
      "form.phone.placeholder": "+7 999 040-22-46",
      "form.message.label": "Сообщение",
      "form.message.placeholder": "Кратко опишите ваш запрос",
      "form.submit": "Оставить заявку",
      "form.success": "Спасибо! Ваша заявка отправлена. Мы скоро свяжемся с вами.",

      "error.required": "Обязательное поле",
      "error.email": "Укажите корректный email",
      "error.phone": "Укажите корректный номер телефона",

      "footer.tagline": "Поставщики и покупатели лесоматериалов по всему миру",
      "footer.rights": "Все права защищены."
    },

    en: {
      "meta.title": "Wood-Biz — A Bridge of Trust Between Timber Suppliers and Buyers",
      "meta.description":
        "Wood-Biz: independent agents building trust between timber and lumber suppliers and buyers worldwide. Deal agency, quality inspection and documentation support (customs clearance not included).",
      "og.title": "Wood-Biz — A Bridge of Trust Between Timber Suppliers and Buyers",
      "og.description":
        "Deal agency, quality inspection and documentation support. Connecting timber suppliers and buyers worldwide.",

      "hero.eyebrow": "Deal Agency · Inspection · Documentation",
      "hero.title": "Wood-Biz — A Bridge of Trust Between Timber Suppliers and Buyers",
      "hero.subtitle":
        "We act as independent agents, creating the foundation for trusting relationships between lumber suppliers and buyers around the world.",
      "cta.button": "Submit Request",

      "services.title": "Our Services",
      "services.s1.title": "Deal Agency",
      "services.s1.desc": "We ensure transparency and security of interaction between the parties.",
      "services.s2.title": "Quality Inspection",
      "services.s2.desc": "We verify that products meet the declared standards.",
      "services.s3.title": "Documentation Support",
      "services.s3.desc": "We prepare the complete document package for the deal (customs clearance not included).",

      "contact.title": "Submit Request",
      "contact.subtitle": "Fill in the form — we will contact you within 24 hours.",
      "contact.phone_label": "Or call us:",
      "form.name.label": "Name",
      "form.name.placeholder": "Your name",
      "form.email.label": "Email",
      "form.email.placeholder": "you@example.com",
      "form.phone.label": "Phone",
      "form.phone.placeholder": "+1 555 000-0000",
      "form.message.label": "Message",
      "form.message.placeholder": "Briefly describe your request",
      "form.submit": "Submit Request",
      "form.success": "Thank you! Your request has been submitted. We will contact you soon.",

      "error.required": "This field is required",
      "error.email": "Please enter a valid email address",
      "error.phone": "Please enter a valid phone number",

      "footer.tagline": "Connecting lumber suppliers and buyers worldwide",
      "footer.rights": "All rights reserved."
    },

    ko: {
      "meta.title": "Wood-Biz — 목재 공급업체와 구매자 사이의 신뢰의 다리",
      "meta.description":
        "Wood-Biz: 전 세계 목재 공급업체와 구매자 간의 신뢰를 구축하는 독립 에이전시. 거래 에이전시, 품질 검사, 문서 지원 (통관 업무는 포함되지 않음).",
      "og.title": "Wood-Biz — 목재 공급업체와 구매자 사이의 신뢰의 다리",
      "og.description":
        "거래 에이전시, 품질 검사, 문서 지원. 전 세계 목재 공급업체와 구매자를 연결합니다.",

      "hero.eyebrow": "거래 에이전시 · 품질 검사 · 문서 지원",
      "hero.title": "Wood-Biz — 목재 공급업체와 구매자 사이의 신뢰의 다리",
      "hero.subtitle":
        "저희는 전 세계 임산물 공급업체와 구매자 간의 신뢰 관계 구축을 지원하는 독립 에이전시입니다.",
      "cta.button": "문의하기",

      "services.title": "서비스 소개",
      "services.s1.title": "거래 에이전시",
      "services.s1.desc": "당사자 간 거래의 투명성과 안전성을 보장합니다.",
      "services.s2.title": "품질 검사",
      "services.s2.desc": "제품이 명시된 기준에 부합하는지 검증합니다.",
      "services.s3.title": "문서 지원",
      "services.s3.desc": "거래에 필요한 전체 문서 패키지를 준비합니다 (통관 업무는 제외).",

      "contact.title": "문의하기",
      "contact.subtitle": "양식을 작성해 주시면 24시간 이내에 연락드리겠습니다.",
      "contact.phone_label": "전화 문의:",
      "form.name.label": "이름",
      "form.name.placeholder": "성함",
      "form.email.label": "이메일",
      "form.email.placeholder": "you@example.com",
      "form.phone.label": "전화번호",
      "form.phone.placeholder": "+82 10-0000-0000",
      "form.message.label": "메시지",
      "form.message.placeholder": "요청 사항을 간략히 기재해 주세요",
      "form.submit": "문의하기",
      "form.success": "감사합니다! 문의가 접수되었습니다. 곧 연락드리겠습니다.",

      "error.required": "필수 입력 항목입니다",
      "error.email": "올바른 이메일 주소를 입력해 주세요",
      "error.phone": "올바른 전화번호를 입력해 주세요",

      "footer.tagline": "전 세계 임산물 공급업체와 구매자를 연결합니다",
      "footer.rights": "모든 권리 보유."
    },

    zh: {
      "meta.title": "Wood-Biz — 木材供应商与采购商之间的信任之桥",
      "meta.description":
        "Wood-Biz：独立代理，连接全球木材供应商与采购商。交易代理、质量检验、文件支持（不含海关报关）。",
      "og.title": "Wood-Biz — 木材供应商与采购商之间的信任之桥",
      "og.description":
        "交易代理、质量检验和文件支持。连接全球木材供应商与采购商。",

      "hero.eyebrow": "交易代理 · 质量检验 · 文件支持",
      "hero.title": "Wood-Biz — 木材供应商与采购商之间的信任之桥",
      "hero.subtitle":
        "我们作为独立代理，为全球木材供应商与采购商建立互信合作的基础。",
      "cta.button": "提交申请",

      "services.title": "我们的服务",
      "services.s1.title": "交易代理",
      "services.s1.desc": "确保各方合作的透明度与安全性。",
      "services.s2.title": "质量检验",
      "services.s2.desc": "核验产品是否符合申报标准。",
      "services.s3.title": "文件支持",
      "services.s3.desc": "准备交易所需的完整文件包（不含海关报关）。",

      "contact.title": "提交申请",
      "contact.subtitle": "请填写表格 — 我们将在24小时内与您联系。",
      "contact.phone_label": "或直接致电：",
      "form.name.label": "姓名",
      "form.name.placeholder": "您的姓名",
      "form.email.label": "电子邮箱",
      "form.email.placeholder": "you@example.com",
      "form.phone.label": "电话",
      "form.phone.placeholder": "+86 138 0000 0000",
      "form.message.label": "留言",
      "form.message.placeholder": "请简要描述您的需求",
      "form.submit": "提交申请",
      "form.success": "谢谢！您的申请已提交，我们将尽快与您联系。",

      "error.required": "此字段为必填项",
      "error.email": "请输入有效的电子邮箱地址",
      "error.phone": "请输入有效的电话号码",

      "footer.tagline": "连接全球木材供应商与采购商",
      "footer.rights": "版权所有。"
    }
  };

  const LANG_NAMES = { ru: "ru", en: "en", ko: "ko", zh: "zh-CN" };
  const STORAGE_KEY = "woodbiz.lang";

  /* ---------------- Helpers ---------------- */
  let currentLang = "ru";

  function t(key) {
    return (I18N[currentLang] && I18N[currentLang][key]) || I18N.ru[key] || key;
  }

  function applyLanguage(lang) {
    if (!I18N[lang]) lang = "ru";
    currentLang = lang;

    document.documentElement.setAttribute("lang", LANG_NAMES[lang]);

    // Text nodes
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });

    // Placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });

    // Meta description
    document.querySelectorAll("[data-i18n-meta]").forEach(function (el) {
      el.setAttribute("content", t(el.getAttribute("data-i18n-meta")));
    });

    // Open Graph / Twitter
    document.querySelectorAll("[data-i18n-og]").forEach(function (el) {
      el.setAttribute("content", t(el.getAttribute("data-i18n-og")));
    });

    // Buttons state
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      const active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* private mode */ }

    refreshErrorMessages();
  }

  /* ---------------- Language switcher ---------------- */
  function initLangSwitch() {
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLanguage(btn.getAttribute("data-lang"));
      });
    });

    // Detect stored / browser language
    let lang = null;
    try { lang = localStorage.getItem(STORAGE_KEY); } catch (e) { /* ignore */ }
    if (!lang) {
      const nav = (navigator.language || "ru").toLowerCase();
      if (nav.indexOf("en") === 0) lang = "en";
      else if (nav.indexOf("ko") === 0) lang = "ko";
      else if (nav.indexOf("zh") === 0) lang = "zh";
      else lang = "ru";
    }
    applyLanguage(lang);
  }

  /* ---------------- Form validation ---------------- */
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const PHONE_RE = /^\+?[\d\s\-().]{7,20}$/;

  let form = null;

  function validators() {
    return {
      name: function (v) {
        if (!v.trim()) return t("error.required");
        return "";
      },
      email: function (v) {
        if (!v.trim()) return t("error.required");
        if (!EMAIL_RE.test(v.trim())) return t("error.email");
        return "";
      },
      phone: function (v) {
        if (!v.trim()) return t("error.required");
        if (!PHONE_RE.test(v.trim())) return t("error.phone");
        return "";
      },
      message: function (v) {
        if (!v.trim()) return t("error.required");
        return "";
      }
    };
  }

  function setFieldError(field, msg) {
    const group = field.closest(".form-group");
    const errEl = group.querySelector(".error-msg");
    group.classList.toggle("invalid", Boolean(msg));
    errEl.textContent = msg;
  }

  function validateField(field, rules) {
    const rule = rules[field.name];
    if (!rule) return true;
    const msg = rule(field.value);
    setFieldError(field, msg);
    return !msg;
  }

  function refreshErrorMessages() {
    if (!form) return;
    const rules = validators();
    form.querySelectorAll("input, textarea").forEach(function (field) {
      const group = field.closest(".form-group");
      if (group.classList.contains("invalid")) {
        const errEl = group.querySelector(".error-msg");
        // Re-run validator to translate the error message
        const rule = rules[field.name];
        if (rule) errEl.textContent = rule(field.value);
      }
    });
  }

  function initForm() {
    form = document.getElementById("request-form");
    if (!form) return;

    const successEl = document.getElementById("form-success");
    const fields = form.querySelectorAll("input, textarea");

    fields.forEach(function (field) {
      field.addEventListener("blur", function () {
        validateField(field, validators());
      });
      field.addEventListener("input", function () {
        const group = field.closest(".form-group");
        if (group.classList.contains("invalid")) {
          validateField(field, validators());
        }
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const rules = validators();
      let firstInvalid = null;

      fields.forEach(function (field) {
        const ok = validateField(field, rules);
        if (!ok && !firstInvalid) firstInvalid = field;
      });

      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }

      // Simulate successful submission (no backend on a stub page).
      // To integrate a real backend, replace this block with fetch()/XHR.
      form.querySelectorAll("input, textarea, button").forEach(function (el) {
        el.disabled = true;
      });
      successEl.hidden = false;

      setTimeout(function () {
        form.reset();
        form.querySelectorAll("input, textarea, button").forEach(function (el) {
          el.disabled = false;
        });
        successEl.hidden = true;
      }, 6000);
    });
  }

  /* ---------------- Footer year ---------------- */
  function initYear() {
    const el = document.getElementById("year");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  /* ---------------- Start ---------------- */
  document.addEventListener("DOMContentLoaded", function () {
    initLangSwitch();
    initForm();
    initYear();
  });
})();
