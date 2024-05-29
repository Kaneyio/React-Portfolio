import "./project.css";
import gearIcon from "@/imgs/gear.png";

type Props = {
    projectTitle: string;
    projectPosition: string;
    projectDesc: string;
}

function Project({ projectTitle, projectPosition, projectDesc }: Props) {
    return(
        <div className="project">
            <div className="gear">
                <img src={gearIcon.src} alt="Gear icon" />
                <div></div>
            </div>
            <div className="project-info">
                <div className="project-title">{projectTitle}</div>
                <div className="project-position">{projectPosition}</div>
                <div className="project-desc">{projectDesc}</div>
            </div>
        </div>
    )
}

type projectsProps = {
    projectsTitles: string[];
    projectsPositions: string[];
    projectsDescs: string[];
}

export function Projects({ projectsTitles, projectsPositions, projectsDescs}: projectsProps) {
    return(
        <div className="projects">
            {projectsTitles.map((title, index) => (
                <Project
                    key={index}
                    projectTitle={title}
                    projectPosition={projectsPositions[index]}
                    projectDesc={projectsDescs[index]}
                />
            ))}
        </div>
    )
}