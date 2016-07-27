import React from 'react';
// import Button from './NavButton';
import Search from './Search';
import Hamburger from './Hamburger';
class Header extends React.Component {
  getStyles() {
    return {
      root: {

        color: '#fff',
        backgroundColor: '#00bcd4',
        textAlign:'center',
        fontSize: '30px',
      }
    }
  }
  render () {
    const styles = this.getStyles();
    return(
      <div style={styles.root}>
        <Hamburger />
        <Search />
      </div>
    )
  }
}

export default Header;
