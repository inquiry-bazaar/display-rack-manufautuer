"use client";
import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import axios from "axios";
import {
    X,
    UserRound,
    Phone,
    Mail,
    MapPin,
    Layers3,
    MessageSquare,
    ArrowUpRight,
    ShieldCheck,
    LoaderCircle,
    CheckCircle2,
    ChevronDown,
    AlertCircle,
} from "lucide-react";
import categories from "@/utils/data";
gsap.registerPlugin(useGSAP);
export default function InquiryPopup({
    options,
    onClose,
}) {
    const dialogRef = useRef(null);
    const popupRef = useRef(null);
    const closingRef = useRef(false);
    const [mounted, setMounted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        city: "",
        product: options?.product || "",
        message: "",
    });
    const productExists = categories.some(
        (category) =>
            category.name === form.product ||
            category.products?.some(
                (product) => product.name === form.product
            )
    );
    // ================= CLIENT MOUNT =================
    useEffect(() => {
        setMounted(true);
    }, []);
    // ================= OPEN DIALOG =================
    useEffect(() => {
        if (!mounted) return;
        const dialog = dialogRef.current;
        if (!dialog) return;
        const previousOverflow =
            document.body.style.overflow;
        if (!dialog.open) {
            dialog.showModal();
        }
        document.body.style.overflow = "hidden";
        return () => {
            if (dialog.open) {
                dialog.close();
            }
            document.body.style.overflow =
                previousOverflow;
        };
    }, [mounted]);
    // ================= OPEN ANIMATION =================
    const { contextSafe } = useGSAP(
        () => {
            if (!mounted || !popupRef.current) return;
            const reducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;
            if (reducedMotion) return;
            const tl = gsap.timeline();
            tl.fromTo(
                popupRef.current,
                {
                    opacity: 0,
                    y: 45,
                    scale: 0.95,
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.45,
                    ease: "power3.out",
                }
            ).from(
                ".inquiry-reveal",
                {
                    y: 15,
                    opacity: 0,
                    duration: 0.35,
                    stagger: 0.045,
                    ease: "power2.out",
                },
                "-=0.2"
            );
        },
        {
            scope: popupRef,
            dependencies: [mounted],
            revertOnUpdate: true,
        }
    );
    // ================= CLOSE ANIMATION =================
    const handleClose = contextSafe(() => {
        if (closingRef.current || loading) return;
        closingRef.current = true;
        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        if (reducedMotion || !popupRef.current) {
            onClose();
            return;
        }
        gsap.to(popupRef.current, {
            opacity: 0,
            y: 25,
            scale: 0.96,
            duration: 0.25,
            ease: "power2.in",
            overwrite: true,
            onComplete: onClose,
        });
    });
    // ================= HANDLE INPUT =================
    const handleChange = (e) => {
        const { name, value } = e.target;
        setError("");
        setForm((prev) => ({
            ...prev,
            [name]:
                name === "phone"
                    ? value.replace(/\D/g, "").slice(0, 10)
                    : value,
        }));
    };
    // ================= FORM SUBMISSION =================
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) return;
        setError("");
        if (
            !form.name.trim() ||
            !form.phone.trim() ||
            !form.city.trim() ||
            !form.product.trim()
        ) {
            setError("Please fill in all required fields.");
            return;
        }
        if (!/^[6-9]\d{9}$/.test(form.phone)) {
            setError(
                "Please enter a valid 10-digit Indian mobile number."
            );
            return;
        }
        if (
            form.email &&
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
        ) {
            setError("Please enter a valid email address.");
            return;
        }
        setLoading(true);
        try {
            const payload = {
                name: form.name.trim(),
                phone: form.phone,
                email: form.email.trim(),
                city: form.city.trim(),
                product: form.product,
                message: form.message.trim(),
                source:
                    options?.source ||
                    window.location.pathname,
                pageUrl: window.location.href,
            };
            const { data } = await axios.post("/api/inquiry", payload, { timeout: 15000 });
            if (!data?.success) throw new Error(data?.message || "Unable to submit inquiry.");
            setSuccess(true);
        } catch (err) {
            setError(
                err.response?.data?.message ||
                err.message ||
                "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };
    if (!mounted) return null;
    return createPortal(
        <dialog
            ref={dialogRef}
            aria-labelledby="inquiry-popup-title"
            aria-describedby="inquiry-popup-description"
            onCancel={(e) => {
                e.preventDefault();
                handleClose();
            }}
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    handleClose();
                }
            }}
            className="fixed inset-0 m-auto w-[calc(100%_-_24px)] max-w-[980px] max-h-[94dvh] overflow-visible bg-transparent p-0 backdrop:bg-[#06182B]/75 backdrop:backdrop-blur-sm"
        >
            <div
                ref={popupRef}
                data-lenis-prevent
                className="relative grid max-h-[90dvh] overflow-y-auto overscroll-contain rounded-[22px] bg-white md:grid-cols-[0.85fr_1.15fr] shadow-[0_30px_100px_rgba(0,0,0,0.3)] [scrollbar-width:thin]"
            >
                {/* Left brand panel */}
                <aside className="relative isolate hidden overflow-hidden bg-primary p-8 text-white md:flex md:flex-col md:justify-between lg:p-10">
                    <div className="absolute inset-0 -z-20 bg-cover bg-center" style={{ backgroundImage: `url('${options?.image || "/about/who-we-are.webp"}')` }} />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#102A43]/95 via-[#102A43]/80 to-[#102A43]/95" />
                    <div>
                        <div className="inquiry-reveal mb-2 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                            <span className="h-0.5 w-8 bg-secondary" /> Arya Insulation
                        </div>
                        <h2 className="inquiry-reveal text-nowrap font-heading text-4xl font-extrabold leading-tight lg:text-5xl">
                            Smarter racks.<br />Better <span className="text-secondary">spaces.</span>
                        </h2>
                        <div className="mt-8 space-y-4">
                            {["Customized rack solutions", "Space-efficient layout planning", "Durable steel construction", "Professional installation"].map((item) => (
                                <div key={item} className="inquiry-reveal flex items-center gap-3 text-sm font-medium">
                                    <CheckCircle2 size={19} className="shrink-0 text-secondary" /> {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="inquiry-reveal mt-10 border-t border-white/20 pt-6">
                        <p className="mb-3 text-xs uppercase tracking-widest text-white/60">Talk to our team</p>
                        <a href="tel:+918587901795" className="flex items-center gap-3 text-lg font-bold hover:text-secondary"><Phone size={19} className="text-secondary" /> +91 85879 01795</a>
                        <a href="mailto:aryaindustry36@gmail.com" className="mt-3 flex items-center gap-3 break-all text-sm text-white/80 hover:text-secondary"><Mail size={17} className="shrink-0 text-secondary" /> aryaindustry36@gmail.com</a>
                    </div>
                </aside>

                {/* Right form panel */}
                <div className="relative min-w-0 bg-white">
                    <button type="button" autoFocus onClick={handleClose} disabled={loading} aria-label="Close inquiry form" className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-surface text-primary transition-colors hover:bg-secondary hover:text-white disabled:opacity-50"><X size={20} /></button>
                    <header className="px-5 pt-7 sm:px-8 sm:pt-5">
                        <p className="inquiry-reveal mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">Let's discuss your project</p>
                        <h2 id="inquiry-popup-title" className="inquiry-reveal pr-8 font-heading text-2xl font-extrabold leading-tight text-primary sm:text-3xl">{options?.title || "Request a Free Quote"}<span className="text-secondary">.</span></h2>
                        {/* <p id="inquiry-popup-description" className="inquiry-reveal mt-2 text-sm leading-relaxed text-muted">{options?.description || "Share your requirements and our team will help you find the right rack solution."}</p> */}
                    </header>
                    {/* ================= SUCCESS MESSAGE ================= */}
                    {success ? (
                        <div
                            role="status"
                            className="flex flex-col items-center px-6 py-14 text-center sm:px-10"
                        >
                            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-green-600">
                                <CheckCircle2
                                    size={44}
                                    strokeWidth={1.5}
                                />
                            </div>
                            <h3 className="font-heading text-2xl font-extrabold text-primary">
                                Thank You!
                            </h3>
                            <p className="mt-3 max-w-[380px] text-sm leading-relaxed text-muted">
                                Your inquiry has been submitted
                                successfully. Our team will get in
                                touch with you shortly.
                            </p>
                            <button
                                type="button"
                                onClick={handleClose}
                                className="mt-7 rounded-lg bg-secondary px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary"
                            >
                                Continue Exploring
                            </button>
                        </div>
                    ) : (
                        /* ================= FORM ================= */
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4 px-5 py-3 sm:px-8 sm:py-5"
                        >
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <FormInput
                                    label="Full Name"
                                    name="name"
                                    placeholder="Enter your name"
                                    icon={UserRound}
                                    value={form.name}
                                    onChange={handleChange}
                                    autoComplete="name"
                                    required
                                />
                                <FormInput
                                    label="Phone Number"
                                    name="phone"
                                    type="tel"
                                    placeholder="Enter mobile number"
                                    icon={Phone}
                                    value={form.phone}
                                    onChange={handleChange}
                                    autoComplete="tel-national"
                                    required
                                />
                                <FormInput
                                    label="Email Address"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    icon={Mail}
                                    value={form.email}
                                    onChange={handleChange}
                                    autoComplete="email"
                                />
                                <FormInput
                                    label="City"
                                    name="city"
                                    placeholder="Enter your city"
                                    icon={MapPin}
                                    value={form.city}
                                    onChange={handleChange}
                                    autoComplete="address-level2"
                                    required
                                />
                            </div>
                            {/* Product Dropdown */}
                            <div className="inquiry-reveal">
                                <label
                                    htmlFor="inquiry-product"
                                    className="mb-2 block text-xs font-bold text-primary sm:text-sm"
                                >
                                    Interested Product
                                    <span className="ml-1 text-secondary">
                                        *
                                    </span>
                                </label>
                                <div className="relative">
                                    <Layers3
                                        size={18}
                                        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
                                    />
                                    <select
                                        id="inquiry-product"
                                        name="product"
                                        value={form.product}
                                        onChange={handleChange}
                                        required
                                        className="h-[49px] w-full appearance-none rounded-lg border border-border bg-surface pl-11 pr-10 text-sm text-primary outline-none transition-all focus:border-secondary focus:bg-white focus:ring-2 focus:ring-secondary/10"
                                    >
                                        <option value="">
                                            Select a product
                                        </option>
                                        {form.product && form.product !== "Other" && !productExists && (
                                            <option value={form.product}>
                                                {form.product}
                                            </option>
                                        )}
                                        {categories.map((category) => (
                                            <optgroup
                                                key={category.slug}
                                                label={category.name}
                                            >
                                                <option
                                                    value={category.name}
                                                >
                                                    All {category.name}
                                                </option>
                                                {category.products?.map(
                                                    (product) => (
                                                        <option
                                                            key={product.slug}
                                                            value={product.name}
                                                        >
                                                            {product.name}
                                                        </option>
                                                    )
                                                )}
                                            </optgroup>
                                        ))}
                                        {(
                                            <option value="Other">
                                                Other Requirements
                                            </option>
                                        )}
                                    </select>
                                    <ChevronDown
                                        size={17}
                                        className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-muted"
                                    />
                                </div>
                            </div>
                            {/* Message */}
                            <div className="inquiry-reveal">
                                <label
                                    htmlFor="inquiry-message"
                                    className="mb-2 block text-xs font-bold text-primary sm:text-sm"
                                >
                                    Your Requirements
                                </label>
                                <div className="relative">
                                    <MessageSquare
                                        size={18}
                                        className="pointer-events-none absolute left-3.5 top-4 text-muted"
                                    />
                                    <textarea
                                        id="inquiry-message"
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your requirements..."
                                        rows={3}
                                        maxLength={2000}
                                        className="w-full resize-none rounded-lg border border-border bg-surface py-3.5 pl-11 pr-4 text-sm text-primary outline-none transition-all placeholder:text-muted/70 focus:border-secondary focus:bg-white focus:ring-2 focus:ring-secondary/10"
                                    />
                                </div>
                            </div>
                            {/* Error Message */}
                            {error && (
                                <div
                                    role="alert"
                                    className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-xs leading-relaxed text-red-600"
                                >
                                    <AlertCircle
                                        size={17}
                                        className="shrink-0"
                                    />
                                    {error}
                                </div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className=" group flex min-h-[50px] w-full items-center justify-center gap-3 rounded-lg bg-secondary px-6 py-4 text-sm font-extrabold text-white transition-all duration-300 hover:bg-primary disabled:cursor-not-allowed disabled:opacity-70"
                            >
                                {loading ? (
                                    <>
                                        <LoaderCircle
                                            size={20}
                                            className="animate-spin"
                                        />
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        Submit Inquiry
                                        <ArrowUpRight
                                            size={19}
                                            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                        />
                                    </>
                                )}
                            </button>

                        </form>
                    )}
                </div>
            </div>
        </dialog>,
        document.body
    );
}
// ================= REUSABLE INPUT =================
function FormInput({
    label,
    name,
    icon: Icon,
    required,
    type = "text",
    ...props
}) {
    return (
        <div className="inquiry-reveal">
            <label
                htmlFor={`inquiry-${name}`}
                className="mb-2 block text-xs font-bold text-primary sm:text-sm"
            >
                {label}
                {required && (
                    <span className="ml-1 text-secondary">
                        *
                    </span>
                )}
            </label>
            <div className="relative">
                <Icon
                    size={18}
                    strokeWidth={1.8}
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
                />
                <input
                    id={`inquiry-${name}`}
                    name={name}
                    type={type}
                    required={required}
                    {...props}
                    className="h-[49px] w-full rounded-lg border border-border bg-surface pl-11 pr-3 text-sm text-primary outline-none transition-all placeholder:text-muted/70 focus:border-secondary focus:bg-white focus:ring-2 focus:ring-secondary/10"
                />
            </div>
        </div>
    );
}
