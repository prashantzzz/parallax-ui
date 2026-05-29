import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Studio", href: "/studio" },
  { label: "Experiences", href: "/experiences" },
];

const navLinksRight = [
  { label: "Technologies", href: "/technologies" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

function LogoIcon() {
  return (
    <svg width="25" height="17" viewBox="0 0 25 17" fill="none">
      <path
        d="M9.73767 11.1974C11.1862 9.74869 13.5349 9.74858 14.9835 11.1971L18.2907 14.504C19.4746 15.6877 21.3938 15.6878 22.5777 14.5041C23.7618 13.3202 23.7618 11.4006 22.5779 10.2167L17.6069 5.2457C14.7098 2.34856 10.0126 2.34848 7.11535 5.24554L2.1438 10.2168C0.959822 11.4007 0.959796 13.3203 2.14374 14.5042C3.3277 15.6882 5.24729 15.6881 6.43119 14.5041L9.73767 11.1974Z"
        fill="#F3CEB9"
      />
    </svg>
  );
}

export default function Placeholder() {
  const location = useLocation();
  const pageName = location.pathname.replace("/", "");
  const allLinks = [...navLinks, ...navLinksRight];

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#454640]">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/fe9a5c19514d2e63bde0303ad086a6f2acf4b942?width=3033"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        <nav className="flex items-center justify-between px-6 md:px-10 pt-4 pb-2">
          <div className="hidden md:flex items-center gap-8 lg:gap-16">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-white text-[13px] leading-[1.2] transition-opacity hover:opacity-100"
                style={{
                  fontFamily: "Imprima, sans-serif",
                  opacity: location.pathname === link.href ? 1 : 0.6,
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center justify-center w-12 h-12">
            <LogoIcon />
          </div>
          <div className="hidden md:flex items-center gap-8 lg:gap-16">
            {navLinksRight.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-white text-[13px] leading-[1.2] transition-opacity hover:opacity-100"
                style={{
                  fontFamily: "Imprima, sans-serif",
                  opacity: location.pathname === link.href ? 1 : 0.6,
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 gap-6">
          <h1
            className="text-white uppercase text-[48px] sm:text-[64px] leading-[0.94]"
            style={{ fontFamily: "'Viaoda Libre', serif" }}
          >
            {pageName || "Page"}
          </h1>
          <p
            className="text-white/60 text-[16px] max-w-sm leading-[1.4]"
            style={{ fontFamily: "Imprima, sans-serif" }}
          >
            This page is coming soon. Continue prompting to fill in this
            section's content.
          </p>
          <Link
            to="/"
            className="text-[#F3CEB9] text-[13px] underline underline-offset-4"
            style={{ fontFamily: "Imprima, sans-serif" }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
