import { useState } from "react";
import moon from './images/moon-build.png'

export default function Build()
{
    console.log("build")
    const [regionsLeft, setRegionsLeft] = useState(['Mare Frigoris', 'Mare Imbrium', 'Oceanus Procellarum', 'Mare Cognitum', 'Mare Humorum'])
    const [regionsRight, setregionsRight] = useState(['Mare Serenitatis', 'Mare Crisium', 'Mare Tranquilitatis', 'Mare Fecunditatis', 'Mare Nectaris'])
    const Style = {
        backgroundImage : `url(${moon})`,
    }
    const locationsLeft = regionsLeft.map(region => <div className="location">{region}</div>)
    const locationsRight = regionsLeft.map(region => <div className="location">{region}</div>)
    return (
        <div className="build" style={Style}>
            <div className="locations-left">
                {locationsLeft}
            </div>
            <div className="build-title"> Where TO ? </div>
            <div className="loctions-right">
                {locationsRight}
            </div>
        </div>        
    )
}