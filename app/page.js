import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// --- Navbar ---
function Navbar() {
  return (
   <></>
  );
};


 {/* Button */}
      <div className="flex gap-2 justify-center py-10">
        <Button className='px-10 py-5 text-2xl cursor-progress' variant="destructive">Button</Button>
        <Button className='px-10 py-5 text-2xl cursor-progress' variant="outline">Button</Button>
        <Button className='px-10 py-5 text-2xl cursor-progress' variant="secondary">Button</Button>
        <Button className='px-10 py-5 text-2xl cursor-progress' variant="ghost">Button</Button>
      </div>

      {/* DropDownMenu */}
      // <div className="flex justify-center pb-10">
      //   <DropdownMenu>
      //     <DropdownMenuTrigger asChild>
      //       <Button className='text-2xl p-8 cursor-progress' variant="">Open DropdownMenu</Button>
      //     </DropdownMenuTrigger>
      //     <DropdownMenuContent>
      //       <DropdownMenuGroup>
      //         <DropdownMenuLabel>My Account</DropdownMenuLabel>
      //         <DropdownMenuItem>Profile</DropdownMenuItem>
      //         <DropdownMenuItem>Billing</DropdownMenuItem>
      //       </DropdownMenuGroup>
      //       <DropdownMenuSeparator />
      //       <DropdownMenuGroup>
      //         <DropdownMenuItem>Team</DropdownMenuItem>
      //         <DropdownMenuItem>Subscription</DropdownMenuItem>
      //       </DropdownMenuGroup>
      //     </DropdownMenuContent>
      //   </DropdownMenu>
      // </div>


      {/* DraK Mode */}
      <div className="flex items-center gap-2 scale-125 justify-center pb-10">
        <h1>DraK & Light</h1>
        <ModeToggle />
        <h1>Toggle Mode</h1>
      </div>

// --- Hero ---
function Hero() {
  return (
    <section className="text-center py-20 px-6 max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 bg-muted border border-border rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
        Now with AI code review
      </div>
      <h1 className="text-5xl font-medium leading-tight mb-4">
        Ship faster.<br />
        <span className="text-orange-600">Break nothing.</span>
      </h1>
      <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
        The developer toolkit that catches bugs before production, automates deploys,
        and keeps your team moving without the 3am incidents.
      </p>
      <div className="flex gap-3 justify-center flex-wrap">
        <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6">
          Start for free
        </Button>
        <Button variant="outline" className="px-6">
          View docs →
        </Button>
      </div>

      {/* Code preview */}
      <div className="mt-10 bg-zinc-900 rounded-xl p-5 text-left max-w-md mx-auto font-mono text-sm">
        <div className="flex gap-1.5 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
        </div>
        <p className="text-zinc-400">$ <span className="text-green-400">devship</span> <span className="text-blue-300">deploy</span> <span className="text-orange-400">--env</span> <span className="text-zinc-100">production</span></p>
        <p className="text-zinc-500">✓ 12 checks passed · 0 issues · 2.4s</p>
        <p className="text-green-400">→ Deployed to <span className="text-orange-400">app.devship.io</span></p>
      </div>
    </section>
  );
}

// --- Features ---
const features = [
  { icon: "🛡️", title: "Zero-downtime deploys", desc: "Atomic deployments with instant rollback. Your users never see a broken build." },
  { icon: "⚙️", title: "Git-native workflow", desc: "Push to deploy. Works with GitHub, GitLab, and Bitbucket out of the box." },
  { icon: "🔭", title: "Real-time monitoring", desc: "Logs, metrics, and alerts in one place. Know before your users do." },
  { icon: "✨", title: "AI code review", desc: "Catches common bugs and security issues before they reach production." },
];

function Features() {
  return (
    <section id="features" className="py-16 px-6">
      <p className="text-xs font-medium text-orange-600 uppercase tracking-widest text-center mb-2">Features</p>
      <h2 className="text-2xl font-medium text-center mb-8">Everything your team needs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {features.map((f) => (
          <div key={f.title} className="bg-muted rounded-xl p-5 border border-border">
            <div className="text-xl mb-3">{f.icon}</div>
            <h3 className="text-sm font-medium mb-1.5">{f.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- Pricing ---
const plans = [
  { name: "Hobby", price: "$0", desc: "For solo projects and side hustles.", features: ["3 projects", "1 team member", "Community support"], featured: false },
  { name: "Pro", price: "$19", desc: "For small teams shipping fast.", features: ["Unlimited projects", "5 team members", "AI code review", "Priority support"], featured: true },
  { name: "Team", price: "$49", desc: "For growing teams and larger codebases.", features: ["Unlimited everything", "SSO & audit logs", "Dedicated support"], featured: false },
];

function Pricing() {
  return (
    <section id="pricing" className="py-16 px-6 bg-muted/50">
      <p className="text-xs font-medium text-orange-600 uppercase tracking-widest text-center mb-2">Pricing</p>
      <h2 className="text-2xl font-medium text-center mb-8">Simple, honest pricing</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`bg-background rounded-xl p-5 border ${
              plan.featured ? "border-orange-500 border-2" : "border-border"
            }`}
          >
            {plan.featured && (
              <span className="inline-block bg-orange-50 text-orange-600 text-xs px-2.5 py-0.5 rounded-md mb-2 font-medium">
                Most popular
              </span>
            )}
            <div className="font-medium text-sm">{plan.name}</div>
            <div className="text-3xl font-medium my-2">
              {plan.price}<span className="text-sm font-normal text-muted-foreground">/mo</span>
            </div>
            <p className="text-xs text-muted-foreground mb-4">{plan.desc}</p>
            <ul className="text-xs text-muted-foreground space-y-2 mb-5">
              {plan.features.map((f) => (
                <li key={f} className="before:content-['✓_'] before:text-orange-600 before:font-medium">{f}</li>
              ))}
            </ul>
            <Button
              variant={plan.featured ? "default" : "outline"}
              size="sm"
              className={`w-full ${plan.featured ? "bg-orange-600 hover:bg-orange-700 text-white" : ""}`}
            >
              {plan.name === "Team" ? "Contact sales" : plan.featured ? "Start free trial" : "Get started"}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- CTA ---
function CTA() {
  return (
    <section className="text-center py-20 px-6 border-t border-border">
      <h2 className="text-2xl font-medium mb-3">Ready to ship with confidence?</h2>
      <p className="text-muted-foreground mb-6">
        Join 8,000+ developers who deploy without fear. No credit card required.
      </p>
      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8">
        Start building free →
      </Button>
    </section>
  );
}

// --- Footer ---
function Footer() {
  return (
    <footer className="flex justify-between items-center px-8 py-5 border-t border-border text-sm text-muted-foreground flex-wrap gap-2">
      <span>© 2025 devship</span>
      <div className="flex gap-4">
        <Link href="#">Privacy</Link>
        <Link href="#">Terms</Link>
        <Link href="#">Docs</Link>
      </div>
    </footer>
  );
}

// --- Main Page ---
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}