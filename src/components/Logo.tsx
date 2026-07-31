import logo from "../assets/images/logo.svg";

type LogoProps = {
  className?: string;
  alt?: string;
};

export default function Logo({
  className = "",
  alt = "Logo Viver e Ser",
}: LogoProps) {
  return <img src={logo} alt={alt} className={className} />;
}
