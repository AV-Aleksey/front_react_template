
import React, {ReactElement, useEffect} from 'react';

export const Main = (): ReactElement => {
    const fetchData = async () => {
        const res = await fetch('/video/1', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(res)
    } 

    useEffect(() => {
        fetchData()
    }, [])


    return <div>Тест</div>
}
