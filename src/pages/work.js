/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'

export default function WorkPage() {
  return (
    <Layout>
      <Helmet>
        <title>Proyectos | Orlando Hernandez</title>
      </Helmet>
    </Layout>
  );
}