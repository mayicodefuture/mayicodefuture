import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { ArticleType } from 'shared/types'

import { SearchBar } from 'components/data'
import { Container, Header } from 'components/layout'
import { Button, Tag } from 'components/ui'
import { api } from 'services/api'

type Props = {
  articles: ArticleType[]
}

const Blog: NextPage<Props> = ({ articles }) => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const router = useRouter()

  const firstArticle = articles[0]
  const restArticles = (() => {
    if (searchQuery !== '') {
      return articles.filter((a) => {
        const isTitleContainsQuery = a.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
        if (isTitleContainsQuery && a !== articles[0]) {
          return true
        }
        return false
      })
    }
    if (articles.length > 1) {
      return articles.filter((a, i) => i !== 0)
    }
    return []
  })()

  const isRestArticles = restArticles.length > 1

  const handleArticleEnter = (id: string | number) => {
    router.push(`/blog/${id}`)
  }

  const renderArticles = () => {
    if (!firstArticle) {
      return (
        <div className="flex items-center justify-center">
          <p>No articles for now</p>
        </div>
      )
    }
    return (
      <div className="flex justify-between">
        <div className="w-full sm:w-2/5 mb-16 sm:mb-0">
          <button
            className="cursor-pointer text-center px-4"
            onClick={() => handleArticleEnter(firstArticle.id)}
          >
            <h1 className="text-2xl sm:text-3xl">{firstArticle.title}</h1>
            <p className="text-gray-800 text-lg mb-4">
              {firstArticle.description}
            </p>
            <img
              className="rounded-lg"
              src={process.env.BASE_URL + firstArticle?.coverImage.url}
              alt={firstArticle?.coverImage.alternativeText}
            />
            <div className="flex justify-between flex-col sm:flex-row items-center">
              <div className="flex justify-center my-4 space-x-2 items-center">
                <Tag label="New" textColor="white" backgroundColor="#e74c3c" />
                {firstArticle.tags?.map((tag, idx) => {
                  if (idx < 1) {
                    return (
                      <Tag
                        key={tag.id}
                        label={tag.label}
                        textColor={tag.textColor}
                        backgroundColor={tag.backgroundColor}
                      />
                    )
                  }
                })}
                {firstArticle.tags?.length > 1 && (
                  <span className="text-gray-600">
                    + {firstArticle.tags.length - 1}
                  </span>
                )}
              </div>
              <div className="sm:text-right">
                <p className="mb-1">
                  {format(parseISO(firstArticle.updated_at), 'dd MMM yyyy')}
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  {firstArticle.timeOfReading} minutes of reading
                </p>
              </div>
            </div>
          </button>
        </div>
        {isRestArticles ? (
          <div className="w-full sm:w-2/4">
            <SearchBar
              className="mb-8"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="flex flex-wrap">
              {restArticles.map((article) => (
                <div
                  key={article.id}
                  className="w-6/12 p-1 cursor-pointer"
                  onClick={() => handleArticleEnter(article.id)}
                >
                  <img
                    className="rounded-lg"
                    src={process.env.BASE_URL + article?.coverImage.url}
                    alt={article?.coverImage.alternativeText}
                  />
                  <h2 className="text-base font-bold mt-4">{article?.title}</h2>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="border-2 text-center px-4 rounded-md border-gray-700 border-dashed w-full sm:w-2/4 flex items-center justify-center space-y-2 flex-col">
            <h3>More articles will come out in a bit</h3>
            <p className="pb-2">
              I will post more information on social medias if there will be a
              new one!
            </p>
            <Link href="/about">
              <Button className="inline-flex items-center">
                <span className="mr-3">Check my social medias</span>
                <FaArrowRight />
              </Button>
            </Link>
          </div>
        )}
      </div>
    )
  }

  return (
    <>
      <Header />
      <section id="blog">
        <Container>
          <div className="flex flex-col justify-between sm:flex-row">
            {renderArticles()}
          </div>
        </Container>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const articles = await api.getArticles()

  return { props: { articles } }
}

export default Blog
