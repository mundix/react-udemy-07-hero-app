import React from 'react'
import { HeroList } from '../heroes/HeroList';

export const DcScreen = () => {
    
    const publisher = 'DC Comics';

    return (
        <div>
            <h1>DC Comics</h1>
            <hr />
            <HeroList publisher={publisher}/>
        </div>
    )
}
