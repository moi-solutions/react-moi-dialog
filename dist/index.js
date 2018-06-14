'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = exports.Footer = exports.Body = exports.Title = exports.Header = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5;\n'], ['\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  color: #333333;\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n  font-weight: bold;\n'], ['\n  color: #333333;\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n  font-weight: bold;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  padding: 15px;\n  @media (max-width: 576px) {\n    padding: 10px 20px;\n  }\n'], ['\n  padding: 15px;\n  @media (max-width: 576px) {\n    padding: 10px 20px;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5;\n'], ['\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  border-radius: 4px;\n  width: 600px;\n  background-color: white;\n  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n  position: relative;\n  overflow: hidden;\n  @media (max-width: 576px) {\n    border-radius: 0;\n    width: 100%;\n    height: 100% !important;\n    top: 0;\n    right: 0;\n    margin: 0;\n    box-shadow: none;\n  }\n}\n'], ['\n  border-radius: 4px;\n  width: 600px;\n  background-color: white;\n  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n  position: relative;\n  overflow: hidden;\n  @media (max-width: 576px) {\n    border-radius: 0;\n    width: 100%;\n    height: 100% !important;\n    top: 0;\n    right: 0;\n    margin: 0;\n    box-shadow: none;\n  }\n}\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactMdProgressBar = require('react-md-progress-bar');

var _reactModal = require('react-modal');

var _reactModal2 = _interopRequireDefault(_reactModal);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dialog = function (_Component) {
  _inherits(Dialog, _Component);

  /**
   * React Component constructor.
   * @param props
   */
  function Dialog(props) {
    _classCallCheck(this, Dialog);

    var _this = _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this, props));

    _this.state = {
      show: props.show,
      progressBar: props.progressBar
    };
    return _this;
  }

  /**
   * Update state based nextProps.
   * @param nextProps
   */


  _createClass(Dialog, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        show: nextProps.show,
        progressBar: nextProps.progressBar
      });
    }

    /**
     * Render progress.
     * @returns {XML}
     */

  }, {
    key: 'renderProgress',
    value: function renderProgress() {
      return this.state.progressBar ? _react2.default.createElement(_reactMdProgressBar.ProgressBar, { show: true, overlay: true }) : null;
    }

    /**
     * Render modal.
     * @returns {XML}
     */

  }, {
    key: 'renderModal',
    value: function renderModal() {
      return _react2.default.createElement(
        _reactModal2.default,
        { isOpen: this.props.show, ariaHideApp: false },
        _react2.default.createElement(
          Wrapper,
          null,
          this.renderProgress(),
          this.props.children
        )
      );
    }

    /**
     * Render modal message.
     * @returns {XML}
     */

  }, {
    key: 'render',
    value: function render() {
      return this.state.show ? this.renderModal() : null;
    }
  }]);

  return Dialog;
}(_react.Component);

Dialog.propTypes = {
  children: _propTypes2.default.arrayOf(_propTypes2.default.element).isRequired,
  show: _propTypes2.default.bool.isRequired,
  progressBar: _propTypes2.default.bool.isRequired
};

exports.default = Dialog;

/**
 * Styles
 */

var Header = exports.Header = _styledComponents2.default.div(_templateObject);

var Title = exports.Title = _styledComponents2.default.h1(_templateObject2);

var Body = exports.Body = _styledComponents2.default.div(_templateObject3);

var Footer = exports.Footer = _styledComponents2.default.div(_templateObject4);

var Wrapper = exports.Wrapper = _styledComponents2.default.div(_templateObject5);