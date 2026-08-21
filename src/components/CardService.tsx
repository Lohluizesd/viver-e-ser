type CardServiceProps = {
  image: string;
  title: string;
  description: string;
};

export default function CardService({
  image,
  title,
  description,
}: CardServiceProps) {
  return (
    <article className="flex h-full flex-col rounded-3xl bg-beige p-6 shadow-sm">
      <img
        src={image}
        alt={title}
        className="h-48 w-full rounded-2xl object-contain"
      />

      <h3 className="mt-6 text-2xl font-semibold text-chocolate">{title}</h3>

      <p className="mt-3 flex-1 text-base leading-7 text-chocolate/80">
        {description}
      </p>
    </article>
  );
}
