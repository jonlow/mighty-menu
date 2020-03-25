"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _style = require("./style");

var _gatsby = require("gatsby");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Hello = function Hello() {
  return _react["default"].createElement(_style.Container, null, _react["default"].createElement(_gatsby.Link, {
    to: "/"
  }, "HELLLLOO"));
};

var _default = Hello;
exports["default"] = _default;

//# sourceMappingURL=index.js.map