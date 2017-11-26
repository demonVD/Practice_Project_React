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
            timezone:[],
            summary:[]
        }
    }
    handleSubmit(e){
       // console.log("yes");
      // site=this.refs.track.value;
        console.log(this.refs.track.value);
        axios.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/d11fcd47dc2d9ce975278e7e52e38550/12.971599,77.594563").then(
            function(response){
                //console.log(response);
                console.log("going to url");
                var forecast=response.data;
                console.log(forecast);
                var timezone=forecast.timezone
                var summary=forecast.daily.summary;
               this.setState({timezone:timezone,
            summary:summary});
                console.log(this.state.timezone);
                console.log("daily"+this.state.summary);
            }.bind(this))
            .catch(function(error){
                console.log(error);
            });
        e.preventDefault();

    }
    componentWillMount(){
      
    }
    render(){
        var timezone=this.state.timezone;
        var summary=this.state.summary;
        return(
            <div>
                <h1>Music</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                <select ref="track">{this.state.tracks.map(track=>
                    <option value={track.title} key={track.title}>{track.title}</option>)}
                </select>
                <div><h1>{timezone}</h1><h4>{summary}</h4></div>
                <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}
export default Music;