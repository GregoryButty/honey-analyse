"use client"

import FormCheckUsr from "@/components/FormCheckUsr"
import BrendLink from "../../components/BrendLink"
import Title from "../../components/Title"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckUser() {

    const [nickName, setNickName] = useState("");
    const [pass, setPass] = useState("");

    const route = useRouter();

    const submitCheckUser = async (e) => {
        try {
            e.preventDefault();

            const res = await fetch("http://localhost:3000/api/checkDataUser", {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({nickName, pass})
            })


            // console.log(res);

            if (res.ok) {
                const resData = await res.json();
                route.push(`/spaceUser/${resData.data.user.userName}/${resData.data.user.userId}/postHoney`);
            } else
                route.push("/")

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section className="container">

                <Title
                    titleText={"Увійди в свій вулик"}
                    titleImage={"/icons/Ylik.png"}
                    isPriority={false}
                />

                <FormCheckUsr
                    onSubmit={submitCheckUser}
                    onChange_1={(e) => setNickName(e.target.value)}
                    value_1={nickName}
                    onChange_2={(e) => setPass(e.target.value)}
                    value_2={pass}
                />


                <BrendLink
                    path={"/"}
                    linkText={"Повернутися"}
                />

        </section>
    )
}