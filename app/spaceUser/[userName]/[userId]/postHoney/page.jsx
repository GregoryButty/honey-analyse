import Title from "@/components/Title";
import FormCreatePostHoney from "@/components/FormCreatePostHoney";
import Prevy from "@/components/Prevy";
import BrendLink from "@/components/BrendLink";

export default function SpaceUserPostHony({ params }) {
    const {userName, userId} = params;

    return (
        <section className="container">

                <Title
                    titleText={`Привіт ${userName}. Ти у ->`}
                    titleImage="/icons/boxYlik.png"
                    isPriority={false}/>

                <Prevy
                    prevyText={"На цій сторінці ти звітуешся."}
                />

                <BrendLink
                    path={`/spaceUser/${userName}/${userId}/listOfPosts`}
                    linkText={"Переглянути пости"}
                />

                <BrendLink
                    path={`/`}
                    linkText={"Вийти з акаунту"}
                />

                <FormCreatePostHoney
                    userName={userName}
                    userId={userId}
                />

        </section>
    )
}