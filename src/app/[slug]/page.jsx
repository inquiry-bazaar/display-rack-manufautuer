
import React from "react";
import { notFound } from "next/navigation";
import {
    getDataBySlug,
    getAllSlugs,
} from "@/utils/products";

import CategoryPage from "@/components/product/CategoryPage";
import ProductPage from "@/components/product/ProductPage";

// Generate all 110 pages at build time
export function generateStaticParams() {
    return getAllSlugs().map((slug) => ({
        slug,
    }));
}

export const dynamicParams = false;

// Dynamic SEO metadata
export async function generateMetadata({ params }) {
    const { slug } = await params;

    const result = getDataBySlug(slug);

    if (!result) {
        return {
            title: "Page Not Found",
        };
    }

    return {
        title: `${result.data.name} | Arya Insulation`,
        description: `Explore ${result.data.name} from Arya Insulation. Discover premium storage and display rack solutions for your business.`,
        openGraph: {
            title: result.data.name,
            images: [result.data.image],
        },
    };
}

export default async function DynamicPage({ params }) {
    const { slug } = await params;

    const result = getDataBySlug(slug);

    if (!result) {
        notFound();
    }

    if (result.type === "category") {
        return (
            <CategoryPage category={result.data} />
        );
    }

    return (
        <ProductPage
            product={result.data}
            category={result.category}
            relatedProducts={result.relatedProducts}
        />
    );
}
