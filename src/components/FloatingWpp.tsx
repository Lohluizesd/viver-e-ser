import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWpp() {
  const phoneNumber = "5531992107100";
  const message = "Olá! Gostaria de saber mais sobre os serviços.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar pelo WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        flex h-14 w-14 items-center justify-center
        rounded-full bg-[#25D366] text-white
        shadow-lg
        transition duration-300
        hover:scale-110 hover:shadow-xl
        focus:outline-none focus:ring-4 focus:ring-[#25D366]/30
      "
    >
      <FaWhatsapp className="h-8 w-8" />
    </a>
  );
}
