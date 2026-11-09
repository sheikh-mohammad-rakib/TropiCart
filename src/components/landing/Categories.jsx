const categories = [
  {
    title: "Home & Living",
    description: "Airy decor, textured linens, and natural accents.",
    image: "/images/categories/home-living.jpg",
  },
  {
    title: "Beauty & Wellness",
    description: "Daily rituals with gentle formulas and clean scents.",
    image: "/images/categories/beauty-wellness.jpg",
  },
  {
    title: "Fashion Essentials",
    description: "Effortless silhouettes for warm days and city nights.",
    image: "/images/categories/fashion-essentials.jpg",
  },
  {
    title: "Travel Picks",
    description: "Compact favorites designed for movement and ease.",
    image: "/images/categories/travel-picks.jpg",
  },
];

export default function Categories() {
  return (
    <section className="px-4 py-14 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Categories</p>
            <h2 className="text-3xl font-semibold text-base-content sm:text-4xl">Shop by vibe</h2>
          </div>
          <button className="btn btn-sm btn-ghost text-base-content/80">View all categories</button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((item) => (
            <article
              className="card overflow-hidden border border-base-300 bg-base-100 shadow-sm transition-transform duration-300 hover:-translate-y-1"
              key={item.title}
            >
              <figure className="h-36 overflow-hidden bg-base-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </figure>
              <div className="card-body p-5">
                <h3 className="card-title text-lg">{item.title}</h3>
                <p className="text-sm text-base-content/70">{item.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-xs btn-outline btn-primary">Explore</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}