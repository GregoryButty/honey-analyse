import React from "react";
import Image from "next/image"

export default function Title ({titleText, titleImage, isPriority}) {
    return (
        <h1 className="textTitle">{titleText}
            <Image
                className="titleImage"
                src={titleImage}
                width={60}
                height={60}
                alt="bee"
                priority={isPriority}
            />
        </h1>
    )
}