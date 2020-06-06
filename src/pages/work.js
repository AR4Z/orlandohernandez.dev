/** @jsx jsx */
import { Styled, jsx, Badge, Divider, Grid, Box } from 'theme-ui'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import ReactTooltip from 'react-tooltip'


export default function WorkPage() {
  const projects = [
    {
      id: 1,
      name: 'Coffee UNAL',
      description: 'Es una aplicación web que permite calcular la cantidad de personal necesario y la asignación óptima de este personal para realizar la recolección de café; esto último se logró mediante el diseño e implementación de un Algoritmo Genético Multiobjetivo.',
      techs: ['Python', 'Falcon', 'Celery', 'Redis', 'Vuejs', 'Vuetify'],
      url: {
        app: 'http://coffee-unal.herokuapp.com',
        code: 'https://github.com/AR4Z/cafe-api'
      }
    },
    {
      id: 2,
      name: 'Metaurbog',
      description: 'En este proyecto se desarrollo una aplicación web que permite el modelado y simulación del Metabolismo Urbano de Bogotá D.C. por medio de algoritmos matemáticos.',
      techs: ['Python', 'Falcon', 'RQ', 'Redis', 'PostgreSQL', 'MongoDB', 'NetworkX', 'd3', 'Vuejs', 'Docker'],
      url: {
        app: 'https://metaurbog.com',
        code: 'https://github.com/AR4Z/cafe-api'
      }
    },
    {
      id: 3,
      name: 'ROAp',
      description: 'ROAp es un Repositorio de Objetos de Aprendizaje, permite la administración del objeto de aprendizaje y sus metadatos bajo el estándar LOM (Learning Object Metadata). Los objetos de aprendizaje pueden ser PDF, Vídeo, Imagenes, cotenido HTML etc.',
      techs: ['Python', 'Falcon', 'RQ', 'Redis', 'MongoDB', 'ReactJS', 'React Admin', 'Material UI', 'Docker'],
      url: {
        app: 'http://gaia.manizales.unal.edu.co:8081',
        code: 'https://github.com/gaia-unal/roap'
      }
    },
    {
      id: 4,
      name: 'FROAC',
      description: 'FROAC es la Federación de Repositorios de Objetos de Aprendizaje Colombia, esta aplicación permite el acceso a objetos de aprendizaje de distintos repositorios por medio del protocolo OAI-PMH (Open Archive Initiative - Protocol for Metadata Harvesting). Además, cuenta con distintas herramientas de Accesibilidad y Adaptabilidad para facilitar el acceso a los objetos de aprendizaje por parte de personas con distintos perfiles de diversidad.',
      techs: ['PHP', 'PostgreSQL', 'Javascript', 'Bootstrap'],
      url: {
        app: 'http://gaia.manizales.unal.edu.co/froacAA',
        code: 'https://github.com/gaia-unal/froacAA'
      }
    },
    {
      id: 5,
      name: 'Allyxe',
      description: 'Allyxe (Accessibility for Everyone) es una barra de accesibilidad que puede ser instalada para mejorar la accesibilidad de un sitio web por medio del uso de distintas herramientas que la componen como: Ajuste de contraste, colores, fuente; Lector de pantalla, Traductor a Lenguaje de Señas Colombiana entre otras. La barra puede ser encontrada en ejecución en FROAC. Próximamente va a ser liberado el código fuente.',
      techs: ['Javascript', 'CSS'],
      url: {
        app: 'http://gaia.manizales.unal.edu.co/froacAA',
        code: 'https://github.com/gaia-unal/froacAA'
      }
    },
    {
      id: 6,
      name: 'COLIBRÍ',
      description: 'COLIBRÍ (Conversor de libros a audio) es un programa para Windows y Linux que permite la conversión de archivos PDF (escaneado o creado manualmente) a un audio; además, la administración y la escucha de los audios generados. La aplicación cuenta con un diseño enfocado en facilitar el uso por personas con baja o visión nula.',
      techs: ['Python', 'Tkinter', 'SQLite'],
      url: {
        app: 'http://gaia.manizales.unal.edu.co/froacAA',
        code: 'https://github.com/ar4z/COLIBRI'
      }
    },
  ]
  return (
    <Layout>
      <Helmet>
        <title>Proyectos | Orlando Hernandez</title>
      </Helmet>
      <p>
        A lo largo de mi carrera como desarrollador he participado en distintos proyectos, en los cuales he trabajado junto a otros desarrolladores y diseñadores. A continuación, puedes ver algunos de estos proyectos:
      </p>
      <ul
        sx={{
          listStyle: 'none',
          m: 0,
          px: 3,
          py: 4,
        }}>
        {projects.map(project => (
          <div>
            <li key={project.id}
              sx={{
                mb: 4,
              }}>
              <Styled.h2
                sx={{
                  m: 0,
                }}>

                {project.name}
              </Styled.h2>
              <br />
              <Styled.p>
                {project.description}
              </Styled.p>

              <Grid
                columns={['7fr 1fr']}>
                <Box>
                  {project.techs.map(tech => (
                    <Badge variant='accent' mr={1}>{tech}</Badge>
                  ))}
                </Box>
                <Box>
                  <Grid gap={2}
                    columns={[2]}>
                    <Box>
                      <div >
                        <a href={project.url.app} data-for='showProject' data-tip>
                          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z" /></svg>
                        </a>
                        <ReactTooltip id='showProject'>
                          Abrir
                          </ReactTooltip>
                      </div>
                    </Box>
                    <Box>
                      <div>
                        <a href={project.url.code} data-for='showInGithub' data-tip>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                        </a>
                        <ReactTooltip id='showInGithub'>
                          Ver en Github
                          </ReactTooltip>
                      </div>
                    </Box>
                  </Grid>
                </Box>
              </Grid>
            </li>
            <Divider />
          </div>
        ))}
      </ul>
    </Layout>
  );
}