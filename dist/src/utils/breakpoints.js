"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.device = void 0;
var size = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1024px",
  large: "1280px",
  big: "1600px"
};
var device = {
  mobile: "(min-width: ".concat(size.mobile, ")"),
  tablet: "(min-width: ".concat(size.tablet, ")"),
  desktop: "(min-width: ".concat(size.desktop, ")"),
  large: "(min-width: ".concat(size.large, ")"),
  big: "(min-width: ".concat(size.big, ")")
};
exports.device = device;

//# sourceMappingURL=breakpoints.js.map