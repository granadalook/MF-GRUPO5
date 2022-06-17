import React, { useEffect, useState } from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import './GetMemes.css'

const GetMemes = () => {

    const [memeData, setMemeData] = useState({ data: { memes: [] } })
    const APIURL = "https://api.imgflip.com/get_memes"

    useEffect(() => {
        getAllProductSuppliersAction();
    }, [])

    const getAllProductSuppliersAction = async () => {
        let result = await fetch(`${APIURL}`, { method: "GET" });
        const dataResult = await result.json();
        setMemeData(dataResult);
    }

    return (
        <div className='cardGroup'>
            {memeData.data.memes.map((meme, index) => {
                return (
                    <Card key={index} style={{ width: 'auto', display: 'flex', justifyContent: 'center', flexDirection: 'column', margin: '25px 25px', borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px' }}>
                        <Card.Img variant="top" src={meme.url} style={{ width: '18rem', height: '18rem'}} />
                        <Card.Body>
                            <Card.Title style={{textAlign: 'center', fontSize: 'large', fontWeight: 'bold', padding: '10px 0px'}}>{meme.name}</Card.Title>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>
    )
}

export default GetMemes
