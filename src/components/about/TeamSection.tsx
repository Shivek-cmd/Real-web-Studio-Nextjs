import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const TEAM = [
  {
    name: "Sandeep Taur",
    title: "Founder & CEO",
    bio: "The driving force behind RealWebStudio, Sandeep built the company on one belief — every Canadian small business deserves a website that actually works. With a background in digital marketing and web strategy, he leads the team with a results-first mindset.",
    image: "/about/sandeep.png",
  },
  {
    name: "Shivek Soni",
    title: "Technical Lead",
    bio: "Shivek leads the technical side of RealWebStudio, turning strategy and design into fast, secure, and reliable websites. He focuses on clean implementation, performance, and systems that are easy for clients to manage after launch.",
    image: "/about/shiveksoni.png",
  },
  {
    name: "Naveen Patel",
    title: "Performance Marketing and SEO",
    bio: "Naveen helps RealWebStudio clients turn visibility into measurable growth. He focuses on local SEO, paid campaigns, analytics, and conversion strategy so small businesses can attract the right traffic and turn it into qualified leads.",
    image: "/about/Naveen.png",
  },
];

const TEAM_STATS = [
  { value: "50+", label: "Delivery team members" },
  { value: "500+", label: "Businesses supported" },
  { value: "10+", label: "Industries served" },
  { value: "Canada-wide", label: "Project delivery" },
];

export default function TeamSection() {
  return (
    <section className="bg-gray-light px-[5%] py-[80px] lg:py-[100px]">
      <div className="mx-auto max-w-[1080px]">

        {/* Header */}
        <RevealOnScroll className="mb-16 text-center">
          <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[2.5px] text-orange">
            Leadership
          </p>
          <h2 className="mb-4 text-[30px] font-extrabold leading-[1.2] tracking-[-0.3px] text-site-text sm:text-[38px]">
            Meet Our Leadership Team
          </h2>
          <p className="mx-auto max-w-[680px] text-[16px] leading-[1.7] text-gray">
            RealWebStudio is led by a focused core team and supported by a 50+
            member network of designers, developers, SEO specialists, marketers,
            content writers, QA testers, and support professionals.
          </p>
        </RevealOnScroll>

        {/* Team grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {TEAM.map((member, i) => (
            <RevealOnScroll key={member.name + member.title} delay={i * 0.1}>
              <div className="group">
                {/* Portrait */}
                <div className="relative mb-5 aspect-[3/4] w-full overflow-hidden rounded-[16px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                {/* Info */}
                <h3 className="mb-1 text-[18px] font-extrabold leading-tight text-site-text">
                  {member.name}
                </h3>
                <p className="mb-3 text-[10.5px] font-extrabold uppercase tracking-[1.8px] text-orange">
                  {member.title}
                </p>
                <p className="text-[14px] leading-[1.7] text-gray">
                  {member.bio}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll className="mt-14 rounded-[16px] border border-site-border bg-white p-5 shadow-card sm:p-6">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {TEAM_STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-[26px] font-extrabold leading-none text-orange sm:text-[30px]">
                  {stat.value}
                </p>
                <p className="mt-2 text-[12px] font-semibold uppercase tracking-[1.2px] text-gray">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
