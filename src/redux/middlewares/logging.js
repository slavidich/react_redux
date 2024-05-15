// export default function logging(){
//     return function(next){
//         return function(action){
//             console.log('wtf')
//             return next(action) // чтобы дальше продолжалось
//         }
//     }
// }
const logging = store => next => action =>{
    console.log(`middleware ${action.type}`)
    return next(action)
}
export default logging