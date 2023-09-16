import React, { useState } from 'react'

export default function Counter() {
    console.log("Rendering Counter Component!");
    const [number, setNumber] = useState(0);

    function handleClick(event) {
        event.stopPropagation();
        setNumber(number => number + 1);
        setNumber(number => number + 1);
        setNumber(number => number + 1);
        setNumber(number => number + 1);
        console.log(number);        /* ** */
    }

    return (
        <center>
            <h1>Heading</h1>
            <h2>{number}</h2>
            <button className='btn btn-light' onClick={handleClick}>ADD</button>
        </center>
    )
}

/* - Ab jese hi first time render hoga component toh value "0" hogi, phir ham BUTTON per click kr k setNumber se number ki value ko +1 krdengay
    ** toh yeh console.log() mai value previous wali hi rahegi kyun k woh function k render honay per nahi chal raha,,, 
    balkay woh kisi button k click honay per chal raha hai.. agar is console.log()  ko bahir krdengay toh... 
    theek kaam karega latest value dikhayega 
*/


/* *
        setNumber(number => number + 1);
        setNumber(number => number + 1);
        setNumber(number => number + 1);
        setNumber(number => number + 1);
        yeh eik click per 4 martaba value ko +1 krega, kyun k yeh apne pas previous value ko bitha kr agay barhega.


        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
        is mai number ki value hamesha 0 hi rahegi,, ap jitni martaba bhi isko repeat krden
*/