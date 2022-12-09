import React, { Component } from 'react'

export class ErrorBoundaryClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        hasError:false
      }
    }

     // Update state so the next render will show the fallback UI.
    static getDerivedStateFromError() {
        return { hasError: true };
    }

    // function log the error to an error reporting service
    componentDidCatch(error,info){
        console.log(error)
        console.log(info)
    }

  render() {
    if(this.state.hasError===true){
      return <h3 className='error'> Number Less than 5!! </h3>
    }
    return this.props.children
  }
}

export default ErrorBoundaryClass