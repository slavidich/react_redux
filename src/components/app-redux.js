import React from "react";
import { connect } from "react-redux"

class ReduxApp extends React.Component {
    additem(){
        console.log('action done', this.inputValue.value)
        this.props.addElement(this.inputValue.value)
        this.inputValue.value = ''
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <input type="text" ref={input => {
                        this.inputValue= input
                    }}/>
                <button onClick={this.additem.bind(this)}>click me </button>
                <ul>
                    {this.props.frameworks.map(item=>
                        <li key={item}>{item}</li>
                    )}
                </ul>
            </div>
        )
    }
}

export default connect(
    //mapStateToProps
    state => ({
        libraries: state.libraries,
        frameworks: state.frameworks
    }),
    //mapDispatchToProps
    dispatch => ({
        addElement: (elem)=>{
            dispatch({type:'ADD_FRAMEWORK', payload: elem})
        }
    })
    )(ReduxApp)