import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Footer() {
  const categories = [
    {
      title: "Auto",
      links: [
        "Auto Refinance",
        "Classic Car Financing",
        "Lease Buyout",
        "Motorcycle Loans",
        "New Car Loans",
        "Private Party Auto Purchase",
        "Used Car Loans",
      ],
    },
    {
      title: "Home Improvement",
      links: [
        "Basement Remodel Loans",
        "Home Improvement Loans",
        "Hot Tub Financing",
        "Kitchen Remodel Financing",
        "Landscaping Financing",
        "Solar Financing",
        "Swimming Pool Financing",
      ],
    },
    // Add other categories as needed
  ];

  return (
    <footer className="bg-secondary py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Learn more about how LightStream loans can be used to finance:
        </h2>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {categories.map((category) => (
            <div key={category.title}>
              <h3 className="font-bold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center pt-8 border-t">
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Site Map
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Careers
            </Link>
          </div>
          <Link href="/faq">
            <Button>FAQ</Button>
          </Link>
          <div className="flex gap-4">
            <Youtube className="w-6 h-6" />
            <Facebook className="w-6 h-6" />
            <Twitter className="w-6 h-6" />
            <Instagram className="w-6 h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
}
