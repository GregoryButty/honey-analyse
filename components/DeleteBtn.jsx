"use client"

import React from "react";
import { useRouter } from "next/navigation";
import "../app/component.style.css"

export default function DeleteBtn({ postId, textBtn }) {
    const route = useRouter();

    const submitDeleteBtn = async () => {
        const confirmed = confirm("Зараз ти видаляєш один з постів. Обережно!");

        if (confirmed) {
            const res = await fetch(`http://localhost:3000/api/deleteHoneyPost?id=${postId}`, {
                method: "DELETE"
            });
            console.log(await res.json())

            if (res.ok) {
                route.refresh();
            }
        };
    };

    return(
        <button className="deletePostBtn" onClick={submitDeleteBtn}>{textBtn}</button>
    );
};