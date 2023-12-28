import React from "react";
import "../app/listhoney.style.css"
import BrendLink from "./BrendLink";
import DeleteBtn from "./DeleteBtn";
import AnalyticPosts from "./AnalyticPosts";

const getPosts = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/getHoneyList", {
            cache: "no-store"
        });

        if (!res.ok)
            throw new Error("Failde in fetch data.");

        return res.json()

    } catch (error) {
        console.log(error);
    }
}

export default async function ListHoney({ userName, userId }) {

    const { posts } = await getPosts();
    const arrCorectPosts = [];
    posts.map((p) => p.user.userId == userId ? arrCorectPosts.push(p) : arrCorectPosts)
    const arrCorectPostsRverse = arrCorectPosts.reverse();

    return (
    <section className="ulConteiner">
        <ul className="ulFill">
            {arrCorectPostsRverse.map((p) => (
                <li className="liUnit" key={p._id}>
                    <p className="pInf">{p.mill} мл</p>
                    <p className="pInf">{p.grn} грн</p>
                    <p className="pInf">{p.createdAt}</p>
                    <div className="liBtns">
                        <BrendLink path={`/spaceUser/${userName}/${userId}/chngePost/${p._id}`} linkText={"Змінити"}/>
                        <DeleteBtn postId={p._id} textBtn={"Видалити"} />
                    </div>
                </li>
            ))}
        </ul>

        <AnalyticPosts dataPosts={arrCorectPostsRverse} />
    </section>
    )
}