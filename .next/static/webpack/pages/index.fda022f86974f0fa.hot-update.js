"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _artifacts_contracts_Assessment_sol_Assessment_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../artifacts/contracts/Assessment.sol/Assessment.json */ \"./artifacts/contracts/Assessment.sol/Assessment.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction HomePage() {\n    _s();\n    const [ethWallet, setEthWallet] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [atm, setATM] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const contractAddress = \"0x5FbDB2315678afecb367f032d93F642f64180aa3\";\n    const atmABI = _artifacts_contracts_Assessment_sol_Assessment_json__WEBPACK_IMPORTED_MODULE_3__.abi;\n    const getWallet = async ()=>{\n        if (window.ethereum) {\n            setEthWallet(window.ethereum);\n        }\n        if (ethWallet) {\n            const account = await ethWallet.request({\n                method: \"eth_accounts\"\n            });\n            handleAccount(account);\n        }\n    };\n    const handleAccount = (account)=>{\n        if (account) {\n            console.log(\"Account connected: \", account);\n            setAccount(account);\n        } else {\n            console.log(\"No account found\");\n        }\n    };\n    const connectAccount = async ()=>{\n        if (!ethWallet) {\n            alert(\"MetaMask wallet is required to connect\");\n            return;\n        }\n        const accounts = await ethWallet.request({\n            method: \"eth_requestAccounts\"\n        });\n        handleAccount(accounts);\n        // once wallet is set we can get a reference to our deployed contract\n        getATMContract();\n    };\n    const getATMContract = ()=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(ethWallet);\n        const signer = provider.getSigner();\n        const atmContract = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(contractAddress, atmABI, signer);\n        setATM(atmContract);\n    };\n    const getBalance = async ()=>{\n        if (atm) {\n            setBalance((await atm.getBalance()).toNumber());\n        }\n    };\n    const deposit = async ()=>{\n        if (atm) {\n            let tx = await atm.deposit(1);\n            await tx.wait();\n            getBalance();\n        }\n    };\n    const withdraw = async ()=>{\n        if (atm) {\n            let tx = await atm.withdraw(1);\n            await tx.wait();\n            getBalance();\n        }\n    };\n    const initUser = ()=>{\n        // Check to see if user has Metamask\n        if (!ethWallet) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Please install Metamask in order to use this ATM.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                lineNumber: 81,\n                columnNumber: 14\n            }, this);\n        }\n        // Check to see if user is connected. If not, connect to their account\n        if (!account) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: connectAccount,\n                children: \"Please connect your Metamask wallet\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                lineNumber: 86,\n                columnNumber: 14\n            }, this);\n        }\n        if (balance == undefined) {\n            getBalance();\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Your Account: \",\n                        account\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Your Balance: \",\n                        balance\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: deposit,\n                    children: \"Deposit 1 ETH\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                    lineNumber: 97,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: withdraw,\n                    children: \"Withdraw 1 ETH\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n            lineNumber: 94,\n            columnNumber: 7\n        }, this);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getWallet();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"jsx-64dcc299d02ae1fb\" + \" \" + \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-64dcc299d02ae1fb\" + \" \" + \"centered-image\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"https://d1psgljc389n8q.cloudfront.net/bootcamps/logos/mSJNYWi-O\",\n                    alt: \"alternative-text\",\n                    style: {\n                        width: \"15%\",\n                        display: \"block\",\n                        margin: \"0 auto\"\n                    },\n                    className: \"jsx-64dcc299d02ae1fb\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                    lineNumber: 108,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"jsx-64dcc299d02ae1fb\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    style: {\n                        color: \"white\"\n                    },\n                    className: \"jsx-64dcc299d02ae1fb\",\n                    children: \"Welcome to the Metacrafters ATM!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                    lineNumber: 115,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, this),\n            initUser(),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"64dcc299d02ae1fb\",\n                children: \".container.jsx-64dcc299d02ae1fb{text-align:center;background:#3964c3}.centered-image.jsx-64dcc299d02ae1fb{text-align:center}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n        lineNumber: 106,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"WwKlsMi6vo/KQejEZtqMu1JSI9g=\");\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDhEQUFDOEI7a0RBQWU7OzBCQUNkLDhEQUFDRDswREFBYzswQkFDYiw0RUFBQ0U7b0JBQ0NDLEtBQUk7b0JBQ0pDLEtBQUk7b0JBQ0pDLE9BQU87d0JBQUVDLE9BQU87d0JBQU9DLFNBQVM7d0JBQVNDLFFBQVE7b0JBQVM7Ozs7Ozs7Ozs7OzswQkFHOUQsOERBQUNDOzswQkFDRCw0RUFBQ0M7b0JBQUdMLE9BQU87d0JBQUVNLE9BQU87b0JBQVE7OzhCQUFHOzs7Ozs7Ozs7OztZQUU5QmY7Ozs7Ozs7Ozs7O0FBYVAsQ0FBQztHQTdIdUJ0QztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7ZXRoZXJzfSBmcm9tIFwiZXRoZXJzXCI7XHJcbmltcG9ydCBhdG1fYWJpIGZyb20gXCIuLi9hcnRpZmFjdHMvY29udHJhY3RzL0Fzc2Vzc21lbnQuc29sL0Fzc2Vzc21lbnQuanNvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcbiAgY29uc3QgW2V0aFdhbGxldCwgc2V0RXRoV2FsbGV0XSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgY29uc3QgW2FjY291bnQsIHNldEFjY291bnRdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICBjb25zdCBbYXRtLCBzZXRBVE1dID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG5cclxuICBjb25zdCBjb250cmFjdEFkZHJlc3MgPSBcIjB4NUZiREIyMzE1Njc4YWZlY2IzNjdmMDMyZDkzRjY0MmY2NDE4MGFhM1wiO1xyXG4gIGNvbnN0IGF0bUFCSSA9IGF0bV9hYmkuYWJpO1xyXG5cclxuICBjb25zdCBnZXRXYWxsZXQgPSBhc3luYygpID0+IHtcclxuICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcclxuICAgICAgc2V0RXRoV2FsbGV0KHdpbmRvdy5ldGhlcmV1bSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV0aFdhbGxldCkge1xyXG4gICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgZXRoV2FsbGV0LnJlcXVlc3Qoe21ldGhvZDogXCJldGhfYWNjb3VudHNcIn0pO1xyXG4gICAgICBoYW5kbGVBY2NvdW50KGFjY291bnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQWNjb3VudCA9IChhY2NvdW50KSA9PiB7XHJcbiAgICBpZiAoYWNjb3VudCkge1xyXG4gICAgICBjb25zb2xlLmxvZyAoXCJBY2NvdW50IGNvbm5lY3RlZDogXCIsIGFjY291bnQpO1xyXG4gICAgICBzZXRBY2NvdW50KGFjY291bnQpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiTm8gYWNjb3VudCBmb3VuZFwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGNvbm5lY3RBY2NvdW50ID0gYXN5bmMoKSA9PiB7XHJcbiAgICBpZiAoIWV0aFdhbGxldCkge1xyXG4gICAgICBhbGVydCgnTWV0YU1hc2sgd2FsbGV0IGlzIHJlcXVpcmVkIHRvIGNvbm5lY3QnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhXYWxsZXQucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pO1xyXG4gICAgaGFuZGxlQWNjb3VudChhY2NvdW50cyk7XHJcbiAgICBcclxuICAgIC8vIG9uY2Ugd2FsbGV0IGlzIHNldCB3ZSBjYW4gZ2V0IGEgcmVmZXJlbmNlIHRvIG91ciBkZXBsb3llZCBjb250cmFjdFxyXG4gICAgZ2V0QVRNQ29udHJhY3QoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRBVE1Db250cmFjdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGV0aFdhbGxldCk7XHJcbiAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcclxuICAgIGNvbnN0IGF0bUNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChjb250cmFjdEFkZHJlc3MsIGF0bUFCSSwgc2lnbmVyKTtcclxuIFxyXG4gICAgc2V0QVRNKGF0bUNvbnRyYWN0KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldEJhbGFuY2UgPSBhc3luYygpID0+IHtcclxuICAgIGlmIChhdG0pIHtcclxuICAgICAgc2V0QmFsYW5jZSgoYXdhaXQgYXRtLmdldEJhbGFuY2UoKSkudG9OdW1iZXIoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBkZXBvc2l0ID0gYXN5bmMoKSA9PiB7XHJcbiAgICBpZiAoYXRtKSB7XHJcbiAgICAgIGxldCB0eCA9IGF3YWl0IGF0bS5kZXBvc2l0KDEpO1xyXG4gICAgICBhd2FpdCB0eC53YWl0KClcclxuICAgICAgZ2V0QmFsYW5jZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgd2l0aGRyYXcgPSBhc3luYygpID0+IHtcclxuICAgIGlmIChhdG0pIHtcclxuICAgICAgbGV0IHR4ID0gYXdhaXQgYXRtLndpdGhkcmF3KDEpO1xyXG4gICAgICBhd2FpdCB0eC53YWl0KClcclxuICAgICAgZ2V0QmFsYW5jZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaW5pdFVzZXIgPSAoKSA9PiB7XHJcbiAgICAvLyBDaGVjayB0byBzZWUgaWYgdXNlciBoYXMgTWV0YW1hc2tcclxuICAgIGlmICghZXRoV2FsbGV0KSB7XHJcbiAgICAgIHJldHVybiA8cD5QbGVhc2UgaW5zdGFsbCBNZXRhbWFzayBpbiBvcmRlciB0byB1c2UgdGhpcyBBVE0uPC9wPlxyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIHRvIHNlZSBpZiB1c2VyIGlzIGNvbm5lY3RlZC4gSWYgbm90LCBjb25uZWN0IHRvIHRoZWlyIGFjY291bnRcclxuICAgIGlmICghYWNjb3VudCkge1xyXG4gICAgICByZXR1cm4gPGJ1dHRvbiBvbkNsaWNrPXtjb25uZWN0QWNjb3VudH0+UGxlYXNlIGNvbm5lY3QgeW91ciBNZXRhbWFzayB3YWxsZXQ8L2J1dHRvbj5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYmFsYW5jZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgZ2V0QmFsYW5jZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHA+WW91ciBBY2NvdW50OiB7YWNjb3VudH08L3A+XHJcbiAgICAgICAgPHA+WW91ciBCYWxhbmNlOiB7YmFsYW5jZX08L3A+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtkZXBvc2l0fT5EZXBvc2l0IDEgRVRIPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt3aXRoZHJhd30+V2l0aGRyYXcgMSBFVEg8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge2dldFdhbGxldCgpO30sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlcmVkLWltYWdlXCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9kMXBzZ2xqYzM4OW44cS5jbG91ZGZyb250Lm5ldC9ib290Y2FtcHMvbG9nb3MvbVNKTllXaS1PXCJcclxuICAgICAgICAgIGFsdD1cImFsdGVybmF0aXZlLXRleHRcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxNSUnLCBkaXNwbGF5OiAnYmxvY2snLCBtYXJnaW46ICcwIGF1dG8nIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fT5XZWxjb21lIHRvIHRoZSBNZXRhY3JhZnRlcnMgQVRNITwvaDE+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICB7aW5pdFVzZXIoKX1cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzM5NjRDMztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNlbnRlcmVkLWltYWdlIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L21haW4+XHJcbiAgKTsgIFxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImV0aGVycyIsImF0bV9hYmkiLCJIb21lUGFnZSIsImV0aFdhbGxldCIsInNldEV0aFdhbGxldCIsInVuZGVmaW5lZCIsImFjY291bnQiLCJzZXRBY2NvdW50IiwiYXRtIiwic2V0QVRNIiwiYmFsYW5jZSIsInNldEJhbGFuY2UiLCJjb250cmFjdEFkZHJlc3MiLCJhdG1BQkkiLCJhYmkiLCJnZXRXYWxsZXQiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJoYW5kbGVBY2NvdW50IiwiY29uc29sZSIsImxvZyIsImNvbm5lY3RBY2NvdW50IiwiYWxlcnQiLCJhY2NvdW50cyIsImdldEFUTUNvbnRyYWN0IiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJhdG1Db250cmFjdCIsIkNvbnRyYWN0IiwiZ2V0QmFsYW5jZSIsInRvTnVtYmVyIiwiZGVwb3NpdCIsInR4Iiwid2FpdCIsIndpdGhkcmF3IiwiaW5pdFVzZXIiLCJwIiwiYnV0dG9uIiwib25DbGljayIsImRpdiIsIm1haW4iLCJpbWciLCJzcmMiLCJhbHQiLCJzdHlsZSIsIndpZHRoIiwiZGlzcGxheSIsIm1hcmdpbiIsImhlYWRlciIsImgxIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});