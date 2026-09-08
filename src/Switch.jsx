import { useState } from "react"

export function SwitchApp() {
    const [isOn, setOn] = useState(false)

    return (

        <>
            <div>
                <p>Status is {isOn ? "ON" : "OFF"}</p>
                <button onClick={() => setOn(prev => !prev)}>Switch</button>
            </div>
        </>
    )
}