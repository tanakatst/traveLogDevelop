"use strict";
exports.__esModule = true;
var react_1 = require("react");
var LoginModal = function (props) {
    var closeModal = function () {
        props.setshowModal(false);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null, props.showFlag ?
        (react_1["default"].createElement("div", { id: "authentication-modal", tabIndex: -1, className: "fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full" },
            react_1["default"].createElement("div", { className: "relative w-full h-full max-w-md p-4 md:h-auto" },
                react_1["default"].createElement("div", { className: "relative bg-white rounded-lg shadow dark:bg-gray-700" },
                    react_1["default"].createElement("button", { type: "button", className: "absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white", "data-modal-toggle": "authentication-modal", onClick: closeModal },
                        react_1["default"].createElement("svg", { "aria-hidden": "true", className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" },
                            react_1["default"].createElement("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" })),
                        react_1["default"].createElement("span", { className: "sr-only" }, "Close modal")),
                    react_1["default"].createElement("div", { className: "px-6 py-6 lg:px-8" },
                        react_1["default"].createElement("h3", { className: "mb-4 text-xl font-medium text-gray-900 dark:text-white" }, "Sign in to our platform"),
                        react_1["default"].createElement("form", { className: "space-y-6", action: "#" },
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement("label", { htmlFor: "email", className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" }, "Your email"),
                                react_1["default"].createElement("input", { type: "email", name: "email", id: "email", className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white", placeholder: "name@company.com" })),
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement("label", { htmlFor: "password", className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" }, "Your password"),
                                react_1["default"].createElement("input", { type: "password", name: "password", id: "password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" })),
                            react_1["default"].createElement("div", { className: "flex justify-between" },
                                react_1["default"].createElement("div", { className: "flex items-start" },
                                    react_1["default"].createElement("div", { className: "flex items-center h-5" },
                                        react_1["default"].createElement("input", { id: "remember", type: "checkbox", value: "", className: "w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" })),
                                    react_1["default"].createElement("label", { htmlFor: "remember", className: "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" }, "Remember me")),
                                react_1["default"].createElement("a", { href: "#", className: "text-sm text-blue-700 hover:underline dark:text-blue-500" }, "Lost Password?")),
                            react_1["default"].createElement("button", { type: "submit", className: "w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" }, "Login to your account"),
                            react_1["default"].createElement("div", { className: "text-sm font-medium text-gray-500 dark:text-gray-300" },
                                "Not registered? ",
                                react_1["default"].createElement("a", { href: "#", className: "text-blue-700 hover:underline dark:text-blue-500" }, "Create account")))))))) : (react_1["default"].createElement(react_1["default"].Fragment, null))));
};
exports["default"] = LoginModal;
