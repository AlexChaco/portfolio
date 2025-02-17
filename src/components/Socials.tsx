import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import {data} from "@/lib/data";

const social = [
  { icon: <FaGithub />, path: data.social.github },
  { icon: <FaLinkedinIn />, path: data.social.linkedin },
  { icon: <FaTwitter />, path: data.social.twitter },
];


interface SocialsProps {
  containerStyle: string;
  iconStyle: string;
}
const Socials = ({ containerStyle, iconStyle }: SocialsProps) => {
  return (
    <div className={containerStyle}>
      {social.map((social, index) => {
        return (
          <Link key={index} href={social.path} className={iconStyle}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
