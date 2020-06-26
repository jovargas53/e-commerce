// Imports
import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3 } from '../../ui/typography'
import { grey } from '../../ui/common/colors'

// App Imports
import { APP_URL } from '../../setup/config/env'
import home from '../../setup/routes/home'

// Component
const NotFound = () => (
  <div>
    {/* SEO */}
    <Helmet>
      <title>Lost? - Crate</title>
    </Helmet>

    {/* Top title bar */}
    <Grid style={{ backgroundColor: grey }}>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H3 font="secondary">Feeling lost?</H3>
      </GridCell>
    </Grid>

    <Grid>
      <GridCell style={{ textAlign: 'center' }}>
        <p style={{ textAlign: 'center', marginTop: '2em', marginBottom: '2em' }}>
          <img src={`${ APP_URL }/images/crate-broken.png`} alt="404" style={{ width: '10em' }}/>
        </p>

        <H3 font="secondary">La página que busca no existe o ha sido removida. Error 404.</H3>

        <p style={{ marginTop: '2em' }}>Qué puede hacer?</p>

        <p style={{ marginTop: '0.5em' }}>Puere ir a<Link to={home.home.path}>home page.</Link> o contáctenos por
          si requiere
          ayuda.</p>
      </GridCell>
    </Grid>
  </div>
)

export default NotFound
