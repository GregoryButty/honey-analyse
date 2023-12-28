"use client"

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "../app/forms.style.css"

export default function FormChengePost({ postId, mill, grn, userName, userId }) {

    const [newMill, setNewMill] = useState(mill);
    const [newGrn, setNewGrn] = useState(grn);

    const route = useRouter();

    const submitFormChengePost = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/chengeHoneyPost/${postId}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({newMill, newGrn})
            })

            if (!res.ok) {
                throw new Error("Fetch data failed");
            }

            route.refresh();
            route.push(`/spaceUser/${userName}/${userId}/listOfPosts`);

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <section className="formConteiner">

            <form className="form" onSubmit={submitFormChengePost}>
                <label className="lableText">Мілілітри</label>
                <input className="inputFill"
                    onChange={(e) => setNewMill(e.target.value)}
                    value={newMill}
                    type="text"
                    placeholder="Інша кількість мілілітрів"
                />
                <label className="lableText">Ціна</label>
                <input className="inputFill"
                    onChange={(e) => setNewGrn(e.target.value)}
                    value={newGrn}
                    type="text"
                    placeholder="Інша кількість коштів"
                />
                <button className="btnFormSubmit" type="submit">Змінити</button>
            </form>

        </section>

    )
}