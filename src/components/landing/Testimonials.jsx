const reviews = [
  {
    name: "Ariella T.",
    role: "Interior stylist",
    avatar: "/images/testimonials/ariella.jpg",
    quote:
      "The product curation is outstanding. Every order feels intentional, and the quality has been consistently excellent.",
  },
  {
    name: "Marcus V.",
    role: "Frequent traveler",
    avatar: "/images/testimonials/marcus.jpg",
    quote:
      "Delivery is genuinely fast, and the travel collection has become my default for gifts and weekend packing.",
  },
  {
    name: "Lena R.",
    role: "Wellness coach",
    avatar: "/images/testimonials/lena.jpg",
    quote:
      "TropiCart nails the balance between clean design and practical products. The experience feels premium but relaxed.",
  },
];

export default function Testimonials() {
  return (
    <section className="px-4 py-14 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-7">
          <p className="text-sm font-semibold uppercase tracking-wide text-info">Testimonials</p>
          <h2 className="text-3xl font-semibold text-base-content sm:text-4xl">Loved by shoppers worldwide</h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {reviews.map((item) => (
            <article className="card border border-base-300 bg-base-100 shadow-sm" key={item.name}>
              <div className="card-body p-6">
                <div className="rating rating-sm">
                  <input type="radio" name={`rating-${item.name}`} className="mask mask-star-2 bg-warning" defaultChecked />
                  <input type="radio" name={`rating-${item.name}`} className="mask mask-star-2 bg-warning" defaultChecked />
                  <input type="radio" name={`rating-${item.name}`} className="mask mask-star-2 bg-warning" defaultChecked />
                  <input type="radio" name={`rating-${item.name}`} className="mask mask-star-2 bg-warning" defaultChecked />
                  <input type="radio" name={`rating-${item.name}`} className="mask mask-star-2 bg-warning" defaultChecked />
                </div>
                <p className="mt-3 text-base text-base-content/80">"{item.quote}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="avatar">
                    <div className="w-11 rounded-full ring-2 ring-primary/30 ring-offset-2 ring-offset-base-100">
                      <img src={item.avatar} alt={item.name} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base-content">{item.name}</h3>
                    <p className="text-sm text-base-content/60">{item.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}