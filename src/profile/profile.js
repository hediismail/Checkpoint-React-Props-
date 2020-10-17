import React from 'react';
import PropTypes from 'prop-types';

class profile extends React.Component {
    render() {
        const styleTitle = { color: "blue" }
        const styleBio = { color: "aqua", fontFamily: "emoji" }
        return (
            <div>
                <h1 style={styleTitle}>{this.props.fullName}</h1>
                <button onClick={this.props.clicked}>Click ME</button>
                <h3 style={styleBio}>{this.props.bio}</h3>
                <h2 style={styleTitle}>{this.props.profession}</h2>
            </div>
        );
    }
}
profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    clicked:PropTypes.func,
};
export default profile;
