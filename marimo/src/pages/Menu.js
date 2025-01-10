export default function Menu(props){
  
    if(props.type === 'h2') {
        return <h2>{props.children}</h2>
    }

    return <h1> {props.childern}</h1>
}
