import React from 'react';
import data from '../data/data.json';
import icon from '../mobile.png';
import Resume from './Resume';
import {Link} from 'react-router-dom'

let Home=()=>{
	let card_details=data.profile;
	//console.log(card_details);
	return(
		
		<div className="row justify-content-center">
		    {card_details.map((values,index)=>(
		    	<section className="col-lg-4 col-md-4 col-sm-10 mt-2" key={index}>
                    <div className="card text-center">
                        <article className="card-body">
                            <img src= {icon} alt="profile image" style={
                            	{width:"50%"}}/>
                        <h1>{values.details.name}</h1>
                        <h3 className="text-warning">{ values.details.role}</h3>
                        <h4 className="text-primary">{ values.details.mobile }</h4>
                        <h4 className="text-success">{ values.details.email }</h4>
                        <Link to={{pathname:'/resume',data1:{id:index} }}className="btn btn-danger">View Price</Link>
                        </article>
                        

                        
                    </div>
		    	</section>)
		    	)}
		</div>
		);
}
export default Home;