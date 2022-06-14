"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 31:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_rxSubjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(156);



const LoaderHoc = ()=>{
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const rxLoaderHandler = _utils_rxSubjects__WEBPACK_IMPORTED_MODULE_2__/* .PagerLoader.subscribe */ .ey.subscribe((flag)=>{
            setLoading(!!flag);
        });
        return ()=>{
            rxLoaderHandler && rxLoaderHandler.unsubscribe();
        };
    }, []);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: loading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            id: "loading-hoc",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "loading_hoc_bg"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "loding_hoc_container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "loading_wrapper",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "loading_circle"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "loading_circle"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "loading_circle"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "loading_shadow"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "loading_shadow"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "loading_shadow"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "Loading"
                            })
                        ]
                    })
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoaderHoc);


/***/ }),

/***/ 656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hoc_LoaderHoc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31);
/* harmony import */ var _redux_Actions_Config_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(622);
/* harmony import */ var _redux_Store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(482);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(779);
/* harmony import */ var _utils_session__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(704);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_redux_Actions_Config_action__WEBPACK_IMPORTED_MODULE_5__, _utils_session__WEBPACK_IMPORTED_MODULE_7__]);
([_redux_Actions_Config_action__WEBPACK_IMPORTED_MODULE_5__, _utils_session__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function MyApp({ Component , pageProps  }) {
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const payload = {
            email: "jaganswornkar1998@gmail.com",
            password: "jagan.coder"
        };
        (0,_redux_Actions_Config_action__WEBPACK_IMPORTED_MODULE_5__/* .login */ .x)(payload).then((response)=>{
            const result = response.data.data;
            (0,_utils_session__WEBPACK_IMPORTED_MODULE_7__/* .setCookie */ .d8)("token", result.token);
            (0,_utils_session__WEBPACK_IMPORTED_MODULE_7__/* .setCookie */ .d8)("email", result.email);
            (0,_utils_session__WEBPACK_IMPORTED_MODULE_7__/* .setCookie */ .d8)("uid", result.userId);
            (0,_utils_session__WEBPACK_IMPORTED_MODULE_7__/* .setCookie */ .d8)("profilePic", result.profilePic);
            (0,_utils_session__WEBPACK_IMPORTED_MODULE_7__/* .setCookie */ .d8)("username", result.username);
        }).catch((error)=>{
            console.log(error);
        });
    }, []);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: _utils_config__WEBPACK_IMPORTED_MODULE_8__/* .APP_NAME */ .iC
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "apple-mobile-web-app-capable",
                        content: "yes"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
                store: _redux_Store__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hoc_LoaderHoc__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                ]
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 622:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ login)
/* harmony export */ });
/* unused harmony export setConfig */
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(844);
/* harmony import */ var _ActionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(283);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_request__WEBPACK_IMPORTED_MODULE_0__]);
_utils_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const setConfig = (payload)=>{
    return async function(dispatch) {
        dispatch({
            type: ActionType.SET_CONFIG,
            payload: payload
        });
    };
};
const login = async (payload)=>{
    return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* .post */ .v_)("/login", payload);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Store)
});

;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
// EXTERNAL MODULE: ./redux/ActionTypes.ts
var ActionTypes = __webpack_require__(283);
;// CONCATENATED MODULE: ./redux/Reducers/BookingReducer.ts

const initialState = {
    slots: null
};
const BookingReducer = (state = initialState, action)=>{
    switch(action.type){
        case ActionTypes/* ActionType.GET_SLOTS */.U.GET_SLOTS:
            return {
                ...state,
                slots: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const Reducers_BookingReducer = (BookingReducer);

;// CONCATENATED MODULE: ./redux/Reducers/ConfigReducer.ts

const ConfigReducer_initialState = {
    isMobile: true,
    lang: "en",
    height: 0,
    width: 0
};
const ConfigReducer = (state = ConfigReducer_initialState, action)=>{
    switch(action.type){
        case ActionTypes/* ActionType.SET_CONFIG */.U.SET_CONFIG:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const Reducers_ConfigReducer = (ConfigReducer);

;// CONCATENATED MODULE: ./redux/Reducers/index.ts



const reducers = (0,external_redux_namespaceObject.combineReducers)({
    config: Reducers_ConfigReducer,
    booking: Reducers_BookingReducer
});
/* harmony default export */ const Reducers = (reducers);

;// CONCATENATED MODULE: ./redux/Store.ts



const bindMiddlewares = (middleware)=>{
    if (false) {} else {
        return (0,external_redux_namespaceObject.compose)((0,external_redux_namespaceObject.applyMiddleware)(...middleware));
    }
};
/* harmony default export */ const Store = ((0,external_redux_namespaceObject.createStore)(Reducers, {}, bindMiddlewares([
    (external_redux_thunk_default())
])));


/***/ }),

/***/ 167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 856:
/***/ ((module) => {

module.exports = require("btoa");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 22:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),

/***/ 915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 591:
/***/ ((module) => {

module.exports = import("public-ip");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [779,851], () => (__webpack_exec__(656)));
module.exports = __webpack_exports__;

})();