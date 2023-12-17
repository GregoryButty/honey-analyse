import BrendLink from "../components/BrendLink"
import Title from "../components/Title"

export default function LogIn() {
    return (
        <section className="container">

            <div className="blur">

                <Title textTitle="Увійди в свій вулик" titleImage="/icons/Ylik.png"/>

                <BrendLink path="/" textLink="Повернутися"/>

            </div>

            <div className="block"/>

        </section>
    )
}