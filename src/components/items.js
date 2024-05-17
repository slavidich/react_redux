import React from "react"
import axios from "axios"
import {Routes, Route, Link} from "react-router-dom"

function items(props){
    let [isLoaded, setisLoaded] = React.useState(false)
    let [items, setItems] = React.useState([])

    function updateItems(){
        axios.get('http://localhost:3000/posts').then(resp=>{
            setItems(resp.data)
            setisLoaded(true)
        })
    }

    React.useEffect(()=>{
        updateItems()
        return(()=>{})
    }, [])
    if (!isLoaded){
        return(
            <div>
                <p>Загрузка</p>
            </div>
        )
    }
    else{
        return(
            <div className="items">
                {items.map(item=>{
                    return <p key={item.id}><Link to={"/items/"+item.id}>{item.id}</Link> {item.title} {item.author}</p>
                })}
            </div>
        )
    }
    
}

export default items