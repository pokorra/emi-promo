import React, {useState, useEffect} from 'react';

function useWindowWidth(){
    const [size, setSize] = useState(window.innerWidht);
    useEffect(()=>{
        const handleResize =() => {
        setSize(window.innerWidth)
        }
        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('resize', handleResize);
        }
    }, [])
    return size;
}

export default useWindowWidth;