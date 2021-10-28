import React from 'react'
import moment from 'moment'
import './CurrentDate.scss'

const CurrentDate = () => {
    return (
        <div className='current-date'>
            <p className='current-date__date'>{moment().format('ddd')}, <span>{moment().format('LL')}</span></p>
        </div>
    )
}

export default CurrentDate
