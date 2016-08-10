import React, { PropTypes } from 'react'
import {Card, CardMedia, CardTitle} from 'material-ui/Card';


class Work extends React.Component {
  render () {
    return(
      <div className="work">
        <a href="http://myflwq.github.io" className="work-list">
          <Card className="work-card">
            <CardMedia
              overlay={<CardTitle title="我的个人站" subtitle="个人简历" />}
            >
              <img src="http://static7.depositphotos.com/1008939/726/i/950/depositphotos_7264018-Programmer.jpg" />
            </CardMedia>
          </Card>
        </a>
        <a href="#" className="work-list">
          <Card className="work-card">
            <CardMedia
              overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
            >
              <img src="http://static7.depositphotos.com/1008939/726/i/950/depositphotos_7264018-Programmer.jpg" />
            </CardMedia>
          </Card>
        </a>
        <a href="#" className="work-list">
          <Card className="work-card">
            <CardMedia
              overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
            >
              <img src="http://static7.depositphotos.com/1008939/726/i/950/depositphotos_7264018-Programmer.jpg" />
            </CardMedia>
          </Card>
        </a>
        <a href="#" className="work-list">
          <Card className="work-card">
            <CardMedia
              overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
            >
              <img src="http://static7.depositphotos.com/1008939/726/i/950/depositphotos_7264018-Programmer.jpg" />
            </CardMedia>
          </Card>
        </a>
        <a href="#" className="work-list">
          <Card className="work-card">
            <CardMedia
              overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
            >
              <img src="http://static7.depositphotos.com/1008939/726/i/950/depositphotos_7264018-Programmer.jpg" />
            </CardMedia>
          </Card>
        </a>
      </div>
    )
  }
}

export default Work;
