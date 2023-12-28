import BrendLink from "@/components/BrendLink";
import Title from "@/components/Title";
import ListHoney from "@/components/ListHoney";

export default function ListOfPosts({ params }) {
    const {userName, userId} = params;

    return (
        <>
            <Title
                titleText={"Всі твої групки меду."}
                titleImage={"/icons/honey.png"} isPriority={false}
            />

            <BrendLink
                path={`/spaceUser/${userName}/${userId}/postHoney`}
                linkText="Вернутися до форми"
            />

            <ListHoney
                userName={userName}
                userId={userId}
            />
        </>
    )
}