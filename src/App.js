import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { Typography } from '@material-ui/core';
import { fetchData } from './api';

import logo from './images/image.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data: data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ data: data, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={logo} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Typography color='textSecondary'>
          Last Updated: {new Date(data.lastUpdate).toDateString()}
        </Typography>
        <Cards data={data} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
