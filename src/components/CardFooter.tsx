type CardFooterProps = {
  image: string;
  description: string;
  url: string;
};

export default function CardFooter({
  image,
  description,
  url,
}: CardFooterProps) {
  return (
    <a href={url} rel="noopener noreferrer" className="flex items-center gap-3">
      <img src={image} alt="" className="h-5 w-5 object-contain" />

      <span>{description}</span>
    </a>
  );
}
