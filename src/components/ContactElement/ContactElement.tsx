import defaultIcon from "@/imgs/rating.png";
import "./contact-element.css";
import { StaticImageData } from "next/image";

type Props = {
    contactIcon: StaticImageData;
    contactTitle: string;
    contactDesc: string;
}

function ContactElement({ contactIcon, contactTitle, contactDesc}: Props) {
    return(
        <div className="contact">
            <img src={contactIcon.src} alt="Contact icon" />
            <div className="contact-info">
                <div>{contactTitle}</div>
                <div>{contactDesc}</div>
            </div>
        </div>
    )
}

export function ContactElements() {
    return(
        <div className="contacts">
            <div className="infos">Informações:</div>
            <ContactElement contactIcon={defaultIcon} contactTitle="E-mail" contactDesc="glowhithy@outlook.com"></ContactElement>
            <ContactElement contactIcon={defaultIcon} contactTitle="Telefone" contactDesc="(18) 98197-0365"></ContactElement>
            <ContactElement contactIcon={defaultIcon} contactTitle="Discord" contactDesc="rafa01786"></ContactElement>
        </div>
    )
}