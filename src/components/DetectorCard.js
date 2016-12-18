import React, {PropTypes} from 'react';

import {
  Card,
  CardActions,
  CardTitle,
  CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class DetectorCard extends React.Component {
  constructor(props) {
    super(props);
  }

  getLastValue(property) {
    let values = this.props.values.values;
    if( !values || !values.length ) return;
    return values[values.length - 1][property];
  }

  getMinValue(property) {
    let values = this.props.values;
    if( !values.values || !values.values.length ) return;
    return values['min'][property];
  }

  getMaxValue(property) {
    let values = this.props.values;
    if( !values.values || !values.values.length ) return;
    return values['max'][property];
  }

  render() {
    return (
      <div className="col-md-6 col-lg-6 detector-card__spacing">
        <Card>
          <CardTitle
            title={this.getTitle()}
            subtitle={this.getSubtitle()}/>
          <CardText>
            Wykres
          </CardText>
        </Card>
      </div>
    );
  }
}

export default DetectorCard;
