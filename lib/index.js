'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var style = {
  wrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    transition: 'background-color 0.25s ease-in-out'
  },
  swatches: {
    position: 'absolute',
    overflow: 'auto',
    margin: 0,
    bottom: '10px',
    right: '10px'
  },
  swatch: {
    display: 'block',
    float: 'left',
    margin: '0 0 0 10px',
    width: '20px',
    height: '20px',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'opacity 0.25s ease-in-out'
  }
};

var BackgroundColor = (function (_React$Component) {
  _inherits(BackgroundColor, _React$Component);

  function BackgroundColor(props, ctx) {
    _classCallCheck(this, BackgroundColor);

    _get(Object.getPrototypeOf(BackgroundColor.prototype), 'constructor', this).call(this, props, ctx);

    this.story = props.story;
    this.colors = props.colors || [];

    this.state = {
      selected: this.colors[0]
    };
  }

  _createClass(BackgroundColor, [{
    key: 'selectColor',
    value: function selectColor(color) {
      var _this = this;

      return function () {
        return _this.setState({ selected: color });
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2['default'].createElement(
        'div',
        { style: Object.assign({}, style.wrapper, { backgroundColor: this.state.selected }) },
        this.story(),
        _react2['default'].createElement(
          'ul',
          { style: style.swatches },
          this.colors.map(function (color) {
            return _react2['default'].createElement('li', {
              key: color,
              style: Object.assign({}, style.swatch, {
                backgroundColor: color,
                boxShadow: _this2.state.selected === color ? 'inset 0 0 0 2px rgba(0, 0, 0, 0.5)' : 'none'
              }),
              onClick: _this2.selectColor(color) });
          })
        )
      );
    }
  }]);

  return BackgroundColor;
})(_react2['default'].Component);

exports.BackgroundColor = BackgroundColor;

exports['default'] = function (colors) {
  return function (story) {
    return _react2['default'].createElement(BackgroundColor, { colors: colors, story: story });
  };
};
