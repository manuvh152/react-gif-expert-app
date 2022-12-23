import React from 'react'

const GifGridItem = ({id, title, url}) => {

    //console.log(id, title, url);

    return (
        <div className='card'>
            <img src={url} alt={title} className="w-full"/>
            <p className="text-gray-700 text-base">{title}</p>
        </div>
    )
}

export default GifGridItem;