import React from 'react'
import PropTypes from 'prop-types';
class ima extends React.Component {
    render() {

        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
ima.propTypes = {
    children: PropTypes.element.isRequired
  };
  

export default ima
