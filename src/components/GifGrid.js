import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className='animate_animated animate_flash'>{category}</h3>

            {loading && <p>Loading</p>}

            <div className='card-grid'>
                {
                    images.map( img => (
                        <GifGridItem className="px-6 py-4"
                            key={img.id}
                            {...img}/>
                    ))
                }
            </div>
        </>
    )
}


export default GifGrid;