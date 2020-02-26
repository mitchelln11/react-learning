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
class Clock extends React.Component {
    // This part is the State - basically the default state
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    //=======LIFECYCLE METHODS==================
    // Mounting -- runs after component output has been rendered to the DOM
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000 // runs every 1 second or 1000 milliseconds
        );
    }

    // Component has to clear current value in order to update again
    componentWillUnmount() {
        clearInterval(this.timerID); // Built-in method
    }

    //==========================================
    // Actual Tick Method to make clock get updated every second
    tick(){
        this.setState({ // setState is built in
            date: new Date()
        });
    }

    // render method
    render() {
        return (
            <div>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('clock')
);