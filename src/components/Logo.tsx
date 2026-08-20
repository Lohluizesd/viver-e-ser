import logo from "../assets/images/logo.svg";
import logoLight from "../assets/images/logo-light.svg";

type LogoProps = {
  className?: string;
  alt?: string;
  variant?: "default" | "light";
};

export default function Logo({
  className = "",
  variant = "default",
}: LogoProps) {
  const logoSrc = variant === "light" ? logoLight : logo;

  return <img src={logoSrc} alt="Logo Viver e Ser" className={className} />;
}
