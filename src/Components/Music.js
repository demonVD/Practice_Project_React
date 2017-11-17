import React from 'react';
import axios from 'axios'
//import Axios from 'react-axios';
class Music extends React.Component{
    constructor(){
        super();
        this.state={
            tracks:[
                {
                    title:"Lamborghini",
                    artist:"Diljit"
                },
                {
                    title:"illusion",
                    artist:"Poets and fall"
                }
            ],
            users:[]
        }
    }
    handleSubmit(e){
       // console.log("yes");
      // site=this.refs.track.value;
        console.log(this.refs.track.value);
        e.preventDefault();

    }
    componentWillMount(){
        axios.get("https://jsonplaceholder.typicode.com/users").then(
            function(response){
                //console.log(response);
                var users=response.data;
               this.setState({users:users});
                console.log(this.state.users);
            }.bind(this))
            .catch(function(error){
                console.log(error);
            });
    }
    render(){
        var users=this.state.users;
        return(
            <div>
                <h1>Music</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                <select ref="track">{this.state.tracks.map(track=>
                    <option value={track.title} key={track.title}>{track.title}</option>)}
                </select>
                <div>{users.map(user=><h4 key={user.id}>{user.name}</h4>)}</div>
                <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}
export default Music;