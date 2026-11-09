const heroStats = [
  { label: "Happy shoppers", value: "42k+" },
  { label: "Island-inspired products", value: "1,200+" },
  { label: "Avg. delivery", value: "2.1 days" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-10 sm:px-8 sm:pb-24">
      <div className="landing-glow landing-glow-primary" />
      <div className="landing-glow landing-glow-secondary" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div className="space-y-6 reveal-up">
          <span className="badge badge-secondary badge-lg">Fresh arrivals this week</span>

          <h1 className="text-4xl font-semibold leading-tight text-base-content sm:text-5xl lg:text-6xl">
            TropiCart brings coastal calm to everyday shopping.
          </h1>

          <p className="max-w-xl text-lg text-neutral/80">
            Discover curated essentials, modern home goods, and lifestyle picks inspired by
            tropical mornings and sun-washed weekends.
          </p>

          <div className="flex flex-wrap gap-3">
            <button className="btn btn-primary btn-wide">Shop New Collection</button>
            <button className="btn btn-outline btn-secondary btn-wide">Explore Best Sellers</button>
          </div>

          <div className="stats stats-vertical w-full bg-base-200/80 shadow-sm sm:stats-horizontal">
            {heroStats.map((item) => (
              <div className="stat" key={item.label}>
                <div className="stat-value text-primary text-2xl">{item.value}</div>
                <div className="stat-title text-base-content/70">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-up">
          <div className="landing-product-showcase rounded-box border border-base-300 bg-base-100 p-5 shadow-xl sm:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <article className="card overflow-hidden bg-base-200 shadow-sm">
                <figure className="h-40 overflow-hidden">
                  <img
                    src="/images/hero/summer-linen-set.jpg"
                    alt="Summer Linen Set"
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </figure>
                <div className="card-body p-4">
                  <h3 className="card-title text-base">Summer Linen Set</h3>
                  <p className="text-sm text-base-content/70">Breezy texture for warm evenings.</p>
                  <div className="badge badge-accent">Limited stock</div>
                </div>
              </article>

              <article className="card overflow-hidden bg-base-200 shadow-sm">
                <figure className="h-40 overflow-hidden">
                  <img
                    src="/images/hero/lagoon-glassware.jpg"
                    alt="Lagoon Glassware"
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </figure>
                <div className="card-body p-4">
                  <h3 className="card-title text-base">Lagoon Glassware</h3>
                  <p className="text-sm text-base-content/70">Hand-finished pieces for your table.</p>
                  <div className="badge badge-secondary">Trending</div>
                </div>
              </article>
            </div>

            <div className="mt-4 rounded-box border border-base-300 bg-base-200 p-4">
              <p className="text-sm font-medium text-base-content/80">Today only</p>
              <p className="mt-2 text-2xl font-semibold text-primary">Free shipping over $75</p>
              <progress className="progress progress-primary mt-3 w-full" value="73" max="100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}