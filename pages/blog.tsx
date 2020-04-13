import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';
import { GithubProps } from 'shared/types';

import { Container, Header } from 'components/layout';
import { githubApi } from 'services/api';

const Blog: NextPage<GithubProps> = ({ data }) => {
  const { name, company, avatar_url } = data;
  return (
    <section id="blog">
      <Head>
        <title>Blog</title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header name={name} company={company} avatarUrl={avatar_url} />
      <Container>
        <div className="flex flex-col items-center justify-center h-screen">
          <h1>Development in progress</h1>
          <p className="mb-5">Come back later</p>
          <div className="flex">
            <Link href="/">
              <button className="btn flex items-center mr-1">
                <IoMdArrowRoundBack className="mr-2" />
                Main page
              </button>
            </Link>
            <Link href="/about">
              <button className="btn flex items-center ml-1">
                About me
                <IoMdArrowRoundForward className="ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await githubApi.getProfile();

  return { props: { data } };
};

export default Blog;
