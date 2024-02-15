import React from 'react'

const Total = (props) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Total Cars:</h1>
            <h1>{props.cars.length}</h1>
            {/* change 4 to props.cars.length */}
            
        </div>
    )
}

export default Total