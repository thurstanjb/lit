(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/layout.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Layouts/layout.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ "./resources/js/Layouts/navbar.vue");
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "layout.php",
  data: function data() {
    return {
      title: this.$page.title
    };
  },
  watch: {
    title: {
      immediate: true,
      handler: function handler(title) {
        document.title = this.$page.title;
      }
    }
  },
  components: {
    Navbar: _navbar__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/navbar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Layouts/navbar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "navbar",
  methods: {
    logout: function logout() {
      this.$inertia.post('/logout');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/layout.vue?vue&type=template&id=38cc6f8e&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Layouts/layout.vue?vue&type=template&id=38cc6f8e&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("navbar"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "container mx-auto mt-5" },
        [_vm._t("default")],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/navbar.vue?vue&type=template&id=17cdad74&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Layouts/navbar.vue?vue&type=template&id=17cdad74&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "nav",
    {
      staticClass: "flex items-center justify-between flex-wrap bg-teal-500 p-6"
    },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "block lg:hidden" }, [
        _c(
          "button",
          {
            staticClass:
              "flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          },
          [
            _c(
              "svg",
              {
                staticClass: "fill-current h-3 w-3",
                attrs: {
                  viewBox: "0 0 20 20",
                  xmlns: "http://www.w3.org/2000/svg"
                }
              },
              [
                _c("title", [_vm._v("\n                Menu")]),
                _vm._v(" "),
                _c("path", {
                  attrs: { d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" }
                })
              ]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _vm.$page.auth.user
        ? _c(
            "div",
            {
              staticClass:
                "w-full block flex-grow lg:flex lg:items-center lg:w-auto"
            },
            [
              _c(
                "div",
                { staticClass: "text-sm lg:flex-grow" },
                [
                  _vm.$page.auth.user.isAdmin
                    ? _c(
                        "inertia-link",
                        {
                          staticClass:
                            "block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4",
                          attrs: { href: "/users" }
                        },
                        [_vm._v("\n                Users\n            ")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "inertia-link",
                    {
                      staticClass:
                        "block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4",
                      attrs: { href: "/uploads" }
                    },
                    [_vm._v("\n                Uploads\n            ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "inertia-link",
                    {
                      staticClass:
                        "block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4",
                      attrs: { href: "/mountaineers" }
                    },
                    [_vm._v("\n                Mountaineers\n            ")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("div", [
                _vm.$page.auth.user
                  ? _c(
                      "a",
                      {
                        staticClass:
                          "text-teal-200 hover:text-white font-bold px-4 cursor-pointer",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.logout($event)
                          }
                        }
                      },
                      [_c("font-awesome-icon", { attrs: { icon: "eject" } })],
                      1
                    )
                  : _vm._e()
              ])
            ]
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "flex items-center flex-shrink-0 text-white mr-6" },
      [
        _c("span", { staticClass: "font-semibold text-xl tracking-tight" }, [
          _vm._v("LitStack")
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/Layouts/layout.vue":
/*!*****************************************!*\
  !*** ./resources/js/Layouts/layout.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_vue_vue_type_template_id_38cc6f8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.vue?vue&type=template&id=38cc6f8e&scoped=true& */ "./resources/js/Layouts/layout.vue?vue&type=template&id=38cc6f8e&scoped=true&");
/* harmony import */ var _layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.vue?vue&type=script&lang=js& */ "./resources/js/Layouts/layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _layout_vue_vue_type_template_id_38cc6f8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _layout_vue_vue_type_template_id_38cc6f8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "38cc6f8e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Layouts/layout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Layouts/layout.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/Layouts/layout.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Layouts/layout.vue?vue&type=template&id=38cc6f8e&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/Layouts/layout.vue?vue&type=template&id=38cc6f8e&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_template_id_38cc6f8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./layout.vue?vue&type=template&id=38cc6f8e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/layout.vue?vue&type=template&id=38cc6f8e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_template_id_38cc6f8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_template_id_38cc6f8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Layouts/navbar.vue":
/*!*****************************************!*\
  !*** ./resources/js/Layouts/navbar.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar_vue_vue_type_template_id_17cdad74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.vue?vue&type=template&id=17cdad74&scoped=true& */ "./resources/js/Layouts/navbar.vue?vue&type=template&id=17cdad74&scoped=true&");
/* harmony import */ var _navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.vue?vue&type=script&lang=js& */ "./resources/js/Layouts/navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _navbar_vue_vue_type_template_id_17cdad74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _navbar_vue_vue_type_template_id_17cdad74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "17cdad74",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Layouts/navbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Layouts/navbar.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/Layouts/navbar.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./navbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Layouts/navbar.vue?vue&type=template&id=17cdad74&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/Layouts/navbar.vue?vue&type=template&id=17cdad74&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_template_id_17cdad74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./navbar.vue?vue&type=template&id=17cdad74&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/navbar.vue?vue&type=template&id=17cdad74&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_template_id_17cdad74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_template_id_17cdad74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);