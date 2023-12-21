import Title from "@/components/Title";

export default async function SpaceUser({ params }) {

    return (
        <section className="container">

            <div className="blur">
                <Title titleText={`Привіт ${params.userName}. Ти у ->`} titleImage="/icons/boxYlik.png" isPriority="false"/>
            </div>

            <div className="block" />

        </section>
    )
}