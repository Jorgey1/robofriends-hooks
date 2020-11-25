import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css';


function App() {

    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState("")
    const [count, setCount] = useState(0)
    // constructor() {
    //     super()
    //     this.state = {
    //         robots: [],
    //         searchfield: ''
    //     }
    // }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {setRobots( users )});
    }, [])
    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(users => {this.setState({ robots: users })});
    // }

    const onSearchChange = (event) => {      
        setSearchfield( searchfield )  
    }

    const filteredRobots = robots.filter(robots => {
        return robots.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?
        <h1>LOADING</h1> :
    (
        <div className='tc'>
            <h1 className='f2'>RoboFriends</h1>
            <button onClick={() => setCount(count + 1)}> Click me! {count} </button>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <CardList robots={filteredRobots}/>
            </Scroll>
        </div>   
    ); 
}


export default App;