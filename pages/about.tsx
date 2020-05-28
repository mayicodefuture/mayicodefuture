import { NextPage } from 'next';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

import { Container, Header } from 'components/layout';

const About: NextPage = () => {
  return (
    <section id="about">
      <Header />
      <Container>
        <div className="absolute w-full px-4 sm:px-0 left-1/2 transform -translate-x-1/2 text-center sm:w-2/3 lg:w-1/2">
          <h1 className="mb-4 font-bold">About me</h1>
          <p>
            I am <strong>JavaScript developer</strong> and I love to create
            complex web applications using modern technologies for businesses
            and personal clients from a wide variety of fields.
          </p>
          <p className="my-4">
            Also I am passionate about new <strong>amazing</strong> technologies
            that other developers create for us, so I’m trying to contribute
            other projects wherever I think that my experience and skills can
            help project and it will make life of developers like me much
            easier.
          </p>
          <p className="mb-6">
            Feel free to <strong>contact me</strong> if you have any interesting
            ideas or offers!
          </p>
          <div className="flex flex-col items-center">
            <ContactLink href="https://github.com/mayicodefuture">
              <FaGithub className="mr-2" size={30} />
              /mayicodefuture
            </ContactLink>
            <ContactLink href="https://www.facebook.com/maksymboytsov">
              <FaFacebook className="mr-2 text-facebook" size={30} />
              /maksymboytsov
            </ContactLink>
            <ContactLink href="https://www.linkedin.com/in/maksym-boytsov/">
              <FaLinkedin className="mr-2 text-linkedin" size={30} />
              /maksym-boytsov
            </ContactLink>
            <ContactLink href="mailto:boycovm37@gmail.com">
              <IoIosMail className="mr-2 text-blue-700" size={30} />
              boycovm37@gmail.com
            </ContactLink>
          </div>
        </div>
      </Container>
    </section>
  )
}

type ContactLinkProps = {
  href: string
}

const ContactLink: React.FC<ContactLinkProps> = ({ href, children }) => (
  <a
    className="flex items-center justify mt-2"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
)

export default About
