(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Users/Components/userForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Users/Components/userForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'user-form',
  props: {
    'user-data': {
      type: Object,
      "default": {
        name: '',
        email: '',
        role: 'user',
        password: '',
        password_confirmation: ''
      }
    },
    errors: Array,
    editing: {
      type: Boolean,
      "default": false
    }
  },
  computed: {
    heading: function heading() {
      return this.editing ? 'Edit' : 'Add';
    }
  },
  data: function data() {
    return {
      user: this.userData,
      roles: [{
        text: 'User',
        value: 'user'
      }, {
        text: 'Administrator',
        value: 'admin'
      }]
    };
  },
  methods: {
    processUser: function processUser() {
      var uri = '/admin/users/create';
      var method = 'post';

      if (this.editing) {
        uri = '/admin/users/' + this.user.id + '/edit';
        method = 'put';
      }

      this.$inertia[method](uri, this.user);
    },
    deleteUser: function deleteUser() {
      this.$inertia["delete"]('/admin/users/' + this.user.id);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Users/Components/userForm.vue?vue&type=template&id=50133130&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Users/Components/userForm.vue?vue&type=template&id=50133130& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "w-full px-1" }, [
    _c(
      "div",
      { staticClass: "tj-topbar" },
      [
        _c("h1", { staticClass: "tj-topbar_heading" }, [
          _vm._v(_vm._s(_vm.heading) + " User")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "md:flex flex-1" }),
        _vm._v(" "),
        _c(
          "inertia-link",
          { staticClass: "tj-topbar_link", attrs: { href: "/admin/users" } },
          [_c("font-awesome-icon", { attrs: { icon: "undo-alt" } })],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "form",
      {
        staticClass: "tj-form",
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.processUser($event)
          }
        }
      },
      [
        _c("div", { staticClass: "md:flex w-full mb-4" }, [
          _c(
            "label",
            {
              staticClass: "tj-form_label md:w-1/12 md:text-right",
              attrs: { for: "name" }
            },
            [_vm._v("\n                Name\n            ")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "w-full md:w-1/2" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.user.name,
                  expression: "user.name"
                }
              ],
              staticClass: "tj-form_input--text",
              attrs: { id: "name", type: "text", placeholder: "Name" },
              domProps: { value: _vm.user.name },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.user, "name", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.errors.name
              ? _c("p", {
                  staticClass: "tj-form_error",
                  domProps: { innerHTML: _vm._s(_vm.errors.name[0]) }
                })
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "md:flex w-full mb-4" }, [
          _c(
            "label",
            {
              staticClass: "tj-form_label md:w-1/12 md:text-right",
              attrs: { for: "role" }
            },
            [_vm._v("\n                Role\n            ")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "relative w-full md:w-1/4" }, [
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.user.role,
                    expression: "user.role"
                  }
                ],
                staticClass: "tj-form_input--select",
                attrs: { name: "role", id: "role" },
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.$set(
                      _vm.user,
                      "role",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              _vm._l(_vm.roles, function(option) {
                return _c("option", { domProps: { value: option.value } }, [
                  _vm._v(_vm._s(option.text))
                ])
              }),
              0
            ),
            _vm._v(" "),
            _c("div", { staticClass: "tj-form_input--select_icon" }, [
              _c(
                "svg",
                {
                  staticClass: "fill-current h-4 w-4",
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20"
                  }
                },
                [
                  _c("path", {
                    attrs: {
                      d:
                        "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    }
                  })
                ]
              )
            ]),
            _vm._v(" "),
            _vm.errors.role
              ? _c("p", {
                  staticClass: "tj-form_error",
                  domProps: { innerHTML: _vm._s(_vm.errors.role[0]) }
                })
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "md:flex w-full mb-4" }, [
          _c(
            "label",
            {
              staticClass: "tj-form_label md:w-1/12 md:text-right",
              attrs: { for: "email" }
            },
            [_vm._v("\n                Email\n            ")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "w-full md:w-3/4" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.user.email,
                  expression: "user.email"
                }
              ],
              staticClass: "tj-form_input--text",
              attrs: { id: "email", type: "email", placeholder: "Email" },
              domProps: { value: _vm.user.email },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.user, "email", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.errors.email
              ? _c("p", {
                  staticClass: "tj-form_error",
                  domProps: { innerHTML: _vm._s(_vm.errors.email[0]) }
                })
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "md:flex w-full mb-4" }, [
          _c(
            "label",
            {
              staticClass: "tj-form_label md:w-1/12 md:text-right",
              attrs: { for: "password" }
            },
            [_vm._v("\n                Password\n            ")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "w-full md:w-1/2" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.user.password,
                  expression: "user.password"
                }
              ],
              staticClass: "tj-form_input--text",
              attrs: {
                id: "password",
                type: "password",
                placeholder: "Password"
              },
              domProps: { value: _vm.user.password },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.user, "password", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.errors.password
              ? _c("p", {
                  staticClass: "tj-form_error",
                  domProps: { innerHTML: _vm._s(_vm.errors.password[0]) }
                })
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "md:flex w-full mb-4" }, [
          _c(
            "label",
            {
              staticClass: "tj-form_label md:w-1/12 md:text-right",
              attrs: { for: "password_confirmation" }
            },
            [_vm._v("\n                Confirm\n            ")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "w-full md:w-1/2" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.user.password_confirmation,
                  expression: "user.password_confirmation"
                }
              ],
              staticClass: "tj-form_input--text",
              attrs: {
                id: "password_confirmation",
                type: "password",
                placeholder: "Password"
              },
              domProps: { value: _vm.user.password_confirmation },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.user,
                    "password_confirmation",
                    $event.target.value
                  )
                }
              }
            }),
            _vm._v(" "),
            _vm.errors.password_confirmation
              ? _c("p", {
                  staticClass: "tj-form_error",
                  domProps: {
                    innerHTML: _vm._s(_vm.errors.password_confirmation[0])
                  }
                })
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "w-full flex justify-between" }, [
          _c(
            "button",
            { staticClass: "submit-btn", attrs: { type: "submit" } },
            [
              _vm._v(
                "\n                " +
                  _vm._s(_vm.heading) +
                  " User\n            "
              )
            ]
          ),
          _vm._v(" "),
          _vm.editing && _vm.$page.auth.user.name !== _vm.userData.name
            ? _c(
                "button",
                { staticClass: "delete-btn", on: { click: _vm.deleteUser } },
                [_c("font-awesome-icon", { attrs: { icon: "trash-alt" } })],
                1
              )
            : _vm._e()
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Admin/Users/Components/userForm.vue":
/*!****************************************************************!*\
  !*** ./resources/js/Pages/Admin/Users/Components/userForm.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _userForm_vue_vue_type_template_id_50133130___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userForm.vue?vue&type=template&id=50133130& */ "./resources/js/Pages/Admin/Users/Components/userForm.vue?vue&type=template&id=50133130&");
/* harmony import */ var _userForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userForm.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/Users/Components/userForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _userForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _userForm_vue_vue_type_template_id_50133130___WEBPACK_IMPORTED_MODULE_0__["render"],
  _userForm_vue_vue_type_template_id_50133130___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/Users/Components/userForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/Users/Components/userForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Users/Components/userForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./userForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Users/Components/userForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/Users/Components/userForm.vue?vue&type=template&id=50133130&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Users/Components/userForm.vue?vue&type=template&id=50133130& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_userForm_vue_vue_type_template_id_50133130___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./userForm.vue?vue&type=template&id=50133130& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Users/Components/userForm.vue?vue&type=template&id=50133130&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_userForm_vue_vue_type_template_id_50133130___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_userForm_vue_vue_type_template_id_50133130___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);