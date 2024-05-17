import React from "react";
import { connect } from "react-redux"
import Timer from "./timer"
import Items from "./items"
import Item from "./item"
import {Routes, Route, Link} from "react-router-dom"


function ReduxApp(props){
    console.log(props)
    const inputRef = React.useRef(null)
    function additem(){
        console.log('action done', )
        props.addElement(inputRef.current.value)
        inputRef.current.value=''
    }
    return(
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/items">Items</Link>

            </nav>
                <Routes>
                    <Route  path="/" element={<Timer />} />
                    <Route  path="/items" element={<Items />} />
                    <Route  path="/items/:id" element={<Item/>}></Route>
                    <Route path="*" element={<p>ОШИБКА</p>}/>
                </Routes>

            <input type="text" ref={inputRef}/>
            <button onClick={()=> additem()}>click me </button>
            <ul>
                {props.libraries.map(item=>
                    <li key={item}>{item}</li>
                )}
            </ul> 
        </>)
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
            dispatch({type:'ADD_LIBRARY', payload: elem})
        }
    })
    )(ReduxApp)