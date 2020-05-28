import { NextPage } from 'next';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

import { Container, Header } from 'components/layout';
import { Button } from 'components/ui';

const Index: NextPage = () => (
  <>
    <Header />
    <section id="home">
      <Container>
        <div className="absolute text-white top-1/2 transform -translate-y-1/2 text-center w-full p-2 left-1/2 -translate-x-1/2 sm:p-0 sm:text-left sm:left-auto sm:translate-x-0">
          <h1 className="mb-2 font-bold">Hi, dear guest!</h1>
          <div>Welcome to my personal page</div>
          <div>
            I write articles, mostly about{' '}
            <span className="text-js2 bg-js p-px">JavaScript</span> and{' '}
            <span className="text-white bg-ts p-px">TypeScript</span>.
          </div>
          <p className="mt-2">Find one that is interesting for you!</p>
          <Link href="/blog">
            <Button className="mt-4 inline-flex items-center">
              <span className="mr-3">Read articles</span>
              <FaArrowRight />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  </>
)

export default Index
