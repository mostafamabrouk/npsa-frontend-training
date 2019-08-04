import React, {useState, useEffect} from 'react';

const DummyData = props => {
    const [data, setData] = useState({});
    console.log('data', data);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => setData(json))

    }, [] )
    
    return (
        <div className="">
            <p>Showing dummy data</p>
            { data.title && <h3>{data.title}s</h3>}
        </div>
    )
}
export default DummyData;