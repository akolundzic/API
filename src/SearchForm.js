import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchForm = function ({ setPosts }) {

    const changeHandler = (event) => {

        const url = event.target.value.length ? `http://hn.algolia.com/api/v1/search?query=${event.target.value}&hitsPerPage=10&page=1` : "http://hn.algolia.com/api/v1/search?tags=story&hitsPerPage=10&page=1";

        console.log(url)
            

        fetch(url)
            .then(resp => {
                return resp.json()
            })
            .then(data => {
                setPosts(data.hits)
            })
            .catch(err => console.error(err))
    }

    return (
        <div className="search-form">
            <FontAwesomeIcon className='blue-font' icon={faMagnifyingGlass} />
            <input onChange={changeHandler} type="text" name="search" id="search" />
        </div>
    );

}

export default SearchForm;