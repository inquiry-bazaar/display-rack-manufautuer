"use client";

import React from "react";
import { PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const PHONE = "+918587901795";
const WHATSAPP = "918587901795";

const message =
    "Hello Arya Insulation, I am interested in your display rack solutions. Please share more details.";

export default function FloatingContact() {
    return (
        <div className="fixed bottom-5 right-4 z-[60] flex flex-col items-end gap-3 sm:bottom-7 sm:right-7 sm:gap-4">

            {/* ================= WHATSAPP BUTTON ================= */}

            <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="group relative flex items-center justify-center"
            >
                {/* Hover Label */}

                <div className="pointer-events-none absolute right-full mr-4 hidden translate-x-3 whitespace-nowrap rounded-lg border border-gray-100 bg-white px-4 py-3 opacity-0 shadow-xl transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 sm:block">

                    <span className="block text-[10px] font-medium text-gray-500">
                        Have a question?
                    </span>

                    <span className="block text-sm font-bold text-primary">
                        Chat on WhatsApp
                    </span>

                    {/* Tooltip Arrow */}

                    <span className="absolute -right-[5px] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rotate-45 bg-white" />
                </div>

                {/* Pulse Effect */}

                <span className="floating-contact-pulse pointer-events-none absolute inset-0 rounded-full bg-[#25D366]/40" />

                {/* Main Button */}

                <span className="relative flex h-[52px] w-[52px] items-center justify-center rounded-full border-2 border-white bg-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.35)] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-hover:bg-[#1EBE5D] sm:h-[60px] sm:w-[60px]">

                    <FaWhatsapp
                        size={29}
                        className="transition-transform duration-300 group-hover:rotate-[-12deg]"
                    />
                </span>

                {/* Online Indicator */}

                <span className="absolute right-0 top-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#128C7E]" />
            </a>

            {/* ================= CALL BUTTON ================= */}

            <a
                href={`tel:${PHONE}`}
                aria-label="Call Arya Insulation"
                className="group relative flex items-center justify-center"
            >
                {/* Hover Label */}

                <div className="pointer-events-none absolute right-full mr-4 hidden translate-x-3 whitespace-nowrap rounded-lg border border-gray-100 bg-white px-4 py-3 opacity-0 shadow-xl transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 sm:block">

                    <span className="block text-[10px] font-medium text-gray-500">
                        Speak with our team
                    </span>

                    <span className="block text-sm font-bold text-primary">
                        +91 85879 01795
                    </span>

                    {/* Tooltip Arrow */}

                    <span className="absolute -right-[5px] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rotate-45 bg-white" />
                </div>

                {/* Pulse Effect */}

                <span className="floating-contact-pulse floating-contact-pulse-delay pointer-events-none absolute inset-0 rounded-full bg-primary/30" />

                {/* Main Button */}

                <span className="relative flex h-[52px] w-[52px] items-center justify-center rounded-full border-2 border-white bg-primary text-white shadow-[0_8px_25px_rgba(16,42,67,0.30)] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-hover:bg-secondary sm:h-[60px] sm:w-[60px]">

                    <PhoneCall
                        size={25}
                        strokeWidth={2}
                        className="transition-transform duration-300 group-hover:rotate-[-12deg]"
                    />
                </span>
            </a>
        </div>
    );
}