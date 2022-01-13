import { useState } from 'react'



const Search = ({resultList = ['Luke Skywalker', 'R2-D2', 'Obi Wan Kenobi', 'Luke', 'Luke2', 'Luke3']}) => {
    const [ searchText, setSearchText ] = useState('')
    const [ list, setList ] = useState([])

    const handleSearchClick = () => {
        if(searchText.length > 0) {
            const filterList = resultList.filter(list => list.toLowerCase().includes(searchText.toLowerCase()))
            setList(filterList)
        }
    }

    const mapList = () => {
        if(list.length > 0) {
            const determineItemAmount = () => {
                if(list.length > 3 ) list.length = 3
                return list
            }

            const mapListItems = determineItemAmount().map(listItem => 
                <li key={listItem}>{listItem}</li>
            )
    
            return <ul>{mapListItems}</ul>
        }
        return null
    }
    
    return (
        <div>
            <input type="text" onChange={(event) => setSearchText(event.target.value)}/>
            <button onClick={handleSearchClick}>Search</button>
            {mapList()}
        </div>
    )
}

export default Search