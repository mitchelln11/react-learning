import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Example() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click Me
            </button>
        </div>
    );
}

// Can re-run the root JS auto-builder with:
// npx babel --watch src --out-dir . --presets react-app/prod
const rootElement = document.getElementById("hook-section");
ReactDOM.render(<Example />, rootElement);
