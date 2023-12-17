import React from "react";
import Link from "next/link";

const BrendLink = ({path, textLink}) => {
    return (
        <Link className="brendLink" href={path}>{textLink}</Link>
    );
};

export default BrendLink;

