import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const TEAM = [
  {
    name: "Sandeep Taur",
    title: "Founder & CEO",
    bio: "The driving force behind RealWebStudio, Sandeep built the company on one belief — every Canadian small business deserves a website that actually works. With a background in digital marketing and web strategy, he leads the team with a results-first mindset.",
    image:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Team Member",
    title: "Lead Web Designer",
    bio: "Crafting clean, conversion-focused designs that make small businesses look their best online. From first wireframe to final pixel, every layout is built to turn visitors into customers.",
    image:
      "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Team Member",
    title: "SEO & Growth Strategist",
    bio: "Specializing in local SEO and lead generation for Canadian markets. From Google Business profiles to on-page optimization, they make sure our clients get found by the right people at the right time.",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
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
            Meet Our Team
          </h2>
          <p className="mx-auto max-w-[480px] text-[16px] leading-[1.7] text-gray">
            Experienced professionals united by a shared commitment to client success.
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

      </div>
    </section>
  );
}
