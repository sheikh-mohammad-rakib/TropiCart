const products = [
  {
    name: "Coral Breeze Candle",
    category: "Home fragrance",
    price: "$28",
    rating: "4.8",
    badge: "Best Seller",
    image: "/images/products/coral-breeze-candle.jpg",
  },
  {
    name: "Shoreline Tote",
    category: "Accessories",
    price: "$44",
    rating: "4.7",
    badge: "New",
    image: "/images/products/shoreline-tote.jpg",
  },
  {
    name: "Palm Weave Throw",
    category: "Living room",
    price: "$62",
    rating: "4.9",
    badge: "Editor Pick",
    image: "/images/products/palm-weave-throw.jpg",
  },
  {
    name: "Sunset Hydration Kit",
    category: "Wellness",
    price: "$36",
    rating: "4.6",
    badge: "Top Rated",
    image: "/images/products/sunset-hydration-kit.jpg",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="px-4 py-14 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary">Featured products</p>
            <h2 className="text-3xl font-semibold text-base-content sm:text-4xl">Weekly picks from our team</h2>
          </div>
          <button className="btn btn-sm btn-secondary">Shop all products</button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((item) => (
            <article className="card overflow-hidden border border-base-300 bg-base-100 shadow-sm" key={item.name}>
              <figure className="h-44 overflow-hidden bg-base-200">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </figure>
              <div className="card-body p-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="badge badge-outline badge-sm">{item.badge}</span>
                  <span className="text-xs font-medium text-base-content/60">{item.rating} / 5</span>
                </div>
                <h3 className="card-title text-base">{item.name}</h3>
                <p className="text-sm text-base-content/70">{item.category}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-lg font-semibold text-primary">{item.price}</span>
                  <button className="btn btn-xs btn-primary">Add to cart</button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="alert mt-8 border border-accent/40 bg-accent/10 text-base-content">
          <span>Members get an extra 10% off tropical picks until midnight.</span>
          <button className="btn btn-xs btn-accent">Join membership</button>
        </div>
      </div>
    </section>
  );
}