import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const social = [
  { icon: <FaGithub />, path: "https://github.com/AxDev-Code" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/ax-dev-code/" },
  { icon: <FaTwitter />, path: "https://twitter.com/AxDevCode" },
];
const Socials = ({ containerStyle, iconStyle }: any) => {
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
