import CardFooter from "../components/CardFooter";
import { footer } from "../data/footer";

export default function Footer() {
    return(
        <section id="contato" className="bg-moss py-24 text-beige">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Contato</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {footer.map((card) => (
                        <CardFooter
                            key={card.id}
                            image={card.image}
                            description={card.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}