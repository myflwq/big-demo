import React from 'react';



class Footer extends React.Component {
  getStyles() {
    return {
      footer: {
        height:'200px',
        color: '#fff',
        backgroundColor: '#212121',
        borderColor: '#2db7f5',
        padding: '4px 15px 5px 15px',
        fontSize: '14px'
      }
    }
  }

  render () {
    const styles = this.getStyles();
    return(
      <div style={styles.footer}>
      footer
      </div>
    )
  }
}



export default Footer;
