import InstagramCard from "../components/InstagramCard";
import { instagramPosts } from "../data/instagram";

export default function InstagramSection() {
  return (
    <section className="bg-beige py-24 text-moss">
      <div className="container-site">
        <h2 className="text-center text-4xl font-semibold">
          Acompanhe no Instagram
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {instagramPosts.map((post) => (
            <InstagramCard
              key={post.id}
              image={post.image}
              link={post.link}
              alt={post.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
