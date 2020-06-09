/** @jsx jsx */
import {  Styled, jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'

export default function HomePage() {
  const posts = [
    
  ]
  return (
    <Layout>
      <Helmet>
        <title>Inicio | Orlando Hernandez</title>
      </Helmet>
      <h2>Parece que aún no he escrito.</h2>
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
            <br />
            <Styled.i>
              {post.description}
            </Styled.i>
          </li>
        ))}
      </ul>
    </Layout>
  );
}