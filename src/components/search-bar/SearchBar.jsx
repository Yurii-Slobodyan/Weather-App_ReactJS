import React from 'react'
import './SearchBar.scss'
import CurrentDate from './CurrentDate'
import CurrentTime from './CurrentTime'

class SearchBar extends React.Component {

    onInputChange(e){
        this.props.inputChange(e)
    }

    onFormSubmit(e){
        e.preventDefault()
        this.props.formSubmitted()
    }

    render(){
        const location = this.props.location

        return (
            <>
                <div className='search-bar'>
                    <div className='current-date'>
                        <CurrentTime />
                    </div>
                    <form onSubmit={ (e) => this.onFormSubmit(e) }>
                        <input type='text' value={location} name='user-city' autoFocus={true} autoComplete='off' className='search-bar__userCity' onChange={ (e) => this.onInputChange(e) }/>
                        <button type='submit' className='search-bar__btn'>show weather</button>
                    </form>
                    <div className='current-date'>
                        <CurrentDate />
                    </div>
                </div>
            </>
        )
    }
    
}

export default SearchBar
