import React ,{useState} from 'react'
import RunEffectOnlyOnceuseEffectMouse from './RunEffectOnlyOnceuseEffectMouse';

function MouseContainerUseEffectWithcleanup() {
    const [display, setDisplay] = useState(true);
    return (
        <div>
            <button onClick={()=>setDisplay(!display)}>Toggle Display</button>

            {/* NOTE:------ false hote ke saath hi component unmount ho jaayega but uska event chalte rhega generrally jo humne nhi chahiye so we use clean up  */}
            {display && <RunEffectOnlyOnceuseEffectMouse/>}

        </div>
    )
}

export default MouseContainerUseEffectWithcleanup;
