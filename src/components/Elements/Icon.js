import React from 'react';
import './style.scss';

const icons = {
  'arrow-up': (
    <svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.47224 6.76148L8.46445 6.63604C8.46445 6.12624 8.84594 5.70554 9.33901 5.64383L9.46445 5.63604L19.3639 5.63604L19.4243 5.63785L19.5113 5.64682L19.6406 5.67481L19.7581 5.71672L19.8576 5.76619L19.9827 5.85031L20.0711 5.92893L20.1223 5.98411L20.1987 6.08518L20.2566 6.18482L20.3041 6.29443L20.336 6.40037L20.358 6.52654L20.3639 6.63604L20.3639 16.5355C20.3639 17.0878 19.9162 17.5355 19.3639 17.5355C18.8541 17.5355 18.4334 17.1541 18.3717 16.661L18.3639 16.5355L18.3627 9.05152L7.34313 20.0711C6.95261 20.4616 6.31944 20.4616 5.92892 20.0711C5.53839 19.6805 5.53839 19.0474 5.92892 18.6569L16.9499 7.63589L9.46445 7.63604C8.95465 7.63604 8.53395 7.25456 8.47224 6.76148L8.46445 6.63604L8.47224 6.76148Z"
      />
    </svg>
  ),
  'arrow-down': (
    <svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.2385 8.47226L19.364 8.46447C19.8738 8.46447 20.2945 8.84595 20.3562 9.33903L20.364 9.46447L20.364 19.364L20.3621 19.4243L20.3532 19.5113L20.3252 19.6406L20.2833 19.7581L20.2338 19.8576L20.1497 19.9827L20.0711 20.0711L20.0159 20.1223L19.9148 20.1987L19.8152 20.2566L19.7056 20.3041L19.5996 20.336L19.4735 20.358L19.364 20.364L9.46446 20.364C8.91218 20.364 8.46446 19.9162 8.46446 19.364C8.46446 18.8542 8.84595 18.4335 9.33903 18.3718L9.46446 18.364L16.9485 18.3627L5.92893 7.34315C5.53841 6.95262 5.53841 6.31946 5.92893 5.92893C6.31946 5.53841 6.95262 5.53841 7.34314 5.92893L18.3641 16.9499L18.364 9.46447C18.364 8.95467 18.7454 8.53397 19.2385 8.47226L19.364 8.46447L19.2385 8.47226Z"
      />
    </svg>
  ),
};

class Icon extends React.Component {
  getSvg(type = '') {
    if (icons[type]) return icons[type];
    else return 'N/A';
  }

  render() {
    return (
      <i
        className={
          'icon-wrapper ' +
          (this.props.clickable ? 'clickable ' : '') +
          (this.props.className ? this.props.className : '')
        }
        onClick={this.props.onClick}
      >
        {this.getSvg(this.props.type)}
      </i>
    );
  }
}

export default Icon;
