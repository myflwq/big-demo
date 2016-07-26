import React from 'react';
// import Button from './NavButton';
import Search from './Search';
import LeftNav from './LeftNav';
class Header extends React.Component {
  getStyles() {
    return {
      root: {
        height:'260px',
        color: '#fff',
        backgroundColor: '#00bcd4',
        textAlign:'center',
        lineHeight:'200px',
        fontSize: '30px',
      }
    }
  }
  render () {
    const styles = this.getStyles();
    return(
      <div style={styles.root}>
        <LeftNav />
        <Search />
      </div>
    )
  }
}

export default Header;
