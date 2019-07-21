import React, { Component } from 'react';
import PropTypes from 'prop-types';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".styles_table_builder_holder__3o9ub table {\n\tline-height: 1.25;\n\tborder: 0;\n\tborder-collapse: collapse;\n\twidth: 100%;\n\tfloat: left;\n}\n\ntr {\n\ttext-align: center;\n}\n\ntr:nth-of-type(odd) {\n\tbackground-color: #E5E5E5;\n}\n\nth {\n\tfont-weight: 700;\n\tbackground-color: #f2f2f2;\n\tcolor: #666;\n}\n\nth,\ntd {\n\tpadding: 10px 15px;\n\tborder: 1px solid #BFBFBF;\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n.styles_delete_row__2JBty{\n\n}\n.styles_table_builder_holder__3o9ub{\n\tpadding: 10px;\n\t    display: inline-block;\n}\n.styles_table_builder_holder__3o9ub .styles_Add_button__3JjNg{\n\tmargin: 10px 0;\n\tcursor: pointer;\n\tfloat: left;\n}\n.styles_Add_button__3JjNg.styles_add_colonne__1sq3K{\n\tfloat: right;\n}\ntd.styles_actions__31uEG {\n    border: 0;\n    background-color: #fff;\n}\n";
var styles = { "table_builder_holder": "styles_table_builder_holder__3o9ub", "delete_row": "styles_delete_row__2JBty", "Add_button": "styles_Add_button__3JjNg", "add_colonne": "styles_add_colonne__1sq3K", "actions": "styles_actions__31uEG" };
styleInject(css);

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var ExampleComponent = function (_Component) {
  inherits(ExampleComponent, _Component);

  function ExampleComponent() {
    classCallCheck(this, ExampleComponent);
    return possibleConstructorReturn(this, (ExampleComponent.__proto__ || Object.getPrototypeOf(ExampleComponent)).apply(this, arguments));
  }

  createClass(ExampleComponent, [{
    key: 'render',
    value: function render() {
      var text = this.props.text;


      return React.createElement(
        'div',
        { className: styles.test },
        'Example Component: ',
        text
      );
    }
  }]);
  return ExampleComponent;
}(Component);

ExampleComponent.propTypes = {
  text: PropTypes.string
};

export default ExampleComponent;
//# sourceMappingURL=index.es.js.map
