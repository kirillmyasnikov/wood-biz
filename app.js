/* ============================================================
   Wood-Biz — Landing page logic
   i18n (RU / EN / KO / ZH-CN) + language switcher + footer year
   Форма заявки подключена через Zoho Forms (iframe в index.html).
   Vanilla JS, no dependencies.
   ============================================================ */

(function () {
  "use strict";

  /* ---------------- Translations ----------------
     Сайт-витрина: описываем род деятельности и географию,
     без призывов к действию и без обещаний.
     Customs clearance is explicitly NOT included. */
  const I18N = {
    ru: {
      "meta.title": "Wood-Biz — поставки пиломатериалов по России и на экспорт",
      "meta.description":
        "Wood-Biz: поставки пиломатериалов и продукции из древесины по России и на экспорт. Агентирование сделок, инспектирование качества, документальное сопровождение, логистика.",
      "og.title": "Wood-Biz — поставки пиломатериалов по России и на экспорт",
      "og.description":
        "Агентирование сделок, инспекция качества, документальное сопровождение и логистика. Поставки по России и на экспорт.",

      "hero.eyebrow": "Агентирование · Инспекция · Документация · Логистика",
      "hero.title": "Поставки пиломатериалов по России и на экспорт",
      "hero.subtitle":
        "Независимые агенты между поставщиками и покупателями пиломатериалов и продукции из древесины. Работаем по России и на экспорт.",
      "cta.button": "Контакты",

      "services.title": "Наши услуги",
      "services.s1.title": "Агентирование сделок",
      "services.s1.desc": "Обеспечиваем прозрачность и безопасность взаимодействия между сторонами.",
      "services.s2.title": "Инспектирование качества",
      "services.s2.desc": "Проверяем продукцию на соответствие заявленным стандартам.",
      "services.s3.title": "Документальное сопровождение",
      "services.s3.desc":
        "Сопровождаем сделку документально: формируем требования к пакету документов, проверяем комплектность и соответствие условиям контракта. Документы готовит поставщик; таможенное оформление не входит в услуги.",
      "services.s4.title": "Услуги по логистике",
      "services.s4.desc": "Организуем перевозку по России и на экспорт: маршрут, перевозчик, сроки.",

      "contact.title": "Контакты",
      "contact.subtitle": "Телефон и электронная почта для связи.",
      "contact.phone_label": "Телефон:",
      "form.fallback": "Если форма не отображается, напишите на info@wood-biz.com.",
      "form.pending.title": "Написать на info@wood-biz.com",
      "form.error.send":
        "Не удалось отправить заявку. Пожалуйста, напишите нам на info@wood-biz.com.",

      "footer.tagline": "Поставки пиломатериалов и продукции из древесины по России и на экспорт",
      "footer.rights": "Все права защищены."
    },

    en: {
      "meta.title": "Wood-Biz — timber supplies across Russia and for export",
      "meta.description":
        "Wood-Biz: supplies of sawn timber and wood products across Russia and for export. Deal agency, quality inspection, documentation support and logistics.",
      "og.title": "Wood-Biz — timber supplies across Russia and for export",
      "og.description":
        "Deal agency, quality inspection, documentation support and logistics. Supplies across Russia and for export.",

      "hero.eyebrow": "Deal Agency · Inspection · Documentation · Logistics",
      "hero.title": "Timber supplies across Russia and for export",
      "hero.subtitle":
        "Independent agents between suppliers and buyers of sawn timber and wood products. We work across Russia and for export.",
      "cta.button": "Contacts",

      "services.title": "Services",
      "services.s1.title": "Deal Agency",
      "services.s1.desc": "We ensure transparency and security of interaction between the parties.",
      "services.s2.title": "Quality Inspection",
      "services.s2.desc": "We verify that products meet the declared standards.",
      "services.s3.title": "Documentation Support",
      "services.s3.desc":
        "We support the deal on the documentation side: we define the requirements for the document package and verify its completeness and compliance with the contract terms. Documents are prepared by the supplier; customs clearance is not included.",
      "services.s4.title": "Logistics",
      "services.s4.desc": "We arrange transport across Russia and for export: route, carrier, timelines.",

      "contact.title": "Contacts",
      "contact.subtitle": "Phone and email for inquiries.",
      "contact.phone_label": "Phone:",
      "form.fallback": "If the form does not load, email us at info@wood-biz.com.",
      "form.pending.title": "Email info@wood-biz.com",
      "form.error.send": "We could not send your request. Please email us at info@wood-biz.com.",

      "footer.tagline": "Supplies of sawn timber and wood products across Russia and for export",
      "footer.rights": "All rights reserved."
    },

    ko: {
      "meta.title": "Wood-Biz — 러시아 전역 및 수출용 제재목 공급",
      "meta.description":
        "Wood-Biz: 러시아 전역 및 수출용 제재목·목제품 공급. 거래 에이전시, 품질 검사, 문서 지원, 물류.",
      "og.title": "Wood-Biz — 러시아 전역 및 수출용 제재목 공급",
      "og.description": "거래 에이전시, 품질 검사, 문서 지원 및 물류. 러시아 전역 및 수출 공급.",

      "hero.eyebrow": "거래 에이전시 · 품질 검사 · 문서 지원 · 물류",
      "hero.title": "러시아 전역 및 수출용 제재목 공급",
      "hero.subtitle":
        "제재목 및 목제품 공급업체와 구매자 사이의 독립 에이전시입니다. 러시아 전역과 수출 시장에서 활동합니다.",
      "cta.button": "연락처",

      "services.title": "서비스",
      "services.s1.title": "거래 에이전시",
      "services.s1.desc": "당사자 간 거래의 투명성과 안전성을 보장합니다.",
      "services.s2.title": "품질 검사",
      "services.s2.desc": "제품이 명시된 기준에 부합하는지 검증합니다.",
      "services.s3.title": "문서 지원",
      "services.s3.desc":
        "거래의 서류 업무를 지원합니다. 문서 패키지 요건을 정하고, 구성의 완전성과 계약 조건 부합 여부를 확인합니다. 서류는 공급업체가 준비하며, 통관 업무는 포함되지 않습니다.",
      "services.s4.title": "물류",
      "services.s4.desc": "러시아 전역 및 수출 운송을 조직합니다. 경로, 운송사, 일정을 관리합니다.",

      "contact.title": "연락처",
      "contact.subtitle": "전화와 이메일로 문의하실 수 있습니다.",
      "contact.phone_label": "전화:",
      "form.fallback": "양식이 표시되지 않으면 info@wood-biz.com 으로 이메일을 보내 주세요.",
      "form.pending.title": "info@wood-biz.com 으로 이메일 보내기",
      "form.error.send": "문의를 전송하지 못했습니다. info@wood-biz.com 으로 이메일을 보내 주세요.",

      "footer.tagline": "러시아 전역 및 수출용 제재목·목제품 공급",
      "footer.rights": "모든 권리 보유."
    },

    zh: {
      "meta.title": "Wood-Biz — 俄罗斯全境及出口木材供应",
      "meta.description":
        "Wood-Biz：俄罗斯全境及出口锯材与木制品供应。交易代理、质量检验、文件支持、物流。",
      "og.title": "Wood-Biz — 俄罗斯全境及出口木材供应",
      "og.description": "交易代理、质量检验、文件支持与物流。供应覆盖俄罗斯全境及出口市场。",

      "hero.eyebrow": "交易代理 · 质量检验 · 文件支持 · 物流",
      "hero.title": "俄罗斯全境及出口木材供应",
      "hero.subtitle": "锯材及木制品供应商与采购商之间的独立代理。业务覆盖俄罗斯全境及出口市场。",
      "cta.button": "联系方式",

      "services.title": "服务",
      "services.s1.title": "交易代理",
      "services.s1.desc": "确保各方合作的透明度与安全性。",
      "services.s2.title": "质量检验",
      "services.s2.desc": "核验产品是否符合申报标准。",
      "services.s3.title": "文件支持",
      "services.s3.desc": "为交易提供文件支持：制定文件包要求，核查其完整性与是否符合合同条款。文件由供应商准备，不含海关报关。",
      "services.s4.title": "物流",
      "services.s4.desc": "组织俄罗斯全境及出口运输：路线、承运方、时效。",

      "contact.title": "联系方式",
      "contact.subtitle": "可通过电话或电子邮件联系。",
      "contact.phone_label": "电话：",
      "form.fallback": "如果表单无法显示，请发送邮件至 info@wood-biz.com。",
      "form.pending.title": "发送邮件至 info@wood-biz.com",
      "form.error.send": "申请发送失败。请发送邮件至 info@wood-biz.com。",

      "footer.tagline": "俄罗斯全境及出口锯材与木制品供应",
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

  /* ---------------- Zoho Forms iframe ----------------
     Если data-src пуст, iframe не загружается, а вместо него показывается
     блок с email. Так посетитель никогда не видит «битую» форму. */
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

  /* ---------------- Native form fallback ----------------
     На странице используется iframe Zoho, поэтому этот блок не активен.
     Он нужен только если форму когда-нибудь вернут как <form>: тогда
     ложного «отправлено» не будет. */
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
