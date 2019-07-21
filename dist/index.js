'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

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

var Colonne = function (_React$Component) {
  inherits(Colonne, _React$Component);

  function Colonne() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Colonne);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Colonne.__proto__ || Object.getPrototypeOf(Colonne)).call.apply(_ref, [this].concat(args))), _this), _this.ChangeValue = function (e) {
      _this.setState({ valeur: e.target.value });
      _this.props.ValueChanged(e, _this.props.i, _this.props.j);
    }, _this.state = {
      valeur: _this.props.valeur,
      i: _this.props.i,
      j: _this.props.j
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Colonne, [{
    key: 'dismiss',
    value: function dismiss() {
      this.props.unmountMe();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.j == this.state.j) {
        console.log('match :', this.props.j == this.state.j);
        this.setState({ valeur: nextProps.valeur });
      }
    }
  }, {
    key: 'CheckIsEditable',
    value: function CheckIsEditable() {
      var _this2 = this;

      if (this.props.EnableRowEdit) {
        return React.createElement('input', {
          className: 'inputfield' + this.props.i + this.props.j,
          key: 'inputfield' + this.props.i + this.props.j,
          ref: 'inputfield' + this.props.i + this.props.j,
          value: this.state.valeur,
          onChange: function onChange(e) {
            return _this2.ChangeValue(e);
          } });
      } else {
        return this.state.valeur;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'span',
        { key: 'input' + this.props.i + this.props.j, className: this.props.i + this.props.j },
        this.CheckIsEditable()
      );
    }
  }]);
  return Colonne;
}(React.Component);

var Ligne = function (_React$Component) {
  inherits(Ligne, _React$Component);

  function Ligne() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Ligne);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Ligne.__proto__ || Object.getPrototypeOf(Ligne)).call.apply(_ref, [this].concat(args))), _this), _this.CheckDeleteLabelLine = function () {
      return _this.props.LabelDeleteLine ? _this.props.LabelDeleteLine : '-';
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Ligne, [{
    key: 'dismiss',
    value: function dismiss() {
      this.props.unmountMe();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var LigneTable = Object.keys(this.props.data).map(function (key) {
        return React.createElement(
          'td',
          { key: (key + _this2.props.i), className: key + _this2.props.i },
          React.createElement(Colonne, {
            ValueChanged: _this2.props.ValueUpdated,
            i: _this2.props.i, key: 'td' + key,
            valeur: _this2.props.data[key].value,
            j: key,
            EnableRowEdit: _this2.props.EnableRowEdit })
        );
      });

      return React.createElement(
        'tr',
        null,
        LigneTable,
        React.createElement(
          'td',
          { className: 'actions' },
          React.createElement(
            'button',
            { className: 'delete_row', onClick: function onClick(e) {
                return _this2.props.DeleteLigne(_this2.props.i);
              } },
            this.CheckDeleteLabelLine()
          )
        )
      );
    }
  }]);
  return Ligne;
}(React.Component);

var TableBuilderGH = function (_React$Component) {
	inherits(TableBuilderGH, _React$Component);

	function TableBuilderGH(props) {
		classCallCheck(this, TableBuilderGH);

		var _this = possibleConstructorReturn(this, (TableBuilderGH.__proto__ || Object.getPrototypeOf(TableBuilderGH)).call(this, props));

		_this.state = {
			data: _this.props.data
		};
		_this.row = { "value": "New row" };

		_this.DeleteLigne = function (i) {
			var a = _this.state.data.splice(i, 1);
			_this.props.OnTableUpdate(_this.state.data);
		};

		_this.ValueUpdated = function (e, i, j) {
			console.log(e.target.value, i, j);
			_this.state.data[i][j].value = e.target.value;
			_this.props.OnTableUpdate(_this.state.data);
		};

		_this.state = {
			data: _this.state.data
		};

		_this.AddLigne = function () {
			var l = _this.state.data.length;
			var row = JSON.parse(JSON.stringify(_this.row));
			if (l > 0) {
				var ObjectToPush = [];
				for (var i = 0; i < _this.state.data[0].length; i++) {
					ObjectToPush.push(JSON.parse(JSON.stringify(row)));
				}

				_this.state.data.push(ObjectToPush);
			} else {
				_this.state.data.push([row]);
			}
			_this.props.OnTableUpdate(_this.state.data);
		};

		_this.AddColonne = function () {
			var row = JSON.parse(JSON.stringify(_this.row));

			for (var i = 0; i < _this.state.data.length; i++) {
				_this.state.data[i].push(JSON.parse(JSON.stringify(row)));
			}
			_this.props.OnTableUpdate(_this.state.data);
		};

		_this.CheCkAddRow = function () {
			if (_this.props.EnableTableEdit) {
				return React.createElement(
					'button',
					{ className: 'Add_button add_colonne', onClick: function onClick(e) {
							return _this.AddColonne(e);
						} },
					_this.LabelAddRow()
				);
			}
		};

		_this.CheCkAddLine = function () {
			if (_this.props.EnableTableEdit) {
				return React.createElement(
					'button',
					{ className: 'Add_button', onClick: function onClick(e) {
							return _this.AddLigne(e);
						} },
					_this.LabelAddLine()
				);
			}
		};

		_this.LabelAddLine = function () {
			return _this.props.LabelAddLine ? _this.props.LabelAddLine : '+';
		};

		_this.LabelAddRow = function () {
			return _this.props.LabelAddRow ? _this.props.LabelAddRow : '+';
		};

		_this.state = {
			data: _this.props.data
		};
		_this.DeleteLigne = _this.DeleteLigne.bind(_this);
		return _this;
	}

	createClass(TableBuilderGH, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var LigneTable = Object.keys(this.state.data).map(function (key) {
				return React.createElement(Ligne, {
					DeleteLigne: _this2.DeleteLigne,
					EnableRowEdit: _this2.props.EnableRowEdit,
					ValueUpdated: _this2.ValueUpdated,
					i: key,
					key: key + 'ligne',
					LabelDeleteLine: _this2.props.LabelDeleteLine,
					data: _this2.state.data[key]
				});
			});

			return React.createElement(
				'div',
				{ className: 'table_builder_holder' },
				this.CheCkAddRow(),
				React.createElement(
					'table',
					null,
					React.createElement(
						'tbody',
						null,
						LigneTable
					)
				),
				this.CheCkAddLine()
			);
		}
	}]);
	return TableBuilderGH;
}(React.Component);

TableBuilderGH.propTypes = {
	data: React.PropTypes.array.isRequired,
	OnTableUpdate: React.PropTypes.func.isRequired,
	EnableTableEdit: React.PropTypes.bool,
	EnableRowEdit: React.PropTypes.bool,
	LabelAddRow: React.PropTypes.string,
	LabelAddLine: React.PropTypes.string
};

module.exports = TableBuilderGH;
//# sourceMappingURL=index.js.map
