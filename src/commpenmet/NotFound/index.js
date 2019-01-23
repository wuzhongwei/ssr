import React, { Component } from 'react';



class NotFound extends Component {

    componentWillMount() { // 服务端渲染才执行
        const {staticContext} = this.props;

        staticContext && (staticContext.NotFound = true)
    }

    render() {
         
        return (
            <div>
                404,sorry, page not found
            </div>
        )
    }
    
}
export default NotFound;
