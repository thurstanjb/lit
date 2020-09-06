(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Auth/Passwords/reset.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Auth/Passwords/reset.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layouts_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Layouts/layout */ "./resources/js/Layouts/layout.vue");
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
  name: "auth-password-reset",
  layout: _Layouts_layout__WEBPACK_IMPORTED_MODULE_0__["default"],
  props: {
    token: String,
    email: String,
    title: String,
    errors: {
      type: Object,
      "default": function _default() {}
    }
  },
  created: function created() {
    this.$parent.title = this.title;
  },
  data: function data() {
    return {
      password: '',
      pass_conf: '',
      newEmail: this.email
    };
  },
  methods: {
    submitForm: function submitForm() {
      this.$inertia.post('/password/reset ', {
        email: this.newEmail,
        token: this.token,
        password: this.password,
        password_confirmation: this.pass_conf
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Auth/Passwords/reset.vue?vue&type=template&id=0f48304c&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Auth/Passwords/reset.vue?vue&type=template&id=0f48304c&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "flex items-center justify-center mt-10" }, [
    _c(
      "form",
      {
        staticClass: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2",
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.submitForm($event)
          }
        }
      },
      [
        _c("div", { staticClass: "mb-4" }, [
          _c(
            "label",
            {
              staticClass: "block text-gray-700 text-sm font-bold mb-2",
              attrs: { for: "email" }
            },
            [_vm._v("\n                Email\n            ")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.newEmail,
                expression: "newEmail"
              }
            ],
            staticClass:
              "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
            attrs: {
              id: "email",
              type: "email",
              name: "email",
              required: "",
              autocomplete: "email",
              autofocus: ""
            },
            domProps: { value: _vm.newEmail },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.newEmail = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.email
            ? _c("p", {
                staticClass: "text-red-500 text-xs italic",
                domProps: { innerHTML: _vm._s(_vm.errors.email[0]) }
              })
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mb-4" }, [
          _c(
            "label",
            {
              staticClass: "block text-gray-700 text-sm font-bold mb-2",
              attrs: { for: "password" }
            },
            [_vm._v("\n                Password\n            ")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.password,
                expression: "password"
              }
            ],
            staticClass:
              "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
            attrs: {
              id: "password",
              type: "password",
              name: "password",
              required: "",
              autocomplete: "new-password"
            },
            domProps: { value: _vm.password },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.password = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.password
            ? _c("p", {
                staticClass: "text-red-500 text-xs italic",
                domProps: { innerHTML: _vm._s(_vm.errors.password[0]) }
              })
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mb-4" }, [
          _c(
            "label",
            {
              staticClass: "block text-gray-700 text-sm font-bold mb-2",
              attrs: { for: "password-confirm" }
            },
            [_vm._v("\n                Confirm Password\n            ")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.pass_conf,
                expression: "pass_conf"
              }
            ],
            staticClass:
              "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
            attrs: {
              id: "password-confirm",
              type: "password",
              name: "password_confirmation",
              required: "",
              autocomplete: "new-password"
            },
            domProps: { value: _vm.pass_conf },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.pass_conf = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.password_confirmation
            ? _c("p", {
                staticClass: "text-red-500 text-xs italic",
                domProps: {
                  innerHTML: _vm._s(_vm.errors.password_confirmation[0])
                }
              })
            : _vm._e()
        ]),
        _vm._v(" "),
        _vm._m(0)
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex items-center justify-between" }, [
      _c(
        "button",
        {
          staticClass:
            "bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
          attrs: { type: "submit" }
        },
        [_vm._v("\n                Reset Password\n            ")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Auth/Passwords/reset.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Pages/Auth/Passwords/reset.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reset_vue_vue_type_template_id_0f48304c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.vue?vue&type=template&id=0f48304c&scoped=true& */ "./resources/js/Pages/Auth/Passwords/reset.vue?vue&type=template&id=0f48304c&scoped=true&");
/* harmony import */ var _reset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Auth/Passwords/reset.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _reset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _reset_vue_vue_type_template_id_0f48304c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _reset_vue_vue_type_template_id_0f48304c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0f48304c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Auth/Passwords/reset.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Auth/Passwords/reset.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Auth/Passwords/reset.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./reset.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Auth/Passwords/reset.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Auth/Passwords/reset.vue?vue&type=template&id=0f48304c&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/Pages/Auth/Passwords/reset.vue?vue&type=template&id=0f48304c&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reset_vue_vue_type_template_id_0f48304c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./reset.vue?vue&type=template&id=0f48304c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Auth/Passwords/reset.vue?vue&type=template&id=0f48304c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reset_vue_vue_type_template_id_0f48304c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reset_vue_vue_type_template_id_0f48304c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);