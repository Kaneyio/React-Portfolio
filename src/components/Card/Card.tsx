import "./card.css";

type Props = {
    cardTitle: string;
    cardSubTitle: string;
}

function Card({ cardTitle, cardSubTitle }: Props) {
    return (
        <div className="card">
            <div className="title">{cardTitle}</div>
            {cardSubTitle}
        </div>
    )
}

export function Cards() {
    return(
        <div className="cards">
            <Card cardTitle="1" cardSubTitle="Projeto"></Card>
            <Card cardTitle="2" cardSubTitle="Certificações"></Card>
            <Card cardTitle="4" cardSubTitle="Cursos"></Card>
        </div>
    )
}