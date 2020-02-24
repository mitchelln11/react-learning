'use strict';

const e = React.createElement; // Any reference to this will be used with e

// ---- Begin class -----
class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false }; // Begin button with a false value
    }

    render() {
        // If the liked value changes to true, add text stating that you liked it
        if (this.state.liked) {
            return 'You liked this.';
        }


        // === FOLLOWING 2 DO THE EXACT SAME THING!!! ============================
        // --- Example shows the return without using JSX

        // Actual effect of clicking on the button
        // return e( // e could also be shown as React.createElement, but we added it as a const above ^^ to make it quicker
        //     'button', // What are we effecting?
        //     { onClick: () => this.setState({ liked: true }) }, // What are we doing with the button? (Clicking, then changing value to true)
        //     'Like' // Value that the button reads
        // );

        // --- Example shows the return WITH JSX
        return (
            <button onClick={() => this.setState({ liked: true })}>
                Like
            </button>
        )

        // === END OF SAME RETURN EXAMPLES =======================================
    }
}
// ---- End class ----- 

const domContainer = document.querySelector('#like_button_container'); // Shorten this by setting const to domContainer, then use domContainer here on out
ReactDOM.render(e(LikeButton), domContainer);