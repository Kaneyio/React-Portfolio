import { StaticImageData } from "next/image";
import "./rating.css";
import defaultAvatar from "@/imgs/avatar.png";

type Props = {
    ratingAvatar?: StaticImageData;
    ratingDesc: string;
    ratingName: string; 
}

function Rating({ ratingAvatar, ratingDesc, ratingName }: Props) {
    return(
        <div className="rating">
            <img className="rating-avatar" src={ratingAvatar ? ratingAvatar.src : defaultAvatar.src} alt="User Avatar" />
            <div className="rating-desc">{ratingDesc}</div>
            <div className="rating-name">{ratingName}</div>
        </div>
    )
}

type ratingsProps = {
    ratingsAvatars?: StaticImageData[];
    ratingsDescs: string[];
    ratingsNames: string[];
}

export function Ratings({ ratingsAvatars, ratingsDescs, ratingsNames }: ratingsProps) {
    return(
        <div className="ratings">
            {ratingsDescs.map((desc, index) => (
                <Rating
                    key={index}
                    ratingAvatar={ratingsAvatars ? ratingsAvatars[index] : defaultAvatar}
                    ratingDesc={desc}
                    ratingName={ratingsNames[index]}
                />
            ))}
        </div>
    )
}