import React from "react";
import {Link} from 'react-router-dom';
import "../styles/LandingPage.css";


const LandingPage = () => {
    return (
        <>
            <div className="wrapper">
                <div className="container1">
                    <div className="box1">
                        <img src="https://images.unsplash.com/photo-1475070929565-c985b496cb9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZSUyMGRhcmt8ZW58MHx8MHx8&w=1000&q=80" alt="Photos" />
                    </div>
                    <div className="box2">
                        <p><h3>MEGHANA B</h3></p>
                        <Link to='/PostViewPage'><button>Enter</button></Link>
                    </div>                
                </div>
            </div> 
        </>
    )
}

export default LandingPage;