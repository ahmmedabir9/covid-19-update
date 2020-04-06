import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';
import loading from '../../images/loading.gif';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) return <img className={styles.loadingImage} src={loading} />;

  let recoveryRate = ((recovered.value * 100) / confirmed.value).toFixed(2);
  let deathRate = ((deaths.value * 100) / confirmed.value).toFixed(2);

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify='center'>
        <Grid
          item
          component={Card}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Infected
            </Typography>
            <Typography variant='h3'>
              <CountUp
                start={0}
                end={confirmed.value}
                duration={1.5}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary'>Total Cases</Typography>
            <Typography variant='body2'>
              Number of Active Cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Recovered
            </Typography>
            <Typography variant='h3'>
              <CountUp
                start={0}
                end={recovered.value}
                duration={1.5}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary'>
              Recovery Rate: {recoveryRate}%
            </Typography>
            <Typography variant='body2'>
              Number of Active Cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Deaths
            </Typography>
            <Typography variant='h3'>
              <CountUp
                start={0}
                end={deaths.value}
                duration={1.5}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary'>
              Death Rate: {deathRate}%
            </Typography>
            <Typography variant='body2'>
              Number of Active Cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
