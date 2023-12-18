import BrendLink from "../../components/BrendLink"
import Title from "../../components/Title"
import Form from "../../components/Form"

export default function UserSpace({params}) {
    return (
        <section className="container">

        <div className="blur">

            <Title
                titleText={`Привіт ${params.user}. Ти в ->`}
                titleImage="/icons/boxYlik.png"
                isPriority="false"
            />

            {/* <Form
                lableOne="Кількість мл"
                typeOne="text"
                nameIdForOne="mill"
                placHoldOne="В мілілітрах"

                lableTwo="Ціна"
                typeTwo="text"
                nameIdForTwo="many"
                placHoldTwo="В гривнях"

                btnSubmitValue="Записати"
                isCross="false"
            /> */}

            <BrendLink
                path="/log-in"
                linkText="Повернутися"
            />

        </div>

        <div className="block"/>

    </section>
    )
}