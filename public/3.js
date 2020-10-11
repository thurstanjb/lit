(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Uploads/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Uploads/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layouts_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Layouts/layout */ "./resources/js/Layouts/layout.vue");
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
  name: "upload-index",
  props: {
    title: String,
    uploads: Array
  },
  layout: _Layouts_layout__WEBPACK_IMPORTED_MODULE_0__["default"],
  created: function created() {
    this.$parent.title = this.title;
  },
  methods: {
    deleteUpload: function deleteUpload(id) {
      this.$inertia["delete"]('/uploads/' + id);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Uploads/index.vue?vue&type=template&id=4fe3d9bc&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Uploads/index.vue?vue&type=template&id=4fe3d9bc&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
        _c("h1", { staticClass: "tj-topbar_heading" }, [_vm._v("Uploads")]),
        _vm._v(" "),
        _c(
          "inertia-link",
          {
            staticClass: "tj-topbar_link",
            attrs: { href: "/uploads/upload-file" }
          },
          [_c("font-awesome-icon", { attrs: { icon: "upload" } })],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("table", { staticClass: "table-auto w-full table-responsive" }, [
      _vm._m(0),
      _vm._v(" "),
      _vm.uploads.length > 0
        ? _c(
            "tbody",
            _vm._l(_vm.uploads, function(upload) {
              return _c("tr", { key: upload.id }, [
                _c("td", { staticClass: "border px-4 py-2" }, [
                  _vm._v(_vm._s(upload.id))
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "border px-4 py-2" }, [
                  _vm._v(_vm._s(upload.filename))
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "border px-4 py-2" }, [
                  _vm._v(_vm._s(upload.folder))
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "border px-4 py-2" }, [
                  _vm._v(_vm._s(upload.upload_date))
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "border px-4 py-2" }, [
                  _vm._v(_vm._s(upload.user.name))
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "border px-4 py-2 text-center" }, [
                  _c(
                    "a",
                    { attrs: { href: "#" } },
                    [
                      _c("font-awesome-icon", {
                        staticClass: "text-red-500 hover:text-red-700",
                        attrs: { icon: "trash-alt" },
                        on: {
                          click: function($event) {
                            return _vm.deleteUpload(upload.id)
                          }
                        }
                      })
                    ],
                    1
                  )
                ])
              ])
            }),
            0
          )
        : _c("tbody", [_vm._m(1)])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "border" }, [
      _c("tr", [
        _c("th", { staticClass: "px-4 py-2" }, [_vm._v("id")]),
        _vm._v(" "),
        _c("th", { staticClass: "px-4 py-2" }, [_vm._v("Filename")]),
        _vm._v(" "),
        _c("th", { staticClass: "px-4 py-2" }, [_vm._v("Folder")]),
        _vm._v(" "),
        _c("th", { staticClass: "px-4 py-2" }, [_vm._v("Uploaded")]),
        _vm._v(" "),
        _c("th", { staticClass: "px-4 py-2" }, [_vm._v("Uploaded By")]),
        _vm._v(" "),
        _c("th", { staticClass: "px-4 py-2" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c(
        "td",
        {
          staticClass: "text-center border px-4 py-2",
          attrs: { colspan: "6" }
        },
        [_vm._v("\n                No files available\n            ")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Uploads/index.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Uploads/index.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_4fe3d9bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4fe3d9bc&scoped=true& */ "./resources/js/Pages/Uploads/index.vue?vue&type=template&id=4fe3d9bc&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Uploads/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_4fe3d9bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_4fe3d9bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4fe3d9bc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Uploads/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Uploads/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Uploads/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Uploads/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Uploads/index.vue?vue&type=template&id=4fe3d9bc&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/Uploads/index.vue?vue&type=template&id=4fe3d9bc&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4fe3d9bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=4fe3d9bc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Uploads/index.vue?vue&type=template&id=4fe3d9bc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4fe3d9bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4fe3d9bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);