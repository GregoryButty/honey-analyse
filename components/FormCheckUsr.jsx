import React from "react";
import "../app/forms.style.css";

export default function FormUserCheck({ onSubmit, onChange_1, onChange_2, value_1, value_2 }) {
    return (
        <section className="formConteiner">

            <form className="form" onSubmit={onSubmit}>
                <label className="lableText">Логін користувача</label>
                <input className="inputFill"
                    onChange={onChange_1}
                    value={value_1}
                    type="text"
                    placeholder="Логін"
                />

                <label className="lableText">Пароль користувача</label>
                <input className="inputFill"
                    onChange={onChange_2}
                    value={value_2}
                    type="password"
                    placeholder="Пароль"
                />

                <button className="btnFormSubmit" type="submit">Увійти до вулику</button>
            </form>

        </section>

    )
}