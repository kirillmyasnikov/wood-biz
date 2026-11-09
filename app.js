/* ============================================================
   Wood-Biz — Landing page logic
   i18n (RU / EN / KO / ZH-CN) + language switcher + footer year
   Форма заявки подключена через Zoho Forms (iframe в index.html).
   Vanilla JS, no dependencies.
   ============================================================ */

(function () {
  "use strict";

  /* ---------------- Translations ----------------
     Business-style translations for all four languages.
     Key message: independent agents building trust between
     suppliers and buyers of sawn timber and wood products
     worldwide. Customs clearance is explicitly NOT included. */
  const I18N = {
    ru: {
      "meta.title": "Wood-Biz — Мост доверия между поставщиками и покупателями древесины",
      "meta.description":
        "Wood-Biz: независимые агенты между поставщиками и покупателями пиломатериалов и продукции из древесины по всему миру. Агентирование сделок, инспектирование качества, проверка документов, логистика (без таможенного оформления).",
      "og.title": "Wood-Biz — Мост доверия между поставщиками и покупателями древесины",
      "og.description":
        "Агентирование сделок, инспекция качества, проверка документов и логистика. Поставщики и покупатели пиломатериалов и продукции из древесины по всему миру.",

      "hero.eyebrow": "Агентирование · Инспекция · Документация · Логистика",
      "hero.title": "Wood-Biz — Мост доверия между поставщиками и покупателями древесины",
      "hero.subtitle":
        "Мы выступаем независимыми агентами, создающими основу для доверительных отношений между поставщиками и покупателями пиломатериалов и продукции из древесины по всему миру.",
      "cta.button": "Оставить заявку",

      "services.title": "Наши услуги",
      "services.s1.title": "Агентирование сделок",
      "services.s1.desc": "Обеспечиваем прозрачность и безопасность взаимодействия между сторонами.",
      "services.s2.title": "Инспектирование качества",
      "services.s2.desc": "Проверяем продукцию на соответствие заявленным стандартам.",
      "services.s3.title": "Документальное сопровождение",
      "services.s3.desc":
        "Документы готовит поставщик — мы проверяем их наличие и консультируем, какие документы необходимы для сделки (таможенное оформление не входит в услуги).",
      "services.s4.title": "Услуги по логистике",
      "services.s4.desc":
        "Организуем перевозку пиломатериалов от поставщика до покупателя: подбираем маршрут, контролируем сроки и сопровождаем груз в пути.",

      "contact.title": "Оставить заявку",
      "contact.subtitle": "Заполните форму — мы свяжемся с вами в течение 24 часов.",
      "contact.phone_label": "Или позвоните нам:",
      "form.fallback":
        "Если форма не отображается, напишите нам на info@wood-biz.com или позвоните по телефону выше — мы ответим в течение 24 часов.",
      "form.pending.title": "Оставьте заявку по почте",
      "form.error.send":
        "Не удалось отправить заявку. Пожалуйста, напишите нам на info@wood-biz.com или позвоните по телефону выше.",

      "footer.tagline": "Поставщики и покупатели пиломатериалов и продукции из древесины по всему миру",
      "footer.rights": "Все права защищены."
    },

    en: {
      "meta.title": "Wood-Biz — A Bridge of Trust Between Timber Suppliers and Buyers",
      "meta.description":
        "Wood-Biz: independent agents between suppliers and buyers of sawn timber and wood products worldwide. Deal agency, quality inspection, document verification and logistics (customs clearance not included).",
      "og.title": "Wood-Biz — A Bridge of Trust Between Timber Suppliers and Buyers",
      "og.description":
        "Deal agency, quality inspection, document verification and logistics. Connecting suppliers and buyers of sawn timber and wood products worldwide.",

      "hero.eyebrow": "Deal Agency · Inspection · Documentation · Logistics",
      "hero.title": "Wood-Biz — A Bridge of Trust Between Timber Suppliers and Buyers",
      "hero.subtitle":
        "We act as independent agents, creating the foundation for trusting relationships between suppliers and buyers of sawn timber and wood products around the world.",
      "cta.button": "Submit Request",

      "services.title": "Our Services",
      "services.s1.title": "Deal Agency",
      "services.s1.desc": "We ensure transparency and security of interaction between the parties.",
      "services.s2.title": "Quality Inspection",
      "services.s2.desc": "We verify that products meet the declared standards.",
      "services.s3.title": "Documentation Support",
      "services.s3.desc":
        "The supplier prepares the documents — we verify that they are in place and advise which documents the deal requires (customs clearance is not part of our services).",
      "services.s4.title": "Logistics Services",
      "services.s4.desc":
        "We arrange transport of sawn timber from supplier to buyer: route planning, schedule control and cargo support along the way.",

      "contact.title": "Submit Request",
      "contact.subtitle": "Fill in the form — we will contact you within 24 hours.",
      "contact.phone_label": "Or call us:",
      "form.fallback":
        "If the form does not load, email us at info@wood-biz.com or call the number above — we reply within 24 hours.",
      "form.pending.title": "Send your request by email",
      "form.error.send":
        "We could not send your request. Please email us at info@wood-biz.com or call the number above.",

      "footer.tagline": "Connecting suppliers and buyers of sawn timber and wood products worldwide",
      "footer.rights": "All rights reserved."
    },

    ko: {
      "meta.title": "Wood-Biz — 목재 공급업체와 구매자 사이의 신뢰의 다리",
      "meta.description":
        "Wood-Biz: 전 세계 제재목 및 목제품 공급업체와 구매자 사이의 독립 에이전시. 거래 에이전시, 품질 검사, 서류 확인, 물류 (통관 업무 제외).",
      "og.title": "Wood-Biz — 목재 공급업체와 구매자 사이의 신뢰의 다리",
      "og.description":
        "거래 에이전시, 품질 검사, 서류 확인 및 물류. 전 세계 제재목 및 목제품 공급업체와 구매자를 연결합니다.",

      "hero.eyebrow": "거래 에이전시 · 품질 검사 · 문서 지원 · 물류",
      "hero.title": "Wood-Biz — 목재 공급업체와 구매자 사이의 신뢰의 다리",
      "hero.subtitle":
        "저희는 전 세계 제재목 및 목제품 공급업체와 구매자 간의 신뢰 관계 구축을 지원하는 독립 에이전시입니다.",
      "cta.button": "문의하기",

      "services.title": "서비스 소개",
      "services.s1.title": "거래 에이전시",
      "services.s1.desc": "당사자 간 거래의 투명성과 안전성을 보장합니다.",
      "services.s2.title": "품질 검사",
      "services.s2.desc": "제품이 명시된 기준에 부합하는지 검증합니다.",
      "services.s3.title": "문서 지원",
      "services.s3.desc":
        "서류는 공급업체가 준비하며, 저희는 서류 구비 여부를 확인하고 거래에 필요한 서류를 안내합니다 (통관 업무는 제외).",
      "services.s4.title": "물류 서비스",
      "services.s4.desc":
        "공급업체에서 구매자까지 제재목 운송을 조직합니다. 경로 선정, 일정 관리, 운송 중 화물 동행을 지원합니다.",

      "contact.title": "문의하기",
      "contact.subtitle": "양식을 작성해 주시면 24시간 이내에 연락드리겠습니다.",
      "contact.phone_label": "전화 문의:",
      "form.fallback":
        "양식이 표시되지 않으면 info@wood-biz.com 으로 이메일을 보내시거나 위 번호로 전화해 주세요. 24시간 이내에 답변드립니다.",
      "form.pending.title": "이메일로 문의하기",
      "form.error.send":
        "문의를 전송하지 못했습니다. info@wood-biz.com 으로 이메일을 보내시거나 위 번호로 전화해 주세요.",

      "footer.tagline": "전 세계 제재목 및 목제품 공급업체와 구매자를 연결합니다",
      "footer.rights": "모든 권리 보유."
    },

    zh: {
      "meta.title": "Wood-Biz — 木材供应商与采购商之间的信任之桥",
      "meta.description":
        "Wood-Biz：独立代理，连接全球锯材及木制品供应商与采购商。交易代理、质量检验、文件核查与物流（不含海关报关）。",
      "og.title": "Wood-Biz — 木材供应商与采购商之间的信任之桥",
      "og.description":
        "交易代理、质量检验、文件核查与物流。连接全球锯材及木制品供应商与采购商。",

      "hero.eyebrow": "交易代理 · 质量检验 · 文件支持 · 物流",
      "hero.title": "Wood-Biz — 木材供应商与采购商之间的信任之桥",
      "hero.subtitle":
        "我们作为独立代理，为全球锯材及木制品供应商与采购商建立互信合作的基础。",
      "cta.button": "提交申请",

      "services.title": "我们的服务",
      "services.s1.title": "交易代理",
      "services.s1.desc": "确保各方合作的透明度与安全性。",
      "services.s2.title": "质量检验",
      "services.s2.desc": "核验产品是否符合申报标准。",
      "services.s3.title": "文件支持",
      "services.s3.desc":
        "文件由供应商准备 — 我们核查文件是否齐全，并就交易所需文件提供咨询（不含海关报关）。",
      "services.s4.title": "物流服务",
      "services.s4.desc":
        "组织从供应商到采购商的锯材运输：规划路线、管控时效并全程跟单。",

      "contact.title": "提交申请",
      "contact.subtitle": "请填写表格 — 我们将在24小时内与您联系。",
      "contact.phone_label": "或直接致电：",
      "form.fallback":
        "如果表单无法显示，请发送邮件至 info@wood-biz.com 或拨打上方电话，我们将在24小时内回复。",
      "form.pending.title": "通过邮件提交申请",
      "form.error.send":
        "申请发送失败。请发送邮件至 info@wood-biz.com 或拨打上方电话。",

      "footer.tagline": "连接全球锯材及木制品供应商与采购商",
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

    // Iframe title / form status texts are rendered by Zoho; nothing to do here.

    // Buttons state
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      const active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* private mode */ }
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

  /* ---------------- Form handling ----------------
     Форма заявки на странице — это iframe Zoho Forms (см. index.html),
     поэтому отправку, валидацию и уведомление на kirill@wood-biz.com
     выполняет Zoho. Ниже — безопасная заглушка на случай, если форму
     когда-нибудь вернут в виде нативного <form>: она НЕ показывает
     ложное «отправлено», а просит написать на email. */
  function initForm() {
    const form = document.getElementById("request-form");
    if (!form) return;

    const successEl = document.getElementById("form-success");
    const endpoint = form.getAttribute("data-endpoint") || "";
    const fields = form.querySelectorAll("input, textarea");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (!endpoint) {
        if (successEl) {
          successEl.hidden = false;
          successEl.classList.add("is-error");
          successEl.textContent = t("form.error.send");
        }
        return;
      }

      fetch(endpoint, {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: new FormData(form)
      })
        .then(function (r) {
          if (!r.ok) throw new Error("send failed");
          fields.forEach(function (el) { el.disabled = true; });
          if (successEl) successEl.hidden = false;
        })
        .catch(function () {
          if (successEl) {
            successEl.hidden = false;
            successEl.classList.add("is-error");
            successEl.textContent = t("form.error.send");
          }
        });
    });
  }

  /* ---------------- Zoho Forms iframe ----------------
     Пока в index.html стоит заглушка PASTE_ZOHO_FORM_URL, iframe скрывается,
     а вместо него показывается блок с email и телефоном. Так посетитель
     никогда не видит «битую» форму и не получает ложное подтверждение. */
  function initFormEmbed() {
    const frame = document.getElementById("zoho-form");
    if (!frame) return;

    const pending = document.getElementById("form-pending");
    const under = document.querySelector(".form-fallback-under");

    function showPending() {
      frame.remove();
      if (pending) pending.hidden = false;
      if (under) under.hidden = true;
    }

    const src = (frame.getAttribute("data-src") || "").trim();

    if (!src || src.indexOf("PASTE_ZOHO_FORM_URL") !== -1) {
      showPending();
      return;
    }

    frame.addEventListener("error", showPending);
    frame.src = src;
  }

  /* ---------------- Footer year ---------------- */
  function initYear() {
    const el = document.getElementById("year");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  /* ---------------- Start ---------------- */
  document.addEventListener("DOMContentLoaded", function () {
    initLangSwitch();
    initFormEmbed();
    initForm();
    initYear();
  });
})();
