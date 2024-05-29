import { StaticImageData } from "next/image";
import "./navElement.css";
import defaultIcon from "@/imgs/rating.png";
import houseIcon from "@/imgs/house.png";
import userIcon from "@/imgs/user.png";
import projectsIcon from "@/imgs/projects.png";
import ratingIcon from "@/imgs/rating.png";
import contactIcon from "@/imgs/contact.png";
import skillsIcon from "@/imgs/skills.png"

type Props = {
    navImageUrl?: StaticImageData;
    navTitle: string;
    navRef: string;
}

function NavElement({navTitle, navImageUrl, navRef }: Props) {
    return (
        <a className="nav-element" href={navRef}>
            <img src={navImageUrl ? navImageUrl.src : defaultIcon.src} />
            <div className="nav-title">{navTitle}</div>
        </a>
    )
}

export function HeaderNav() {
    return (
        <>
            <NavElement navTitle="Início" navImageUrl={houseIcon} navRef="#start"></NavElement>
            <NavElement navTitle="Sobre mim" navImageUrl={userIcon} navRef="#about-me"></NavElement>
            <NavElement navTitle="Habilidades" navImageUrl={skillsIcon} navRef="#skills"></NavElement>
            <NavElement navTitle="Projetos" navImageUrl={projectsIcon} navRef="#projects"></NavElement>
            <NavElement navTitle="Avaliações" navImageUrl={ratingIcon} navRef="#ratings"></NavElement>
            <NavElement navTitle="Contato" navImageUrl={contactIcon} navRef="#contact"></NavElement>
        </>
    )
}