import "./skill-bar.css";

type barProps = {
    barTitle: string;
    barPercent: number;
    barColor: string;
}

export function SkillBar({ barTitle, barPercent, barColor }: barProps) {
    return(
        <div>
            <div className="bar-title">
                <div >{barTitle}</div>
                <div >{barPercent}%</div>
            </div>
            <div className="bar-border" style={{border: `1px solid ${barColor}`}}>
                <div className="bar" style={{backgroundColor: `${barColor}`, width: `${barPercent}%`}}></div>
            </div>
        </div>
    )
}

type barsProps = {
    barsColor: string;
    barsTitles: string[];
    barsPercents: number[];
}

export function SkillBars({ barsColor, barsTitles, barsPercents }: barsProps) {
    return(
        <div className="skill-bars">
            <SkillBar barTitle={barsTitles[0]} barPercent={barsPercents[0]} barColor={barsColor}></SkillBar>
            <SkillBar barTitle={barsTitles[1]} barPercent={barsPercents[1]} barColor={barsColor}></SkillBar>
            <SkillBar barTitle={barsTitles[2]} barPercent={barsPercents[2]} barColor={barsColor}></SkillBar>
        </div>
    )
}