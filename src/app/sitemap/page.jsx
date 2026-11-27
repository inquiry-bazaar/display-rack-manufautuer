import React from 'react'
import Sitemap from './Sitemap'

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export const metadata = {
    title: "Sitemap | Arya Insulation",
    description:
        "Browse all pages, product categories, rack solutions, and articles from Arya Insulation.",
    alternates: {
        canonical: "/sitemap",
    },
};

export default function page() {
    return (
        <Sitemap />
    )
}
