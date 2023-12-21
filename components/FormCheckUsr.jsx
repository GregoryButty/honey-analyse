import React from "react";

export default function FormUserCheck({ onSubmit, onChange_1, onChange_2, value_1, value_2 }) {
    return (
        <form onSubmit={onSubmit}>
            {/* <label></label> */}
            <input
                onChange={onChange_1}
                value={value_1}
                type="text"
                placeholder="Логін"
            />
            <input
                onChange={onChange_2}
                value={value_2}
                type="password"
                placeholder="Пароль"
            />
            <button type="submit">Увійти до вулику</button>
        </form>
    )
}