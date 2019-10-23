webpackHotUpdate("static/development/pages/blogs/[id].js",{

/***/ "./pages/blogs/[id].js":
/*!*****************************!*\
  !*** ./pages/blogs/[id].js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_basicLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/basicLayout */ "./components/basicLayout.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/Users/himanshudhiman/Projects/sample-serverless/pages/blogs/[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var Blog = function Blog(props) {
  return __jsx(_components_basicLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.blog.title), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.blog.content), __jsx("button", {
    onClick: deletePost(props.blog.blog_id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Delete"));
};

Blog.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var id, res, blog;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('https://4vtblvzdme.execute-api.ap-south-1.amazonaws.com/dev/blogs/' + id, {
              headers: {
                "app_user_id": "test",
                "app_user_name": "test"
              }
            });

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.data.Item;

          case 6:
            blog = _context.sent;
            return _context.abrupt("return", {
              blog: blog
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

var deletePost = function deletePost(id) {
  axios__WEBPACK_IMPORTED_MODULE_4___default.a["delete"]('https://4vtblvzdme.execute-api.ap-south-1.amazonaws.com/dev/blogs/' + id, {
    headers: {
      "app_user_id": "test",
      "app_user_name": "test"
    }
  }).then(function (response) {
    next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ })

})
//# sourceMappingURL=[id].js.9729222129de226a67f6.hot-update.js.map