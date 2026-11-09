/* ============================================================
   Wood-Biz — Landing page logic
   i18n (RU / EN / KO / ZH-CN) + language switcher + footer year
   Форма обратной связи подключена через Zoho Forms (iframe).
   Vanilla JS, no dependencies.
   ============================================================ */

(function () {
  "use strict";

  /* ---------------- Translations ----------------
     Сайт-витрина: род деятельности и услуги, без призывов к действию,
     без обещаний и без указания страны.
     Customs clearance is explicitly NOT included. */
  const I18N = {
    ru: {
      "meta.title": "Wood-Biz — поставки пиломатериалов на экспорт",
      "meta.description":
        "Wood-Biz: поставки пиломатериалов и продукции из древесины на экспорт. Агентирование сделок, инспектирование качества, документальное сопровождение, логистика. Таможенное оформление не входит в услуги.",
      "og.title": "Wood-Biz — поставки пиломатериалов на экспорт",
      "og.description":
        "Агентирование сделок, инспекция качества, документальное сопровождение и логистика. Поставки пиломатериалов на экспорт.",

      "hero.eyebrow": "Агентирование · Инспекция · Документация · Логистика",
      "hero.title": "Поставки пиломатериалов на экспорт",
      "hero.subtitle":
        "Независимые агенты между поставщиками и покупателями пиломатериалов и продукции из древесины.",
      "cta.button": "Контакты",

      "services.title": "Наши услуги",
      "services.s1.title": "Агентирование сделок",
      "services.s1.desc": "Ведём сделку от запроса до отгрузки: условия, сроки, исполнение.",
      "services.s2.title": "Инспектирование качества",
      "services.s2.desc": "Проверяем партию на соответствие заявленным стандартам.",
      "services.s3.title": "Документальное сопровождение",
      "services.s3.desc": "Сверяем комплект документов и его соответствие условиям контракта.",
      "services.s4.title": "Услуги по логистике",
      "services.s4.desc": "Организуем перевозку и контролируем доставку: маршрут, сроки.",
      "services.note": "Таможенное оформление не входит в услуги.",

      "contact.title": "Контакты",
      "contact.subtitle": "Телефон и электронная почта для связи.",
      "contact.phone_label": "Телефон:",
      "form.fallback": "Если форма не отображается, напишите на info@wood-biz.com.",
      "form.pending.title": "Написать на info@wood-biz.com",
      "form.error.send":
        "Не удалось отправить заявку. Пожалуйста, напишите нам на info@wood-biz.com.",

      "footer.tagline": "Поставки пиломатериалов и продукции из древесины на экспорт",
      "footer.rights": "Все права защищены."
    },

    en: {
      "meta.title": "Wood-Biz — timber supplies for export",
      "meta.description":
        "Wood-Biz: supplies of sawn timber and wood products for export. Deal agency, quality inspection, documentation support and logistics. Customs clearance is not included.",
      "og.title": "Wood-Biz — timber supplies for export",
      "og.description":
        "Deal agency, quality inspection, documentation support and logistics. Timber supplies for export.",

      "hero.eyebrow": "Deal Agency · Inspection · Documentation · Logistics",
      "hero.title": "Timber supplies for export",
      "hero.subtitle": "Independent agents between suppliers and buyers of sawn timber and wood products.",
      "cta.button": "Contacts",

      "services.title": "Services",
      "services.s1.title": "Deal Agency",
      "services.s1.desc": "We run the deal from enquiry to shipment: terms, timelines, execution.",
      "services.s2.title": "Quality Inspection",
      "services.s2.desc": "We verify that the goods meet the declared standards.",
      "services.s3.title": "Documentation Support",
      "services.s3.desc": "We check the document set and its compliance with the contract terms.",
      "services.s4.title": "Logistics",
      "services.s4.desc": "We arrange transport and control delivery: route, carrier, timelines.",
      "services.note": "Customs clearance is not included.",

      "contact.title": "Contacts",
      "contact.subtitle": "Phone and email for inquiries.",
      "contact.phone_label": "Phone:",
      "form.fallback": "If the form does not load, email us at info@wood-biz.com.",
      "form.pending.title": "Email info@wood-biz.com",
      "form.error.send": "We could not send your request. Please email us at info@wood-biz.com.",

      "footer.tagline": "Supplies of sawn timber and wood products for export",
      "footer.rights": "All rights reserved."
    },

    ko: {
      "meta.title": "Wood-Biz — 수출용 제재목 공급",
      "meta.description":
        "Wood-Biz: 수출용 제재목·목제품 공급. 거래 에이전시, 품질 검사, 문서 지원, 물류. 통관 업무는 포함되지 않습니다.",
      "og.title": "Wood-Biz — 수출용 제재목 공급",
      "og.description": "거래 에이전시, 품질 검사, 문서 지원 및 물류. 수출용 제재목 공급.",

      "hero.eyebrow": "거래 에이전시 · 품질 검사 · 문서 지원 · 물류",
      "hero.title": "수출용 제재목 공급",
      "hero.subtitle": "제재목 및 목제품 공급업체와 구매자 사이의 독립 에이전시입니다.",
      "cta.button": "연락처",

      "services.title": "서비스",
      "services.s1.title": "거래 에이전시",
      "services.s1.desc": "문의부터 선적까지 거래를 진행합니다. 조건, 일정, 이행 관리.",
      "services.s2.title": "품질 검사",
      "services.s2.desc": "제품이 명시된 기준에 부합하는지 검증합니다.",
      "services.s3.title": "문서 지원",
      "services.s3.desc": "문서 구성과 계약 조건 부합 여부를 확인합니다.",
      "services.s4.title": "물류",
      "services.s4.desc": "운송을 조직하고 배송을 관리합니다. 경로, 운송사, 일정.",
      "services.note": "통관 업무는 포함되지 않습니다.",

      "contact.title": "연락처",
      "contact.subtitle": "전화와 이메일로 문의하실 수 있습니다.",
      "contact.phone_label": "전화:",
      "form.fallback": "양식이 표시되지 않으면 info@wood-biz.com 으로 이메일을 보내 주세요.",
      "form.pending.title": "info@wood-biz.com 으로 이메일 보내기",
      "form.error.send": "문의를 전송하지 못했습니다. info@wood-biz.com 으로 이메일을 보내 주세요.",

      "footer.tagline": "수출용 제재목·목제품 공급",
      "footer.rights": "모든 권리 보유."
    },

    zh: {
      "meta.title": "Wood-Biz — 出口木材供应",
      "meta.description":
        "Wood-Biz：出口锯材与木制品供应。交易代理、质量检验、文件支持、物流。不含海关报关。",
      "og.title": "Wood-Biz — 出口木材供应",
      "og.description": "交易代理、质量检验、文件支持与物流。出口锯材供应。",

      "hero.eyebrow": "交易代理 · 质量检验 · 文件支持 · 物流",
      "hero.title": "出口木材供应",
      "hero.subtitle": "锯材及木制品供应商与采购商之间的独立代理。",
      "cta.button": "联系方式",

      "services.title": "服务",
      "services.s1.title": "交易代理",
      "services.s1.desc": "负责交易从询价到发运的全过程：条款、时效、执行。",
      "services.s2.title": "质量检验",
      "services.s2.desc": "核验产品是否符合申报标准。",
      "services.s3.title": "文件支持",
      "services.s3.desc": "核查文件组成及其与合同条款的一致性。",
      "services.s4.title": "物流",
      "services.s4.desc": "组织运输并跟进交付：路线、承运方、时效。",
      "services.note": "不含海关报关。",

      "contact.title": "联系方式",
      "contact.subtitle": "可通过电话或电子邮件联系。",
      "contact.phone_label": "电话：",
      "form.fallback": "如果表单无法显示，请发送邮件至 info@wood-biz.com。",
      "form.pending.title": "发送邮件至 info@wood-biz.com",
      "form.error.send": "申请发送失败。请发送邮件至 info@wood-biz.com。",

      "footer.tagline": "出口锯材与木制品供应",
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

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });

    document.querySelectorAll("[data-i18n-meta]").forEach(function (el) {
      el.setAttribute("content", t(el.getAttribute("data-i18n-meta")));
    });

    document.querySelectorAll("[data-i18n-og]").forEach(function (el) {
      el.setAttribute("content", t(el.getAttribute("data-i18n-og")));
    });

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

  /* ---------------- Zoho Forms iframe ---------------- */
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
     На странице используется iframe Zoho, поэтому блок не активен.
     Он нужен только если форму когда-нибудь вернут как <form>. */
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
