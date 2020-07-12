import React from 'react'

import Spinner from '../../static/images/spinner.gif'

const spinner = () => {
    return (
        <img src={Spinner} alt="spinner" style={{width: '200px', margin: 'auto', display: 'block'}}/>
    )
}

export default spinner
