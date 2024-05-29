import "./info-element.css";

type Props = {
    infoTitle: string;
    infoDesc: string;
}

function InfoElement({ infoTitle, infoDesc }: Props) {
    return(
        <div className="info-s-element">
            <div className="info-s-title">{infoTitle}</div>
            <div className="info-s-desc">{infoDesc}</div>
        </div>
    )
}

export function InfoElements() {
    return(
        <div className="info-s-elements">
            <InfoElement infoTitle="Nome:" infoDesc="Rafael Azevedo da Silva"></InfoElement>
            <InfoElement infoTitle="Idade:" infoDesc="21 anos"></InfoElement>
            <InfoElement infoTitle="Graduação:" infoDesc="Ciência da computação"></InfoElement>
            <InfoElement infoTitle="Univerdade:" infoDesc="UTFPR"></InfoElement>
            <InfoElement infoTitle="Posição:" infoDesc="Desenvolvedor Front-End"></InfoElement>
        </div>
    )
}