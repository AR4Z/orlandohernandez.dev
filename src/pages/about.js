/** @jsx jsx */
import { jsx, Avatar, Text, Box, Grid } from 'theme-ui'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SocialIcons from '../components/SocialIcons'
import profile from '../assets/img/profile.jpg'
import cv from '../assets/pdf/CV-OrlandoHernandez.pdf'

export default function AboutPage() {
  return (
    <Layout>
      <Helmet>
        <title>Acerca de | Orlando Hernandez</title>
      </Helmet>
      <div
        sx={{
          display: 'grid',
          gridGap: 4,
          gridTemplateColumns: [
            'auto',
            '1fr 2fr'
          ]
        }}>
        <div sx={{
          textAlign: 'center'
        }}>
          <br/>
          <Avatar
            src={profile}
          />
          <Grid
            gap={2}
            columns={[1]}>
            <Box>
              <Text
                sx={{
                  fontSize: 1,
                  fontWeight: 'bold',
                }}>
                Estudiante de Administración de Sistemas Informáticos
          </Text>
            </Box>
            <Box ><a sx={{ fontSize: 1 }} href="http://unal.edu.co">Universidad Nacional de Colombia</a></Box>
            
            <Box>
            <a href="https://es.stackoverflow.com/users/41573/ar4z"><img src="https://es.stackoverflow.com/users/flair/41573.png" width="208" height="58" alt="perfil para AR4Z en Stack Overflow en espa&#241;ol, Preguntas y respuestas para programadores y profesionales de la inform&#225;tica" title="perfil para AR4Z en Stack Overflow en espa&#241;ol, Preguntas y respuestas para programadores y profesionales de la inform&#225;tica"/></a>
            </Box>
          </Grid>
        </div>
        <div sx={{ textAlign: 'justify' }}>
          <p>
            Hola! Soy Orlando Hernandez, estudiante de Administración de Sistemas Informáticos en la <a href="https://unal.edu.co">UNAL</a>. Además, soy miembro del grupo de investigación <a href="http://gaia.manizales.unal.edu.co">GAIA</a> de la misma universidad donde realizo asistencia en investigación y desarrollo en diferentes proyectos.
          </p>
          <p>A continuación, puedes ver algunas de las cosas que me interesan y de las que probablemente escriba en este sitio: </p>
          <ul sx={{ listStyle: 'none', padding: 0 }}>
            <li sx={{
              "::before": {
                content: "'λ '"
              }
            }}>
              <strong>Desarrollo web</strong>: Como desarrollador full stack he tenido que trabajar tanto en el front-end como en el back-end usando diferentes lenguajes y tecnologías.
            </li>
            

          </ul>

        </div>
      </div>
      <div sx={{ textAlign: 'justify', }}>
        <ul sx={{ listStyle: 'none', padding: 0 }}>
        <li sx={{
            "::before": {
              content: "'λ '"
            }
          }}>
            <strong>Administración de sistemas</strong>: Por varios años he estado usando sistemas operativos basados en Linux tales como Debian y Arch en mi computadores del día a día como tambien en los servidores que he administrado.
            </li>

          <li sx={{
            "::before": {
              content: "'λ '"
            }
          }}>
            <strong>Programación funcional</strong>: Desde que conocí este paradigma me volví un apasionado acerca de él. Mis experiencias con lenguajes funcionales como Haskell y OCaml me han dejado muchas lecciones valiosas acerca de la programación en general.
            </li>
          <li sx={{
            "::before": {
              content: "'λ '"
            }
          }}>
            <strong>Otros intereses</strong>: Bases de datos relacionales y no relacionales (NoSQL), control de versiones, scripting, programación a bajo nivel...
            </li>
        </ul>
        <p>
          En mi día a día puedo hacer un poco de ejercicio, escribir algunas lineas de código, mejorar mis habilidades en Tech, escuchar una buena canción y leer un buen libro.
          </p>

        <p>
          Si crees tener alguna oportunidad de trabajo para mí puedes <a href={cv}>descargar mi CV en PDF aquí</a>  o mirar algunos de los <Link to="/work">proyectos</Link>  en los que he trabajado para asegurarte de que soy el indicado. No dudes en contactarme al correo <a href="mailto:ohernandezn@unal.edu.co">ohernandezn@unal.edu.co</a>.
          </p>
      </div>

    </Layout>
  );
}