import React from "react";
import Link from "next/link";
import "../form.style.css"


export default function Form ({lableOne, lableTwo, typeOne, typeTwo, nameIdForOne, nameIdForTwo, btnSubmitValue, isCross=true, placHoldOne, placHoldTwo}) {

    function controlLinkState(isCross) {
        let element = (isCross == true ? <Link className="cross" href="/">+</Link> : <p></p>);
        return element;
    }

    return (
        <section className="sectionForm">

            {controlLinkState(isCross)}

            <form className="form" action="/">

                <lable className="lables" htmlFor={nameIdForOne}>{lableOne}</lable>
                <input className="inputs" type={typeOne} id={nameIdForOne} name={nameIdForOne} placeholder={placHoldOne}/>

                <lable className="lables" htmlFor={nameIdForTwo}>{lableTwo}</lable>
                <input className="inputs" type={typeTwo} id={nameIdForTwo} name={nameIdForTwo} placeholder={placHoldTwo}/>

                <input className="submitBtm" type="submit" value={btnSubmitValue}/>
            </form>

        </section>

    )
}