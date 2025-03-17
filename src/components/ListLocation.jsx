import React from 'react'
import './LocationList.css'

const ListLocation = () => {

    const dummyData = [
        {
            "id": 1,
            "name": "Paris",
            "dateVisited": "2025-08-30",
            "rating": 5,
            "photoUrl": "none",
            "description": "very large tower"
        },
        {
            "id": 2,
            "name": "Sibiu",
            "dateVisited": "2004-01-14",
            "rating": 5,
            "photoUrl": "none",
            "description": "home turf"
        }
    ]

  return (
    <div class="container">
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Visited</th>
                    <th>Name</th>
                    <th>Date Visited</th>
                    <th>Rating/5</th>
                </tr>
            </thead>
            <tbody>
                {
                    dummyData.map(location =>
                        <tr key={location.id}>
                            <td><input type="checkbox" name="select"/></td>
                            <td>{location.name}</td>
                            <td>{location.dateVisited}</td>
                            <td>{location.rating}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListLocation