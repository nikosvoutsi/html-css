import { useEffect, useState } from "react";
 
export default function UseEffectExample() {
    const [state, setState] = useState("initial State");
 
    useEffect(() => {
        console.log("useEffect is called");
    },[state]);
 
    return (
        <div>
            <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
            />
        </div>
    );
}