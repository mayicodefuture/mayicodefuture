import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { GithubProps } from 'shared/types';

import { Container, Header } from 'components/layout';
import { githubApi } from 'services/api';

const Index: NextPage<GithubProps> = ({ data }) => {
  const { name, company, avatar_url } = data;
  return (
    <section id="home" className="h-screen">
      <Head>
        <title>Home</title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header name={name} company={company} avatarUrl={avatar_url} />
      <Container className="relative h-full">
        <div className="absolute w-full px-4 sm:px-0 mt-48 sm:mt-0 mb-6 -translate-x-1/2 sm:translate-x-0 left-1/2 sm:left-0 items-center sm:items-start text-center sm:pl-4 sm:top-1/2 text-white flex flex-col transform sm:-translate-y-1/2">
          <h1 className="mb-2 font-bold">Hi, dear guest!</h1>
          <p>Welcome to my personal page</p>
          <p>
            I write articles, mostly about{" "}
            <span className="text-js2 bg-js p-px">JavaScript</span> and{" "}
            <span className="text-white bg-ts p-px">TypeScript</span>.
          </p>
          <p className="mt-2">Find one that is interesting for you!</p>
          <Link href="/blog">
            <button
              style={{ width: "fit-content" }}
              className="btn mt-4 inline-flex items-center"
            >
              <span className="mr-3">Read articles</span>
              <FaArrowRight />
            </button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await githubApi.getProfile();

  return { props: { data } };
};

export default Index;
