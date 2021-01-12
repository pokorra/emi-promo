import React from 'react';
import {Link} from 'react-router-dom';
import all from './data';
import '../scss/home/main_home.scss';
import emi_logo_pion from '../scss/img/emi_logo_pion.svg';
import wilga_logo from '../scss/img/wilga_logo.svg';
import Snow from './Snow'

const wilga = wilga_logo;
const emi = emi_logo_pion;

const Home = ({snowflake, setSnowflake}) => {

    const start = all[1];
    
    return (
        <div className='container'>
           
            <section className='main-content'>
               <Snow snowflake={snowflake} setSnowflake={setSnowflake}/>
               <h1 className='main-h'>Emi i Tajny Klub Superdziewczyn - Dookoła świata - Nowy Jork</h1>
                <img src={wilga} alt='logo' className='wilga-logo'></img>
                <img src={emi} alt='book-title' className='book-title'></img>
                <h2 className='author-name'>Książka Agnieszki Mielech</h2>
                <p className='text premiere'>{start.date}</p>
                <p className='text'>{start.inv}</p>
                <Link to='/quiz'> <button className='buttons '> {start.btn} </button> </Link>
            </section>

        </div>    
    )
}

export default Home;