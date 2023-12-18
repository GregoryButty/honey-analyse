import React from "react";
import Link from "next/link";

export default function BrendLink({path, linkText}) {
    return (
        <Link className="brendLink" href={path}>{linkText}</Link>
    );
};