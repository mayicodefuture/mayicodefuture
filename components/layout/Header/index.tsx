import Link from "next/link";
import { useRouter } from "next/router";
import { Container } from "../Container";

type LinkProps = {
  href: string;
  activeLink: string;
};

const HeaderLink: React.FC<LinkProps> = ({ href, activeLink, children }) => {
  const classNames = (() => {
    if (activeLink === href) {
      return "px-6 py-4";
    }
    return "px-6 py-4 transition-colors duration-150 text-blue-500 hover:text-black";
  })();

  return (
    <li>
      <Link href={href}>
        <a className={classNames}>{children}</a>
      </Link>
    </li>
  );
};

export const Header = () => {
  const { pathname } = useRouter();

  return (
    <nav className="py-8 absolute w-full z-10" aria-labelledby="navbar">
      <Container className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="w-16 rounded-full mr-4 shadow-md"
            src="/maksym.jpg"
            alt="avatar"
          />
          <div className="flex flex-col">
            <h1 className={pathname === "/" ? "text-white" : ""}>
              Maksym Boytsov
            </h1>
            <h4
              className={pathname === "/" ? "text-gray-400" : "text-gray-800"}
            >
              JavaScript Developer
            </h4>
          </div>
        </div>
        <ul className="flex">
          <HeaderLink href="/" activeLink={pathname}>
            Home
          </HeaderLink>
          <HeaderLink href="/blog" activeLink={pathname}>
            Blog
          </HeaderLink>
          <HeaderLink href="/about" activeLink={pathname}>
            About
          </HeaderLink>
        </ul>
      </Container>
    </nav>
  );
};
