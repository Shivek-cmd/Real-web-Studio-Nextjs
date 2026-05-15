"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const STEPS = [
  {
    step: "01",
    label: "Fill Out the Form",
    body: "Tell us about your business in 2 minutes. We send you a short onboarding form — no phone calls or meetings needed to get started.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Business owner filling out online form on laptop",
  },
  {
    step: "02",
    label: "We Build Your Site",
    body: "Our team designs and develops your custom website from scratch. You'll receive a preview link to review and approve before anything goes live.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Web designer working on website design",
  },
  {
    step: "03",
    label: "Go Live in 72 Hours",
    body: "Your website is published, secured with SSL, and connected to your domain — ready to bring in customers within 3 days of signing up.",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Team celebrating website launch",
  },
  {
    step: "04",
    label: "We Maintain It For You",
    body: "Monthly updates, backups, security patches, and priority support — all included every month. You run your business, we keep your site perfect.",
    image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Support team maintaining website",
  },
];

function Step({
  step,
  label,
  body,
  image,
  alt,
  index,
}: {
  step: string;
  label: string;
  body: string;
  image: string;
  alt: string;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0; // even = text left, image right

  const textBlock = (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      className="flex flex-col justify-center"
    >
      <p className="mb-2 text-[11px] font-extrabold uppercase tracking-[2.5px] text-orange">
        Step {step}
      </p>
      <h3 className="mb-4 text-[26px] font-extrabold leading-[1.2] tracking-[-0.3px] text-site-text sm:text-[30px]">
        {label}
      </h3>
      <p className="max-w-[380px] text-[15px] leading-[1.8] text-gray">{body}</p>
    </motion.div>
  );

  const imageBlock = (
    <motion.div
      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      className="group relative h-[260px] overflow-hidden rounded-[14px] shadow-large sm:h-[300px] lg:h-[340px]"
    >
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 45vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
    </motion.div>
  );

  const badge = (
    <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange shadow-orange">
        <span className="text-[15px] font-extrabold text-white">{step}</span>
      </div>
    </div>
  );

  return (
    <div ref={ref} className="relative">
      {/* Vertical connector line (between steps, not after last) */}
      {index < STEPS.length - 1 && (
        <div className="absolute bottom-0 left-1/2 top-full hidden h-16 w-px -translate-x-1/2 bg-orange-mid lg:block" />
      )}

      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_72px_1fr] lg:gap-0">
        {isEven ? (
          <>
            {textBlock}
            {badge}
            {imageBlock}
          </>
        ) : (
          <>
            {imageBlock}
            {badge}
            {textBlock}
          </>
        )}
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="how" className="bg-white px-[5%] py-[90px]">
      <div className="mx-auto max-w-[1080px]">

        {/* Header */}
        <div ref={titleRef} className="mb-[72px] text-center">
          <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[2.5px] text-orange">
            How It Works
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[32px] font-extrabold leading-[1.2] tracking-[-0.5px] text-site-text sm:text-[40px]"
          >
            Your Website Live in 4 Simple Steps
          </motion.h2>
          <p className="mx-auto mt-4 max-w-[480px] text-[15px] leading-[1.7] text-gray">
            A clear, honest process built around your business — not an agency playbook.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-16 lg:gap-20">
          {STEPS.map((s, i) => (
            <Step key={s.step} {...s} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="#get-started-form"
            className="rounded-full bg-orange px-8 py-[14px] text-[15px] font-bold text-white shadow-orange transition-all duration-200 hover:-translate-y-px hover:bg-orange-dark"
          >
            Start My Website Today →
          </Link>
        </div>

      </div>
    </section>
  );
}
