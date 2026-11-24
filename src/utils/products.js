
import categories from "./data";

export function getAllCategories() {
    return categories;
}

export function getAllProducts() {
    return categories.flatMap((category) =>
        category.products.map((product) => ({
            ...product,
            categoryName: category.name,
            categorySlug: category.slug,
        }))
    );
}

export function getDataBySlug(slug) {
    // Check category
    const category = categories.find(
        (item) => item.slug === slug
    );

    if (category) {
        return {
            type: "category",
            data: category,
        };
    }

    // Check product
    for (const category of categories) {
        const product = category.products.find(
            (item) => item.slug === slug
        );

        if (product) {
            return {
                type: "product",
                data: product,
                category: category,
                relatedProducts: category.products.filter(
                    (item) => item.slug !== slug
                ),
            };
        }
    }

    return null;
}

export function getAllSlugs() {
    return categories.flatMap((category) => [
        category.slug,
        ...category.products.map((product) => product.slug),
    ]);
}
