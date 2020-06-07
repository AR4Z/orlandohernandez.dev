/** @jsx jsx */
import { Link } from 'gatsby'
import { Container, Heading, jsx, Grid, Box } from 'theme-ui'
import SocialIcons from './SocialIcons'

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
                    <Grid columns={[1]}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Link to='/' title='Orlando Hernandez' sx={{ textDecoration: 'none', color: '#551a8b' }}>
                                <Heading>Orlando Hernandez</Heading>
                            </Link>
                        </Box>
                        <Box>
                            <SocialIcons/>
                        </Box>
                    </Grid>


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
                            color: '#551a8b'
                        }}>
                        Inicio
        </Link>
                    <Link to='/work'
                        sx={{
                            variant: 'styles.navlink',
                            p: 2,
                            color: '#551a8b'
                        }}>
                        Proyectos
        </Link>
                    <Link to='/about'
                        sx={{
                            variant: 'styles.navlink',
                            p: 2,
                            color: '#551a8b'
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
                {children}

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