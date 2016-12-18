import DetectorCard from "./DetectorCard";

class HumidityCard extends DetectorCard {
  constructor(props) {
    super(props);
  }

  getTitle() {
    return `Wilgotność: ${this.getLastValue('humidity')}%`;
  }

  getSubtitle() {
    return `Min: ${this.getMinValue('humidity')}% | Max: ${this.getMaxValue('humidity')}%`;
  }
}
export default HumidityCard;
