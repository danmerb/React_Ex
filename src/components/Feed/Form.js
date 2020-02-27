import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';


const initState = {
	name: "",
	text: "",
	image: "",
}

 class Form extends Component{
	constructor(props){
		super(props);

		this.state = {
			...initState,
		}

	}

	submitHandler = event => {
		event.preventDefault();

		const Post = {
			name: this.state.name,
               text: this.state.text,
               image: this.state.image,
		}
		
		let config = {
			method : 'POST',
			headers: {
				'Content-type': 'Application/json'
			},
			body: JSON.stringify(Post),
		};

		fetch('https://reactcourseapi.herokuapp.com/user/Post', config)
			.then(res => {
				if( res.ok ){
					res.json()
					.then (data => {
						
						this.props.history.push("/")
					
					})
				} else {
					this.setState({
						errorFlag: true,
					})
				}
			})
	}

	changeHandler = (event) => {
		this.setState({
			[event.target.id]: event.target.value,
		})
	}

	render(){
		return (
			<div className= "full-centered">
		          <form onSubmit={this.submitHandler} className="container">             
                         <input onChange = {this.changeHandler} id="name" placeholder="Nombre" value={this.state.name}></input>
                         <input onChange = {this.changeHandler} id="text" placeholder="Comentario" value={this.state.text}></input>
                         <input onChange = {this.changeHandler} id="image" placeholder="Imagen" value={this.state.image}></input>
                         <button type="submit">Publicar Post</button>
                    </form>
                    {this.state.errorFlag && 
						<div className="alert alert-dismissible alert-danger">
	  						<strong>Oh snap!</strong> Hubo un error al publicar el Post.
						</div>
				}
                    
			</div>
		);
	}
}



export default withRouter(Form) ;