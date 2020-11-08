(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Users/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Users/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layouts_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Layouts/layout */ "./resources/js/Layouts/layout.vue");
/* harmony import */ var _Components_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Components/paginator */ "./resources/js/Pages/Components/paginator.vue");
/* harmony import */ var _Components_filteredHeading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/filteredHeading */ "./resources/js/Pages/Components/filteredHeading.vue");
/* harmony import */ var _Components_queryManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Components/queryManager */ "./resources/js/Pages/Components/queryManager.js");
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
  name: "admin-users-index",
  components: {
    FilteredHeading: _Components_filteredHeading__WEBPACK_IMPORTED_MODULE_2__["default"],
    Paginator: _Components_paginator__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    title: String,
    users: Object
  },
  data: function data() {
    return {
      page_data: null,
      query_manager: _Components_queryManager__WEBPACK_IMPORTED_MODULE_3__["default"]
    };
  },
  layout: _Layouts_layout__WEBPACK_IMPORTED_MODULE_0__["default"],
  created: function created() {
    this.$parent.title = this.title;
    this.page_data = _.clone(this.users);
    delete this.page_data.data;
  },
  mounted: function mounted() {
    this.query_manager.init(this.$inertia);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Components/filteredHeading.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Components/filteredHeading.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'filtered-heading',
  props: {
    column: String
  },
  data: function data() {
    return {
      current_state: null,
      state: null
    };
  },
  created: function created() {
    var _this = this;

    events.$on('set-order', function (params) {
      if (params.column === _this.column) {
        _this.current_state = _this.state = params.order;
      }
    });
  },
  methods: {
    setState: function setState() {
      if (this.current_state === null) {
        this.current_state = 'asc';
      } else if (this.current_state === 'asc') {
        this.current_state = 'desc';
      } else {
        this.current_state = 'asc';
      }
    },
    buildQuery: function buildQuery() {
      return '/users?' + this.current_state + '=' + this.column;
    },
    fireLink: function fireLink() {
      this.setState();

      if (this.current_state !== null) {
        // this.$inertia.visit(this.buildQuery());
        events.$emit('qm-set-order', {
          order: this.current_state,
          column: this.column
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Components/paginator.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Components/paginator.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _paginatorLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paginatorLink */ "./resources/js/Pages/Components/paginatorLink.vue");
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
  name: 'paginator',
  components: {
    PaginatorLink: _paginatorLink__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    'page-data': {
      type: Object
    }
  },
  methods: {
    firstPage: function firstPage() {
      this.setPage(1);
    },
    lastPage: function lastPage() {
      this.setPage(this.pageData.last_page);
    },
    prevPage: function prevPage() {
      this.setPage(this.pageData.current_page - 1);
    },
    nextPage: function nextPage() {
      this.setPage(this.pageData.current_page + 1);
    },
    setPage: function setPage(page_number) {
      events.$emit('qm-set-page', {
        page: page_number
      });
    }
  },
  data: function data() {
    return {};
  },
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Components/paginatorLink.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Components/paginatorLink.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'paginator-link',
  props: {
    link: String | null,
    disabled: {
      type: Boolean | null,
      "default": null
    },
    event: {
      type: String | null,
      "default": null
    }
  },
  computed: {
    url: function url() {
      return this.link ? this.link : '';
    },
    isDisabled: function isDisabled() {
      if (this.disabled !== null) {
        return this.disabled;
      }

      return this.link === null;
    }
  },
  methods: {
    switchPage: function switchPage() {
      if (!this.isDisabled) {
        if (this.event !== null) {
          this.$emit(this.event);
        } else {
          this.$inertia.visit(this.url);
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Users/index.vue?vue&type=template&id=32e1195c&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Users/index.vue?vue&type=template&id=32e1195c&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
        _c("h1", { staticClass: "tj-topbar_heading" }, [_vm._v("Users")]),
        _vm._v(" "),
        _c("paginator", {
          staticClass: "mx-4",
          attrs: { "page-data": _vm.page_data }
        }),
        _vm._v(" "),
        _c(
          "inertia-link",
          { staticClass: "tj-topbar_link", attrs: { href: "/users/create" } },
          [_c("font-awesome-icon", { attrs: { icon: "user-plus" } })],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("table", { staticClass: "table-auto w-full table-responsive" }, [
      _c("thead", { staticClass: "border" }, [
        _c(
          "tr",
          [
            _c(
              "filtered-heading",
              { staticClass: "px-4 py-1", attrs: { column: "id" } },
              [_vm._v("Id")]
            ),
            _vm._v(" "),
            _c(
              "filtered-heading",
              { staticClass: "px-4 py-1", attrs: { column: "name" } },
              [_vm._v("Name")]
            ),
            _vm._v(" "),
            _c(
              "filtered-heading",
              { staticClass: "px-4 py-1", attrs: { column: "email" } },
              [_vm._v("Email")]
            ),
            _vm._v(" "),
            _c(
              "filtered-heading",
              { staticClass: "px-4 py-1", attrs: { column: "role" } },
              [_vm._v("Role")]
            ),
            _vm._v(" "),
            _c(
              "filtered-heading",
              { staticClass: "px-4 py-1", attrs: { column: "created_at" } },
              [_vm._v("Joined")]
            ),
            _vm._v(" "),
            _c("th", { staticClass: "px-4 py-1" })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm.users.data.length > 0
        ? _c(
            "tbody",
            _vm._l(_vm.users.data, function(user) {
              return _c("tr", { key: user.id }, [
                _c("td", { staticClass: "border px-4 py-1" }, [
                  _vm._v(_vm._s(user.id))
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "border px-4 py-1" }, [
                  _vm._v(_vm._s(user.name))
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "border px-4 py-1" }, [
                  _vm._v(_vm._s(user.email))
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "border px-4 py-1" }, [
                  _vm._v(_vm._s(user.role))
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "border px-4 py-1" }, [
                  _vm._v(_vm._s(user.joined))
                ]),
                _vm._v(" "),
                _c(
                  "td",
                  { staticClass: "border px-4 py-1" },
                  [
                    _c(
                      "inertia-link",
                      { attrs: { href: "/users/" + user.id + "/edit" } },
                      [_vm._v("Edit")]
                    )
                  ],
                  1
                )
              ])
            }),
            0
          )
        : _c("tbody", [_vm._m(0)])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "tj-footer justify-items-center" },
      [
        _c("paginator", {
          staticClass: "mx-4 justify-center",
          attrs: { "page-data": _vm.page_data }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c(
        "td",
        {
          staticClass: "text-center border px-4 py-1",
          attrs: { colspan: "6" }
        },
        [_vm._v("\n                No users available\n            ")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Components/filteredHeading.vue?vue&type=template&id=0f305b4a&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Components/filteredHeading.vue?vue&type=template&id=0f305b4a& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    "th",
    { staticClass: "cursor-pointer text-left", on: { click: _vm.fireLink } },
    [
      _vm._t("default"),
      _vm._v(" "),
      _c(
        "span",
        { staticClass: "float-right" },
        [
          _vm.state === "asc"
            ? _c("font-awesome-icon", { attrs: { icon: "angle-up" } })
            : _vm._e(),
          _vm._v(" "),
          _vm.state === "desc"
            ? _c("font-awesome-icon", { attrs: { icon: "angle-down" } })
            : _vm._e()
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Components/paginator.vue?vue&type=template&id=2d7e6181&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Components/paginator.vue?vue&type=template&id=2d7e6181& ***!
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
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.pageData.last_page > 1,
          expression: "pageData.last_page > 1"
        }
      ],
      staticClass: "flex"
    },
    [
      _c(
        "paginator-link",
        {
          staticClass: "page-btn--first",
          attrs: {
            link: _vm.pageData.first_page_url,
            disabled: _vm.pageData.current_page === 1,
            event: "firstPage"
          },
          on: { firstPage: _vm.firstPage }
        },
        [_c("font-awesome-icon", { attrs: { icon: "angle-double-left" } })],
        1
      ),
      _vm._v(" "),
      _c(
        "paginator-link",
        {
          attrs: { link: _vm.pageData.prev_page_url, event: "prevPage" },
          on: { prevPage: _vm.prevPage }
        },
        [_c("font-awesome-icon", { attrs: { icon: "angle-left" } })],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "page-btn--display" }, [
        _vm._v(
          "\n        " +
            _vm._s(_vm.pageData.current_page) +
            " of " +
            _vm._s(_vm.pageData.last_page) +
            "\n    "
        )
      ]),
      _vm._v(" "),
      _c(
        "paginator-link",
        {
          attrs: { link: _vm.pageData.next_page_url, event: "nextPage" },
          on: { nextPage: _vm.nextPage }
        },
        [_c("font-awesome-icon", { attrs: { icon: "angle-right" } })],
        1
      ),
      _vm._v(" "),
      _c(
        "paginator-link",
        {
          staticClass: "page-btn--last",
          attrs: {
            link: _vm.pageData.last_page_url,
            disabled: _vm.pageData.current_page === _vm.pageData.last_page,
            event: "lastPage"
          },
          on: { lastPage: _vm.lastPage }
        },
        [_c("font-awesome-icon", { attrs: { icon: "angle-double-right" } })],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Components/paginatorLink.vue?vue&type=template&id=0dab4c1b&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Components/paginatorLink.vue?vue&type=template&id=0dab4c1b& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "flex" }, [
    _c(
      "button",
      {
        staticClass: "page-btn",
        attrs: { disabled: _vm.isDisabled },
        on: { click: _vm.switchPage }
      },
      [_vm._t("default")],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Admin/Users/index.vue":
/*!**************************************************!*\
  !*** ./resources/js/Pages/Admin/Users/index.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_32e1195c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=32e1195c&scoped=true& */ "./resources/js/Pages/Admin/Users/index.vue?vue&type=template&id=32e1195c&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/Users/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_32e1195c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_32e1195c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "32e1195c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/Users/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/Users/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Users/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Users/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/Users/index.vue?vue&type=template&id=32e1195c&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Users/index.vue?vue&type=template&id=32e1195c&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_32e1195c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=32e1195c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Users/index.vue?vue&type=template&id=32e1195c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_32e1195c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_32e1195c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Components/filteredHeading.vue":
/*!***********************************************************!*\
  !*** ./resources/js/Pages/Components/filteredHeading.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filteredHeading_vue_vue_type_template_id_0f305b4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filteredHeading.vue?vue&type=template&id=0f305b4a& */ "./resources/js/Pages/Components/filteredHeading.vue?vue&type=template&id=0f305b4a&");
/* harmony import */ var _filteredHeading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filteredHeading.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Components/filteredHeading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _filteredHeading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _filteredHeading_vue_vue_type_template_id_0f305b4a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _filteredHeading_vue_vue_type_template_id_0f305b4a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Components/filteredHeading.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Components/filteredHeading.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Components/filteredHeading.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_filteredHeading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./filteredHeading.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Components/filteredHeading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_filteredHeading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Components/filteredHeading.vue?vue&type=template&id=0f305b4a&":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/Components/filteredHeading.vue?vue&type=template&id=0f305b4a& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_filteredHeading_vue_vue_type_template_id_0f305b4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./filteredHeading.vue?vue&type=template&id=0f305b4a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Components/filteredHeading.vue?vue&type=template&id=0f305b4a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_filteredHeading_vue_vue_type_template_id_0f305b4a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_filteredHeading_vue_vue_type_template_id_0f305b4a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Components/paginator.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Pages/Components/paginator.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _paginator_vue_vue_type_template_id_2d7e6181___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paginator.vue?vue&type=template&id=2d7e6181& */ "./resources/js/Pages/Components/paginator.vue?vue&type=template&id=2d7e6181&");
/* harmony import */ var _paginator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paginator.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Components/paginator.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _paginator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _paginator_vue_vue_type_template_id_2d7e6181___WEBPACK_IMPORTED_MODULE_0__["render"],
  _paginator_vue_vue_type_template_id_2d7e6181___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Components/paginator.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Components/paginator.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Components/paginator.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paginator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./paginator.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Components/paginator.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paginator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Components/paginator.vue?vue&type=template&id=2d7e6181&":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Components/paginator.vue?vue&type=template&id=2d7e6181& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_paginator_vue_vue_type_template_id_2d7e6181___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./paginator.vue?vue&type=template&id=2d7e6181& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Components/paginator.vue?vue&type=template&id=2d7e6181&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_paginator_vue_vue_type_template_id_2d7e6181___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_paginator_vue_vue_type_template_id_2d7e6181___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Components/paginatorLink.vue":
/*!*********************************************************!*\
  !*** ./resources/js/Pages/Components/paginatorLink.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _paginatorLink_vue_vue_type_template_id_0dab4c1b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paginatorLink.vue?vue&type=template&id=0dab4c1b& */ "./resources/js/Pages/Components/paginatorLink.vue?vue&type=template&id=0dab4c1b&");
/* harmony import */ var _paginatorLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paginatorLink.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Components/paginatorLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _paginatorLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _paginatorLink_vue_vue_type_template_id_0dab4c1b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _paginatorLink_vue_vue_type_template_id_0dab4c1b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Components/paginatorLink.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Components/paginatorLink.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Components/paginatorLink.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paginatorLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./paginatorLink.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Components/paginatorLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paginatorLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Components/paginatorLink.vue?vue&type=template&id=0dab4c1b&":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/Components/paginatorLink.vue?vue&type=template&id=0dab4c1b& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_paginatorLink_vue_vue_type_template_id_0dab4c1b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./paginatorLink.vue?vue&type=template&id=0dab4c1b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Components/paginatorLink.vue?vue&type=template&id=0dab4c1b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_paginatorLink_vue_vue_type_template_id_0dab4c1b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_paginatorLink_vue_vue_type_template_id_0dab4c1b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Components/queryManager.js":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/Components/queryManager.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'query-manager',
  queries: [],
  order_keys: ['asc', 'desc'],
  $inertia: null,
  init: function init(inertia) {
    this.queries = [];
    this.$inertia = inertia;
    this.queries = this.buildQueryObjectArray(window.location.search);
    console.dir(this.queries);
    this.processQuery();
  },
  buildQueryObjectArray: function buildQueryObjectArray(string) {
    var query_array = [];
    var queries = string.replace('?', '').split('&');
    console.log(queries);

    if (queries.length > 0 && queries[0] !== '') {
      queries.forEach(function (query) {
        var key_value = query.split('=');
        console.log(key_value);
        query_array.push({
          key: key_value[0],
          value: key_value[1]
        });
      });
    }

    return query_array;
  },
  processQuery: function processQuery() {
    this.setupListeners();
    this.notifyOrderComponents();
  },
  setupListeners: function setupListeners() {
    var _this = this;

    events.$on('qm-set-order', function (params) {
      _this.setOrder(params.order, params.column);
    });
    events.$on('qm-set-page', function (params) {
      _this.setPage(params.page);
    });
  },
  notifyOrderComponents: function notifyOrderComponents() {
    var _this2 = this;

    this.queries.forEach(function (query) {
      console.log(query.key, _this2.order_keys.includes(query.key));

      if (_this2.order_keys.includes(query.key)) {
        console.log('emitting event');
        events.$emit('set-order', {
          order: query.key,
          column: query.value
        });
      }
    });
  },
  fireLink: function fireLink() {
    this.$inertia.visit(this.buildLink());
  },
  buildLink: function buildLink() {
    var _this3 = this;

    var base_string = window.location.pathname + '?';
    this.queries.forEach(function (query, index) {
      base_string += query.key + '=' + query.value;

      if (index < _this3.queries.length - 1) {
        base_string += '&';
      }
    });
    return base_string;
  },
  // Listener methods and clearences
  setOrder: function setOrder(key, value) {
    if (this.order_keys.includes(key)) {
      this.clearOrder();
      this.queries.push({
        key: key,
        value: value
      });
      this.fireLink();
    }
  },
  clearOrder: function clearOrder() {
    var _this4 = this;

    this.order_keys.forEach(function (key) {
      _this4.queries.forEach(function (query, index) {
        if (query.key === key) {
          _this4.queries.splice(index, 1);
        }
      });
    });
  },
  setPage: function setPage(page_number) {
    this.clearPage();
    this.queries.push({
      key: 'page',
      value: page_number
    });
    this.fireLink();
  },
  clearPage: function clearPage() {
    var _this5 = this;

    this.queries.forEach(function (query, index) {
      if (query.key === 'page') {
        _this5.queries.splice(index, 1);
      }
    });
  }
});

/***/ })

}]);