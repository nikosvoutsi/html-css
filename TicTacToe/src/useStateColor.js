import { useState } from "react";
 
export default function ColorSelect() {
    const [color, setColor] = useState("blue");
    const [count, setCount] =useState(0);
 
    function colorChanged(e) {
        setColor(e.target.value);
        setCount(x=>x+1)
    }
 
    const colorBoxStyle = {
        marginLeft:"45vw",
        marginTop:"10px",
        width: "50px",
        height: "50px",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        backgroundColor: color,
    };
 
    return (
        <div style={{textAlign:"center"}}>
            <label for="colors">Choose your favourite color:</label>
            <select name="colors" onChange={colorChanged}>
                <option>Options...</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
            </select>
            <div style={colorBoxStyle}></div><p>You have changed color {count} times!!!</p>
        </div>
    );
}