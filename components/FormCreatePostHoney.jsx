"use client"

import React from "react";
import "../app/forms.style.css"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FormCreatePost({ userName, userId }) {

    const [mill, setMill] = useState("");
    const [grn, setGrn] = useState("");

    const route = useRouter();

    const submitPostHony = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:3000/api/setHoneyList", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({mill, grn, userId})
        })

        if (res.ok) {
            route.refresh();
            route.push(`/spaceUser/${userName}/${userId}/listOfPosts`);
        }

    }

    return (
        <section className="formConteiner">

            <form className="form" onSubmit={submitPostHony}>
                <label className="lableText">Мед</label>
                <input className="inputFill"
                    onChange={(e) => setMill(e.target.value)}
                    value={mill}
                    type="text"
                    placeholder="В мілілітрах"
                />

                <label className="lableText">Кошти</label>
                <input className="inputFill"
                    onChange={(e) => {setGrn(e.target.value)}}
                    value={grn}
                    type="text"
                    placeholder="В гривнях"
                />

                <button className="btnFormSubmit" type="submit">Надіслати</button>
            </form>

        </section>
    )
}