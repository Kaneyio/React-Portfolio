import { StaticImageData } from "next/image";
import "./avatar.css";
import defaultAvatar from "@/imgs/avatar.png";

type Props = {
	avatarUrl?: StaticImageData;
}

export default function Avatar({avatarUrl}: Props) {
	return (
		<>
			<img className="avatar" src={avatarUrl ? avatarUrl.src : defaultAvatar.src} alt="Avatar" />
		</>
	)
}