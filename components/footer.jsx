import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-950 text-gray-50 p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Sider</h3>
            <Link
              href="/"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Hjem
            </Link>
            <Link
              href="/tjenester"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Tjenester
            </Link>
            <Link
              href="/prosjekter"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Prosjekter
            </Link>
            <Link
              href="/kontakt"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Kontakt
            </Link>
            <Link
              href="/omoss"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Om Oss
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Lovlig</h3>
            <Link
              href="/cookies"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Cookies
            </Link>
            <Link
              href="/personvernerklering"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Personvernerklæring
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Følg oss</h3>
            <Link
              href="https://www.facebook.com/profile.php?id=61561210144553"
              className="hover:underline underline-offset-4 flex items-center gap-1"
              prefetch={false}
            >
              Facebook
            </Link>
            <Link
              href="https://www.instagram.com"
              className="hover:underline underline-offset-4 flex items-center gap-1"
              prefetch={false}
            >
              Instagram
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Kontaktinformasjon</h3>
            <p>
              Epost:{" "}
              <a
                href="mailto:kontakt@oceanedge.no"
                className="hover:underline underline-offset-4"
              >
                kontakt@oceanedge.no
              </a>
            </p>
            <p>
              Telefon:{" "}
              <a
                href="tel:+4745786703"
                className="hover:underline underline-offset-4"
              >
                +47 45786703
              </a>
            </p>
          </div>
        </div>
        <div className="container max-w-7xl mt-8 flex items-center justify-between">
          <p className="text-xs text-gray-400">
            &copy; 2024 OceanEdge. Alle rettigheter reservert.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
