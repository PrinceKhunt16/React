import React from 'react'

const Switch = (props) => {
    return (
        <div className="form-check form-switch">
            <input {...props} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" htmlFor="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" />
        </div>
    )
}

export default Switch;