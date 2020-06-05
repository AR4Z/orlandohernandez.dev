/** @jsx jsx */
import React from 'react';
import { Heading } from 'theme-ui'
import { Container, Styled } from 'theme-ui'
import { Link } from 'gatsby'
import { jsx } from "theme-ui"
import Layout from '../components/layout'

export default function HomePage() {
  const posts = [
    {
      id: 1,
      slug: 'test',
      date: '2020/06/04',
      title: 'Est ex nulla duis nisi esse duis Lorem do amet dolore dolore.',
      description: 'Pariatur nisi pariatur qui nostrud velit laborum aute labore ipsum excepteur culpa.',
      body: 'Laboris ipsum eiusmod et amet. Ipsum aute dolore qui laboris tempor minim voluptate est. Velit eu Lorem ipsum veniam incididunt. Sint quis eiusmod ullamco cillum voluptate. Dolor do occaecat excepteur aliqua et occaecat tempor laborum dolor excepteur consectetur.'
    },
    {
      id: 2,
      slug: 'test',
      date: '2020/06/04',
      title: 'Est ex nulla duis nisi esse duis Lorem do amet dolore dolore.',
      description: 'Pariatur nisi pariatur qui nostrud velit laborum aute labore ipsum excepteur culpa.',
      body: 'Laboris ipsum eiusmod et amet. Ipsum aute dolore qui laboris tempor minim voluptate est. Velit eu Lorem ipsum veniam incididunt. Sint quis eiusmod ullamco cillum voluptate. Dolor do occaecat excepteur aliqua et occaecat tempor laborum dolor excepteur consectetur.'
    },
    {
      id: 3,
      slug: 'test',
      date: '2020/06/04',
      title: 'Est ex nulla duis nisi esse duis Lorem do amet dolore dolore.',
      description: 'Pariatur nisi pariatur qui nostrud velit laborum aute labore ipsum excepteur culpa.',
      body: 'Laboris ipsum eiusmod et amet. Ipsum aute dolore qui laboris tempor minim voluptate est. Velit eu Lorem ipsum veniam incididunt. Sint quis eiusmod ullamco cillum voluptate. Dolor do occaecat excepteur aliqua et occaecat tempor laborum dolor excepteur consectetur.'
    }
  ]
  return (
    <Layout>
      <ul
        sx={{
          listStyle: 'none',
          m: 0,
          px: 3,
          py: 4,
        }}>
        {posts.map(post => (
          <li key={post.id}
            sx={{
              mb: 4,
            }}>
            <Styled.h2
              sx={{
                m: 0,
              }}>
              <Link
                to="/test/"
                sx={{
                  color: 'inherit',
                  textDecoration: 'none',
                  ':hover,:focus': {
                    color: 'primary',
                    textDecoration: 'underline',
                  }
                }}>
                {post.title}
              </Link>
            </Styled.h2>
            <small sx={{ fontWeight: 'bold' }}>{post.date}</small>
            <Styled.p>
              {post.description}
            </Styled.p>
          </li>
        ))}
      </ul>
    </Layout>
  );
}