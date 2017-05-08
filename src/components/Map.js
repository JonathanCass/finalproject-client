import React from 'react'
import Map from './Map'
import styles from './Map.styles'

class Map extends React.Component {
    constructor() {
        super()
    }

render() {
        return (
            <div id="container">
                <h4>Parks In Your Area</h4>
                <div id="map"></div>
            </div>
        )
    }
}

export default Map