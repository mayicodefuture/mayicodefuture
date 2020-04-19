import { NextComponentType } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { api } from 'services/api';

import { Container } from '../Container';

type LinkProps = {
  href: string;
  activeLink: string;
};

const HeaderLink: React.FC<LinkProps> = ({ href, activeLink, children }) => {
  const { pathname } = useRouter();

  const classNames = (() => {
    if (activeLink === href) {
      return `px-6 py-4 ${pathname === "/" && "text-white"}`;
    }
    return `px-6 py-4 transition-colors duration-150 ${
      pathname === "/"
        ? "text-black hover:text-white"
        : "text-gray-600 hover:text-black"
    }`;
  })();

  return (
    <li>
      <Link href={href}>
        <a className={classNames}>{children}</a>
      </Link>
    </li>
  );
};

type Props = {
  name: string;
  company: string;
  avatarUrl: string;
};

export const Header: React.FC<Props> = ({ name, company, avatarUrl }) => {
  const { pathname } = useRouter();

  return (
    <nav className="py-8 absolute w-full z-10" aria-labelledby="navbar">
      <Container className="flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center">
          <img
            className="w-16 rounded-full mr-4 shadow-md"
            src={avatarUrl || "/maksym.jpg"}
            alt={avatarUrl ? "avatar from github" : "avatar"}
          />
          <div className="flex flex-col">
            <h1 className={pathname === "/" ? "text-white" : ""}>
              {name || "Maksym Boytsov"}
            </h1>
            {company ? (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://github.com/${company.slice(1)}`}
                className={pathname === "/" ? "text-gray-300" : "text-gray-800"}
              >
                {company}
              </a>
            ) : (
              <p
                className={pathname === "/" ? "text-gray-400" : "text-gray-800"}
              >
                JavaScript Developer
              </p>
            )}
          </div>
        </div>
        <ul className="flex mt-6 sm:mt-0">
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
