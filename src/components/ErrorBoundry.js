import React, {Component} from "react";


class ErrorBoundry extends Component {
    constructor(props){
        super(props);
        this.state={
            hasError:false
        }
    }

render(){
    if(this.state.hasError){
        return <h1>Not Good</h1>
    }
    return this.props.children;
};

componentDidCatch(error, info){
    this.setState({ hasError:true })
}

}





export default ErrorBoundry;