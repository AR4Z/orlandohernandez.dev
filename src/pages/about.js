/** @jsx jsx */
import { jsx, Avatar, Text, Box, Grid } from 'theme-ui'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import SocialIcons from '../components/SocialIcons'

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
          <Avatar
            src='data:image/jpeg;base64,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'
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
                Estudiante de Ciencias de la Computación
          </Text>
            </Box>
            <Box ><a sx={{ fontSize: 1 }} href="http://unal.edu.co">Universidad Nacional de Colombia</a></Box>
            <Box >
              <SocialIcons />
            </Box>
          </Grid>
        </div>
        <div sx={{ textAlign: 'justify' }}>
          <p>
            Hola! Soy Orlando Hernandez, estudiante de Ciencias de la Computación en la <a href="https://unal.edu.co">UNAL</a>. Además, soy miembro del grupo de investigación <a href="http://gaia.manizales.unal.edu.co">GAIA</a> de la misma universidad donde realizo asistencia en investigación y desarrollo en diferentes proyectos.
          </p>
          <p>A continuación, puedes ver algunas de las cosas que me interesan y de las que probablemente hable en este sitio: </p>
          <ul sx={{ listStyle: 'none' }}>
            <li sx={{
              "::before": {
                content: "'λ '"
              }
            }}>
              <strong>Desarrollo web</strong>: Como un desarrollador full stack he tenido que trabajar tanto en el front-end como en el back-end usando diferentes lenguajes y tecnologías.
            </li>

          </ul>

        </div>
      </div>
      <div sx={{ textAlign: 'justify', }}>
        <ul sx={{ listStyle: 'none' }}>
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
            <strong>Programación funcional</strong>: Desde que conocí este paradigma me volví un apasionado acerca de él. Mis experiencias con los lenguajes funcionales (Haskell, OCaml) me han dejado muchas lecciones valiosas acerca de la programación en general.
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
          Si crees tener alguna oportunidad de trabajo para mi puedes descargar mi CV en PDF aquí o mirar algunos de los proyectos en los que he trabajado para asegurarte de que soy el indicado. No dudes en contactarme al correo ohernandezn@unal.edu.co
          </p>
      </div>

    </Layout>
  );
}