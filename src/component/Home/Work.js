import React, { PropTypes } from 'react'
import {Card, CardMedia, CardTitle} from 'material-ui/Card';


class Work extends React.Component {
  render () {
    return(
      <div className="work">
        <a href="http://myflwq.coding.me/myflwq/" className="work-list">
          <Card className="work-card">
            <CardMedia
              overlay={<CardTitle title="我的个人站" subtitle="H5个人简历" />}
            >
              <img src="http://static7.depositphotos.com/1008939/726/i/950/depositphotos_7264018-Programmer.jpg" />
            </CardMedia>
          </Card>
        </a>
        <a href="https://myflwq.github.io/H5" className="work-list">
          <Card className="work-card">
            <CardMedia
              overlay={<CardTitle title="微信开发" subtitle="简单H5应用" />}
            >
              <img src="http://static7.depositphotos.com/1008939/726/i/950/depositphotos_7264018-Programmer.jpg" />
            </CardMedia>
          </Card>
        </a>
        <a href="https://myflwq.github.io/responsive" className="work-list">
          <Card className="work-card">
            <CardMedia
              overlay={<CardTitle title="响应式布局" subtitle="html+css" />}
            >
              <img src="http://static7.depositphotos.com/1008939/726/i/950/depositphotos_7264018-Programmer.jpg" />
            </CardMedia>
          </Card>
        </a>
        <a href="https://myflwq.github.io/web" className="work-list">
          <Card className="work-card">
            <CardMedia
              overlay={<CardTitle title="web开发" subtitle="PC端简单实例" />}
            >
              <img src="http://static7.depositphotos.com/1008939/726/i/950/depositphotos_7264018-Programmer.jpg" />
            </CardMedia>
          </Card>
        </a>
        <a href="https://myflwq.github.io/piano" className="work-list">
          <Card className="work-card">
            <CardMedia
              overlay={<CardTitle title="H5小试" subtitle="来首钢琴曲吧" />}
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
