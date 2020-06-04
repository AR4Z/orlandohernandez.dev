/** @jsx jsx */
import React from 'react';
import { Heading } from 'theme-ui'
import { Link, Container, Styled } from 'theme-ui'
import { jsx } from "theme-ui"

export default function Layout({ children }) {
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
                { children }

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
    )
}