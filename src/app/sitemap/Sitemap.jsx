import Link from "next/link";
import {
    ArrowUpRight,
    BookOpen,
    Building2,
    CheckCircle2,
    ChevronRight,
    CircleHelp,
    Factory,
    Home,
    Mail,
    Map,
    MessageSquareQuote,
    Package,
    Play,
    ShoppingBasket,
    Store,
    Workflow,
} from "lucide-react";

import { connectDB } from "@/libs/db";
import Blog from "@/models/Blog";
import categories from "@/utils/data";
import Image from "next/image";

const mainPages = [
    {
        title: "Home",
        description: "Discover Arya Insulation and our display rack solutions.",
        href: "/",
        icon: Home,
    },
    {
        title: "About Us",
        description: "Meet the team and learn about our company.",
        href: "/about-us",
        icon: Building2,
    },
    {
        title: "Our Products",
        description: "Browse our complete range of retail shelving.",
        href: "/our-products",
        icon: Package,
    },
    {
        title: "Our Articles",
        description: "Read news, ideas, and retail display advice.",
        href: "/our-articles",
        icon: BookOpen,
    },
    {
        title: "Contact Us",
        description: "Talk to our team about your project.",
        href: "/contact-us",
        icon: Mail,
    },
    {
        title: "Sitemap",
        description: "Explore every public page on our website.",
        href: "/sitemap",
        icon: Map,
    },
];

const homeSections = [
    { title: "About Arya", href: "/#about", icon: Building2 },
    { title: "Products", href: "/#products", icon: Package },
    { title: "Video Showcase", href: "/#youtube-shorts", icon: Play },
    { title: "Why Choose Us", href: "/#why-choose-us", icon: CheckCircle2 },
    { title: "How We Work", href: "/#how-we-work", icon: Workflow },
    { title: "Industries", href: "/#industries", icon: Factory },
    { title: "Testimonials", href: "/#testimonials", icon: MessageSquareQuote },
    { title: "FAQs", href: "/#faq", icon: CircleHelp },
    { title: "Projects", href: "/#projects", icon: Store },
];

const categoryIcons = [
    ShoppingBasket,
    Store,
    Building2,
    Package,
    ShoppingBasket,
    Store,
];

function LinkCard({ href, title, description, icon: Icon }) {
    return (
        <Link
            href={href}
            className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-[0_16px_40px_rgba(16,42,67,0.09)]"
        >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-white">
                <Icon size={20} strokeWidth={1.8} />
            </span>
            <span className="min-w-0 flex-1">
                <span className="flex items-center justify-between gap-2 font-heading text-base font-bold text-primary">
                    {title}
                    <ArrowUpRight
                        size={16}
                        className="shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-secondary"
                    />
                </span>
                {description && (
                    <span className="mt-1 block text-sm leading-6 text-muted">
                        {description}
                    </span>
                )}
            </span>
        </Link>
    );
}

export default async function Sitemap() {
    await connectDB();
    const articles = await Blog.find({ publishDate: { $lte: new Date() } })
        .select("title slug")
        .sort({ publishDate: -1, _id: -1 })
        .lean();

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
                        <span className="text-secondary">Sitemap</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="h-px w-9 bg-secondary" />
                        <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-white/95">
                            Find your way around
                        </span>
                        <span className="h-px w-9 bg-secondary" />
                    </div>

                    <h1 className="font-heading text-[clamp(3.2rem,4.5vw,5rem)] font-semibold leading-[1.05] tracking-[-0.055em] text-white">
                        Explore every corner of <br /><span className="text-secondary">Arya Insulation.</span>
                    </h1>

                    <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-white/85">
                        <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">
                            {mainPages.length} website pages
                        </span>
                        <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">
                            {categories.length} product categories
                        </span>
                        <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">
                            {articles.length} articles
                        </span>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 h-[5px] w-full bg-secondary" />
            </section>

            <div className="mx-auto max-w-7xl space-y-16 px-5 py-14 sm:px-8 sm:py-20">
                <section aria-labelledby="main-pages">
                    <div className="mb-7">
                        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                            Start here
                        </p>
                        <h2
                            id="main-pages"
                            className="font-heading text-2xl font-extrabold text-primary sm:text-3xl"
                        >
                            Main pages
                        </h2>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {mainPages.map((page) => (
                            <LinkCard key={page.href} {...page} />
                        ))}
                    </div>
                </section>

                {/* <section aria-labelledby="home-sections">
                    <div className="mb-7">
                        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                            On the homepage
                        </p>
                        <h2
                            id="home-sections"
                            className="font-heading text-2xl font-extrabold text-primary sm:text-3xl"
                        >
                            Explore by section
                        </h2>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {homeSections.map((section) => (
                            <LinkCard key={section.href} {...section} />
                        ))}
                    </div>
                </section> */}

                <section aria-labelledby="product-categories">
                    <div className="mb-7">
                        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                            Browse the catalog
                        </p>
                        <h2
                            id="product-categories"
                            className="font-heading text-2xl font-extrabold text-primary sm:text-3xl"
                        >
                            Product categories &amp; racks
                        </h2>
                    </div>
                    <div className="space-y-5">
                        {categories.map((category, index) => {
                            const CategoryIcon =
                                categoryIcons[index % categoryIcons.length];

                            return (
                                <div
                                    key={category.slug}
                                    className="rounded-3xl border border-border bg-white p-5 sm:p-7"
                                >
                                    <Link
                                        href={`/${category.slug}`}
                                        className="group mb-5 flex items-center gap-4"
                                    >
                                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white">
                                            <CategoryIcon size={22} />
                                        </span>
                                        <span className="min-w-0 flex-1">
                                            <span className="block font-heading text-lg font-extrabold text-primary transition-colors group-hover:text-secondary sm:text-xl">
                                                {category.name}
                                            </span>
                                            <span className="mt-1 block text-sm text-muted">
                                                {category.products?.length || 0}{" "}
                                                rack solutions
                                            </span>
                                        </span>
                                        <ArrowUpRight
                                            size={19}
                                            className="shrink-0 text-secondary"
                                        />
                                    </Link>

                                    <div className="grid gap-3 border-t border-border pt-5 sm:grid-cols-2 lg:grid-cols-3">
                                        {(category.products || []).map(
                                            (product) => (
                                                <Link
                                                    key={product.slug}
                                                    href={`/${product.slug}`}
                                                    className="group flex min-h-14 items-center gap-3 rounded-xl border border-border/80 bg-[#fafbfc] px-4 py-3 text-sm font-semibold leading-5 text-primary transition-all hover:border-secondary/40 hover:bg-secondary/5"
                                                >
                                                    <Package
                                                        size={17}
                                                        className="shrink-0 text-secondary"
                                                        strokeWidth={1.8}
                                                    />
                                                    <span className="flex-1">
                                                        {product.name}
                                                    </span>
                                                    <ArrowUpRight
                                                        size={14}
                                                        className="shrink-0 text-muted opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                                                    />
                                                </Link>
                                            )
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                <section aria-labelledby="articles">
                    <div className="mb-7">
                        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                            Insights &amp; updates
                        </p>
                        <h2
                            id="articles"
                            className="font-heading text-2xl font-extrabold text-primary sm:text-3xl"
                        >
                            Articles
                        </h2>
                    </div>
                    {articles.length > 0 ? (
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {articles.map((article) => (
                                <LinkCard
                                    key={article.slug}
                                    href={`/our-articles/${article.slug}`}
                                    title={article.title}
                                    icon={BookOpen}
                                />
                            ))}
                        </div>
                    ) : (
                        <p className="rounded-2xl border border-border bg-white p-6 text-sm text-muted">
                            No published articles yet. Visit{" "}
                            <Link
                                href="/our-articles"
                                className="font-semibold text-secondary hover:text-primary"
                            >
                                Our Articles
                            </Link>{" "}
                            to check back later.
                        </p>
                    )}
                </section>
            </div>
        </div>
    );
}
