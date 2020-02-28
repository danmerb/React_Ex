import React from 'react';
import {withRouter,Link}  from 'react-router-dom';
import {Logout} from './ReactFeed';


const Nav = props => {

    
	return(
		<nav id="main-nav" className="navbar navbar-dark bg-dark">
			<h1>React Feed </h1>
			<ul>
                <div><em>{props.username}</em></div>
					
				
				<li>
					<a onClick = {e => {
						e.preventDefault();
						props.history.push('/');
					}} href="#main-nav">Home</a>
				</li>
				
				<li>
					<a onClick = {e => {
						e.preventDefault();
						props.history.push('/');
					}} href="#main-nav">Perfil</a>
				</li>
				
				<li>
					<a onClick = {e => {
						e.preventDefault();
						localStorage.removeItem('token')
                        props.history.push('/login');
                        
					}} href="#main-nav">Logout</a>
				</li>

				
			</ul>
		</nav>
	);
}

export default withRouter(Nav);