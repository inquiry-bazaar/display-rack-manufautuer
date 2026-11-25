import { cache } from "react";
import { notFound } from "next/navigation";

import { connectDB } from "@/libs/db";
import Blog from "@/models/Blog";
import sanitizeHtml from "sanitize-html";

import SingleBlog from "./SingleBlog";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// ================= GET BLOG =================

const getBlog = cache(async (slug) => {
    await connectDB();

    return Blog.findOne({
        slug,
        publishDate: { $lte: new Date() },
    })
        .select("-imageFileId -__v")
        .lean();
});

// ================= GET RELATED BLOGS =================

async function getRelatedBlogs(blogId) {
    await connectDB();

    return Blog.find({
        _id: { $ne: blogId },
        publishDate: { $lte: new Date() },
    })
        .select(
            "title slug image metaDescription publishDate createdAt"
        )
        .sort({
            publishDate: -1,
            _id: -1,
        })
        .limit(3)
        .lean();
}

// ================= DYNAMIC SEO =================

export async function generateMetadata({ params }) {
    const { slug } = await params;

    const blog = await getBlog(slug);

    if (!blog) {
        return {
            title: "Article Not Found",
            robots: {
                index: false,
                follow: false,
            },
        };
    }

    const title =
        blog.metaTitle ||
        `${blog.title} | Arya Insulation`;

    const description =
        blog.metaDescription ||
        sanitizeHtml(blog.content, {
            allowedTags: [],
            allowedAttributes: {},
        })
            .replace(/\s+/g, " ")
            .trim()
            .slice(0, 160);

    return {
        title,
        description,

        alternates: {
            canonical: `/our-articles/${blog.slug}`,
        },

        openGraph: {
            title,
            description,
            type: "article",
            publishedTime: new Date(
                blog.publishDate
            ).toISOString(),

            images: blog.image
                ? [
                    {
                        url: blog.image,
                        alt: blog.title,
                    },
                ]
                : [],
        },

        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: blog.image ? [blog.image] : [],
        },
    };
}

// ================= SINGLE BLOG PAGE =================

export default async function BlogDetailsPage({ params }) {
    const { slug } = await params;

    const blog = await getBlog(slug);

    if (!blog) {
        notFound();
    }

    const relatedBlogs = await getRelatedBlogs(blog._id);

    const safeContent = sanitizeHtml(blog.content, {
        allowedTags: [
            ...sanitizeHtml.defaults.allowedTags,
            "img",
            "h1",
            "h2",
            "h3",
            "h4",
            "figure",
            "figcaption",
        ],

        allowedAttributes: {
            a: ["href", "target", "rel", "title"],
            img: [
                "src",
                "alt",
                "width",
                "height",
                "loading",
            ],
            td: ["colspan", "rowspan"],
            th: ["colspan", "rowspan"],
        },

        allowedSchemes: [
            "http",
            "https",
            "mailto",
            "tel",
        ],

        allowProtocolRelative: false,

        transformTags: {
            a: sanitizeHtml.simpleTransform("a", {
                rel: "noopener noreferrer",
            }),
        },
    });

    const plainText = sanitizeHtml(safeContent, {
        allowedTags: [],
        allowedAttributes: {},
    });

    const wordCount = plainText
        .trim()
        .split(/\s+/)
        .filter(Boolean).length;

    const readingTime = Math.max(
        1,
        Math.ceil(wordCount / 200)
    );

    const serializedBlog = JSON.parse(
        JSON.stringify({
            ...blog,
            content: safeContent,
            readingTime,
        })
    );

    const serializedRelatedBlogs = JSON.parse(
        JSON.stringify(relatedBlogs)
    );

    return (
        <SingleBlog
            blog={serializedBlog}
            relatedBlogs={serializedRelatedBlogs}
        />
    );
}