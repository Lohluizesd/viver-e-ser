import logo from "../assets/images/logo.svg";

type LogoProps = {
  className?: string;
};

export default function Logo({ className = "" }: LogoProps) {
  return <img src={logo} alt="Logo Viver e Ser" className={className} />;
}
