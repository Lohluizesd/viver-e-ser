type CardFooterProps = {
  image: string;
  description: string;
};

export default function CardFooter({ image, description }: CardFooterProps) {
  return (
    <div className="flex items-center justify-center p-10">
      <img src={image} alt="Footer Image" className="h-7 w-7" />
      <p className="mt-4 text-lg text-var">{description}</p>
    </div>
  );
}
