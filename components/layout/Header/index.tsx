import Link from 'next/link';
import { useRouter } from 'next/router';

type LinkProps = {
  href: string
  activeLink: string
}

const HeaderLink: React.FC<LinkProps> = ({ href, activeLink, children }) => {
  const { pathname } = useRouter()

  const classNames = (() => {
    if (activeLink === href) {
      return `px-6 py-4 ${pathname === '/home' && 'text-white'}`
    }
    return `px-6 py-4 transition-colors duration-150 ${
      pathname === '/home'
        ? 'text-black hover:text-white'
        : 'text-gray-600 hover:text-black'
    }`
  })()

  return (
    <li>
      <Link href={href}>
        <a className={classNames}>{children}</a>
      </Link>
    </li>
  )
}

export const Header: React.FC = () => {
  const { pathname } = useRouter()

  return (
    <nav className="py-8 absolute w-full z-10" aria-label="navbar">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center">
          <img
            className="w-16 rounded-full mr-4 shadow-md"
            src="/maksym.jpg"
            alt="avatar"
          />
          <div className="flex flex-col">
            <h1 className={pathname === '/home' ? 'text-white' : ''}>
              Maksym Boytsov
            </h1>
            <div
              className={
                pathname === '/home' ? 'text-gray-400' : 'text-gray-800'
              }
            >
              JavaScript Developer
            </div>
          </div>
        </div>
        <ul className="flex mt-6 sm:mt-0">
          <HeaderLink href="/home" activeLink={pathname}>
            Home
          </HeaderLink>
          <HeaderLink href="/blog" activeLink={pathname}>
            Blog
          </HeaderLink>
          <HeaderLink href="/about" activeLink={pathname}>
            About
          </HeaderLink>
        </ul>
      </div>
    </nav>
  )
}
