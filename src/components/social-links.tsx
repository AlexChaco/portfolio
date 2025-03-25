import { Github, Instagram, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SocialLinks() {
  const socialLinks = [
    {
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      icon: <Twitter className="h-5 w-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: <Github className="h-5 w-5" />,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/yourusername",
      icon: <Instagram className="h-5 w-5" />,
    },
  ]

  return (
    <div className="flex flex-wrap gap-3">
      {socialLinks.map((link) => (
        <Button key={link.name} variant="outline" size="icon" asChild className="h-10 w-10 rounded-full">
          <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit my ${link.name} profile`}>
            {link.icon}
          </a>
        </Button>
      ))}
    </div>
  )
}

