/* ============================================================
   Wood-Biz — Landing page logic
   i18n (RU / EN / KO / ZH-CN) + form validation + submission
   Vanilla JS, no dependencies.
   ============================================================ */

(function () {
  "use strict";

  /* ---------------- Translations ---------------- */
  const I18N = {
    ru: {
      "meta.title": "Wood-Biz — Ваш надежный партнер в сфере древесины",
      "meta.description":
        "Wood-Biz: агентирование поставок древесины и лесоматериалов, инспекция качества, полное документальное сопровождение сделок. Работаем с Российской Федерацией по всему миру.",
      "og.title": "Wood-Biz — Ваш надежный партнер в сфере древесины",
      "og.description":
        "Поставки древесины, инспекция качества и документальное сопровождение сделок. Работаем с РФ по всему миру.",

      "hero.eyebrow": "Поставки древесины · Инспекция · Документация",
      "hero.title": "Wood-Biz — Ваш надежный партнер в сфере древесины",
      "hero.subtitle": "Работаем с Российской Федерацией по всему миру",
      "cta.button": "Оставить заявку",

      "services.title": "Наши услуги",
      "services.s1.title": "Агентирование поставок древесины и лесоматериалов",
      "services.s1.desc": "Подбор поставщиков, переговоры и организация поставок по всему миру.",
      "services.s2.title": "Инспектирование качества продукции",
      "services.s2.desc": "Проверка древесины на всех этапах: влажность, сортировка, соответствие стандартам.",
      "services.s3.title": "Полное документальное сопровождение сделок",
      "services.s3.desc": "Договоры, экспортная документация, сертификаты и таможенное оформление.",
      "services.s4.title": "Работаем с Российской Федерацией по всему миру",
      "services.s4.desc": "Международная логистика и коммуникация без границ и языковых барьеров.",

      "contact.title": "Оставить заявку",
      "contact.subtitle": "Заполните форму — мы свяжемся с вами в течение 24 часов.",
      "form.name.label": "Имя",
      "form.name.placeholder": "Ваше имя",
      "form.email.label": "Email",
      "form.email.placeholder": "you@example.com",
      "form.phone.label": "Телефон",
      "form.phone.placeholder": "+7 900 000-00-00",
      "form.message.label": "Сообщение",
      "form.message.placeholder": "Кратко опишите ваш запрос",
      "form.submit": "Оставить заявку",
      "form.success": "Спасибо! Ваша заявка отправлена. Мы скоро свяжемся с вами.",

      "error.required": "Обязательное поле",
      "error.email": "Укажите корректный email",
      "error.phone": "Укажите корректный номер телефона",

      "footer.address": "Российская Федерация · Доставка по всему миру",
      "footer.rights": "Все права защищены."
    },

    en: {
      "meta.title": "Wood-Biz — Your Reliable Partner in the Timber Industry",
      "meta.description":
        "Wood-Biz: agenting timber and lumber supplies, quality inspection, full documentation support for your deals. Working with the Russian Federation worldwide.",
      "og.title": "Wood-Biz — Your Reliable Partner in the Timber Industry",
      "og.description":
        "Timber supply agency, quality inspection and full deal documentation. Working with the RF worldwide.",

      "hero.eyebrow": "Timber Supply · Inspection · Documentation",
      "hero.title": "Wood-Biz — Your Reliable Partner in the Timber Industry",
      "hero.subtitle": "Working with the Russian Federation worldwide",
      "cta.button": "Submit Request",

      "services.title": "Our Services",
      "services.s1.title": "Agenting Timber & Lumber Supplies",
      "services.s1.desc": "Supplier sourcing, negotiations and worldwide shipment organization.",
      "services.s2.title": "Product Quality Inspection",
      "services.s2.desc": "Timber checks at every stage: moisture, grading and standards compliance.",
      "services.s3.title": "Full Deal Documentation Support",
      "services.s3.desc": "Contracts, export paperwork, certificates and customs clearance.",
      "services.s4.title": "Working with the Russian Federation Worldwide",
      "services.s4.desc": "International logistics and communication without borders or language barriers.",

      "contact.title": "Submit Request",
      "contact.subtitle": "Fill in the form — we will contact you within 24 hours.",
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

      "footer.address": "Russian Federation · Shipping worldwide",
      "footer.rights": "All rights reserved."
    },

    ko: {
      "meta.title": "Wood-Biz — 목재 산업의 신뢰할 수 있는 파트너",
      "meta.description":
        "Wood-Biz: 목재 및 임산물 공급 에이전시, 품질 검사, 거래 문서 전체 지원. 러시아 연방과 전 세계적으로 업무 수행.",
      "og.title": "Wood-Biz — 목재 산업의 신뢰할 수 있는 파트너",
      "og.description":
        "목재 공급 에이전시, 품질 검사, 거래 문서 지원. 러시아 연방 기반 글로벌 업무.",

      "hero.eyebrow": "목재 공급 · 검사 · 문서 지원",
      "hero.title": "Wood-Biz — 목재 산업의 신뢰할 수 있는 파트너",
      "hero.subtitle": "러시아 연방과 전 세계적으로 업무합니다",
      "cta.button": "문의하기",

      "services.title": "서비스 소개",
      "services.s1.title": "목재 및 임산물 공급 에이전시",
      "services.s1.desc": "공급업체 선정, 협상 및 전 세계 물류 조직화.",
      "services.s2.title": "제품 품질 검사",
      "services.s2.desc": "수분 함량, 등급 분류, 규격 준수 등 모든 단계의 목재 검사.",
      "services.s3.title": "거래 문서 전면 지원",
      "services.s3.desc": "계약서, 수출 서류, 인증서 및 통관 절차 지원.",
      "services.s4.title": "러시아 연방과 전 세계적 협력",
      "services.s4.desc": "국경과 언어 장벽 없는 국제 물류 및 커뮤니케이션.",

      "contact.title": "문의하기",
      "contact.subtitle": "양식을 작성해 주시면 24시간 이내에 연락드리겠습니다.",
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

      "footer.address": "러시아 연방 · 전 세계 배송",
      "footer.rights": "모든 권리 보유."
    },

    zh: {
      "meta.title": "Wood-Biz — 您可靠的木材合作伙伴",
      "meta.description":
        "Wood-Biz：木材和原木供应代理、产品质量检验、交易全程文件支持。与俄罗斯联邦合作，面向全球业务。",
      "og.title": "Wood-Biz — 您可靠的木材合作伙伴",
      "og.description":
        "木材供应代理、质量检验和交易文件支持。立足俄罗斯，服务全球。",

      "hero.eyebrow": "木材供应 · 质量检验 · 文件支持",
      "hero.title": "Wood-Biz — 您可靠的木材合作伙伴",
      "hero.subtitle": "与俄罗斯联邦合作，业务遍及全球",
      "cta.button": "提交申请",

      "services.title": "我们的服务",
      "services.s1.title": "木材及原木供应代理",
      "services.s1.desc": "供应商筛选、商务谈判及全球物流运输组织。",
      "services.s2.title": "产品质量检验",
      "services.s2.desc": "各环节木材检测：含水率、分级及标准符合性。",
      "services.s3.title": "交易全程文件支持",
      "services.s3.desc": "合同、出口单证、证书及报关手续办理。",
      "services.s4.title": "与俄罗斯联邦合作，面向全球",
      "services.s4.desc": "无国界、无语言障碍的国际物流与沟通。",

      "contact.title": "提交申请",
      "contact.subtitle": "请填写表格 — 我们将在24小时内与您联系。",
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

      "footer.address": "俄罗斯联邦 · 全球发货",
      "footer.rights": "版权所有。"
    }
  };

  const LANG_NAMES = { ru: "ru", en: "en", ko: "ko", zh: "zh-CN" };
  const STORAGE_KEY = "woodbiz.lang";

  /* ---------------- Helpers ---------------- */
  function t(key) {
    return (I18N[currentLang] && I18N[currentLang][key]) || I18N.ru[key] || key;
  }

  let currentLang = "ru";

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
