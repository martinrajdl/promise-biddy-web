import Link from "next/link";
import Image from "next/image";
import BuddyCarousel from "@/components/BuddyCarousel";

/*
 * Landing Page
 *
 * Structure follows the brief:
 * 1. Hero - introduces the app with the header illustration
 * 2. Buddy Carousel - showcase all available buddies
 * 3. How it works - 3 simple steps with buddy icons
 * 4. Supported goals - examples of promises
 * 5. Philosophy - the emotional core (no shame, honesty counts)
 * 6. Privacy & Safety - builds trust
 * 7. Final CTA - with secondary illustration showing all buddies
 *
 * Design decisions:
 * - Generous whitespace throughout
 * - Soft pastel accent colors for visual interest
 * - Cozy illustrations that match the app's gentle tone
 */

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Buddy Carousel */}
      <BuddyCarousel />

      {/* How It Works */}
      <HowItWorksSection />

      {/* Supported Goals */}
      <GoalsSection />

      {/* Philosophy */}
      <PhilosophySection />

      {/* Privacy & Safety */}
      <PrivacySection />

      {/* Final CTA */}
      <FinalCTASection />
    </div>
  );
}

/* ================================
   HERO SECTION
   Text on left, image on right (stacked on mobile)
   ================================ */
function HeroSection() {
  return (
    <section className="px-6 md:px-8 pt-12 pb-16 md:pt-20 md:pb-28">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
          {/* Text content - left side on desktop */}
          <div className="flex-1 text-center md:text-left">
            {/* App name */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-text-primary mb-4">
              Promise Buddy
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-text-secondary mb-6">
              An app to help you help yourself.
            </p>

            {/* Subheading - explains the concept briefly */}
            <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-lg mb-10">
              Keep personal promises by caring for a virtual buddy. When you check
              in honestly, your buddy thrives. When you struggle, they understand.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4">
              {/* Primary CTA - Download */}
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 bg-sage text-white rounded-full font-medium hover:bg-sage-dark transition-colors shadow-sm"
                aria-label="Download Promise Buddy for iOS"
              >
                Download for iOS
              </a>

              {/* Secondary CTA - How it works */}
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center px-6 py-3 text-text-secondary hover:text-text-primary transition-colors"
              >
                How it works
              </Link>
            </div>

            {/* Note about being free */}
            <p className="mt-6 text-sm text-text-muted">Free to download. No ads.</p>
          </div>

          {/* Main illustration - right side on desktop */}
          <div className="flex-1 flex justify-center md:justify-end">
            <Image
              src="/images_promise_buddy/header_image.png"
              alt="A cozy room with a red panda buddy sitting peacefully"
              width={500}
              height={500}
              className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-3xl shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================
   HOW IT WORKS SECTION
   ================================ */
function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Choose a buddy",
      description:
        "Pick a virtual companion to care for. They will be with you on this journey.",
      icon: "/images_promise_buddy/quokka.png",
      bgColor: "bg-peach-light",
    },
    {
      number: "2",
      title: "Make a promise",
      description:
        "Select a goal that matters to you. One promise at a time helps you stay focused.",
      icon: "/images_promise_buddy/koala.png",
      bgColor: "bg-sky-light",
    },
    {
      number: "3",
      title: "Check in once a day",
      description:
        "A simple daily check-in. Be honest. Your buddy responds to how you are really doing.",
      icon: "/images_promise_buddy/cat.png",
      bgColor: "bg-lavender-light",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="px-6 md:px-8 py-20 md:py-28 bg-blush"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-text-primary text-center mb-16">
          How it works
        </h2>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              {/* Buddy icon */}
              <div
                className={`w-24 h-24 mx-auto mb-6 ${step.bgColor} rounded-2xl flex items-center justify-center p-2`}
              >
                <Image
                  src={step.icon}
                  alt=""
                  width={80}
                  height={80}
                  className="w-16 h-16"
                  aria-hidden="true"
                />
              </div>

              <h3 className="text-lg font-medium text-text-primary mb-2">
                {step.title}
              </h3>

              <p className="text-text-secondary text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================
   SUPPORTED GOALS SECTION
   ================================ */
function GoalsSection() {
  const goals = [
    { name: "Sobriety", description: "For those taking it one day at a time", color: "border-peach" },
    { name: "No smoking", description: "Breaking free, gently", color: "border-sage" },
    { name: "Fasting", description: "Mindful eating windows", color: "border-sky" },
    { name: "Protein intake", description: "Meeting your daily nutrition goals", color: "border-lavender" },
    { name: "Daily steps", description: "Moving a little more each day", color: "border-peach" },
    { name: "Custom promises", description: "Whatever matters to you", color: "border-sage" },
  ];

  return (
    <section className="px-6 md:px-8 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-text-primary text-center mb-4">
          One promise at a time
        </h2>

        <p className="text-text-secondary text-center mb-12 max-w-lg mx-auto">
          Choose the goal that matters most to you right now. You can always
          change it later.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {goals.map((goal) => (
            <div
              key={goal.name}
              className={`p-5 rounded-2xl bg-warm-white border-2 ${goal.color}`}
            >
              <h3 className="font-medium text-text-primary mb-1">{goal.name}</h3>
              <p className="text-sm text-text-muted">{goal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================
   PHILOSOPHY SECTION

   This is the emotional core of the product.
   The messaging here builds trust, especially for
   users dealing with sensitive goals like sobriety.
   ================================ */
function PhilosophySection() {
  const principles = [
    {
      title: "No shame",
      description:
        "Setbacks happen. Your buddy does not judge. They are here for you regardless of how today went.",
      color: "bg-peach-light",
    },
    {
      title: "No punishment",
      description:
        "There are no streaks to break or points to lose. Missing a day does not mean failure.",
      color: "bg-sky-light",
    },
    {
      title: "Honesty counts",
      description:
        "Being truthful with yourself is the whole point. The app rewards honest check-ins, not perfect ones.",
      color: "bg-sage-light",
    },
    {
      title: "Progress over perfection",
      description:
        "Small steps matter. Every honest day is a success, even the hard ones.",
      color: "bg-lavender-light",
    },
  ];

  return (
    <section className="px-6 md:px-8 py-20 md:py-28 bg-blush">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-text-primary text-center mb-4">
          A different approach
        </h2>

        <p className="text-text-secondary text-center mb-12 max-w-lg mx-auto">
          Most habit apps use pressure and guilt. We believe gentle
          accountability works better.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className={`p-6 rounded-2xl ${principle.color}`}
            >
              <h3 className="font-medium text-text-primary mb-2">
                {principle.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================
   PRIVACY & SAFETY SECTION

   Trust is critical, especially for sensitive goals.
   This section explicitly addresses privacy concerns.
   ================================ */
function PrivacySection() {
  const points = [
    {
      title: "No social feed",
      description: "Your journey is private. No comparisons with others.",
    },
    {
      title: "No public profiles",
      description: "Nobody can see what you are working on.",
    },
    {
      title: "Your data stays private",
      description: "We do not sell or share your personal information.",
    },
    {
      title: "Not a medical app",
      description:
        "This is a personal companion, not a substitute for professional care.",
    },
  ];

  return (
    <section className="px-6 md:px-8 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-text-primary text-center mb-4">
          Safe and private
        </h2>

        <p className="text-text-secondary text-center mb-12 max-w-lg mx-auto">
          Promise Buddy is designed to feel like a safe space.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {points.map((point) => (
            <div key={point.title} className="p-5 rounded-2xl bg-warm-white border border-stone">
              <h3 className="font-medium text-text-primary mb-1">
                {point.title}
              </h3>
              <p className="text-sm text-text-secondary">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/privacy"
            className="text-sm text-sage-dark hover:text-sage transition-colors"
          >
            Read our full privacy policy
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================================
   FINAL CTA SECTION

   A calm closing with the secondary illustration
   showing all the buddy options.
   ================================ */
function FinalCTASection() {
  return (
    <section className="px-6 md:px-8 py-20 md:py-28 bg-blush">
      <div className="max-w-4xl mx-auto text-center">
        {/* Secondary illustration showing all buddies */}
        <div className="mb-10 flex justify-center">
          <Image
            src="/images_promise_buddy/main_illustration_2.png"
            alt="A person sitting peacefully surrounded by all the buddy companions"
            width={500}
            height={500}
            className="w-full max-w-md md:max-w-lg rounded-3xl"
          />
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-4">
          Ready when you are
        </h2>

        <p className="text-text-secondary mb-8 max-w-md mx-auto">
          Your buddy is waiting to meet you. No account required to start.
        </p>

        <a
          href="#"
          className="inline-flex items-center justify-center px-8 py-3 bg-sage text-white rounded-full font-medium hover:bg-sage-dark transition-colors shadow-sm"
          aria-label="Download Promise Buddy for iOS"
        >
          Download for iOS
        </a>

        <p className="mt-4 text-sm text-text-muted">Free. Private. No ads.</p>
      </div>
    </section>
  );
}
