import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className="
        fixed bottom-24 right-6 z-50
        flex h-11 w-11 items-center justify-center
        rounded-full
        bg-terracotta text-beige
        shadow-lg
        cursor-pointer
        transition
        hover:-translate-y-1
        hover:opacity-90
      "
    >
      <FaArrowUp className="text-lg" />
    </button>
  );
}
