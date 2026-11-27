import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";

const categories = [
    { name: "Micro Appliance Racks", image: "/gallery/arya-display-rack-25.webp" },
]

export default function Gallery() {
    return (
        <div className="bg-[#f7f8fa]">
            <section className="contact-hero relative flex min-h-[390px] items-center justify-center overflow-hidden bg-primary sm:min-h-[460px]">
                <div className="contact-hero-image absolute inset-0">
                    <Image
                        src="/1.webp"
                        alt="Premium supermarket and retail display rack installation"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                    />
                </div>

                <div className="absolute inset-0 bg-[#06182B]/55" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#06182B]/40 via-transparent to-[#06182B]/40" />

                {/* Decorative lines */}
                <div className="pointer-events-none absolute inset-0 opacity-15">
                    <div className="absolute left-[15%] top-0 h-full w-px bg-white/30" />
                    <div className="absolute right-[15%] top-0 h-full w-px bg-white/30" />
                </div>

                <div className="contact-hero-content relative z-10 mx-auto flex max-w-5xl flex-col items-center px-5 text-center">
                    <div className="mb-7 flex items-center gap-2 text-[12px] font-medium tracking-[0.08em] text-white/95">
                        <Link href="/" className="transition hover:text-secondary">
                            Home
                        </Link>
                        <ChevronRight size={14} />
                        <span className="text-secondary">Gallery</span>
                    </div>

                    <div className="mb-6 flex items-center gap-3">
                        <span className="h-px w-9 bg-secondary" />
                        <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-white/95">
                            Arya Insulation
                        </span>
                        <span className="h-px w-9 bg-secondary" />
                    </div>

                    <h1 className="font-heading text-[clamp(3.2rem,7vw,7rem)] font-semibold leading-[1.05] tracking-[-0.055em] text-white">
                        Rack  <span className="text-secondary">Gallery.</span>
                    </h1>

                    <p className="mt-6 max-w-3xl text-sm leading-7 text-white/95 sm:text-base sm:leading-8">
                        Explore our range of retail display and storage
                        solutions, designed for stores across India.
                    </p>
                </div>

                <div className="absolute bottom-0 left-0 h-[5px] w-full bg-secondary" />
            </section>

            <main className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
                <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                    <div>
                        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                            Browse the collection
                        </p>
                        <h2 className="font-heading text-2xl font-extrabold text-primary sm:text-3xl">
                            Made for every kind of store
                        </h2>
                    </div>
                    <Link
                        href="/our-products"
                        className="group inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-secondary"
                    >
                        View all products
                        <ArrowUpRight
                            size={17}
                            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                    </Link>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {categories.map((category, index) => (
                        <div key={index}
                            className="group relative isolate overflow-hidden rounded-3xl bg-primary shadow-[0_16px_40px_rgba(16,42,67,0.10)]"
                        >
                            <div className="relative aspect-[4/4] overflow-hidden">
                                <Image
                                    src={category.image}
                                    alt={category.name}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                                <span className="absolute left-2 top-2 rounded-full border border-white/25 bg-primary/35 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                                    Collection {String(index + 1).padStart(2, "0")}
                                </span>
                                <span className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                                    <span className="font-heading text-xl font-extrabold leading-snug text-white sm:text-2xl">
                                        {category.name}
                                    </span>
                                    <span className="mb-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-primary transition-all duration-300 group-hover:rotate-45 group-hover:bg-secondary group-hover:text-white">
                                        <ArrowUpRight size={19} />
                                    </span>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}