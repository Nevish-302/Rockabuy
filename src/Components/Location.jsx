import './Build.css'

export default function Location(props)
{
    const line = {
        width: 'calc(25vh*1.41)',
        height : `18%`,
        marginRight: '4vw',
        borderBottom: `2px solid #00A3FF`,
        transformOrigin: `left`,
           
    }
    const linemargin = props.direction == 'left' ? {marginRight : props.area.marginR} : {marginLeft : props.area.marginL} 
    return (
        <div className="location" style={props.style}>
            { props.direction == 'left' && <div className={`${props.direction} name`} style={{marginLeft : props.area.marginL}} >{props.area.name}</div>}
            <div className="line" style={
                {...line, 
                transform : props.area.degree,
                transformOrigin:props.direction, 
                ...linemargin}}></div>
            {props.direction == 'right' && <div className={`${props.direction} name`} style={{marginRight : props.area.marginR}} >{props.area.name}</div>}
            </div>)
}