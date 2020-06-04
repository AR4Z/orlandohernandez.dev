/** @jsx jsx */
import React from 'react';
import { Heading } from 'theme-ui'
import { Link, Container, Styled } from 'theme-ui'
import { jsx } from "theme-ui"

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
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}>
      <header
        sx={{
          py: 4,
          variant: 'styles.header',
        }}>
        <div
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 3,
          }}>
          <Link to='/' title='Home'>
            <Heading>Orlando Hernandez</Heading>
          </Link>
        </div>
        <div
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}>
          <Link to='/'
            sx={{
              variant: 'styles.navlink',
              p: 2,
            }}>
            Inicio
        </Link>
          <Link to='/blog'
            sx={{
              variant: 'styles.navlink',
              p: 2,
            }}>
            Proyectos
        </Link>
          <Link to='/about'
            sx={{
              variant: 'styles.navlink',
              p: 2,
            }}>
            Acerca de
        </Link>
        </div>
      </header>
      <Container
        p={4}
        bg='white'
        sx={{
          flexGrow: 1,
          height: '100%'
        }}>
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
                <Link to={post.slug}
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

      </Container>
      <footer
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
          variant: 'styles.footer',
        }}>
        Hecho con &nbsp; <span sx={{ color: '#e25555' }}>&#9829;</span>&nbsp;en Colombia
</footer>

    </div>
  );
}