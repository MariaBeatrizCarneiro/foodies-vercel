import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router"; // Import useRouter

export default function Header() {
  const router = useRouter(); // Use useRouter to get the current path

  // Define an array of paths where the link should be visible
  const visiblePaths = ["/foodies/homepage", "/foodies/search", "/foodies/favoritos"];

  return (
    <nav className="bg-white border-b-2 text-black flex justify-between items-center pl-4 md:pl-20 lg:pl-28 xl:pl-40 pr-4 md:pr-20 lg:pr-28 xl:pr-40 sticky top-0 z-50">
      <Link href="/foodies/homepage">
        <div>
          <Image
            src="/images/FOODIES.svg"
            className="pt-6 pb-4"
            width="202"
            height="40"
            alt="FOODIES"
          />
        </div>
      </Link>
      {/* Render this Link component only if the current pathname matches one of the specified paths */}
      {visiblePaths.includes(router.pathname) && (
        <Link href="/foodies/receita/publicar">
          <div className="rounded-2xl bg-verde text-white flex justify-center items-center p-2 sm:p-2 text-xs sm:text-sm md:text-base cursor-pointer">
            Publicar receita
          </div>
        </Link>
      )}
    </nav>
  );
}
