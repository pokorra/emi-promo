import React from 'react';
import {Link} from 'react-router-dom';
import data from './data';
import '../scss/home/main_home.scss';
import emi_logo_pion from '../scss/img/emi_logo_pion.svg';
import wilga_logo from '../scss/img/wilga_logo.svg';


const wilga = wilga_logo;
const emi = emi_logo_pion;

const Home = () => {
    const start = data.start;
    return (
        <div className='container'>
            <section className='main-content'>
                <img src={wilga} alt='logo' className='wilga-logo'></img>
                <img src={emi} alt='book-title' className='book-title'></img>

                <p className='text premiere'>{start.date}</p>
                <p className='text'>{start.inv}</p>
                <Link to='/quiz'> <button className='buttons '> {start.btn} </button> </Link>
            </section>

        </div>    
    )
}

export default Home;