import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { GithubProps } from 'shared/types';

import { Container, Header } from 'components/layout';
import { api } from 'services/api';

type Props = GithubProps & {
  articles: {
    id: number;
    title: string;
    content: string;
    created_at: string;
    updated_at: string;
    coverImage: {
      id: number;
      name: string;
      alternativeText: string;
      caption: string;
      width: string;
      height: string;
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string;
      provider: string;
      provider_metadata: any;
      created_at: string;
      updated_at: string;
    };
  }[];
};

const Blog: NextPage<Props> = ({ data, articles }) => {
  const { name, company, avatar_url } = data;
  return (
    <section id="blog">
      <Header name={name} company={company} avatarUrl={avatar_url} />
      <Container>
        <div className="flex w-full">
          {articles?.map((article, index) => {
            if (index === 0) {
              return <div className="w-1/2">First article</div>;
            }
            return (
              <div>
                <h1>{article.title}</h1>
                <figure>
                  <img
                    src={process.env.BASE_URL + article.coverImage.url}
                    alt={article.coverImage.alternativeText}
                  />
                  <figcaption>{article.coverImage.caption}</figcaption>
                </figure>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await api.getGithubProfile();
  const articles = await api.getArticles();

  return { props: { data, articles } };
};

export default Blog;
