"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _avenueBits = require("@bit/avenue.bits.breakpoints");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tborder: 1px dashed teal;\n\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6 {\n\t\tmargin-bottom: 22px;\n\n\t\t@media ", " {\n\t\t\tmargin-bottom: 37px;\n\t\t}\n\t}\n\n\th1 {\n\t\tfont-size: 42px;\n\t\t@media ", " {\n\t\t\tfont-size: 80px;\n\t\t}\n\t}\n\n\th2 {\n\t\tfont-size: 36px;\n\t\t@media ", " {\n\t\t\tfont-size: 60px;\n\t\t}\n\t}\n\n\th3 {\n\t\tfont-size: 32px;\n\t\t@media ", " {\n\t\t\tfont-size: 48px;\n\t\t}\n\t}\n\n\th4 {\n\t\tfont-size: 28px;\n\t\t@media ", " {\n\t\t\tfont-size: 36px;\n\t\t}\n\t}\n\n\th5 {\n\t\tfont-size: 24px;\n\t\t@media ", " {\n\t\t\tfont-size: 30px;\n\t\t}\n\t}\n\n\th6 {\n\t\tfont-size: 20px;\n\t\t@media ", " {\n\t\t\tfont-size: 26px;\n\t\t}\n\t}\n\n\tp {\n\t\tfont-size: 18px;\n\t\tmargin-bottom: 25px;\n\t\t@media ", " {\n\t\t\tfont-size: 20px;\n\t\t\tmargin-bottom: 35px;\n\t\t}\n\n\t\t&:first-of-type {\n\t\t\tcolor: #474e50;\n\t\t}\n\n\t\ta {\n\t\t\tdisplay: inline-block;\n\t\t\tposition: relative;\n\t\t\t::after {\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\tbottom: 1px;\n\t\t\t\tleft: 0;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 2px;\t\n\t\t\t\tbackground-color: ", ";\n\t\t\t\topacity: 0;\n\t\t\t\ttransition: 60ms;\n\t\t\t}\n\n\t\t\t:hover {\n\t\t\t\t::after {\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ContentWrapper = _styledComponents["default"].div(_templateObject(), _avenueBits.device.desktop, _avenueBits.device.desktop, _avenueBits.device.desktop, _avenueBits.device.desktop, _avenueBits.device.desktop, _avenueBits.device.desktop, _avenueBits.device.desktop, _avenueBits.device.desktop, function (props) {
  return props.theme.linkColor;
});

exports.ContentWrapper = ContentWrapper;

//# sourceMappingURL=style.js.map