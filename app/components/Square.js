var React = require('react');
var PropTypes = require('prop-types');

class Square extends React.Component {
  render() {
    const { black } = this.props;
    const fill = black ? 'black' : 'white';
    const stroke = black ? 'white' : 'black';

    return (
      <div style={{
        backgroundColor: fill,
        color: stroke,
        width: '100%',
        height: '100%'
        }}>
        {this.props.children}
      </div>
    );
  }
}

Square.propTypes = {
  black: PropTypes.bool
};
module.exports = Square;
