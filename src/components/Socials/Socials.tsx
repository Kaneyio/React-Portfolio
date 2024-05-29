"use client";

import { StaticImageData } from "next/image"
import "./socials.css";
import githubIcon from "@/imgs/github.png";
import instagramIcon from "@/imgs/instagram.png";
import linkedinIcon from "@/imgs/linkedin.png";


export function SocialContacts() {
    return (
        <div className="social-container">
            <SocialMedia socialLogo={githubIcon} socialTitle="GitHub" socialLink="https://github.com/Kaneyio"></SocialMedia>
            <SocialMedia socialLogo={instagramIcon} socialTitle="Instagram" socialLink="https://www.instagram.com/rafael_az3vedo"></SocialMedia>
            <SocialMedia socialLogo={linkedinIcon} socialTitle="Linkedin" socialLink="https://www.linkedin.com/in/rafael-azevedo-8666a923a"></SocialMedia>
        </div>
    )
}

type Props = {
    socialLogo: StaticImageData;
    socialTitle: string;
    socialLink: string;
}

export function SocialMedia({ socialLogo, socialTitle, socialLink }: Props) {
    function openLink() {
        window.open(socialLink, '_blank');
    }

    return(
        <div className="social-icon" onClick={openLink}>
            <img src={socialLogo.src} alt={socialTitle} />
        </div>
    )
}