(function () {
  "use strict";

  var version = "3.0.0";
  var endpoint = window.ORDINIS_HUB_ENDPOINT || "https://hub.app.ordinistechnologies.com/api/analytics/event";
  var siteId = window.ORDINIS_SITE_ID;
  var sessionMinutes = 30;
  var visitorKey = "ordinis_visitor_id";
  var sessionKey = "ordinis_session";
  var utmKey = "ordinis_utm";
  var lastPath = "";
  var startedForms = [];

  if (!siteId) return;

  function uuid() {
    if (window.crypto && window.crypto.randomUUID) return window.crypto.randomUUID();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (char) {
      var random = (Math.random() * 16) | 0;
      var value = char === "x" ? random : (random & 0x3) | 0x8;
      return value.toString(16);
    });
  }

  function readJson(key) {
    try {
      return JSON.parse(window.localStorage.getItem(key) || "null");
    } catch (error) {
      return null;
    }
  }

  function writeJson(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {}
  }

  function getVisitorId() {
    var visitorId = window.localStorage.getItem(visitorKey);
    if (!visitorId) {
      visitorId = uuid();
      try {
        window.localStorage.setItem(visitorKey, visitorId);
      } catch (error) {}
    }
    return visitorId;
  }

  function getSessionId() {
    var now = Date.now();
    var current = readJson(sessionKey);
    if (!current || !current.id || !current.expiresAt || current.expiresAt < now) {
      current = { id: uuid(), expiresAt: now + sessionMinutes * 60 * 1000 };
    } else {
      current.expiresAt = now + sessionMinutes * 60 * 1000;
    }
    writeJson(sessionKey, current);
    return current.id;
  }

  function captureUtm() {
    var params = new URLSearchParams(window.location.search || "");
    var utm = readJson(utmKey) || {};
    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach(function (key) {
      var value = params.get(key);
      if (value) utm[key] = value.slice(0, 255);
    });
    if (Object.keys(utm).length) writeJson(utmKey, utm);
    return utm;
  }

  function pagePath() {
    return window.location.pathname || "/";
  }

  function querystring() {
    return window.location.search ? window.location.search.slice(1) : null;
  }

  function send(eventType, metadata) {
    var utm = captureUtm();
    var body = JSON.stringify({
      session_id: getSessionId(),
      event_type: eventType,
      version: version,
      path: pagePath(),
      querystring: querystring(),
      host: window.location.host,
      site_id: siteId,
      referrer: document.referrer || null,
      page_title: document.title || null,
      screen_width: window.screen ? window.screen.width : null,
      screen_height: window.screen ? window.screen.height : null,
      user_agent: navigator.userAgent,
      beacon_name: metadata && metadata.beacon_name ? metadata.beacon_name : null,
      interaction: Boolean(metadata && metadata.interaction),
      metadata: Object.assign(
        {
          anonymous_id: getVisitorId(),
          page_path: pagePath()
        },
        utm,
        metadata || {}
      )
    });

    if (navigator.sendBeacon) {
      var blob = new Blob([body], { type: "application/json" });
      if (navigator.sendBeacon(endpoint, blob)) return;
    }
    fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive: true,
      body: body
    }).catch(function () {});
  }

  function track(eventType, metadata) {
    send(eventType || "click", Object.assign({ interaction: true, event_type: eventType }, metadata || {}));
  }

  function page(metadata) {
    var currentPath = pagePath() + (window.location.search || "");
    if (currentPath === lastPath) return;
    lastPath = currentPath;
    send("page_view", Object.assign({ beacon_name: "page_visible" }, metadata || {}));
  }

  function classifyClick(node) {
    var href = node.getAttribute && node.getAttribute("href");
    var label = (node.getAttribute && (node.getAttribute("data-ordinis-label") || node.getAttribute("aria-label"))) || node.innerText || node.textContent || "";
    label = label.trim().replace(/\s+/g, " ").slice(0, 120);
    var configuredEvent = node.getAttribute && node.getAttribute("data-ordinis-event");
    var configuredValue = node.getAttribute && node.getAttribute("data-ordinis-value");
    if (configuredEvent) return { eventType: configuredEvent, eventValue: configuredValue || label || href };
    if (href && href.indexOf("tel:") === 0) return { eventType: "phone_click", eventValue: href.replace("tel:", "") };
    if (href && href.indexOf("mailto:") === 0) return { eventType: "email_click", eventValue: href.replace("mailto:", "") };
    if (href && /google\.com\/maps|maps\.apple\.com|waze\.com/i.test(href)) return { eventType: "directions_click", eventValue: href };
    if (/call now|schedule|appointment|contact us|learn more|hyperbaric|brain restore|new patient forms/i.test(label)) {
      return { eventType: "cta_click", eventValue: label };
    }
    return { eventType: "click", eventValue: label || href || node.tagName };
  }

  function bindClicks() {
    document.addEventListener(
      "click",
      function (event) {
        var target = event.target;
        var node = target && target.closest ? target.closest("a,button,[data-ordinis-event]") : null;
        if (!node) return;
        var classification = classifyClick(node);
        track(classification.eventType, {
          event_value: classification.eventValue,
          label: classification.eventValue,
          href: node.getAttribute && node.getAttribute("href"),
          tag: node.tagName
        });
      },
      { passive: true }
    );
  }

  function formKey(form) {
    return form.id || form.getAttribute("name") || form.getAttribute("data-ordinis-form") || "form";
  }

  function bindForms() {
    document.addEventListener(
      "focusin",
      function (event) {
        var form = event.target && event.target.closest ? event.target.closest("form") : null;
        if (!form) return;
        var key = formKey(form);
        if (startedForms.indexOf(key) >= 0) return;
        startedForms.push(key);
        track("form_start", { event_value: key });
      },
      { passive: true }
    );
    document.addEventListener(
      "submit",
      function (event) {
        var form = event.target;
        if (!form || !formKey) return;
        track(form.getAttribute("data-ordinis-submit-event") || "contact_form_submit", { event_value: formKey(form) });
      },
      true
    );
    window.addEventListener("ordinis:form-success", function (event) {
      track("contact_form_success", { event_value: event.detail && event.detail.form });
    });
    window.addEventListener("ordinis:form-failure", function (event) {
      track("contact_form_failure", { event_value: event.detail && event.detail.form });
    });
  }

  function bindSpaRoutes() {
    ["pushState", "replaceState"].forEach(function (method) {
      var original = history[method];
      history[method] = function () {
        var result = original.apply(this, arguments);
        window.setTimeout(function () {
          page({ navigation_type: method });
        }, 0);
        return result;
      };
    });
    window.addEventListener("popstate", function () {
      page({ navigation_type: "popstate" });
    });
  }

  window.ordinisAnalytics = {
    init: function (config) {
      config = config || {};
      if (config.endpoint) endpoint = config.endpoint;
      if (config.siteId) siteId = config.siteId;
      if (config.sessionMinutes) sessionMinutes = config.sessionMinutes;
      page({ initial: true });
    },
    page: page,
    track: track
  };

  bindClicks();
  bindForms();
  bindSpaRoutes();
  page({ initial: true });
  window.setTimeout(function () {
    send("beacon", { beacon_name: "page_visible" });
  }, 800);
  window.setTimeout(function () {
    send("heartbeat", { beacon_name: "heartbeat" });
  }, 8000);
})();
