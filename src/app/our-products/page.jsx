import React from "react";
import AllProducts from "@/components/product/AllProducts";

export const metadata = {
    title: {
        absolute:
            "Supermarket Display Racks & Retail Shelving | Arya Insulation",
    },

    description:
        "Explore Arya Insulation's complete range of supermarket display racks, grocery store racks, retail shelving, pharmacy racks and customized storage solutions.",

    alternates: {
        canonical: "/our-products",
    },

    openGraph: {
        title:
            "Supermarket Display Racks & Retail Shelving | Arya Insulation",

        description:
            "Discover premium supermarket display racks and customized retail shelving solutions.",

        images: ["/4.webp"],
    },
};

export default function Page() {
    return <AllProducts />;
}