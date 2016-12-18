import DetectorCard from "./DetectorCard";

class TemperatureCard extends DetectorCard {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.minmaxvalues = '1234324';
  }

  getTitle() {
    return `Temp: ${this.getLastValue('temperature')}°C`;
  }

  getSubtitle() {
    return `Min: ${this.getMinValue('temperature')}°C | Max: ${this.getMaxValue('temperature')}°C`;
  }
}

export default TemperatureCard;
