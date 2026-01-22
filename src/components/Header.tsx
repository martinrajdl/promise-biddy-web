import Link from "next/link";
import Image from "next/image";

/*
 * Header Component
 *
 * Intentionally minimal. No hamburger menus or complex navigation.
 * The navigation items are kept to essential pages only.
 * On mobile, we stack the logo and nav for simplicity.
 * Includes a small buddy icon for brand recognition.
 */

export default function Header() {
  return (
    <header className="w-full py-6 px-6 md:px-8">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo / Home link with small buddy icon */}
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-medium text-text-primary hover:text-sage-dark transition-colors"
        >
          <Image
            src="/images_promise_buddy/red_panda.png"
            alt=""
            width={32}
            height={32}
            className="w-8 h-8"
            aria-hidden="true"
          />
          Promise Buddy
        </Link>

        {/* Navigation - kept simple and unobtrusive */}
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-6 text-sm text-text-secondary">
            <li>
              <Link
                href="/about"
                className="hover:text-text-primary transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/support"
                className="hover:text-text-primary transition-colors"
              >
                Support
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="hover:text-text-primary transition-colors"
              >
                Privacy
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
