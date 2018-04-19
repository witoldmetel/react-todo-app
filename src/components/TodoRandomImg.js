import React from 'react';

class TodoRandomImg extends React.Component {
    render() {
        const imgUrl = `https://api.adorable.io/avatars/55/${this.props.randomFace}.png`;
        return (
                <img src={imgUrl} className="ui mini rounded image" />
        );
    }
}

export default TodoRandomImg;