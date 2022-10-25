"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var openSearch = document.querySelector('.search-open');
var closeSearch = document.querySelector('.search-close');
var formSearch = document.querySelector('.header-search');
var formInput = document.querySelector('.form-input');
openSearch.addEventListener('click', function () {
  formSearch.classList.add('active');
  openSearch.style.display = "none";
});
closeSearch.addEventListener('click', function () {
  formSearch.classList.remove('active');
  openSearch.style.display = "block";
  formInput.value = '';
});
var smoothLinks = document.querySelectorAll('a[href^="#"]');

var _iterator = _createForOfIteratorHelper(smoothLinks),
    _step;

try {
  var _loop = function _loop() {
    var smoothLink = _step.value;
    smoothLink.addEventListener('click', function (elem) {
      elem.preventDefault();
      var id = smoothLink.getAttribute('href');
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

;
var btnUp = document.querySelector('.btn-up');
btnUp.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnUp.style.display = "block";
  } else {
    btnUp.style.display = "none";
  }
};

var btnOpen = document.querySelector('.burger-btn');
var navMenu = document.querySelector('.burger-menu');
var burgerClose = document.querySelector('.burger-close');
btnOpen.addEventListener('click', function () {
  navMenu.classList.add('active');
});
burgerClose.addEventListener('click', function () {
  navMenu.classList.remove('active');
});
navMenu.addEventListener('click', function (event) {
  if (event.target.tagName === "A") {
    navMenu.classList.remove('active');
  }
});
"use strict";

function _typeof2(obj) { "@babel/helpers - typeof"; return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof2(obj); }

function _defineProperty(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e;
}

var _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof2(e);
};

!function () {
  for (var e = ["DocumentType", "Element", "CharacterData"], t = function t() {
    null != this.parentNode && this.parentNode.removeChild(this);
  }, i = 0; i < e.length; i++) {
    var r = e[i];
    window[r] && !window[r].prototype.remove && (window[r].prototype.remove = t);
  }
}(), function (e) {
  function t() {}

  function i(e, t) {
    return function () {
      e.apply(t, arguments);
    };
  }

  function r(e) {
    if ("object" !== _typeof(this)) throw new TypeError("Promises must be constructed via new");
    if ("function" != typeof e) throw new TypeError("not a function");
    this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], u(e, this);
  }

  function n(e, t) {
    for (; 3 === e._state;) {
      e = e._value;
    }

    return 0 === e._state ? void e._deferreds.push(t) : (e._handled = !0, void r._immediateFn(function () {
      var i = 1 === e._state ? t.onFulfilled : t.onRejected;
      if (null === i) return void (1 === e._state ? o : s)(t.promise, e._value);
      var r;

      try {
        r = i(e._value);
      } catch (n) {
        return void s(t.promise, n);
      }

      o(t.promise, r);
    }));
  }

  function o(e, t) {
    try {
      if (t === e) throw new TypeError("A promise cannot be resolved with itself.");

      if (t && ("object" === ("undefined" == typeof t ? "undefined" : _typeof(t)) || "function" == typeof t)) {
        var n = t.then;
        if (t instanceof r) return e._state = 3, e._value = t, void a(e);
        if ("function" == typeof n) return void u(i(n, t), e);
      }

      e._state = 1, e._value = t, a(e);
    } catch (o) {
      s(e, o);
    }
  }

  function s(e, t) {
    e._state = 2, e._value = t, a(e);
  }

  function a(e) {
    2 === e._state && 0 === e._deferreds.length && r._immediateFn(function () {
      e._handled || r._unhandledRejectionFn(e._value);
    });

    for (var t = 0, i = e._deferreds.length; t < i; t++) {
      n(e, e._deferreds[t]);
    }

    e._deferreds = null;
  }

  function l(e, t, i) {
    this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = i;
  }

  function u(e, t) {
    var i = !1;

    try {
      e(function (e) {
        i || (i = !0, o(t, e));
      }, function (e) {
        i || (i = !0, s(t, e));
      });
    } catch (r) {
      if (i) return;
      i = !0, s(t, r);
    }
  }

  var d = setTimeout;
  r.prototype["catch"] = function (e) {
    return this.then(null, e);
  }, r.prototype.then = function (e, i) {
    var r = new this.constructor(t);
    return n(this, new l(e, i, r)), r;
  }, r.all = function (e) {
    var t = Array.prototype.slice.call(e);
    return new r(function (e, i) {
      function r(o, s) {
        try {
          if (s && ("object" === ("undefined" == typeof s ? "undefined" : _typeof(s)) || "function" == typeof s)) {
            var a = s.then;
            if ("function" == typeof a) return void a.call(s, function (e) {
              r(o, e);
            }, i);
          }

          t[o] = s, 0 === --n && e(t);
        } catch (l) {
          i(l);
        }
      }

      if (0 === t.length) return e([]);

      for (var n = t.length, o = 0; o < t.length; o++) {
        r(o, t[o]);
      }
    });
  }, r.resolve = function (e) {
    return e && "object" === ("undefined" == typeof e ? "undefined" : _typeof(e)) && e.constructor === r ? e : new r(function (t) {
      t(e);
    });
  }, r.reject = function (e) {
    return new r(function (t, i) {
      i(e);
    });
  }, r.race = function (e) {
    return new r(function (t, i) {
      for (var r = 0, n = e.length; r < n; r++) {
        e[r].then(t, i);
      }
    });
  }, r._immediateFn = "function" == typeof setImmediate && function (e) {
    setImmediate(e);
  } || function (e) {
    d(e, 0);
  }, r._unhandledRejectionFn = function (e) {
    "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e);
  }, r._setImmediateFn = function (e) {
    r._immediateFn = e;
  }, r._setUnhandledRejectionFn = function (e) {
    r._unhandledRejectionFn = e;
  }, "undefined" != typeof module && module.exports ? module.exports = r : e.Promise || (e.Promise = r);
}(window), function (e) {
  e.Promise || (e.Promise = Promise);

  var t = "required",
      i = "email",
      r = "minLength",
      n = "maxLength",
      o = "password",
      s = "zip",
      a = "phone",
      l = "remote",
      u = "strength",
      d = "function",
      c = function c(e, t) {
    if ("string" == typeof e) return e;
    var i = "post" === t.toLowerCase() ? "" : "?";
    return Array.isArray(e) ? i + e.map(function (e) {
      return e.name + "=" + e.value;
    }).join("&") : i + Object.keys(e).map(function (t) {
      return t + "=" + e[t];
    }).join("&");
  },
      h = function h(e) {
    var t = e.url,
        i = e.method,
        r = e.data,
        n = e.debug,
        o = e.callback,
        s = e.error;
    if (n) return void o("test");
    var a = e.async !== !1,
        l = new XMLHttpRequest(),
        u = c(r, "get"),
        d = null;
    "post" === i.toLowerCase() && (d = c(r, "post"), u = ""), l.open(i, t + u, a), l.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), l.onreadystatechange = function () {
      4 === this.readyState && (200 === this.status ? o(this.responseText) : s && s(this.responseText));
    }, l.send(d);
  },
      f = function f(e, t) {
    this.options = t || {}, this.rules = this.options.rules || {}, this.messages = this.options.messages || void 0, this.colorWrong = this.options.colorWrong || "#B81111", this.result = {}, this.elements = [], this.tooltip = this.options.tooltip || {}, this.tooltipFadeOutTime = this.tooltip.fadeOutTime || 5e3, this.tooltipFadeOutClass = this.tooltip.fadeOutClass || "just-validate-tooltip-hide", this.tooltipSelectorWrap = document.querySelectorAll(this.tooltip.selectorWrap).length ? document.querySelectorAll(this.tooltip.selectorWrap) : document.querySelectorAll(".just-validate-tooltip-container"), this.bindHandlerKeyup = this.handlerKeyup.bind(this), this.submitHandler = this.options.submitHandler || void 0, this.invalidFormCallback = this.options.invalidFormCallback || void 0, this.promisesRemote = [], this.isValidationSuccess = !1, this.focusWrongField = this.options.focusWrongField || !1, this.REGEXP = {
      email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      zip: /^\d{5}(-\d{4})?$/,
      phone: /^([0-9]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$/,
      password: /[^\w\d]*(([0-9]+.*[A-Za-z]+.*)|[A-Za-z]+.*([0-9]+.*))/,
      strengthPass: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/
    }, this.DEFAULT_REMOTE_ERROR = "Error", this.state = {
      tooltipsTimer: null
    }, this.setForm(document.querySelector(e));
  };

  f.prototype = {
    defaultRules: {
      email: {
        required: !0,
        email: !0
      },
      name: {
        required: !0,
        minLength: 3,
        maxLength: 15
      },
      text: {
        required: !0,
        maxLength: 300,
        minLength: 5
      },
      password: {
        required: !0,
        password: !0,
        minLength: 4,
        maxLength: 8
      },
      zip: {
        required: !0,
        zip: !0
      },
      phone: {
        phone: !0
      }
    },
    defaultMessages: {
      required: "The field is required",
      email: "Please, type a valid email",
      maxLength: "The field must contain a maximum of :value characters",
      minLength: "The field must contain a minimum of :value characters",
      password: "Password is not valid",
      remote: "Email already exists",
      strength: "Password must contents at least one uppercase letter, one lowercase letter and one number",
      "function": "Function returned false"
    },
    handlerKeyup: function handlerKeyup(e) {
      var t = e.target,
          i = {
        name: t.getAttribute("data-validate-field"),
        value: t.value
      };
      delete this.result[i.name], this.validateItem({
        name: i.name,
        value: i.value,
        group: [],
        isKeyupChange: !0
      }), this.renderErrors();
    },
    setterEventListener: function setterEventListener(e, t, i, r) {
      switch ("keyup" === t && (i = this.bindHandlerKeyup), r) {
        case "add":
          e.addEventListener(t, i);
          break;

        case "remove":
          e.removeEventListener(t, i);
      }
    },
    getElementsRealValue: function getElementsRealValue() {
      for (var e = this.$form.querySelectorAll("*"), t = void 0, i = {}, r = 0, n = e.length; r < n; ++r) {
        if (t = e[r].getAttribute("name")) {
          if ("checkbox" === e[r].type) {
            i[t] = e[r].checked;
            continue;
          }

          i[t] = e[r].value;
        }
      }

      return i;
    },
    validationFailed: function validationFailed() {
      this.invalidFormCallback && this.invalidFormCallback(this.result);
      var e = document.querySelector(".js-validate-error-field");
      this.focusWrongField && e && e.focus && e.focus();
    },
    validationSuccess: function validationSuccess() {
      if (0 === Object.keys(this.result).length) {
        if (this.isValidationSuccess = !1, this.submitHandler) {
          var e = this.getElementsRealValue();
          return void this.submitHandler(this.$form, e, h);
        }

        this.$form.submit();
      }
    },
    setForm: function setForm(e) {
      var t = this;
      this.$form = e, this.$form.setAttribute("novalidate", "novalidate"), this.$form.addEventListener("submit", function (e) {
        return e.preventDefault(), t.result = [], t.getElements(), t.promisesRemote.length ? void Promise.all(t.promisesRemote).then(function () {
          t.promisesRemote = [], t.isValidationSuccess ? t.validationSuccess() : t.validationFailed();
        }) : void (t.isValidationSuccess ? t.validationSuccess() : t.validationFailed());
      });
    },
    isEmail: function isEmail(e) {
      return this.REGEXP.email.test(e);
    },
    isZip: function isZip(e) {
      return this.REGEXP.zip.test(e);
    },
    isPhone: function isPhone(e) {
      return this.REGEXP.phone.test(e);
    },
    isPassword: function isPassword(e) {
      return this.REGEXP.password.test(e);
    },
    isEmpty: function isEmpty(e) {
      var t = e;
      return e.trim && (t = e.trim()), !t;
    },
    checkLengthMax: function checkLengthMax(e, t) {
      return e.length <= t;
    },
    checkLengthMin: function checkLengthMin(e, t) {
      return e.length >= t;
    },
    checkStrengthPass: function checkStrengthPass(e) {
      return this.REGEXP.strengthPass.test(e);
    },
    getElements: function getElements() {
      var e = this,
          t = this.$form.querySelectorAll("[data-validate-field]");
      this.elements = [];

      for (var i = function i(_i, r) {
        var n = t[_i],
            o = n.getAttribute("data-validate-field"),
            s = n.value,
            a = !1,
            l = [];

        if ("checkbox" === n.type && (s = n.checked || "", n.addEventListener("change", function (t) {
          var i = t.target,
              r = {
            name: i.getAttribute("data-validate-field"),
            value: i.checked
          };
          delete e.result[r.name], e.validateItem({
            name: r.name,
            value: r.value,
            group: []
          }), e.renderErrors();
        })), "radio" === n.type) {
          var u = e.elements.filter(function (e) {
            if (e.name === o) return e;
          })[0];
          u ? (u.group.push(n.checked), a = !0) : l.push(n.checked), n.addEventListener("change", function (t) {
            var i = t.target,
                r = {
              name: i.getAttribute("data-validate-field"),
              value: i.checked
            };
            delete e.result[r.name], e.validateItem({
              name: r.name,
              value: r.value,
              group: []
            }), e.renderErrors();
          });
        }

        e.setterEventListener(n, "keyup", e.handlerKeyup, "add"), a || e.elements.push({
          name: o,
          value: s,
          group: l
        });
      }, r = 0, n = t.length; r < n; ++r) {
        i(r, n);
      }

      this.validateElements();
    },
    validateRequired: function validateRequired(e) {
      return !this.isEmpty(e);
    },
    validateEmail: function validateEmail(e) {
      return this.isEmail(e);
    },
    validatePhone: function validatePhone(e) {
      return this.isPhone(e);
    },
    validateMinLength: function validateMinLength(e, t) {
      return this.checkLengthMin(e, t);
    },
    validateMaxLength: function validateMaxLength(e, t) {
      return this.checkLengthMax(e, t);
    },
    validateStrengthPass: function validateStrengthPass(e) {
      return this.checkStrengthPass(e);
    },
    validatePassword: function validatePassword(e) {
      return this.isPassword(e);
    },
    validateZip: function validateZip(e) {
      return this.isZip(e);
    },
    validateRemote: function validateRemote(e) {
      var t = e.value,
          i = e.name,
          r = e.url,
          n = e.successAnswer,
          o = e.sendParam,
          s = e.method;
      return new Promise(function (e) {
        h({
          url: r,
          method: s,
          data: _defineProperty({}, o, t),
          async: !0,
          callback: function callback(t) {
            t.toLowerCase() === n.toLowerCase() && e("ok"), e({
              type: "incorrect",
              name: i
            });
          },
          error: function error() {
            e({
              type: "error",
              name: i
            });
          }
        });
      });
    },
    generateMessage: function generateMessage(e, t, i) {
      var r = this.messages || this.defaultMessages,
          n = r[t] && r[t][e] || this.messages && "string" == typeof this.messages[t] && r[t] || this.defaultMessages[e] || this.DEFAULT_REMOTE_ERROR;
      i && (n = n.replace(":value", i.toString())), this.result[t] = {
        message: n
      };
    },
    validateElements: function validateElements() {
      var e = this;
      return this.lockForm(), this.elements.forEach(function (t) {
        e.validateItem({
          name: t.name,
          value: t.value,
          group: t.group
        });
      }), this.promisesRemote.length ? void Promise.all(this.promisesRemote).then(function (t) {
        t.forEach(function (t) {
          return "ok" === t ? void e.renderErrors() : ("error" === t.type && alert("Server error occured. Please try later."), e.generateMessage(l, t.name), void e.renderErrors());
        });
      }) : void this.renderErrors();
    },
    validateItem: function validateItem(e) {
      var c = this,
          h = e.name,
          f = e.group,
          m = e.value,
          v = e.isKeyupChange,
          p = this.rules[h] || this.defaultRules[h] || !1;
      if (p) for (var g in p) {
        var y = p[g];
        if (g !== t && g !== d && "" == m) return;

        switch (g) {
          case d:
            if ("function" != typeof y) break;
            if (y(h, m)) break;
            return void this.generateMessage(d, h, y);

          case t:
            if (!y) break;

            if (f.length) {
              var b = !1;
              if (f.forEach(function (e) {
                c.validateRequired(e) && (b = !0);
              }), b) break;
            } else if (this.validateRequired(m)) break;

            return void this.generateMessage(t, h);

          case i:
            if (!y) break;
            if (this.validateEmail(m)) break;
            return void this.generateMessage(i, h);

          case r:
            if (!y) break;
            if (this.validateMinLength(m, y)) break;
            return void this.generateMessage(r, h, y);

          case n:
            if (!y) break;
            if (this.validateMaxLength(m, y)) break;
            return void this.generateMessage(n, h, y);

          case a:
            if (!y) break;
            if (this.validatePhone(m)) break;
            return void this.generateMessage(a, h);

          case o:
            if (!y) break;
            if (this.validatePassword(m)) break;
            return void this.generateMessage(o, h);

          case u:
            if (!y || "object" !== ("undefined" == typeof y ? "undefined" : _typeof(y))) break;
            if (y["default"] && this.validateStrengthPass(m)) break;

            if (y.custom) {
              var E = void 0;

              try {
                E = new RegExp(y.custom);
              } catch (w) {
                E = this.REGEXP.strengthPass, console.error("Custom regexp for strength rule is not valid. Default regexp was used.");
              }

              if (E.test(m)) break;
            }

            return void this.generateMessage(u, h);

          case s:
            if (!y) break;
            if (this.validateZip(m)) break;
            return void this.generateMessage(s, h);

          case l:
            if (v) break;
            if (!y) break;
            var k = y.url,
                _ = y.successAnswer,
                P = y.method,
                R = y.sendParam,
                S = this.$form.querySelector('input[data-validate-field="' + h + '"]');
            return this.setterEventListener(S, "keyup", this.handlerKeyup, "remove"), void this.promisesRemote.push(this.validateRemote({
              name: h,
              value: m,
              url: k,
              method: P,
              sendParam: R,
              successAnswer: _
            }));
        }
      }
    },
    clearErrors: function clearErrors() {
      for (var e = document.querySelectorAll(".js-validate-error-label"), t = 0, i = e.length; t < i; ++t) {
        e[t].remove();
      }

      e = document.querySelectorAll(".js-validate-error-field");

      for (var r = 0, n = e.length; r < n; ++r) {
        e[r].classList.remove("js-validate-error-field"), e[r].style.border = "", e[r].style.color = "";
      }
    },
    renderErrors: function renderErrors() {
      var e = this;
      if (this.clearErrors(), this.unlockForm(), this.isValidationSuccess = !1, 0 === Object.keys(this.result).length) return void (this.isValidationSuccess = !0);

      for (var t in this.result) {
        var i = this.result[t].message,
            r = this.$form.querySelectorAll('[data-validate-field="' + t + '"]'),
            n = r[r.length - 1],
            o = document.createElement("div");

        if (o.innerHTML = i, o.className = "js-validate-error-label", o.setAttribute("style", "color: " + this.colorWrong), n.style.border = "1px solid " + this.colorWrong, n.style.color = "" + this.colorWrong, n.classList.add("js-validate-error-field"), "checkbox" === n.type || "radio" === n.type) {
          var s = document.querySelector('label[for="' + n.getAttribute("id") + '"]');
          "label" === n.parentNode.tagName.toLowerCase() ? n.parentNode.parentNode.insertBefore(o, null) : s ? s.parentNode.insertBefore(o, s.nextSibling) : n.parentNode.insertBefore(o, n.nextSibling);
        } else n.parentNode.insertBefore(o, n.nextSibling);
      }

      this.tooltipSelectorWrap.length && (this.state.tooltipsTimer = setTimeout(function () {
        e.hideTooltips();
      }, this.tooltipFadeOutTime));
    },
    hideTooltips: function hideTooltips() {
      var e = this,
          t = document.querySelectorAll(".js-validate-error-label");
      t.forEach(function (t) {
        t.classList.add(e.tooltipFadeOutClass);
      }), this.state.tooltipsTimer = null;
    },
    lockForm: function lockForm() {
      for (var e = this.$form.querySelectorAll("input, textarea, button, select"), t = 0, i = e.length; t < i; ++t) {
        e[t].setAttribute("disabled", "disabled"), e[t].style.pointerEvents = "none", e[t].style.webitFilter = "grayscale(100%)", e[t].style.filter = "grayscale(100%)";
      }
    },
    unlockForm: function unlockForm() {
      for (var e = this.$form.querySelectorAll("input, textarea, button, select"), t = 0, i = e.length; t < i; ++t) {
        e[t].removeAttribute("disabled"), e[t].style.pointerEvents = "", e[t].style.webitFilter = "", e[t].style.filter = "";
      }
    }
  }, e.JustValidate = f;
}(window);
"use strict";

ymaps.ready(init);

function init() {
  var mapElem = document.querySelector('#map');
  var myMap = new ymaps.Map("map", {
    center: [55.769535, 37.639985],
    zoom: 14,
    controls: ['geolocationControl', 'zoomControl']
  }, {
    suppressMapOpenBlock: true,
    geolocationControlSize: "large",
    geolocationControlPosition: {
      top: "200px",
      right: "20px"
    },
    geolocationControlFloat: 'none',
    zoomControlSize: "small",
    zoomControlFloat: "none",
    zoomControlPosition: {
      top: "120px",
      right: "20px"
    }
  });
  myMap.behaviors.disable('scrollZoom');
  var myPlacemark = new ymaps.Placemark([55.769535, 37.639985], {}, {
    iconLayout: "default#image",
    iconImageHref: "../images/point.svg",
    iconImageSize: [12, 12],
    iconImageOffset: [-20, -40]
  });
  myPlacemark.events.add('click', function () {
    contactsBlock.classList.add('open');
  });
  myMap.geoObjects.add(myPlacemark);
  myMap.container.fitToViewport();
}

var contactsBlock = document.querySelector('.contacts-block');
var btnClose = document.querySelector('.block-btn');
btnClose.addEventListener('click', function () {
  contactsBlock.classList.remove('open');
});
"use strict";

new JustValidate('.contacts-form', {
  rules: {
    name: {
      required: true,
      minLength: 2
    },
    email: {
      required: true,
      email: true
    }
  },
  messages: {
    name: "Недопустимый формат",
    email: "Недопустимый формат"
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwianVzdC12YWxpZGF0ZS5taW4uanMiLCJtYWluLmpzIiwidmFsaWRhdGUuanMiXSwibmFtZXMiOlsib3BlblNlYXJjaCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsb3NlU2VhcmNoIiwiZm9ybVNlYXJjaCIsImZvcm1JbnB1dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJzdHlsZSIsImRpc3BsYXkiLCJyZW1vdmUiLCJ2YWx1ZSIsInNtb290aExpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsInNtb290aExpbmsiLCJlbGVtIiwicHJldmVudERlZmF1bHQiLCJpZCIsImdldEF0dHJpYnV0ZSIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsImJ0blVwIiwid2luZG93Iiwic2Nyb2xsVG8iLCJ0b3AiLCJvbnNjcm9sbCIsImJvZHkiLCJzY3JvbGxUb3AiLCJkb2N1bWVudEVsZW1lbnQiLCJidG5PcGVuIiwibmF2TWVudSIsImJ1cmdlckNsb3NlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ0YWdOYW1lIiwiX2RlZmluZVByb3BlcnR5IiwiZSIsInQiLCJpIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImxlbmd0aCIsInIiLCJhcHBseSIsImFyZ3VtZW50cyIsIlR5cGVFcnJvciIsIl9zdGF0ZSIsIl9oYW5kbGVkIiwiX3ZhbHVlIiwiX2RlZmVycmVkcyIsInUiLCJuIiwicHVzaCIsIl9pbW1lZGlhdGVGbiIsIm9uRnVsZmlsbGVkIiwib25SZWplY3RlZCIsIm8iLCJzIiwicHJvbWlzZSIsInRoZW4iLCJhIiwiX3VuaGFuZGxlZFJlamVjdGlvbkZuIiwibCIsImQiLCJzZXRUaW1lb3V0IiwiYWxsIiwiQXJyYXkiLCJzbGljZSIsImNhbGwiLCJyZXNvbHZlIiwicmVqZWN0IiwicmFjZSIsInNldEltbWVkaWF0ZSIsImNvbnNvbGUiLCJ3YXJuIiwiX3NldEltbWVkaWF0ZUZuIiwiX3NldFVuaGFuZGxlZFJlamVjdGlvbkZuIiwibW9kdWxlIiwiZXhwb3J0cyIsIlByb21pc2UiLCJjIiwidG9Mb3dlckNhc2UiLCJpc0FycmF5IiwibWFwIiwibmFtZSIsImpvaW4iLCJrZXlzIiwiaCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJkZWJ1ZyIsImNhbGxiYWNrIiwiZXJyb3IiLCJhc3luYyIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0Iiwic2VuZCIsImYiLCJvcHRpb25zIiwicnVsZXMiLCJtZXNzYWdlcyIsImNvbG9yV3JvbmciLCJyZXN1bHQiLCJlbGVtZW50cyIsInRvb2x0aXAiLCJ0b29sdGlwRmFkZU91dFRpbWUiLCJmYWRlT3V0VGltZSIsInRvb2x0aXBGYWRlT3V0Q2xhc3MiLCJmYWRlT3V0Q2xhc3MiLCJ0b29sdGlwU2VsZWN0b3JXcmFwIiwic2VsZWN0b3JXcmFwIiwiYmluZEhhbmRsZXJLZXl1cCIsImhhbmRsZXJLZXl1cCIsImJpbmQiLCJzdWJtaXRIYW5kbGVyIiwiaW52YWxpZEZvcm1DYWxsYmFjayIsInByb21pc2VzUmVtb3RlIiwiaXNWYWxpZGF0aW9uU3VjY2VzcyIsImZvY3VzV3JvbmdGaWVsZCIsIlJFR0VYUCIsImVtYWlsIiwiemlwIiwicGhvbmUiLCJwYXNzd29yZCIsInN0cmVuZ3RoUGFzcyIsIkRFRkFVTFRfUkVNT1RFX0VSUk9SIiwic3RhdGUiLCJ0b29sdGlwc1RpbWVyIiwic2V0Rm9ybSIsImRlZmF1bHRSdWxlcyIsInJlcXVpcmVkIiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwidGV4dCIsImRlZmF1bHRNZXNzYWdlcyIsInJlbW90ZSIsInN0cmVuZ3RoIiwidmFsaWRhdGVJdGVtIiwiZ3JvdXAiLCJpc0tleXVwQ2hhbmdlIiwicmVuZGVyRXJyb3JzIiwic2V0dGVyRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJnZXRFbGVtZW50c1JlYWxWYWx1ZSIsIiRmb3JtIiwidHlwZSIsImNoZWNrZWQiLCJ2YWxpZGF0aW9uRmFpbGVkIiwiZm9jdXMiLCJ2YWxpZGF0aW9uU3VjY2VzcyIsInN1Ym1pdCIsInNldEF0dHJpYnV0ZSIsImdldEVsZW1lbnRzIiwiaXNFbWFpbCIsInRlc3QiLCJpc1ppcCIsImlzUGhvbmUiLCJpc1Bhc3N3b3JkIiwiaXNFbXB0eSIsInRyaW0iLCJjaGVja0xlbmd0aE1heCIsImNoZWNrTGVuZ3RoTWluIiwiY2hlY2tTdHJlbmd0aFBhc3MiLCJmaWx0ZXIiLCJ2YWxpZGF0ZUVsZW1lbnRzIiwidmFsaWRhdGVSZXF1aXJlZCIsInZhbGlkYXRlRW1haWwiLCJ2YWxpZGF0ZVBob25lIiwidmFsaWRhdGVNaW5MZW5ndGgiLCJ2YWxpZGF0ZU1heExlbmd0aCIsInZhbGlkYXRlU3RyZW5ndGhQYXNzIiwidmFsaWRhdGVQYXNzd29yZCIsInZhbGlkYXRlWmlwIiwidmFsaWRhdGVSZW1vdGUiLCJzdWNjZXNzQW5zd2VyIiwic2VuZFBhcmFtIiwiZ2VuZXJhdGVNZXNzYWdlIiwicmVwbGFjZSIsInRvU3RyaW5nIiwibWVzc2FnZSIsImxvY2tGb3JtIiwiZm9yRWFjaCIsImFsZXJ0IiwibSIsInYiLCJwIiwiZyIsInkiLCJiIiwiY3VzdG9tIiwiRSIsIlJlZ0V4cCIsInciLCJrIiwiXyIsIlAiLCJSIiwiUyIsImNsZWFyRXJyb3JzIiwiYm9yZGVyIiwiY29sb3IiLCJ1bmxvY2tGb3JtIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImNsYXNzTmFtZSIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwiaGlkZVRvb2x0aXBzIiwicG9pbnRlckV2ZW50cyIsIndlYml0RmlsdGVyIiwicmVtb3ZlQXR0cmlidXRlIiwiSnVzdFZhbGlkYXRlIiwieW1hcHMiLCJyZWFkeSIsImluaXQiLCJtYXBFbGVtIiwibXlNYXAiLCJNYXAiLCJjZW50ZXIiLCJ6b29tIiwiY29udHJvbHMiLCJzdXBwcmVzc01hcE9wZW5CbG9jayIsImdlb2xvY2F0aW9uQ29udHJvbFNpemUiLCJnZW9sb2NhdGlvbkNvbnRyb2xQb3NpdGlvbiIsInJpZ2h0IiwiZ2VvbG9jYXRpb25Db250cm9sRmxvYXQiLCJ6b29tQ29udHJvbFNpemUiLCJ6b29tQ29udHJvbEZsb2F0Iiwiem9vbUNvbnRyb2xQb3NpdGlvbiIsImJlaGF2aW9ycyIsImRpc2FibGUiLCJteVBsYWNlbWFyayIsIlBsYWNlbWFyayIsImljb25MYXlvdXQiLCJpY29uSW1hZ2VIcmVmIiwiaWNvbkltYWdlU2l6ZSIsImljb25JbWFnZU9mZnNldCIsImV2ZW50cyIsImNvbnRhY3RzQmxvY2siLCJnZW9PYmplY3RzIiwiY29udGFpbmVyIiwiZml0VG9WaWV3cG9ydCIsImJ0bkNsb3NlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFDQSxJQUFNQSxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixDQUFuQjtBQUNBLElBQU1DLFdBQVcsR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLENBQXBCO0FBQ0EsSUFBTUUsVUFBVSxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQW5CO0FBQ0EsSUFBTUcsU0FBUyxHQUFHSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBbEI7QUFFQUYsVUFBVSxDQUFDTSxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxZQUFNO0VBQ3pDRixVQUFVLENBQUNHLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLFFBQXpCO0VBQ0FSLFVBQVUsQ0FBQ1MsS0FBWCxDQUFpQkMsT0FBakIsR0FBMkIsTUFBM0I7QUFDRCxDQUhEO0FBS0FQLFdBQVcsQ0FBQ0csZ0JBQVosQ0FBNkIsT0FBN0Is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QUEvQjtBQUNELENBRkQ7OztBQzNDRixJQUFJME4sWUFBSixDQUFpQixnQkFBakIsRUFBbUM7RUFDakNoSCxLQUFLLEVBQUU7SUFDTHJCLElBQUksRUFBRTtNQUNKb0QsUUFBUSxFQUFFLElBRE47TUFFSkMsU0FBUyxFQUFFO0lBRlAsQ0FERDtJQUtMWCxLQUFLLEVBQUU7TUFDTFUsUUFBUSxFQUFFLElBREw7TUFFTFYsS0FBSyxFQUFFO0lBRkY7RUFMRixDQUQwQjtFQVdqQ3BCLFFBQVEsRUFBRTtJQUNSdEIsSUFBSSxFQUFFLHFCQURFO0lBRVIwQyxLQUFLLEVBQUU7RUFGQztBQVh1QixDQUFuQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIlxuY29uc3Qgb3BlblNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtb3BlbicpO1xuY29uc3QgY2xvc2VTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWNsb3NlJyk7XG5jb25zdCBmb3JtU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1zZWFyY2gnKTtcbmNvbnN0IGZvcm1JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWlucHV0Jylcblxub3BlblNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZm9ybVNlYXJjaC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgb3BlblNlYXJjaC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KTtcblxuY2xvc2VTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGZvcm1TZWFyY2guY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgb3BlblNlYXJjaC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICBmb3JtSW5wdXQudmFsdWUgPSAnJztcbn0pO1xuXG5jb25zdCBzbW9vdGhMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZl49XCIjXCJdJyk7XG5mb3IgKGxldCBzbW9vdGhMaW5rIG9mIHNtb290aExpbmtzKSB7XG4gICAgc21vb3RoTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgIGVsZW0ucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgaWQgPSBzbW9vdGhMaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkKS5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICAgICAgICBibG9jazogJ3N0YXJ0J1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5cblxuY29uc3QgYnRuVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXVwJyk7XG5cbmJ0blVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XG4gIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICB0b3A6IDAsXG4gICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICB9KTtcbn0pXG5cbndpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuICBpZiAoZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPiAyMCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID4gMjApIHtcbiAgICAgICAgYnRuVXAuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBidG5VcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxufVxuXG5jb25zdCBidG5PcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlci1idG4nKTtcbmNvbnN0IG5hdk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyLW1lbnUnKTtcbmNvbnN0IGJ1cmdlckNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlci1jbG9zZScpO1xuXG5idG5PcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdG5hdk1lbnUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59KTtcblxuYnVyZ2VyQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcbiAgbmF2TWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbn0pXG5cbm5hdk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0aWYoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09IFwiQVwiKSB7XG4gICAgbmF2TWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICB9XG59KVxuIiwiXCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KGUsdCxpKXtyZXR1cm4gdCBpbiBlP09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOmksZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTplW3RdPWksZX12YXIgX3R5cGVvZj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfTshZnVuY3Rpb24oKXtmb3IodmFyIGU9W1wiRG9jdW1lbnRUeXBlXCIsXCJFbGVtZW50XCIsXCJDaGFyYWN0ZXJEYXRhXCJdLHQ9ZnVuY3Rpb24oKXtudWxsIT10aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKX0saT0wO2k8ZS5sZW5ndGg7aSsrKXt2YXIgcj1lW2ldO3dpbmRvd1tyXSYmIXdpbmRvd1tyXS5wcm90b3R5cGUucmVtb3ZlJiYod2luZG93W3JdLnByb3RvdHlwZS5yZW1vdmU9dCl9fSgpLGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoKXt9ZnVuY3Rpb24gaShlLHQpe3JldHVybiBmdW5jdGlvbigpe2UuYXBwbHkodCxhcmd1bWVudHMpfX1mdW5jdGlvbiByKGUpe2lmKFwib2JqZWN0XCIhPT1fdHlwZW9mKHRoaXMpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJQcm9taXNlcyBtdXN0IGJlIGNvbnN0cnVjdGVkIHZpYSBuZXdcIik7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSl0aHJvdyBuZXcgVHlwZUVycm9yKFwibm90IGEgZnVuY3Rpb25cIik7dGhpcy5fc3RhdGU9MCx0aGlzLl9oYW5kbGVkPSExLHRoaXMuX3ZhbHVlPXZvaWQgMCx0aGlzLl9kZWZlcnJlZHM9W10sdShlLHRoaXMpfWZ1bmN0aW9uIG4oZSx0KXtmb3IoOzM9PT1lLl9zdGF0ZTspZT1lLl92YWx1ZTtyZXR1cm4gMD09PWUuX3N0YXRlP3ZvaWQgZS5fZGVmZXJyZWRzLnB1c2godCk6KGUuX2hhbmRsZWQ9ITAsdm9pZCByLl9pbW1lZGlhdGVGbihmdW5jdGlvbigpe3ZhciBpPTE9PT1lLl9zdGF0ZT90Lm9uRnVsZmlsbGVkOnQub25SZWplY3RlZDtpZihudWxsPT09aSlyZXR1cm4gdm9pZCgxPT09ZS5fc3RhdGU/bzpzKSh0LnByb21pc2UsZS5fdmFsdWUpO3ZhciByO3RyeXtyPWkoZS5fdmFsdWUpfWNhdGNoKG4pe3JldHVybiB2b2lkIHModC5wcm9taXNlLG4pfW8odC5wcm9taXNlLHIpfSkpfWZ1bmN0aW9uIG8oZSx0KXt0cnl7aWYodD09PWUpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkEgcHJvbWlzZSBjYW5ub3QgYmUgcmVzb2x2ZWQgd2l0aCBpdHNlbGYuXCIpO2lmKHQmJihcIm9iamVjdFwiPT09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiB0P1widW5kZWZpbmVkXCI6X3R5cGVvZih0KSl8fFwiZnVuY3Rpb25cIj09dHlwZW9mIHQpKXt2YXIgbj10LnRoZW47aWYodCBpbnN0YW5jZW9mIHIpcmV0dXJuIGUuX3N0YXRlPTMsZS5fdmFsdWU9dCx2b2lkIGEoZSk7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgbilyZXR1cm4gdm9pZCB1KGkobix0KSxlKX1lLl9zdGF0ZT0xLGUuX3ZhbHVlPXQsYShlKX1jYXRjaChvKXtzKGUsbyl9fWZ1bmN0aW9uIHMoZSx0KXtlLl9zdGF0ZT0yLGUuX3ZhbHVlPXQsYShlKX1mdW5jdGlvbiBhKGUpezI9PT1lLl9zdGF0ZSYmMD09PWUuX2RlZmVycmVkcy5sZW5ndGgmJnIuX2ltbWVkaWF0ZUZuKGZ1bmN0aW9uKCl7ZS5faGFuZGxlZHx8ci5fdW5oYW5kbGVkUmVqZWN0aW9uRm4oZS5fdmFsdWUpfSk7Zm9yKHZhciB0PTAsaT1lLl9kZWZlcnJlZHMubGVuZ3RoO3Q8aTt0KyspbihlLGUuX2RlZmVycmVkc1t0XSk7ZS5fZGVmZXJyZWRzPW51bGx9ZnVuY3Rpb24gbChlLHQsaSl7dGhpcy5vbkZ1bGZpbGxlZD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2U6bnVsbCx0aGlzLm9uUmVqZWN0ZWQ9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90Om51bGwsdGhpcy5wcm9taXNlPWl9ZnVuY3Rpb24gdShlLHQpe3ZhciBpPSExO3RyeXtlKGZ1bmN0aW9uKGUpe2l8fChpPSEwLG8odCxlKSl9LGZ1bmN0aW9uKGUpe2l8fChpPSEwLHModCxlKSl9KX1jYXRjaChyKXtpZihpKXJldHVybjtpPSEwLHModCxyKX19dmFyIGQ9c2V0VGltZW91dDtyLnByb3RvdHlwZVtcImNhdGNoXCJdPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnRoZW4obnVsbCxlKX0sci5wcm90b3R5cGUudGhlbj1mdW5jdGlvbihlLGkpe3ZhciByPW5ldyB0aGlzLmNvbnN0cnVjdG9yKHQpO3JldHVybiBuKHRoaXMsbmV3IGwoZSxpLHIpKSxyfSxyLmFsbD1mdW5jdGlvbihlKXt2YXIgdD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlKTtyZXR1cm4gbmV3IHIoZnVuY3Rpb24oZSxpKXtmdW5jdGlvbiByKG8scyl7dHJ5e2lmKHMmJihcIm9iamVjdFwiPT09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBzP1widW5kZWZpbmVkXCI6X3R5cGVvZihzKSl8fFwiZnVuY3Rpb25cIj09dHlwZW9mIHMpKXt2YXIgYT1zLnRoZW47aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgYSlyZXR1cm4gdm9pZCBhLmNhbGwocyxmdW5jdGlvbihlKXtyKG8sZSl9LGkpfXRbb109cywwPT09LS1uJiZlKHQpfWNhdGNoKGwpe2kobCl9fWlmKDA9PT10Lmxlbmd0aClyZXR1cm4gZShbXSk7Zm9yKHZhciBuPXQubGVuZ3RoLG89MDtvPHQubGVuZ3RoO28rKylyKG8sdFtvXSl9KX0sci5yZXNvbHZlPWZ1bmN0aW9uKGUpe3JldHVybiBlJiZcIm9iamVjdFwiPT09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBlP1widW5kZWZpbmVkXCI6X3R5cGVvZihlKSkmJmUuY29uc3RydWN0b3I9PT1yP2U6bmV3IHIoZnVuY3Rpb24odCl7dChlKX0pfSxyLnJlamVjdD1mdW5jdGlvbihlKXtyZXR1cm4gbmV3IHIoZnVuY3Rpb24odCxpKXtpKGUpfSl9LHIucmFjZT1mdW5jdGlvbihlKXtyZXR1cm4gbmV3IHIoZnVuY3Rpb24odCxpKXtmb3IodmFyIHI9MCxuPWUubGVuZ3RoO3I8bjtyKyspZVtyXS50aGVuKHQsaSl9KX0sci5faW1tZWRpYXRlRm49XCJmdW5jdGlvblwiPT10eXBlb2Ygc2V0SW1tZWRpYXRlJiZmdW5jdGlvbihlKXtzZXRJbW1lZGlhdGUoZSl9fHxmdW5jdGlvbihlKXtkKGUsMCl9LHIuX3VuaGFuZGxlZFJlamVjdGlvbkZuPWZ1bmN0aW9uKGUpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBjb25zb2xlJiZjb25zb2xlJiZjb25zb2xlLndhcm4oXCJQb3NzaWJsZSBVbmhhbmRsZWQgUHJvbWlzZSBSZWplY3Rpb246XCIsZSl9LHIuX3NldEltbWVkaWF0ZUZuPWZ1bmN0aW9uKGUpe3IuX2ltbWVkaWF0ZUZuPWV9LHIuX3NldFVuaGFuZGxlZFJlamVjdGlvbkZuPWZ1bmN0aW9uKGUpe3IuX3VuaGFuZGxlZFJlamVjdGlvbkZuPWV9LFwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPXI6ZS5Qcm9taXNlfHwoZS5Qcm9taXNlPXIpfSh3aW5kb3cpLGZ1bmN0aW9uKGUpe2UuUHJvbWlzZXx8KGUuUHJvbWlzZT1Qcm9taXNlKTt2YXIgdD1cInJlcXVpcmVkXCIsaT1cImVtYWlsXCIscj1cIm1pbkxlbmd0aFwiLG49XCJtYXhMZW5ndGhcIixvPVwicGFzc3dvcmRcIixzPVwiemlwXCIsYT1cInBob25lXCIsbD1cInJlbW90ZVwiLHU9XCJzdHJlbmd0aFwiLGQ9XCJmdW5jdGlvblwiLGM9ZnVuY3Rpb24oZSx0KXtpZihcInN0cmluZ1wiPT10eXBlb2YgZSlyZXR1cm4gZTt2YXIgaT1cInBvc3RcIj09PXQudG9Mb3dlckNhc2UoKT9cIlwiOlwiP1wiO3JldHVybiBBcnJheS5pc0FycmF5KGUpP2krZS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIGUubmFtZStcIj1cIitlLnZhbHVlfSkuam9pbihcIiZcIik6aStPYmplY3Qua2V5cyhlKS5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIHQrXCI9XCIrZVt0XX0pLmpvaW4oXCImXCIpfSxoPWZ1bmN0aW9uKGUpe3ZhciB0PWUudXJsLGk9ZS5tZXRob2Qscj1lLmRhdGEsbj1lLmRlYnVnLG89ZS5jYWxsYmFjayxzPWUuZXJyb3I7aWYobilyZXR1cm4gdm9pZCBvKFwidGVzdFwiKTt2YXIgYT1lLmFzeW5jIT09ITEsbD1uZXcgWE1MSHR0cFJlcXVlc3QsdT1jKHIsXCJnZXRcIiksZD1udWxsO1wicG9zdFwiPT09aS50b0xvd2VyQ2FzZSgpJiYoZD1jKHIsXCJwb3N0XCIpLHU9XCJcIiksbC5vcGVuKGksdCt1LGEpLGwuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpLGwub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7ND09PXRoaXMucmVhZHlTdGF0ZSYmKDIwMD09PXRoaXMuc3RhdHVzP28odGhpcy5yZXNwb25zZVRleHQpOnMmJnModGhpcy5yZXNwb25zZVRleHQpKX0sbC5zZW5kKGQpfSxmPWZ1bmN0aW9uKGUsdCl7dGhpcy5vcHRpb25zPXR8fHt9LHRoaXMucnVsZXM9dGhpcy5vcHRpb25zLnJ1bGVzfHx7fSx0aGlzLm1lc3NhZ2VzPXRoaXMub3B0aW9ucy5tZXNzYWdlc3x8dm9pZCAwLHRoaXMuY29sb3JXcm9uZz10aGlzLm9wdGlvbnMuY29sb3JXcm9uZ3x8XCIjQjgxMTExXCIsdGhpcy5yZXN1bHQ9e30sdGhpcy5lbGVtZW50cz1bXSx0aGlzLnRvb2x0aXA9dGhpcy5vcHRpb25zLnRvb2x0aXB8fHt9LHRoaXMudG9vbHRpcEZhZGVPdXRUaW1lPXRoaXMudG9vbHRpcC5mYWRlT3V0VGltZXx8NWUzLHRoaXMudG9vbHRpcEZhZGVPdXRDbGFzcz10aGlzLnRvb2x0aXAuZmFkZU91dENsYXNzfHxcImp1c3QtdmFsaWRhdGUtdG9vbHRpcC1oaWRlXCIsdGhpcy50b29sdGlwU2VsZWN0b3JXcmFwPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy50b29sdGlwLnNlbGVjdG9yV3JhcCkubGVuZ3RoP2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy50b29sdGlwLnNlbGVjdG9yV3JhcCk6ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qdXN0LXZhbGlkYXRlLXRvb2x0aXAtY29udGFpbmVyXCIpLHRoaXMuYmluZEhhbmRsZXJLZXl1cD10aGlzLmhhbmRsZXJLZXl1cC5iaW5kKHRoaXMpLHRoaXMuc3VibWl0SGFuZGxlcj10aGlzLm9wdGlvbnMuc3VibWl0SGFuZGxlcnx8dm9pZCAwLHRoaXMuaW52YWxpZEZvcm1DYWxsYmFjaz10aGlzLm9wdGlvbnMuaW52YWxpZEZvcm1DYWxsYmFja3x8dm9pZCAwLHRoaXMucHJvbWlzZXNSZW1vdGU9W10sdGhpcy5pc1ZhbGlkYXRpb25TdWNjZXNzPSExLHRoaXMuZm9jdXNXcm9uZ0ZpZWxkPXRoaXMub3B0aW9ucy5mb2N1c1dyb25nRmllbGR8fCExLHRoaXMuUkVHRVhQPXtlbWFpbDovXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLyx6aXA6L15cXGR7NX0oLVxcZHs0fSk/JC8scGhvbmU6L14oWzAtOV0oIHwtKT8pPyhcXCg/WzAtOV17M31cXCk/fFswLTldezN9KSggfC0pPyhbMC05XXszfSggfC0pP1swLTldezR9fFthLXpBLVowLTldezd9KSQvLHBhc3N3b3JkOi9bXlxcd1xcZF0qKChbMC05XSsuKltBLVphLXpdKy4qKXxbQS1aYS16XSsuKihbMC05XSsuKikpLyxzdHJlbmd0aFBhc3M6L14oPz0uKlthLXpdKSg/PS4qW0EtWl0pKD89LipcXGQpW2EtekEtWlxcZF0vfSx0aGlzLkRFRkFVTFRfUkVNT1RFX0VSUk9SPVwiRXJyb3JcIix0aGlzLnN0YXRlPXt0b29sdGlwc1RpbWVyOm51bGx9LHRoaXMuc2V0Rm9ybShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGUpKX07Zi5wcm90b3R5cGU9e2RlZmF1bHRSdWxlczp7ZW1haWw6e3JlcXVpcmVkOiEwLGVtYWlsOiEwfSxuYW1lOntyZXF1aXJlZDohMCxtaW5MZW5ndGg6MyxtYXhMZW5ndGg6MTV9LHRleHQ6e3JlcXVpcmVkOiEwLG1heExlbmd0aDozMDAsbWluTGVuZ3RoOjV9LHBhc3N3b3JkOntyZXF1aXJlZDohMCxwYXNzd29yZDohMCxtaW5MZW5ndGg6NCxtYXhMZW5ndGg6OH0semlwOntyZXF1aXJlZDohMCx6aXA6ITB9LHBob25lOntwaG9uZTohMH19LGRlZmF1bHRNZXNzYWdlczp7cmVxdWlyZWQ6XCJUaGUgZmllbGQgaXMgcmVxdWlyZWRcIixlbWFpbDpcIlBsZWFzZSwgdHlwZSBhIHZhbGlkIGVtYWlsXCIsbWF4TGVuZ3RoOlwiVGhlIGZpZWxkIG11c3QgY29udGFpbiBhIG1heGltdW0gb2YgOnZhbHVlIGNoYXJhY3RlcnNcIixtaW5MZW5ndGg6XCJUaGUgZmllbGQgbXVzdCBjb250YWluIGEgbWluaW11bSBvZiA6dmFsdWUgY2hhcmFjdGVyc1wiLHBhc3N3b3JkOlwiUGFzc3dvcmQgaXMgbm90IHZhbGlkXCIscmVtb3RlOlwiRW1haWwgYWxyZWFkeSBleGlzdHNcIixzdHJlbmd0aDpcIlBhc3N3b3JkIG11c3QgY29udGVudHMgYXQgbGVhc3Qgb25lIHVwcGVyY2FzZSBsZXR0ZXIsIG9uZSBsb3dlcmNhc2UgbGV0dGVyIGFuZCBvbmUgbnVtYmVyXCIsXCJmdW5jdGlvblwiOlwiRnVuY3Rpb24gcmV0dXJuZWQgZmFsc2VcIn0saGFuZGxlcktleXVwOmZ1bmN0aW9uKGUpe3ZhciB0PWUudGFyZ2V0LGk9e25hbWU6dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbGlkYXRlLWZpZWxkXCIpLHZhbHVlOnQudmFsdWV9O2RlbGV0ZSB0aGlzLnJlc3VsdFtpLm5hbWVdLHRoaXMudmFsaWRhdGVJdGVtKHtuYW1lOmkubmFtZSx2YWx1ZTppLnZhbHVlLGdyb3VwOltdLGlzS2V5dXBDaGFuZ2U6ITB9KSx0aGlzLnJlbmRlckVycm9ycygpfSxzZXR0ZXJFdmVudExpc3RlbmVyOmZ1bmN0aW9uKGUsdCxpLHIpe3N3aXRjaChcImtleXVwXCI9PT10JiYoaT10aGlzLmJpbmRIYW5kbGVyS2V5dXApLHIpe2Nhc2VcImFkZFwiOmUuYWRkRXZlbnRMaXN0ZW5lcih0LGkpO2JyZWFrO2Nhc2VcInJlbW92ZVwiOmUucmVtb3ZlRXZlbnRMaXN0ZW5lcih0LGkpfX0sZ2V0RWxlbWVudHNSZWFsVmFsdWU6ZnVuY3Rpb24oKXtmb3IodmFyIGU9dGhpcy4kZm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiKlwiKSx0PXZvaWQgMCxpPXt9LHI9MCxuPWUubGVuZ3RoO3I8bjsrK3IpaWYodD1lW3JdLmdldEF0dHJpYnV0ZShcIm5hbWVcIikpe2lmKFwiY2hlY2tib3hcIj09PWVbcl0udHlwZSl7aVt0XT1lW3JdLmNoZWNrZWQ7Y29udGludWV9aVt0XT1lW3JdLnZhbHVlfXJldHVybiBpfSx2YWxpZGF0aW9uRmFpbGVkOmZ1bmN0aW9uKCl7dGhpcy5pbnZhbGlkRm9ybUNhbGxiYWNrJiZ0aGlzLmludmFsaWRGb3JtQ2FsbGJhY2sodGhpcy5yZXN1bHQpO3ZhciBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtdmFsaWRhdGUtZXJyb3ItZmllbGRcIik7dGhpcy5mb2N1c1dyb25nRmllbGQmJmUmJmUuZm9jdXMmJmUuZm9jdXMoKX0sdmFsaWRhdGlvblN1Y2Nlc3M6ZnVuY3Rpb24oKXtpZigwPT09T2JqZWN0LmtleXModGhpcy5yZXN1bHQpLmxlbmd0aCl7aWYodGhpcy5pc1ZhbGlkYXRpb25TdWNjZXNzPSExLHRoaXMuc3VibWl0SGFuZGxlcil7dmFyIGU9dGhpcy5nZXRFbGVtZW50c1JlYWxWYWx1ZSgpO3JldHVybiB2b2lkIHRoaXMuc3VibWl0SGFuZGxlcih0aGlzLiRmb3JtLGUsaCl9dGhpcy4kZm9ybS5zdWJtaXQoKX19LHNldEZvcm06ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpczt0aGlzLiRmb3JtPWUsdGhpcy4kZm9ybS5zZXRBdHRyaWJ1dGUoXCJub3ZhbGlkYXRlXCIsXCJub3ZhbGlkYXRlXCIpLHRoaXMuJGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLGZ1bmN0aW9uKGUpe3JldHVybiBlLnByZXZlbnREZWZhdWx0KCksdC5yZXN1bHQ9W10sdC5nZXRFbGVtZW50cygpLHQucHJvbWlzZXNSZW1vdGUubGVuZ3RoP3ZvaWQgUHJvbWlzZS5hbGwodC5wcm9taXNlc1JlbW90ZSkudGhlbihmdW5jdGlvbigpe3QucHJvbWlzZXNSZW1vdGU9W10sdC5pc1ZhbGlkYXRpb25TdWNjZXNzP3QudmFsaWRhdGlvblN1Y2Nlc3MoKTp0LnZhbGlkYXRpb25GYWlsZWQoKX0pOnZvaWQodC5pc1ZhbGlkYXRpb25TdWNjZXNzP3QudmFsaWRhdGlvblN1Y2Nlc3MoKTp0LnZhbGlkYXRpb25GYWlsZWQoKSl9KX0saXNFbWFpbDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5SRUdFWFAuZW1haWwudGVzdChlKX0saXNaaXA6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuUkVHRVhQLnppcC50ZXN0KGUpfSxpc1Bob25lOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLlJFR0VYUC5waG9uZS50ZXN0KGUpfSxpc1Bhc3N3b3JkOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLlJFR0VYUC5wYXNzd29yZC50ZXN0KGUpfSxpc0VtcHR5OmZ1bmN0aW9uKGUpe3ZhciB0PWU7cmV0dXJuIGUudHJpbSYmKHQ9ZS50cmltKCkpLCF0fSxjaGVja0xlbmd0aE1heDpmdW5jdGlvbihlLHQpe3JldHVybiBlLmxlbmd0aDw9dH0sY2hlY2tMZW5ndGhNaW46ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5sZW5ndGg+PXR9LGNoZWNrU3RyZW5ndGhQYXNzOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLlJFR0VYUC5zdHJlbmd0aFBhc3MudGVzdChlKX0sZ2V0RWxlbWVudHM6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9dGhpcy4kZm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtdmFsaWRhdGUtZmllbGRdXCIpO3RoaXMuZWxlbWVudHM9W107Zm9yKHZhciBpPWZ1bmN0aW9uKGkscil7dmFyIG49dFtpXSxvPW4uZ2V0QXR0cmlidXRlKFwiZGF0YS12YWxpZGF0ZS1maWVsZFwiKSxzPW4udmFsdWUsYT0hMSxsPVtdO2lmKFwiY2hlY2tib3hcIj09PW4udHlwZSYmKHM9bi5jaGVja2VkfHxcIlwiLG4uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLGZ1bmN0aW9uKHQpe3ZhciBpPXQudGFyZ2V0LHI9e25hbWU6aS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbGlkYXRlLWZpZWxkXCIpLHZhbHVlOmkuY2hlY2tlZH07ZGVsZXRlIGUucmVzdWx0W3IubmFtZV0sZS52YWxpZGF0ZUl0ZW0oe25hbWU6ci5uYW1lLHZhbHVlOnIudmFsdWUsZ3JvdXA6W119KSxlLnJlbmRlckVycm9ycygpfSkpLFwicmFkaW9cIj09PW4udHlwZSl7dmFyIHU9ZS5lbGVtZW50cy5maWx0ZXIoZnVuY3Rpb24oZSl7aWYoZS5uYW1lPT09bylyZXR1cm4gZX0pWzBdO3U/KHUuZ3JvdXAucHVzaChuLmNoZWNrZWQpLGE9ITApOmwucHVzaChuLmNoZWNrZWQpLG4uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLGZ1bmN0aW9uKHQpe3ZhciBpPXQudGFyZ2V0LHI9e25hbWU6aS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbGlkYXRlLWZpZWxkXCIpLHZhbHVlOmkuY2hlY2tlZH07ZGVsZXRlIGUucmVzdWx0W3IubmFtZV0sZS52YWxpZGF0ZUl0ZW0oe25hbWU6ci5uYW1lLHZhbHVlOnIudmFsdWUsZ3JvdXA6W119KSxlLnJlbmRlckVycm9ycygpfSl9ZS5zZXR0ZXJFdmVudExpc3RlbmVyKG4sXCJrZXl1cFwiLGUuaGFuZGxlcktleXVwLFwiYWRkXCIpLGF8fGUuZWxlbWVudHMucHVzaCh7bmFtZTpvLHZhbHVlOnMsZ3JvdXA6bH0pfSxyPTAsbj10Lmxlbmd0aDtyPG47KytyKWkocixuKTt0aGlzLnZhbGlkYXRlRWxlbWVudHMoKX0sdmFsaWRhdGVSZXF1aXJlZDpmdW5jdGlvbihlKXtyZXR1cm4hdGhpcy5pc0VtcHR5KGUpfSx2YWxpZGF0ZUVtYWlsOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmlzRW1haWwoZSl9LHZhbGlkYXRlUGhvbmU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuaXNQaG9uZShlKX0sdmFsaWRhdGVNaW5MZW5ndGg6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5jaGVja0xlbmd0aE1pbihlLHQpfSx2YWxpZGF0ZU1heExlbmd0aDpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLmNoZWNrTGVuZ3RoTWF4KGUsdCl9LHZhbGlkYXRlU3RyZW5ndGhQYXNzOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmNoZWNrU3RyZW5ndGhQYXNzKGUpfSx2YWxpZGF0ZVBhc3N3b3JkOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmlzUGFzc3dvcmQoZSl9LHZhbGlkYXRlWmlwOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmlzWmlwKGUpfSx2YWxpZGF0ZVJlbW90ZTpmdW5jdGlvbihlKXt2YXIgdD1lLnZhbHVlLGk9ZS5uYW1lLHI9ZS51cmwsbj1lLnN1Y2Nlc3NBbnN3ZXIsbz1lLnNlbmRQYXJhbSxzPWUubWV0aG9kO3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihlKXtoKHt1cmw6cixtZXRob2Q6cyxkYXRhOl9kZWZpbmVQcm9wZXJ0eSh7fSxvLHQpLGFzeW5jOiEwLGNhbGxiYWNrOmZ1bmN0aW9uKHQpe3QudG9Mb3dlckNhc2UoKT09PW4udG9Mb3dlckNhc2UoKSYmZShcIm9rXCIpLGUoe3R5cGU6XCJpbmNvcnJlY3RcIixuYW1lOml9KX0sZXJyb3I6ZnVuY3Rpb24oKXtlKHt0eXBlOlwiZXJyb3JcIixuYW1lOml9KX19KX0pfSxnZW5lcmF0ZU1lc3NhZ2U6ZnVuY3Rpb24oZSx0LGkpe3ZhciByPXRoaXMubWVzc2FnZXN8fHRoaXMuZGVmYXVsdE1lc3NhZ2VzLG49clt0XSYmclt0XVtlXXx8dGhpcy5tZXNzYWdlcyYmXCJzdHJpbmdcIj09dHlwZW9mIHRoaXMubWVzc2FnZXNbdF0mJnJbdF18fHRoaXMuZGVmYXVsdE1lc3NhZ2VzW2VdfHx0aGlzLkRFRkFVTFRfUkVNT1RFX0VSUk9SO2kmJihuPW4ucmVwbGFjZShcIjp2YWx1ZVwiLGkudG9TdHJpbmcoKSkpLHRoaXMucmVzdWx0W3RdPXttZXNzYWdlOm59fSx2YWxpZGF0ZUVsZW1lbnRzOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztyZXR1cm4gdGhpcy5sb2NrRm9ybSgpLHRoaXMuZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbih0KXtlLnZhbGlkYXRlSXRlbSh7bmFtZTp0Lm5hbWUsdmFsdWU6dC52YWx1ZSxncm91cDp0Lmdyb3VwfSl9KSx0aGlzLnByb21pc2VzUmVtb3RlLmxlbmd0aD92b2lkIFByb21pc2UuYWxsKHRoaXMucHJvbWlzZXNSZW1vdGUpLnRoZW4oZnVuY3Rpb24odCl7dC5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JldHVyblwib2tcIj09PXQ/dm9pZCBlLnJlbmRlckVycm9ycygpOihcImVycm9yXCI9PT10LnR5cGUmJmFsZXJ0KFwiU2VydmVyIGVycm9yIG9jY3VyZWQuIFBsZWFzZSB0cnkgbGF0ZXIuXCIpLGUuZ2VuZXJhdGVNZXNzYWdlKGwsdC5uYW1lKSx2b2lkIGUucmVuZGVyRXJyb3JzKCkpfSl9KTp2b2lkIHRoaXMucmVuZGVyRXJyb3JzKCl9LHZhbGlkYXRlSXRlbTpmdW5jdGlvbihlKXt2YXIgYz10aGlzLGg9ZS5uYW1lLGY9ZS5ncm91cCxtPWUudmFsdWUsdj1lLmlzS2V5dXBDaGFuZ2UscD10aGlzLnJ1bGVzW2hdfHx0aGlzLmRlZmF1bHRSdWxlc1toXXx8ITE7aWYocClmb3IodmFyIGcgaW4gcCl7dmFyIHk9cFtnXTtpZihnIT09dCYmZyE9PWQmJlwiXCI9PW0pcmV0dXJuO3N3aXRjaChnKXtjYXNlIGQ6aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgeSlicmVhaztpZih5KGgsbSkpYnJlYWs7cmV0dXJuIHZvaWQgdGhpcy5nZW5lcmF0ZU1lc3NhZ2UoZCxoLHkpO2Nhc2UgdDppZigheSlicmVhaztpZihmLmxlbmd0aCl7dmFyIGI9ITE7aWYoZi5mb3JFYWNoKGZ1bmN0aW9uKGUpe2MudmFsaWRhdGVSZXF1aXJlZChlKSYmKGI9ITApfSksYilicmVha31lbHNlIGlmKHRoaXMudmFsaWRhdGVSZXF1aXJlZChtKSlicmVhaztyZXR1cm4gdm9pZCB0aGlzLmdlbmVyYXRlTWVzc2FnZSh0LGgpO2Nhc2UgaTppZigheSlicmVhaztpZih0aGlzLnZhbGlkYXRlRW1haWwobSkpYnJlYWs7cmV0dXJuIHZvaWQgdGhpcy5nZW5lcmF0ZU1lc3NhZ2UoaSxoKTtjYXNlIHI6aWYoIXkpYnJlYWs7aWYodGhpcy52YWxpZGF0ZU1pbkxlbmd0aChtLHkpKWJyZWFrO3JldHVybiB2b2lkIHRoaXMuZ2VuZXJhdGVNZXNzYWdlKHIsaCx5KTtjYXNlIG46aWYoIXkpYnJlYWs7aWYodGhpcy52YWxpZGF0ZU1heExlbmd0aChtLHkpKWJyZWFrO3JldHVybiB2b2lkIHRoaXMuZ2VuZXJhdGVNZXNzYWdlKG4saCx5KTtjYXNlIGE6aWYoIXkpYnJlYWs7aWYodGhpcy52YWxpZGF0ZVBob25lKG0pKWJyZWFrO3JldHVybiB2b2lkIHRoaXMuZ2VuZXJhdGVNZXNzYWdlKGEsaCk7Y2FzZSBvOmlmKCF5KWJyZWFrO2lmKHRoaXMudmFsaWRhdGVQYXNzd29yZChtKSlicmVhaztyZXR1cm4gdm9pZCB0aGlzLmdlbmVyYXRlTWVzc2FnZShvLGgpO2Nhc2UgdTppZigheXx8XCJvYmplY3RcIiE9PShcInVuZGVmaW5lZFwiPT10eXBlb2YgeT9cInVuZGVmaW5lZFwiOl90eXBlb2YoeSkpKWJyZWFrO2lmKHlbXCJkZWZhdWx0XCJdJiZ0aGlzLnZhbGlkYXRlU3RyZW5ndGhQYXNzKG0pKWJyZWFrO2lmKHkuY3VzdG9tKXt2YXIgRT12b2lkIDA7dHJ5e0U9bmV3IFJlZ0V4cCh5LmN1c3RvbSl9Y2F0Y2godyl7RT10aGlzLlJFR0VYUC5zdHJlbmd0aFBhc3MsY29uc29sZS5lcnJvcihcIkN1c3RvbSByZWdleHAgZm9yIHN0cmVuZ3RoIHJ1bGUgaXMgbm90IHZhbGlkLiBEZWZhdWx0IHJlZ2V4cCB3YXMgdXNlZC5cIil9aWYoRS50ZXN0KG0pKWJyZWFrfXJldHVybiB2b2lkIHRoaXMuZ2VuZXJhdGVNZXNzYWdlKHUsaCk7Y2FzZSBzOmlmKCF5KWJyZWFrO2lmKHRoaXMudmFsaWRhdGVaaXAobSkpYnJlYWs7cmV0dXJuIHZvaWQgdGhpcy5nZW5lcmF0ZU1lc3NhZ2UocyxoKTtjYXNlIGw6aWYodilicmVhaztpZigheSlicmVhazt2YXIgaz15LnVybCxfPXkuc3VjY2Vzc0Fuc3dlcixQPXkubWV0aG9kLFI9eS5zZW5kUGFyYW0sUz10aGlzLiRmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2RhdGEtdmFsaWRhdGUtZmllbGQ9XCInK2grJ1wiXScpO3JldHVybiB0aGlzLnNldHRlckV2ZW50TGlzdGVuZXIoUyxcImtleXVwXCIsdGhpcy5oYW5kbGVyS2V5dXAsXCJyZW1vdmVcIiksdm9pZCB0aGlzLnByb21pc2VzUmVtb3RlLnB1c2godGhpcy52YWxpZGF0ZVJlbW90ZSh7bmFtZTpoLHZhbHVlOm0sdXJsOmssbWV0aG9kOlAsc2VuZFBhcmFtOlIsc3VjY2Vzc0Fuc3dlcjpffSkpfX19LGNsZWFyRXJyb3JzOmZ1bmN0aW9uKCl7Zm9yKHZhciBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtdmFsaWRhdGUtZXJyb3ItbGFiZWxcIiksdD0wLGk9ZS5sZW5ndGg7dDxpOysrdCllW3RdLnJlbW92ZSgpO2U9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qcy12YWxpZGF0ZS1lcnJvci1maWVsZFwiKTtmb3IodmFyIHI9MCxuPWUubGVuZ3RoO3I8bjsrK3IpZVtyXS5jbGFzc0xpc3QucmVtb3ZlKFwianMtdmFsaWRhdGUtZXJyb3ItZmllbGRcIiksZVtyXS5zdHlsZS5ib3JkZXI9XCJcIixlW3JdLnN0eWxlLmNvbG9yPVwiXCJ9LHJlbmRlckVycm9yczpmdW5jdGlvbigpe3ZhciBlPXRoaXM7aWYodGhpcy5jbGVhckVycm9ycygpLHRoaXMudW5sb2NrRm9ybSgpLHRoaXMuaXNWYWxpZGF0aW9uU3VjY2Vzcz0hMSwwPT09T2JqZWN0LmtleXModGhpcy5yZXN1bHQpLmxlbmd0aClyZXR1cm4gdm9pZCh0aGlzLmlzVmFsaWRhdGlvblN1Y2Nlc3M9ITApO2Zvcih2YXIgdCBpbiB0aGlzLnJlc3VsdCl7dmFyIGk9dGhpcy5yZXN1bHRbdF0ubWVzc2FnZSxyPXRoaXMuJGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdmFsaWRhdGUtZmllbGQ9XCInK3QrJ1wiXScpLG49cltyLmxlbmd0aC0xXSxvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aWYoby5pbm5lckhUTUw9aSxvLmNsYXNzTmFtZT1cImpzLXZhbGlkYXRlLWVycm9yLWxhYmVsXCIsby5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLFwiY29sb3I6IFwiK3RoaXMuY29sb3JXcm9uZyksbi5zdHlsZS5ib3JkZXI9XCIxcHggc29saWQgXCIrdGhpcy5jb2xvcldyb25nLG4uc3R5bGUuY29sb3I9XCJcIit0aGlzLmNvbG9yV3Jvbmcsbi5jbGFzc0xpc3QuYWRkKFwianMtdmFsaWRhdGUtZXJyb3ItZmllbGRcIiksXCJjaGVja2JveFwiPT09bi50eXBlfHxcInJhZGlvXCI9PT1uLnR5cGUpe3ZhciBzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2Zvcj1cIicrbi5nZXRBdHRyaWJ1dGUoXCJpZFwiKSsnXCJdJyk7XCJsYWJlbFwiPT09bi5wYXJlbnROb2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKT9uLnBhcmVudE5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobyxudWxsKTpzP3MucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobyxzLm5leHRTaWJsaW5nKTpuLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG8sbi5uZXh0U2libGluZyl9ZWxzZSBuLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG8sbi5uZXh0U2libGluZyl9dGhpcy50b29sdGlwU2VsZWN0b3JXcmFwLmxlbmd0aCYmKHRoaXMuc3RhdGUudG9vbHRpcHNUaW1lcj1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZS5oaWRlVG9vbHRpcHMoKX0sdGhpcy50b29sdGlwRmFkZU91dFRpbWUpKX0saGlkZVRvb2x0aXBzOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtdmFsaWRhdGUtZXJyb3ItbGFiZWxcIik7dC5mb3JFYWNoKGZ1bmN0aW9uKHQpe3QuY2xhc3NMaXN0LmFkZChlLnRvb2x0aXBGYWRlT3V0Q2xhc3MpfSksdGhpcy5zdGF0ZS50b29sdGlwc1RpbWVyPW51bGx9LGxvY2tGb3JtOmZ1bmN0aW9uKCl7Zm9yKHZhciBlPXRoaXMuJGZvcm0ucXVlcnlTZWxlY3RvckFsbChcImlucHV0LCB0ZXh0YXJlYSwgYnV0dG9uLCBzZWxlY3RcIiksdD0wLGk9ZS5sZW5ndGg7dDxpOysrdCllW3RdLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsXCJkaXNhYmxlZFwiKSxlW3RdLnN0eWxlLnBvaW50ZXJFdmVudHM9XCJub25lXCIsZVt0XS5zdHlsZS53ZWJpdEZpbHRlcj1cImdyYXlzY2FsZSgxMDAlKVwiLGVbdF0uc3R5bGUuZmlsdGVyPVwiZ3JheXNjYWxlKDEwMCUpXCJ9LHVubG9ja0Zvcm06ZnVuY3Rpb24oKXtmb3IodmFyIGU9dGhpcy4kZm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXQsIHRleHRhcmVhLCBidXR0b24sIHNlbGVjdFwiKSx0PTAsaT1lLmxlbmd0aDt0PGk7Kyt0KWVbdF0ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIiksZVt0XS5zdHlsZS5wb2ludGVyRXZlbnRzPVwiXCIsZVt0XS5zdHlsZS53ZWJpdEZpbHRlcj1cIlwiLGVbdF0uc3R5bGUuZmlsdGVyPVwiXCJ9fSxlLkp1c3RWYWxpZGF0ZT1mfSh3aW5kb3cpO1xuIiwieW1hcHMucmVhZHkoaW5pdCk7XG5mdW5jdGlvbiBpbml0KCkge1xuICBjb25zdCBtYXBFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hcCcpO1xuICBjb25zdCBteU1hcCA9IG5ldyB5bWFwcy5NYXAoXG4gICAgXCJtYXBcIixcbiAgICB7XG4gICAgICBjZW50ZXI6IFs1NS43Njk1MzUsIDM3LjYzOTk4NV0sXG4gICAgICB6b29tOiAxNCxcbiAgICAgIGNvbnRyb2xzOiBbJ2dlb2xvY2F0aW9uQ29udHJvbCcsICd6b29tQ29udHJvbCddXG4gICAgfSxcbiAgICB7XG4gICAgICBzdXBwcmVzc01hcE9wZW5CbG9jazogdHJ1ZSxcbiAgICAgIGdlb2xvY2F0aW9uQ29udHJvbFNpemU6IFwibGFyZ2VcIixcbiAgICAgIGdlb2xvY2F0aW9uQ29udHJvbFBvc2l0aW9uOiAgeyB0b3A6IFwiMjAwcHhcIiwgcmlnaHQ6IFwiMjBweFwiIH0sXG4gICAgICBnZW9sb2NhdGlvbkNvbnRyb2xGbG9hdDogJ25vbmUnLFxuICAgICAgem9vbUNvbnRyb2xTaXplOiBcInNtYWxsXCIsXG4gICAgICB6b29tQ29udHJvbEZsb2F0OiBcIm5vbmVcIixcbiAgICAgIHpvb21Db250cm9sUG9zaXRpb246IHsgdG9wOiBcIjEyMHB4XCIsIHJpZ2h0OiBcIjIwcHhcIiB9XG4gICAgfVxuICApO1xuXG4gIG15TWFwLmJlaGF2aW9ycy5kaXNhYmxlKCdzY3JvbGxab29tJyk7XG5cbiAgY29uc3QgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFxuICAgIFs1NS43Njk1MzUsIDM3LjYzOTk4NV0sXG4gICAge30sXG4gICAge1xuICAgICAgaWNvbkxheW91dDogXCJkZWZhdWx0I2ltYWdlXCIsXG4gICAgICBpY29uSW1hZ2VIcmVmOiBcIi4uL2ltYWdlcy9wb2ludC5zdmdcIixcbiAgICAgIGljb25JbWFnZVNpemU6IFsxMiwgMTJdLFxuICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTIwLCAtNDBdLFxuICAgIH1cbiAgKTtcbiAgICBteVBsYWNlbWFyay5ldmVudHMuYWRkKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnRhY3RzQmxvY2suY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xuICAgIH0pO1xuICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyayk7XG4gIG15TWFwLmNvbnRhaW5lci5maXRUb1ZpZXdwb3J0KCk7XG59XG5cbmNvbnN0IGNvbnRhY3RzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdHMtYmxvY2snKTtcbmNvbnN0IGJ0bkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2NrLWJ0bicpO1xuXG4gIGJ0bkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XG4gICAgY29udGFjdHNCbG9jay5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gIH0pXG5cblxuIiwibmV3IEp1c3RWYWxpZGF0ZSgnLmNvbnRhY3RzLWZvcm0nLCB7XG4gIHJ1bGVzOiB7XG4gICAgbmFtZToge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBtaW5MZW5ndGg6IDJcbiAgICB9LFxuICAgIGVtYWlsOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIGVtYWlsOiB0cnVlXG4gICAgfSxcbiAgfSxcbiAgbWVzc2FnZXM6IHtcbiAgICBuYW1lOiBcItCd0LXQtNC+0L/Rg9GB0YLQuNC80YvQuSDRhNC+0YDQvNCw0YJcIixcbiAgICBlbWFpbDogXCLQndC10LTQvtC/0YPRgdGC0LjQvNGL0Lkg0YTQvtGA0LzQsNGCXCJcbiAgfVxufSlcblxuXG4iXX0=
