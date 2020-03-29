import { Header, Container } from "components/layout";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const Index = () => {
  return (
    <section id="home" className="h-screen">
      <Header />
      <Container className="relative h-full">
        <div className="home-hello">
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

export default Index;
