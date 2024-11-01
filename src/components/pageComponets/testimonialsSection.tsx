import { Star } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">
          Our <span className="text-primary">customers love us</span>
        </h2>
        <p className="text-xl mb-12">Find out why.</p>

        <div className="grid md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="I applied with Lightstream for a boat loan from my phone and was approved and had the funds in my account the next day! The rate was great and the loan I am really enjoying. Thanks Lightstream!"
            author="Bay Area, CA"
          />
          <TestimonialCard
            quote="I have now used LightStream for the financing on two items. I can't believe how quick and easy the experience was. The rate was amazing and completion of all the documents easy."
            author="Novasota, TX"
          />
          <TestimonialCard
            quote="It's nice to have a loan company that will reward and trust you for having good credit. The loan process was very simple and straightforward. There are no prepayment penalties. Will keep them again on my next project!"
            author="Lee's Summit, MO"
          />
        </div>

        <div className="mt-8 flex justify-center items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-orange-400 text-orange-400"
              />
            ))}
          </div>
          <span className="font-bold">4.9</span>
          <span className="text-muted-foreground">(25,728)</span>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ quote, author }: { quote: string; author: string }) {
  return (
    <div className="text-left">
      <p className="mb-4">{quote}</p>
      <p className="font-semibold">— {author}</p>
    </div>
  );
}
