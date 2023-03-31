import { useState } from "react";

function Count() {
    const [count, setCount] = useState(0);
    console.log(count);
    return (
        <div className="count">
            <p>You clicked {count} times</p>
            <button className="click" onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

export default Count;