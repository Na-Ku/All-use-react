import React, { useState } from 'react';

const Call1a = () => {

    const [data, setData] = useState(1)
    const [show, setShow] = useState(false)

    const getData = ()=> [data * 1, data * 2, data *3] 

    // const getRandomData = ()=> {
    //     const random = Math.floor(Math.random()*100) +1
    //     return [random * 2, random *4]
    // }

    return (
        <div>
            <h2>Use Callback Component</h2>
            <br/>
            <div>
                <h4>Data : {data}</h4>
                <button onClick={ ()=> setData(data + 1) }>
                    Add Data Integer
                </button>
                <p>{getData}</p>
            </div>

            <div>
                <h4>Show Data : {show.toString()}</h4>
                <button onClick={()=> setShow(!show)}>
                    Show / Hide
                </button>
            </div>

        </div>
    );
}

export default Call1a;
