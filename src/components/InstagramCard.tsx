import Logo from "./Logo";

type InstagramCardProps = {
  image: string;
  link: string;
  alt: string;
};

export default function InstagramCard({
  image,
  link,
  alt,
}: InstagramCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-chocolate/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center gap-3 px-4 py-3">
        <Logo alt="Viver & Ser" className="h-9 w-9 object-contain" />

        <span className="text-base font-semibold text-chocolate">
          Viver & Ser
        </span>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Abrir publicação: ${alt}`}
        className="block overflow-hidden"
      >
        <img
          src={image}
          alt={alt}
          className="aspect-square w-full object-cover transition duration-500 hover:scale-105"
        />
      </a>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between px-4 py-4 text-base font-semibold text-terracotta transition hover:text-moss"
      >
        <span>Ver publicação</span>
        <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}
