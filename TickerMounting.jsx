import { useEffect, useState } from "react"

export const Ticker = () => {

    let [isTickking, setIsTickking] = useState(0)


    useEffect(() => {
        let TickerId = setInterval(() => {
            setIsTickking(prev => prev + 1);
        }, 1500);

        console.log("byyy");

        return () => {
            console.log("hello");
            clearInterval(TickerId);
        };
    }, []);


    return (
        <div>

            <span>
                <h1>Ticker</h1>

                <h3>{isTickking}</h3>
                <button>StartTicking</button>
            </span>

        </div>
    )

}


export let Parent = () => {

    let [show, setShow] = useState(true)
    let [Counter, setCounter] = useState(0);


    return (

        <div className="Parent">

            <pre style={{

                border: "dashed 1px",
                padding: "3px",
                backgroundColor: "lightskyblue"

            }}><code>{JSON.stringify(show)}</code></pre>

            <span className="tickker-wrapper">
                <label htmlFor="show-ticker">Show Ticker</label>
                <input type="checkbox" id="show-ticker" checked={show}

                    onChange={(e) => { setShow(e.target.checked) }}

                />
            </span>

            <span>
                <h4>{Counter}</h4>
                <button onClick={() => {
                    setCounter(Counter + 1)
                }}>+</button>
            </span>

            {show && <Ticker />}

        </div>

    )

}


