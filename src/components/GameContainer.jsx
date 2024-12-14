import React, { useState } from "react";
import Monster from "./Monster";

function GameContainer(){
    const [damage, setDamage] = useState(5)

    const increaseDamage = () => setDamage((prev) => prev + 1)

    return (
        <div>
            <button onClick={increaseDamage}>Increase Damage by 1%</button>
            <h1>Damage = {damage}</h1>
            <Monster damage = {damage}/>
        </div>
    )
}

export default GameContainer