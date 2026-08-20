type FooterLinksProps = {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
};

export default function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <div>
      <h3 className="mb-5 text-xl font-semibold">{title}</h3>

      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="transition hover:text-beige">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
