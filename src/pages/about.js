import React from "react"
import { PageLayout, PageTitle } from "../components"
import { Container, Image } from "react-bootstrap"
import { Link, graphql } from "gatsby"
import { SEO } from "../utils"

export default ({ data }) => {
  const MediaLink = ({ title, author, link }) => (
    <li key={title} style={{ color: "gray" }}>
      <a rel="noopener noreferrer" href={link}>
        {title}
      </a>
      &nbsp;-<i>{author}</i>
    </li>
  )

  const {
    author,
    occupation,
    readingList,
    showsList,
    designations,
    unemployed,
  } = data.site.siteMetadata

  const bookLinks = readingList.map(book => MediaLink(book))
  const showLinks = showsList.map(show => MediaLink(show))

  return (
    <PageLayout>
      <SEO title="About Me" />
      <PageTitle title="About Me" />
      <Container>
        <Image
          rounded
          width="280"
          height="280"
          src={`../../images/profile.jpeg`}
          alt={author}
        />
        <article className="w-75 m-auto pt-2 text-justify">
          <p className="text-center">
            {designations.map((attr, i) => (
              <span key={attr}>
                &nbsp;<b>{attr}</b>&nbsp;
                {i < designations.length - 1 && <>||</>}
              </span>
            ))}
          </p>
          <p className="i-5 mt-4 pt-2">
            Hello there! My name is <b>{`${author}`}</b>. I am a&nbsp;
            <a
              href="https://www.dictionary.com/e/fictional-characters/padawan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              padawan
            </a>
            &nbsp;
            <b>{occupation}</b> discovering the ways of the code. I’m passionate about technology, 
            software architecture, research, and innovation. 
            Always looking for new challenges that keep my mind working and push the boundaries of my knowledge and experience, 
            I have worked on many different projects. From pure backend with millions of RPMs to carefully designed performant frontends, 
            and on monolithic apps, libraries, and microservices. 
            I’m interested in performance, code quality (Clean Code fan 😛), scalable and clean architectural solutions.
          </p>
          <p className="i-5">Also, since 2018 I have been part of ORT Uruguay university’s teaching staff. 
            I have been in charge of teaching both theoretical and practical subjects. 
            For example, in Programming 1, I give the students the first approach to programming from scratch by teaching the theoretical concepts and 
            then I help them apply that to a particular language (Javascript); 
            in Programming 2, the focus is on software design quality, 
            and we see in more detail object-oriented programming (we see it in Java). 
            And finally, Programming for Biotechnology is also the first approach to programming but targeted to a profile that needs more problem solving through programming 
            and we focus rather on scripting. 
            Having the opportunity to work at the same university where I got my degree has been a very rewarding and 
            enriching experience and something I enjoy doing.</p>
          <p className="i-5">
            In my spare time, I like to play videogames, watch Netflix, try some new tech/framework/cool thing and read about cars. 
          </p>
          {/* <p className="i-5">
            Check out my <Link to="/projects">projects</Link> to see what I've
            been up to! Or check out my <Link to="/blog">blog</Link> to see
            what's recently caught my eye!
          </p> */}
        </article>
        <article className="w-75 m-auto">
          {unemployed && (
            <>
              <hr />
              <p className="unemployed">
                <small>
                  I am <b>currently looking for new opportunities</b>! If you
                  like what you <Link to="/resume">see</Link>, let's get
                  in&nbsp;
                  <a
                    href="mailto:cjpablo92@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    touch
                  </a>
                  !
                </small>
              </p>
            </>
          )}
          <hr />
          <h5 className="watch-list-title pt-4">
            Here are a couple of books from my reading list:
          </h5>
          <ul style={{ fontSize: "0.9rem", listStyle: "none" }}>{bookLinks}</ul>
          <h5 className="watch-list-title pt-4">
            Here are a couple of shows from my watch list:
          </h5>
          <ul style={{ fontSize: "0.9rem", listStyle: "none" }}>{showLinks}</ul>
          <h5 className="watch-list-title pt-4">
            Here are a couple of movies from my watch list:
          </h5>
          <p>
            <i>...waaaay too many to list.</i>
          </p>
        </article>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        occupation
        author
        designations
        readingList {
          title
          author
          link
        }
        showsList {
          title
          author
          link
        }
      }
    }
  }
`
