import { useState } from 'react'

export function Counterapp() {
    const [count, setCount] = useState(0)

    return (

        <>
            <div className='countdesign'>
                <p>Count is {count}</p>

                <div className='fenil'>
                    <div>
                        <button className='btn1' onClick={() => setCount(count + 1)}>Increase</button>
                    </div>
                    <div>
                        <button className='btn2' onClick={() => setCount(count - 1)}>Decrease</button>
                    </div>
                    <div>
                        <button className='btn3' onClick={() => setCount(0)}>Reset</button>
                    </div>
                    <div>
                        <button className='btn4' onClick={() => setCount(count + 5)}>Jump</button>
                    </div>
                </div>
            </div>
        </>
    )
}