import { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HeadBlock extends Component {

    render() {
        return(
            <header>
                <h1>Documenty</h1>
                
                <ul className="main-nav">
                    <li><Link to='/names'>Names</Link></li>
                    <li><Link to='/festivals'>Festivals</Link></li>
                    <li><Link to='/paragraphs'>Paragraphs</Link></li>
                    <li><Link to='/live'>Live</Link></li>
                </ul>
            </header>
        )
    }
}