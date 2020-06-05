/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'

export default function AboutPage() {
  return (
    <Layout>
      <Helmet>
        <title>Acerca de | Orlando Hernandez</title>
      </Helmet>
    </Layout>
  );
}