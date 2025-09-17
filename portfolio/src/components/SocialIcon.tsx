import Link from "next/link";
import DiscordIcon from "./icons/discord";
import GithubIcon from "./icons/github";
import LinkedInIcon from "./icons/linkedIn";
import MailIcon from "./icons/mail";
import TelegramIcon from "./icons/telegram";
import XIcon from "./icons/x";

export default function SocialIcon({ name, link, style }: { name: string, link: string, style: string }) {
    const socialNetwork: Record<string, any> = {
        "github": <GithubIcon style={style} />,
        "x": <XIcon style={style} />,
        "telegram": <TelegramIcon style={style} />,
        "linkedIn": <LinkedInIcon style={style} />,
        "mail": <MailIcon style={style} />,
        "discord": <DiscordIcon style={style} />
    }
    return (
        <Link href={link} target="_blank" rel="noopener noreferrer">
            {socialNetwork[name]}
        </Link>
    );
}