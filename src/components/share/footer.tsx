import Link from "next/link";
import { Button } from "../ui/button";

export default function Footer() {
  const categories = [
    {
      title: "Auto",
      links: ["Auto Refinance", "Classic Car Financing"],
    },
    {
      title: "Home Improvement",
      links: ["Basement Remodel Loans", "Home Improvement Loans"],
    },
  ];

  return (
    <footer className="bg-secondary py-5 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-5">
          {categories.map((category) => (
            <div key={category.title}>
              <h3 className="font-bold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.links.map((link) => (
                  <li key={`/${link}`}>
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
          <div>
            <h3 className="font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <Link
                href="/faq"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                <Button>Faq</Button>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center my-3 text-xl">
        <p>{new Date().getFullYear()} © Sovefi</p>
        <small className="text-sm">
          Designe And Manage By{" "}
          <Link href="https://radyanbrand.com/about-us-3/" target="_blank">
            <strong>Radyan</strong>
          </Link>
        </small>
      </div>
    </footer>
  );
}
