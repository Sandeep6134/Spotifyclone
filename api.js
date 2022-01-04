
var axios = require('axios'); 
var spotify = require('spotify-web-api-node');

var spotifyApi = new spotify();

var client_id = '372c803cbb164510b47decdfd13e460c';
var client_secret = 'a10b8d1d3c1649d6846160ab8036a482'; 

const headers ={
  headers: {
    Accept: 'application/json'
  },
  auth: {
    username: client_id,
    password: client_secret,
  },
}

axios.post(
  'https://accounts.spotify.com/api/token',
  'grant_type=client_credentials',
  headers
).then(res =>{
  console.log(res.data.access_token);

  spotifyApi.setAccessToken(res.data.access_token);
  spotifyApi.getArtistAlbums('7dGJo4pcD2V6oG8kP0tJRR').then(
    function(data){
      console.log('Artist albums',data);
    },
    function(err){
      console.log(err);
    }
  );
})

  
  

  

