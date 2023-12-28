import BrendLink from "@/components/BrendLink";
import FormChengePost from "@/components/FormChengePost";
import Prevy from "@/components/Prevy";
import Title from "@/components/Title";

const getChangePost = async (postId) => {
    try {
        const res = await fetch(`http://localhost:3000/api/chengeHoneyPost/${postId}`, {
            cache: "no-store"
        })

        if (!res.ok){
            throw new Error("Fetch data failed");
        }


        return res.json();
    } catch (error) {
        console.log(error);
    }
};


export default async function ChangePost({ params }) {
    const {userName, userId, postId} = params;

    const { post } = await getChangePost(postId);
    const {mill, grn} = post;

    return(
        <>
            <Title
                titleText={"Ти знаходишся на сторінці для зміни поста."}
                titleImage={"/icons/Ylik.png"}
                isPriority={false}
            />

            <Prevy
                prevyText={"Тут ти можеш змінити параметри поста."}
            />

            <BrendLink
                path={`/spaceUser/${userName}/${userId}/listOfPosts`}
                linkText={"Повернутися до списку"}
            />

            <FormChengePost
                postId={postId}
                mill={mill}
                grn={grn}
                userName={userName}
                userId={userId}
            />
        </>
    )
}