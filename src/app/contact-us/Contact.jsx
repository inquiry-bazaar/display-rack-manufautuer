
"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  ArrowRight,
  ChevronRight,
  MapPin,
  Mail,
  Phone,
  Clock3,
  Send,
  UserRound,
  Building2,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import CTASection from "@/components/home/CTASection";

gsap.registerPlugin(ScrollTrigger);

const MAP_URL =
  "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d112073.81938414769!2d76.995915!3d28.620564!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM3JzE2LjIiTiA3NsKwNTknNDQuOCJF!5e0!3m2!1sen!2sus!4v1795436313387!5m2!1sen!2sus";

const products = [
  "Supermarket Display Racks",
  "Gondola Racks",
  "Wall Display Racks",
  "Grocery Store Racks",
  "Retail Display Racks",
  "Warehouse Storage Racks",
  "Departmental Store Racks",
  "Custom Rack Solutions",
  "Other",
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  product: "",
  message: "",
};

function FieldLabel({ htmlFor, children, required = false }) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2.5 block text-[12px] font-bold uppercase tracking-[0.12em] text-primary"
    >
      {children}
      {required && <span className="ml-1 text-secondary">*</span>}
    </label>
  );
}

export default function Contact() {
  const rootRef = useRef(null);
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reducedMotion) return;

      gsap.fromTo(
        ".contact-hero-content > *",
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.13,
          ease: "power3.out",
          delay: 0.15,
        }
      );

      gsap.to(".contact-hero-image", {
        scale: 1.12,
        ease: "none",
        scrollTrigger: {
          trigger: ".contact-hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.utils.toArray(".contact-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 55, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          }
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status.message) {
      setStatus({ type: "", message: "" });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (loading) return;

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      // Replace this section with your actual contact API.
      // Example:
      //
      // const response = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });
      //
      // if (!response.ok) {
      //   throw new Error("Failed to send inquiry");
      // }

      setStatus({
        type: "info",
        message:
          "The form is ready. Connect your contact API to enable inquiry submissions.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "Something went wrong. Please try again or contact us directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main ref={rootRef} className="overflow-hidden bg-white">
      {/* ================= HERO BANNER ================= */}
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
            <span className="text-secondary">Contact Us</span>
          </div>

          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-9 bg-secondary" />
            <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-white/95">
              Let's Connect
            </span>
            <span className="h-px w-9 bg-secondary" />
          </div>

          <h1 className="font-heading text-[clamp(3.2rem,7vw,7rem)] font-semibold leading-[1.05] tracking-[-0.055em] text-white">
            Get In <span className="text-secondary">Touch.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-white/95 sm:text-base sm:leading-8">
            Have a project in mind? Let's create smarter, stronger, and more
            efficient retail spaces together.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 h-[5px] w-full bg-secondary" />
      </section>

      {/* ================= INTRO ================= */}
      <section className="relative bg-white py-10">
        <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
          <div className="contact-reveal grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-16">
            <div>
              <div className="mb-2 flex items-center gap-3">
                <span className="h-px w-9 bg-secondary" />
                <span className="text-[11px] font-bold uppercase tracking-[0.23em] text-secondary">
                  Contact Arya Insulation
                </span>
              </div>

              <h2 className="max-w-2xl font-heading text-[clamp(2.2rem,4vw,4.4rem)] font-semibold leading-[1] tracking-[-0.045em] text-primary">
                Let's Build Something{" "}
                <span className="text-secondary">Exceptional.</span>
              </h2>
            </div>

            <p className="max-w-lg text-[15px] leading-6 text-muted lg:pb-2">
              Whether you're setting up a new supermarket, upgrading your
              retail store, or looking for custom storage racks, our team is
              here to help you find the right solution for your business.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT FORM + INFO ================= */}
      <section className="bg-white pb-10">
        <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
          <div className="grid overflow-hidden rounded-[22px] border border-[#E2E8F0] shadow-[0_25px_90px_-50px_rgba(16,42,67,0.3)] lg:grid-cols-[1.25fr_0.75fr] lg:rounded-[30px]">
            {/* LEFT FORM */}
            <div className="contact-reveal bg-white px-6 py-9 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
              <div className="mb-10">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#FFF3E9] px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-secondary" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-secondary">
                    Send An Inquiry
                  </span>
                </div>

                <h3 className="font-heading text-3xl font-semibold tracking-[-0.035em] text-primary sm:text-4xl">
                  Tell Us About Your Project
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
                  Fill out the form below with your requirements and our team
                  will help you explore the right display and storage
                  solutions.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  {/* NAME */}
                  <div>
                    <FieldLabel htmlFor="contact-name" required>
                      Full Name
                    </FieldLabel>

                    <div className="group relative">
                      <UserRound
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8] transition-colors group-focus-within:text-secondary"
                      />
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        autoComplete="name"
                        required
                        className="h-[58px] w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] pl-12 pr-4 text-sm text-primary outline-none transition-all placeholder:text-[#94A3B8] focus:border-secondary focus:bg-white focus:ring-4 focus:ring-secondary/10"
                      />
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div>
                    <FieldLabel htmlFor="contact-email" required>
                      Email Address
                    </FieldLabel>

                    <div className="group relative">
                      <Mail
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8] transition-colors group-focus-within:text-secondary"
                      />
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        autoComplete="email"
                        required
                        className="h-[58px] w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] pl-12 pr-4 text-sm text-primary outline-none transition-all placeholder:text-[#94A3B8] focus:border-secondary focus:bg-white focus:ring-4 focus:ring-secondary/10"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  {/* PHONE */}
                  <div>
                    <FieldLabel htmlFor="contact-phone" required>
                      Phone Number
                    </FieldLabel>

                    <div className="group relative">
                      <Phone
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8] transition-colors group-focus-within:text-secondary"
                      />
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        autoComplete="tel"
                        required
                        className="h-[58px] w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] pl-12 pr-4 text-sm text-primary outline-none transition-all placeholder:text-[#94A3B8] focus:border-secondary focus:bg-white focus:ring-4 focus:ring-secondary/10"
                      />
                    </div>
                  </div>

                  {/* PRODUCT */}
                  <div>
                    <FieldLabel htmlFor="contact-product" required>
                      Product Interested In
                    </FieldLabel>

                    <div className="group relative">
                      <Building2
                        size={18}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8] transition-colors group-focus-within:text-secondary"
                      />
                      <select
                        id="contact-product"
                        name="product"
                        value={form.product}
                        onChange={handleChange}
                        required
                        className="h-[58px] w-full appearance-none rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] pl-12 pr-10 text-sm text-primary outline-none transition-all focus:border-secondary focus:bg-white focus:ring-4 focus:ring-secondary/10"
                      >
                        <option value="" disabled>
                          Select a product
                        </option>

                        {products.map((product) => (
                          <option key={product} value={product}>
                            {product}
                          </option>
                        ))}
                      </select>

                      <ChevronRight
                        size={17}
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-[#94A3B8]"
                      />
                    </div>
                  </div>
                </div>

                {/* MESSAGE */}
                <div>
                  <FieldLabel htmlFor="contact-message" required>
                    Your Message
                  </FieldLabel>

                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, rack requirements, quantity, store size, or any questions you have..."
                    rows={6}
                    required
                    className="w-full resize-y rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-5 py-4 text-sm leading-7 text-primary outline-none transition-all placeholder:text-[#94A3B8] focus:border-secondary focus:bg-white focus:ring-4 focus:ring-secondary/10"
                  />
                </div>

                {/* SUBMIT */}
                <div className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={loading}
                    className="group inline-flex min-h-[58px] items-center justify-center gap-4 rounded-xl bg-secondary px-8 text-sm font-bold text-white transition-all duration-300 hover:bg-primary hover:shadow-[0_15px_35px_-12px_rgba(16,42,67,0.45)] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Your Inquiry
                        <ArrowUpRight
                          size={19}
                          className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                        />
                      </>
                    )}
                  </button>

                  <p className="max-w-[250px] text-xs leading-5 text-muted">
                    Your information will only be used to respond to your
                    inquiry.
                  </p>
                </div>

                {status.message && (
                  <div
                    role="status"
                    className={`flex items-start gap-3 rounded-xl border px-4 py-4 text-sm leading-6 ${status.type === "error"
                      ? "border-red-200 bg-red-50 text-red-700"
                      : "border-blue-200 bg-blue-50 text-blue-800"
                      }`}
                  >
                    <CheckCircle2 size={19} className="mt-0.5 shrink-0" />
                    <span>{status.message}</span>
                  </div>
                )}
              </form>
            </div>

            {/* RIGHT CONTACT INFO */}
            <aside className="contact-reveal relative overflow-hidden bg-primary px-7 py-11 text-white sm:px-11 sm:py-14 lg:px-12 lg:py-16">
              {/* Background decoration */}
              <div className="pointer-events-none absolute -right-32 -top-32 h-[360px] w-[360px] rounded-full border border-white/10" />
              <div className="pointer-events-none absolute -right-20 -top-20 h-[260px] w-[260px] rounded-full border border-white/10" />
              <div className="pointer-events-none absolute -bottom-28 -left-24 h-[300px] w-[300px] rounded-full bg-secondary/10 blur-[80px]" />

              <div className="relative z-10">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-secondary" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondary">
                    Contact Information
                  </span>
                </div>

                <h3 className="max-w-sm font-heading text-[clamp(2rem,3vw,3.3rem)] font-semibold leading-[1.15] tracking-[-0.04em]">
                  We're Here To{" "}
                  <span className="text-secondary">Help You.</span>
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
                  Have questions about our display racks or need a customized
                  solution? Get in touch with our team.
                </p>

                <div className="mt-12 space-y-9">
                  {/* LOCATION */}
                  <div className="group flex items-start gap-5">
                    <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 transition-colors group-hover:bg-secondary">
                      <MapPin size={21} />
                    </div>

                    <div>
                      <h4 className="mb-2 text-sm font-semibold">
                        Our Location
                      </h4>
                      <p className="text-sm leading-7 text-white/65">
                        New Delhi, India
                      </p>
                      <p className="mt-1 text-xs leading-6 text-white/45">
                        View our location on the map below.
                      </p>
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div className="group flex items-start gap-5">
                    <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 transition-colors group-hover:bg-secondary">
                      <Mail size={21} />
                    </div>

                    <div>
                      <h4 className="mb-2 text-sm font-semibold">
                        Email Address
                      </h4>
                      <p className="text-sm leading-7 text-white/65">
                        Add your official business email
                      </p>
                    </div>
                  </div>

                  {/* PHONE */}
                  <div className="group flex items-start gap-5">
                    <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 transition-colors group-hover:bg-secondary">
                      <Phone size={21} />
                    </div>

                    <div>
                      <h4 className="mb-2 text-sm font-semibold">
                        Phone Number
                      </h4>
                      <p className="text-sm leading-7 text-white/65">
                        Add your official contact number
                      </p>
                    </div>
                  </div>

                  {/* HOURS */}
                  <div className="group flex items-start gap-5">
                    <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 transition-colors group-hover:bg-secondary">
                      <Clock3 size={21} />
                    </div>

                    <div>
                      <h4 className="mb-2 text-sm font-semibold">
                        Business Hours
                      </h4>
                      <p className="text-sm leading-7 text-white/65">
                        Contact us for working hours and appointments.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-14 border-t border-white/15 pt-9">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary">
                      <ArrowUpRight size={20} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold">
                        Let's Discuss Your Project
                      </p>
                      <p className="mt-1 text-xs text-white/55">
                        Smart racks. Better spaces.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ================= GOOGLE MAP ================= */}
      <section className="bg-[#F3F5F7] border border-orange-300 pb-10 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
          <div className="contact-reveal mb-8 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <div className="mb-2 flex items-center gap-3">
                <span className="h-px w-9 bg-secondary" />
                <span className="text-[11px] font-bold uppercase tracking-[0.23em] text-secondary">
                  Find Our Location
                </span>
              </div>

              <h2 className="font-heading text-[clamp(2.3rem,4vw,4.5rem)] font-bold leading-[1.12] tracking-[-0.045em] text-primary">
                Come <span className="text-secondary">Visit Us.</span>
              </h2>

              {/* <p className="mt-4 max-w-lg text-sm leading-7 text-muted">
                Explore our location on the map and get directions to connect
                with our team.
              </p> */}
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=28.620564%2C76.995915"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-3 rounded-full border border-primary/15 bg-white px-6 py-3.5 text-sm font-semibold text-primary transition-all hover:border-secondary hover:bg-secondary hover:text-white"
            >
              Get Directions
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <div className="contact-reveal overflow-hidden rounded-[20px] border border-[#E2E8F0] bg-white p-2 shadow-[0_20px_70px_-45px_rgba(16,42,67,0.35)] sm:rounded-[28px] sm:p-3">
            <div className="relative h-[350px] overflow-hidden rounded-[14px] bg-[#E2E8F0] sm:h-[450px] sm:rounded-[20px] lg:h-[530px]">
              <iframe
                src={MAP_URL}
                title="Arya Insulation Location - Google Maps"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>

          <div className="contact-reveal mt-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-secondary">
                <MapPin size={19} />
              </div>

              <div>
                <p className="text-sm font-semibold text-primary">
                  Arya Insulation
                </p>
                <p className="text-xs text-muted">Delhi NCR, India</p>
              </div>
            </div>

            <span className="text-xs text-muted">
              Map powered by Google Maps
            </span>
          </div>
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <CTASection />
    </main>
  );
}
