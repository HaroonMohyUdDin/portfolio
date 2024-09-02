import React from 'react'
import Link from 'next/link';

import{FaGithub, FaLinkedinIn } from "react-icons/fa";

const socails =[
    {icon: <FaGithub />,path: ""},
    {icon: <FaLinkedinIn />,path: ""},

];
const Socail = ({containerStyles, iconStyles}) => {
    return (
    <div className={containerStyles}>
        {socails.map((item, index ) =>{
            return(
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            );
    })}
        </div>
        )

}

export default Socail;