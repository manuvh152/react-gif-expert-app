import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch Man']);

    //const handleAdd = () => {
        //setCategories([...categories, 'Death Note']);
        //setCategories(cats => [...cats, 'Death Note']);

    //}

    return(
        <>
            <h2 className="font-bold text-xl mb-2">GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />

            <ol className='my-6'>
                {
                    categories.map(category => (
                        <GifGrid 
                            key={category}
                            category={category}/>
                    ))
                }
            </ol>

        </>
    )

}

export default GifExpertApp; 