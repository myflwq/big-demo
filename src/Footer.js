import React from 'react';
class Footer extends React.Component {
  getStyles() {
    return {
      footer: {
        padding: '30px 0',
        color: '#fff',
        backgroundColor: '#212121',
        textAlign:'center',
        lineHeight:'200px',
        fontSize: '30px'
      },
      img: {
        display: 'block',
        width: '100%',
        maxWidth: '230px',
        margin: '20px auto',
      }

    }
  }

  render () {
    const styles = this.getStyles();
    return(
      <div style={styles.footer}>
        <img src='https://raw.githubusercontent.com/myflwq/big-demo/master/src/img/1.png' style={styles.img}/>
      </div>
    )
  }
}



export default Footer;
