import React from 'react';
import { ListGroup, Tab } from "react-bootstrap";
import genreData from "../../fakeapi/Genre.json"

function List(){
    return(
        <div>
            <Tab.Container>
                <ListGroup>
                    <ListGroup.Item>
                    All Movies
                    </ListGroup.Item>
                    {genreData.map((genre,index)=>{
                     return(    
                        <ListGroup.Item>
                            {genre.name}
                        </ListGroup.Item>
                     )
                    })}
                </ListGroup>
            </Tab.Container>
        </div>
    )
}

export default List;