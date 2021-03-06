'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _countup = require('countup');

var _countup2 = _interopRequireDefault(_countup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CountUp = function (_React$Component) {
  _inherits(CountUp, _React$Component);

  function CountUp() {
    _classCallCheck(this, CountUp);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CountUp).apply(this, arguments));
  }

  _createClass(CountUp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props;
      var start = _props.start;
      var end = _props.end;
      var duration = _props.duration;
      var useEasing = _props.useEasing;
      var useGrouping = _props.useGrouping;
      var separator = _props.separator;
      var decimals = _props.decimals;
      var decimal = _props.decimal;
      var prefix = _props.prefix;
      var suffix = _props.suffix;
      var callback = _props.callback;
      var delay = _props.delay;


      this.state = {
        start: start,
        end: end,
        duration: duration,
        useEasing: useEasing,
        useGrouping: useGrouping,
        separator: separator,
        decimals: decimals,
        decimal: decimal,
        prefix: prefix,
        suffix: suffix,
        callback: callback,
        delay: delay
      };

      this.startAnimation();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.startAnimation();
    }
  }, {
    key: 'startAnimation',
    value: function startAnimation() {
      var _props2 = this.props;
      var start = _props2.start;
      var end = _props2.end;
      var duration = _props2.duration;
      var useEasing = _props2.useEasing;
      var useGrouping = _props2.useGrouping;
      var separator = _props2.separator;
      var decimals = _props2.decimals;
      var decimal = _props2.decimal;
      var prefix = _props2.prefix;
      var suffix = _props2.suffix;
      var callback = _props2.callback;
      var delay = _props2.delay;


      var countup = new _countup2.default((0, _reactDom.findDOMNode)(this), start, end, decimals, duration, {
        useEasing: useEasing,
        useGrouping: useGrouping,
        separator: separator,
        decimal: decimal,
        prefix: prefix,
        suffix: suffix,
        delay: delay
      });

      countup.start(callback);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props;
      var className = _props3.className;
      var style = _props3.style;


      return _react2.default.createElement('span', { className: className, style: style });
    }
  }]);

  return CountUp;
}(_react2.default.Component);

CountUp.defaultProps = {
  start: 0,
  end: 2016,
  decimals: 0,
  duration: 4,
  useEasing: true,
  useGrouping: false,
  separator: ',',
  decimal: '.',
  prefix: '',
  suffix: '',
  delay: 0
};

CountUp.propTypes = {
  className: _react.PropTypes.node,
  style: _react.PropTypes.object,
  start: _react.PropTypes.number.isRequired,
  end: _react.PropTypes.number.isRequired,
  decimals: _react.PropTypes.number,
  duration: _react.PropTypes.number,
  useEasing: _react.PropTypes.bool,
  useGrouping: _react.PropTypes.bool,
  separator: _react.PropTypes.string,
  decimal: _react.PropTypes.string,
  prefix: _react.PropTypes.string,
  suffix: _react.PropTypes.string,
  callback: _react.PropTypes.func,
  delay: _react.PropTypes.number
};

exports.default = CountUp;