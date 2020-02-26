var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// --- Starter Code ---
// --- This is a function ---
// function Clock(props) {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {props.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }

//   function tick() {
//     ReactDOM.render(
//       <Clock date={new Date()} />,
//       document.getElementById('root')
//     );
//   }

//   setInterval(tick, 1000);

//================================================

// What's happening?
// 1.  <Clock /> is passed into the ReactDOM.render method
// 2.  React calls constructor inside Clock component
// 3.  this.state is initialized, grabbing the date
// 4.  React calls render method inside Clock component
// 5.  DOM updated - finds div with ID of 'clock' in this case
// 6.  After DOM is updated, the componentDidMount is run
// 7.  Timer set up
// 8.  Tick method runs
// 9.  State set to a new Date
// 10. Runs render method again
// 11. this.state.date in render method renders new output. DOM updated
// 12. If <Clock /> is ever removed from the DOM, componentWillUnmount() will run.


// --- This is now a class, rather than a function ---
var Clock = function (_React$Component) {
    _inherits(Clock, _React$Component);

    // This part is the State - basically the default state
    function Clock(props) {
        _classCallCheck(this, Clock);

        var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

        _this.state = { date: new Date() };
        return _this;
    }

    //=======LIFECYCLE METHODS==================
    // Mounting -- runs after component output has been rendered to the DOM


    _createClass(Clock, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.timerID = setInterval(function () {
                return _this2.tick();
            }, 1000 // runs every 1 second or 1000 milliseconds
            );
        }

        // Component has to clear current value in order to update again

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearInterval(this.timerID); // Built-in method
        }

        //==========================================
        // Actual Tick Method to make clock get updated every second

    }, {
        key: 'tick',
        value: function tick() {
            this.setState({ // setState is built in
                date: new Date()
            });
        }

        // render method

    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h2',
                    null,
                    'It is ',
                    this.state.date.toLocaleTimeString(),
                    '.'
                )
            );
        }
    }]);

    return Clock;
}(React.Component);

ReactDOM.render(React.createElement(Clock, null), document.getElementById('clock'));