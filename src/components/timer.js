import React from "react"

function timer(){
    let [time, setTime] = React.useState(new Date())
    function tick(){
        setTime(new Date())
    }
    React.useEffect(()=>{
        let timerID = setInterval(()=>tick(), 1000) 
        return ()=>{
            clearInterval(timerID)
        } // функция очистки, срабатывает ПОСЛЕ изменения перед новым реднером 
    },[time]) // второй аргумент - массив зависимостей

    return (
        <div className="timerClass">{time.toLocaleTimeString()}</div>
    )
}

export default timer

