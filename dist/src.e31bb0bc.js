// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\images\\svg\\icon-header-check.svg":[["icon-header-check.34fbb49f.svg","images/svg/icon-header-check.svg"],"images/svg/icon-header-check.svg"],"./..\\images\\tel\\hero-tel-1x.png":[["hero-tel-1x.5f720bf5.png","images/tel/hero-tel-1x.png"],"images/tel/hero-tel-1x.png"],"./..\\images\\tel\\Ellipse-tel-1x.png":[["Ellipse-tel-1x.a6950a0a.png","images/tel/Ellipse-tel-1x.png"],"images/tel/Ellipse-tel-1x.png"],"./..\\images\\tel\\hero-tel-2x.png":[["hero-tel-2x.70c6959a.png","images/tel/hero-tel-2x.png"],"images/tel/hero-tel-2x.png"],"./..\\images\\tel\\Ellipse-tel-2x.png":[["Ellipse-tel-2x.2d400ba7.png","images/tel/Ellipse-tel-2x.png"],"images/tel/Ellipse-tel-2x.png"],"./..\\images\\tel\\Ellipse-tel1-1x.png":[["Ellipse-tel1-1x.095a8b66.png","images/tel/Ellipse-tel1-1x.png"],"images/tel/Ellipse-tel1-1x.png"],"./..\\images\\tel\\Ellipse-tel1-2x.png":[["Ellipse-tel1-2x.f6f02fe4.png","images/tel/Ellipse-tel1-2x.png"],"images/tel/Ellipse-tel1-2x.png"],"./..\\images\\tab\\hero-icecream-tab-1x.png":[["hero-icecream-tab-1x.ad7af988.png","images/tab/hero-icecream-tab-1x.png"],"images/tab/hero-icecream-tab-1x.png"],"./..\\images\\tab\\hero-icecream-tab-2x.png":[["hero-icecream-tab-2x.73b4885a.png","images/tab/hero-icecream-tab-2x.png"],"images/tab/hero-icecream-tab-2x.png"],"./..\\images\\desk\\hero-icecream-desk-1x.png":[["hero-icecream-desk-1x.3c0be59f.png","images/desk/hero-icecream-desk-1x.png"],"images/desk/hero-icecream-desk-1x.png"],"./..\\images\\desk\\Ellipse-desk-1x.png":[["Ellipse-desk-1x.fe5b9043.png","images/desk/Ellipse-desk-1x.png"],"images/desk/Ellipse-desk-1x.png"],"./..\\images\\desk\\hero-icecream-desk-2x.png":[["hero-icecream-desk-2x.c52d69a9.png","images/desk/hero-icecream-desk-2x.png"],"images/desk/hero-icecream-desk-2x.png"],"./..\\images\\desk\\Ellipse-des-2x.png":[["Ellipse-des-2x.23060f00.png","images/desk/Ellipse-des-2x.png"],"images/desk/Ellipse-des-2x.png"],"./..\\images\\tab\\hero-girl-tab-1x.png":[["hero-girl-tab-1x.6341f3cd.png","images/tab/hero-girl-tab-1x.png"],"images/tab/hero-girl-tab-1x.png"],"./..\\images\\tab\\hero-girl-tab-2x.png":[["hero-girl-tab-2x.c463fbaa.png","images/tab/hero-girl-tab-2x.png"],"images/tab/hero-girl-tab-2x.png"],"./..\\images\\desk\\hero-girl-desk-1x.png":[["hero-girl-desk-1x.772072ac.png","images/desk/hero-girl-desk-1x.png"],"images/desk/hero-girl-desk-1x.png"],"./..\\images\\desk\\hero-girl-desk-2x.png":[["hero-girl-desk-2x.4cad7e35.png","images/desk/hero-girl-desk-2x.png"],"images/desk/hero-girl-desk-2x.png"],"./..\\images\\tab\\hero-milk-tab-1x.png":[["hero-milk-tab-1x.252f64bc.png","images/tab/hero-milk-tab-1x.png"],"images/tab/hero-milk-tab-1x.png"],"./..\\images\\tab\\hero-milk-tab-2x.png":[["hero-milk-tab-2x.50e2f80c.png","images/tab/hero-milk-tab-2x.png"],"images/tab/hero-milk-tab-2x.png"],"./..\\images\\desk\\hero-milk-desk-1x.png":[["hero-milk-desk-1x.0c71fbaa.png","images/desk/hero-milk-desk-1x.png"],"images/desk/hero-milk-desk-1x.png"],"./..\\images\\desk\\hero-milk-desk-2x.png":[["hero-milk-desk-2x.ff763d0e.png","images/desk/hero-milk-desk-2x.png"],"images/desk/hero-milk-desk-2x.png"],"./..\\images\\desktop\\Sorbet-des-1x.jpg":[["Sorbet-des-1x.01a3ef96.jpg","images/desktop/Sorbet-des-1x.jpg"],"images/desktop/Sorbet-des-1x.jpg"],"./..\\images\\desktop\\pngegg.png":[["pngegg.190a9637.png","images/desktop/pngegg.png"],"images/desktop/pngegg.png"],"./..\\images\\tel\\product1-tel-1x.png":[["product1-tel-1x.e9617fd7.png","images/tel/product1-tel-1x.png"],"images/tel/product1-tel-1x.png"],"./..\\images\\tel\\product1-tel-2x.png":[["product1-tel-2x.45e8b336.png","images/tel/product1-tel-2x.png"],"images/tel/product1-tel-2x.png"],"./..\\images\\tab\\product1-tab-1x.png":[["product1-tab-1x.56578d9b.png","images/tab/product1-tab-1x.png"],"images/tab/product1-tab-1x.png"],"./..\\images\\tab\\product1-tab-2x.png":[["product1-tab-2x.a8e751af.png","images/tab/product1-tab-2x.png"],"images/tab/product1-tab-2x.png"],"./..\\images\\desk\\product1-desk-1x.png":[["product1-desk-1x.e24665c2.png","images/desk/product1-desk-1x.png"],"images/desk/product1-desk-1x.png"],"./..\\images\\desk\\product1-desk-2x.png":[["product1-desk-2x.106ae493.png","images/desk/product1-desk-2x.png"],"images/desk/product1-desk-2x.png"],"./..\\images\\tel\\product2-tel-1x.png":[["product2-tel-1x.47d9eae1.png","images/tel/product2-tel-1x.png"],"images/tel/product2-tel-1x.png"],"./..\\images\\tel\\product2-tel-2x.png":[["product2-tel-2x.c7a14e02.png","images/tel/product2-tel-2x.png"],"images/tel/product2-tel-2x.png"],"./..\\images\\tab\\product2-tab-1x.png":[["product2-tab-1x.080d7551.png","images/tab/product2-tab-1x.png"],"images/tab/product2-tab-1x.png"],"./..\\images\\tab\\product2-tab-2x.png":[["product2-tab-2x.8a46511b.png","images/tab/product2-tab-2x.png"],"images/tab/product2-tab-2x.png"],"./..\\images\\desk\\product2-desk-1x.png":[["product2-desk-1x.6e3139ae.png","images/desk/product2-desk-1x.png"],"images/desk/product2-desk-1x.png"],"./..\\images\\desk\\product2-desk-2x.png":[["product2-desk-2x.e3dfe327.png","images/desk/product2-desk-2x.png"],"images/desk/product2-desk-2x.png"],"./..\\images\\tel\\product3-tel-1x.png":[["product3-tel-1x.abd60efe.png","images/tel/product3-tel-1x.png"],"images/tel/product3-tel-1x.png"],"./..\\images\\tel\\product3-tel-3x.png":[["product3-tel-3x.8afc6358.png","images/tel/product3-tel-3x.png"],"images/tel/product3-tel-3x.png"],"./..\\images\\tab\\product3-tab-1x.png":[["product3-tab-1x.0850b9a1.png","images/tab/product3-tab-1x.png"],"images/tab/product3-tab-1x.png"],"./..\\images\\tab\\product3-tab-2x.png":[["product3-tab-2x.5640e5c5.png","images/tab/product3-tab-2x.png"],"images/tab/product3-tab-2x.png"],"./..\\images\\desk\\product3-desk-1x.png":[["product3-desk-1x.be2e26bb.png","images/desk/product3-desk-1x.png"],"images/desk/product3-desk-1x.png"],"./..\\images\\desk\\product3-desk-2x.png":[["product3-desk-2x.d652859f.png","images/desk/product3-desk-2x.png"],"images/desk/product3-desk-2x.png"],"./..\\images\\tel\\dots.png":[["dots.1d9b1829.png","images/tel/dots.png"],"images/tel/dots.png"],"./..\\images\\tel\\sectionbg-tel-1x.png":[["sectionbg-tel-1x.8d31eaf2.png","images/tel/sectionbg-tel-1x.png"],"images/tel/sectionbg-tel-1x.png"],"./..\\images\\tel\\sectionbg-tel-2x.png":[["sectionbg-tel-2x.72175b0e.png","images/tel/sectionbg-tel-2x.png"],"images/tel/sectionbg-tel-2x.png"],"./..\\images\\desk\\sectionbg1-desk-1x.png":[["sectionbg1-desk-1x.23e43801.png","images/desk/sectionbg1-desk-1x.png"],"images/desk/sectionbg1-desk-1x.png"],"./..\\images\\general\\testimonials--first--320.jpg":[["testimonials--first--320.38872e7e.jpg","images/general/testimonials--first--320.jpg"],"images/general/testimonials--first--320.jpg"],"./..\\images\\general\\testimonials--second--320.jpg":[["testimonials--second--320.031ba611.jpg","images/general/testimonials--second--320.jpg"],"images/general/testimonials--second--320.jpg"],"./..\\images\\general\\testimonials--third--320.jpg":[["testimonials--third--320.79d5a51b.jpg","images/general/testimonials--third--320.jpg"],"images/general/testimonials--third--320.jpg"],"./..\\images\\general\\testimonials--first--640.jpg":[["testimonials--first--640.87a7c9d7.jpg","images/general/testimonials--first--640.jpg"],"images/general/testimonials--first--640.jpg"],"./..\\images\\general\\testimonials--second--640.jpg":[["testimonials--second--640.234e1c13.jpg","images/general/testimonials--second--640.jpg"],"images/general/testimonials--second--640.jpg"],"./..\\images\\general\\testimonials--third--640.jpg":[["testimonials--third--640.6deda511.jpg","images/general/testimonials--third--640.jpg"],"images/general/testimonials--third--640.jpg"],"./..\\images\\general\\testimonials--first--960.jpg":[["testimonials--first--960.4d66ddee.jpg","images/general/testimonials--first--960.jpg"],"images/general/testimonials--first--960.jpg"],"./..\\images\\general\\testimonials--second--960.jpg":[["testimonials--second--960.2730f135.jpg","images/general/testimonials--second--960.jpg"],"images/general/testimonials--second--960.jpg"],"./..\\images\\general\\testimonials--third--960.jpg":[["testimonials--third--960.c755efdf.jpg","images/general/testimonials--third--960.jpg"],"images/general/testimonials--third--960.jpg"],"./..\\images\\svg\\icon-quote.svg":[["icon-quote.0fc44513.svg","images/svg/icon-quote.svg"],"images/svg/icon-quote.svg"],"./..\\images\\svg\\icon-points.svg":[["icon-points.2015ecea.svg","images/svg/icon-points.svg"],"images/svg/icon-points.svg"],"./..\\images\\svg\\icon-home.svg":[["icon-home.42c53498.svg","images/svg/icon-home.svg"],"images/svg/icon-home.svg"],"./..\\images\\contact_img\\contact-bg.png":[["contact-bg.645c312c.png","images/contact_img/contact-bg.png"],"images/contact_img/contact-bg.png"],"./..\\images\\contact_img\\contact-bg_x2.png":[["contact-bg_x2.b79ba73a.png","images/contact_img/contact-bg_x2.png"],"images/contact_img/contact-bg_x2.png"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"animate.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/poduct-modal.js":[function(require,module,exports) {
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open1]'),
    closeModalBtn: document.querySelector('[data-modal-close1]'),
    modal: document.querySelector('[data-modal1]')
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('backdrop--is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open2]'),
    closeModalBtn: document.querySelector('[data-modal-close2]'),
    modal: document.querySelector('[data-modal2]')
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('backdrop--is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open3]'),
    closeModalBtn: document.querySelector('[data-modal-close3]'),
    modal: document.querySelector('[data-modal3]')
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('backdrop--is-hidden');
  }
})();
},{}],"js/hero-modal.js":[function(require,module,exports) {
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-hero-open]'),
    closeModalBtn: document.querySelector('[data-hero-close]'),
    modal: document.querySelector('[data-hero]')
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('backdrop--is-hidden');
  }
})();
},{}],"js/menu.js":[function(require,module,exports) {
(() => {
  const menuBtnRef = document.querySelector("[data-hmenu-button]");
  const menuBtnRef2 = document.querySelector("[data-hmodal-open2]");
  const mobileMenuRef = document.querySelector("[data-hmenu]");
  menuBtnRef.addEventListener("click", () => {
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.classList.toggle("is-open");
    menuBtnRef2.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    mobileMenuRef.classList.toggle("is-open");
  });
})();
},{}],"js/header-modal.js":[function(require,module,exports) {
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-hmodal-open]'),
    closeModalBtn: document.querySelector('[data-hmodal-close]'),
    modal: document.querySelector('[data-hmodal]')
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-hmodal-open2]'),
    closeModalBtn: document.querySelector('[data-hmodal-close2]'),
    modal: document.querySelector('[data-hmodal]')
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
},{}],"js/modal.js":[function(require,module,exports) {
//  data-modal-open
//  data-modal-close
//  data-modal
// код можно скопировать и вставить в новую папку, изменив название трех выше классов в коде, на более подходящее для вас.
// 
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]')
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
},{}],"js/slider.js":[function(require,module,exports) {

},{}],"js/mobile-menu.js":[function(require,module,exports) {
//
// .js-menu-container
// .js-open-menu
// .js-close-menu
//  код можно скопировать и вставить в новую папку, изменив название трех выше классов в коде, на более подходящее для вас.
//
(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu); // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
},{}],"js/contacts.js":[function(require,module,exports) {
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-location-open]'),
    closeModalBtn: document.querySelector('[data-location-close]'),
    modal: document.querySelector('[data-location]')
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-franchise-open]'),
    closeModalBtn: document.querySelector('[data-franchise-close]'),
    modal: document.querySelector('[data-franchise]')
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
},{}],"js/wow.min.js":[function(require,module,exports) {
// npm
},{}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");

require("./animate.css");

require("./js/poduct-modal");

require("./js/hero-modal");

require("./js/menu");

require("./js/header-modal");

require("./js/modal");

require("./js/slider");

require("./js/mobile-menu");

require("./js/contacts");

require("./js/wow.min");
},{"./sass/main.scss":"sass/main.scss","./animate.css":"animate.css","./js/poduct-modal":"js/poduct-modal.js","./js/hero-modal":"js/hero-modal.js","./js/menu":"js/menu.js","./js/header-modal":"js/header-modal.js","./js/modal":"js/modal.js","./js/slider":"js/slider.js","./js/mobile-menu":"js/mobile-menu.js","./js/contacts":"js/contacts.js","./js/wow.min":"js/wow.min.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54274" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map