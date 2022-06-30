import mySpinner from './spinner.gif';


const Spinner = function () {
    return (
        <div className='spinner'>
            <img src={mySpinner} alt="loading" />
            <br />
            <p>Data is being loaded. please wait ...</p>
        </div>
    );
}

export default Spinner;