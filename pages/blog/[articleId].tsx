import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaArrowLeft } from 'react-icons/fa'
import { ArticleType } from 'shared/types'
import showdown from 'showdown'

import SocialShare from 'components/layout/SocialShare'
import { Button, Tag } from 'components/ui'
import { api } from 'services/api'

type Props = {
  article: ArticleType
}

const Article: NextPage<Props> = ({ article }) => {
  const router = useRouter()
  const richToHTML = (content: string) => {
    const converter = new showdown.Converter()
    return converter.makeHtml(content)
  }

  return (
    <>
      <section id="article">
        <div className="fixed hidden lg:block left-0 bottom-0 pl-5 items-center space-y-2 pb-5">
          <div className="space-x-3">
            <SocialShare
              title={article.title}
              url={process.env.NEXT_PUBLIC_API_URL + router.asPath}
              description={article.description}
            />
          </div>
          <Link href="/blog">
            <Button className="mt-4 flex items-center">
              <FaArrowLeft />
              <span className="ml-2">Back to blog</span>
            </Button>
          </Link>
        </div>
        <div className="py-12 px-10 sm:px-26 lg:px-48">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-4xl">{article.title}</h1>
            {article.description ? (
              <p className="text-gray-800 text-md sm:text-lg my-4">
                {article.description}
              </p>
            ) : null}
            {article.timeOfReading ? (
              <p className="text-gray-600 text-sm">
                {article.timeOfReading} minutes of reading
              </p>
            ) : null}
          </div>
          <figure className="my-6">
            <div>
              <img
                className="rounded-md"
                src={process.env.NEXT_PUBLIC_API_URL + article?.coverImage.url}
                alt={article.coverImage.alternativeText}
              />
            </div>
            <div className="flex flex-col items-center mt-4 mb-12">
              <figcaption className="mb-4 text-center text-gray-600">
                {article.coverImage?.caption ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: richToHTML(article.coverImage.caption),
                    }}
                  />
                ) : null}
              </figcaption>
              <div className="flex justify-center sm:justify-start space-x-2">
                {article.tags?.map((tag) => (
                  <Tag
                    key={tag.id}
                    backgroundColor={tag.backgroundColor}
                    textColor={tag.textColor}
                    label={tag.label}
                  />
                ))}
              </div>
            </div>
          </figure>
          <div
            dangerouslySetInnerHTML={{ __html: richToHTML(article.content) }}
          />
          <div className="block lg:hidden">
            <div className="mt-4 space-x-4">
              <SocialShare
                title={article.title}
                url={process.env.NEXT_PUBLIC_API_URL + router.asPath}
                description={article.description}
              />
            </div>
            <Link href="/blog">
              <Button className="mt-4 flex items-center">
                <FaArrowLeft />
                <span className="ml-2">Back to blog</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await api.getArticles()

  const paths = articles?.map((article: ArticleType) => ({
    params: { articleId: String(article.id) },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const article = await api.getArticle(String(params!.articleId))

  return { props: { article } }
}

export default Article
