import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import AppsIcon from '@material-ui/icons/Apps'
import {Avatar} from '@material-ui/core'
import Search from "../pages/Search"


function Home () {
    return (
        <div className='home'>
            <div className='home_header'>
                <div className='home_headerLEFT'>
                <Link to='/about'>About</Link>
                <Link to='/store'>Store</Link>
                
                </div>
                <div className='home_headerRIGHT'>
                <Link to='/gmail'>Gmail</Link>
                <Link to='/images'>Images</Link>
                <AppsIcon/>
                <Avatar />
                </div>
            </div>

            <div className="home_body">
             <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" 
             alt="">
             </img>

             <div className="home_inputContainer">
                <Search hideButtons/>
             </div>
            </div>
        </div>
    )
}

export default Home