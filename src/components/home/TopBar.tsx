import Link from "next/link";

export default function TopBar() {
  return (
    <div className="bg-dark px-[5%] py-[10px] text-center text-[13px] font-medium text-white">
      <span className="mr-2">
        Website live in <strong className="text-orange">72 hours</strong> — starting at just{" "}
        <strong className="text-orange">$9.99/mo</strong>.
      </span>
      <Link
        href="/#start"
        className="inline-flex items-center gap-1 font-bold text-orange underline-offset-2 hover:underline"
      >
        Claim Your Spot →
      </Link>
    </div>
  );
}
