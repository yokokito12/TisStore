import React from 'react';

// Stateless or functional component, doesn't have a state
const Ninja = ({ninjas}) => {
   
        const ninjaList = ninjas.map(ninja => {
            // if (ninja.age > 21){
            //     return (
            //         <div className="ninja" key={ ninja.id }>
            //             <div>Name: { ninja.name }</div>
            //             <div>Age: { ninja.age }</div>
            //             <div>Belt: { ninja.belt }</div>
            //         </div>
            //     )
            // }else{
            //     return null;
            // }

        return ninja.age > 20 ? (
                 (
                    <div className="ninja" key={ ninja.id }>
                        <div>Name: { ninja.name }</div>
                        <div>Age: { ninja.age }</div>
                        <div>Belt: { ninja.belt }</div>
                    </div>
                )
            ) : null;
        })
   
    
    return (
        <div className="ninja-list">
            { ninjaList}
        </div>
    )
}

export default Ninja;