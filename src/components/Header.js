import React from 'react';

class Header extends React.Component {
  getStyles() {
    return {
      root: {
        height:'200px',
        color: '#fff',
        backgroundColor: '#00bcd4',
        borderColor: '#2db7f5',
        padding: '4px 15px 5px 15px',
        fontSize: '14px'
      }
    }
  }
  render () {
    const styles = this.getStyles();
    return(
      <div style={styles.root}>
      header
      </div>
    )
  }
}

export default Header;
