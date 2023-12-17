import React from "react";
import Image from "next/image"
import "../component.style.css"

const Title = ({textTitle, titleImage}) => {
    return (
        <h1 className="textTitle">{textTitle}
            <Image
                className="titleImage"
                src={titleImage}
                width={60}
                height={60}
                alt="bee"
                priority={false}
            />
        </h1>
    )
}

export default Title;