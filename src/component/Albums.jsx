import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export const Albums = () => {

    const [albums, setAlbums] = useState([]);
    const [filteredAlbums, setFilteredAlbums] = useState([]);
    const [search, setSearch] = useState([]);

    const getAlbums = async () => {
        try {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/albums"
            );
            setAlbums(response.data);
            setFilteredAlbums(response.data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {

        const result = albums.filter((album) => {
            return album.title.toLowerCase().match(search.toLowerCase());
        })
        setFilteredAlbums(result)

    }, [search]);

    useEffect(() => {
        getAlbums();
    }, [])

    

    return (
        <div>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className='form-control mb-2' id='searchval'
            />

            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>Id</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        filteredAlbums.map(({ userId, id, title }) => {

                            return (
                                <tr>
                                    <td >{userId}</td>
                                    <td>{id}</td>
                                    <td>{title}</td>





                                </tr>


                            )
                        })
                    }
                </tbody>


            </table>
        </div>
    )
}
