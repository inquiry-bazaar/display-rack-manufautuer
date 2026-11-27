import React from 'react'
import Gallery from './Gallery'

export const metadata = {
    title: "Rack Gallery | Arya Insulation",
    description:
        "Browse Arya Insulation's gallery of retail display racks and storage solutions for stores across India.",
    alternates: {
        canonical: "/gallery",
    },
};

export default function page() {
    return (
        <Gallery />
    )
}
