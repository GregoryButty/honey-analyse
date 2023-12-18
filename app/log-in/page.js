import BrendLink from "../components/BrendLink"
import Title from "../components/Title"
import Form from "../components/Form"

export default function LogIn() {
    return (
        <section className="container">

            <div className="blur">

                <Title
                    titleText="Увійди в свій вулик"
                    titleImage="/icons/Ylik.png"
                    isPriority="false"
                />

                <Form
                    lableOne="Ведіть свій логін (нік)"
                    typeOne="text"
                    nameIdForOne="userName"
                    placHoldOne="Логін"

                    lableTwo="Ведіть свій пароль"
                    typeTwo="password"
                    placHoldTwo="Пароль"
                    nameIdForTwo="userPass"

                    btnSubmitValue="Увійти"
                />


                <BrendLink
                    path="/"
                    linkText="Повернутися"
                />

            </div>

            <div className="block"/>

        </section>
    )
}