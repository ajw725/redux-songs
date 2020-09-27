import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Rosanna', duration: '4:30' },
    { title: 'Sister Christian', duration: '5:01' },
    { title: 'Thunder Road', duration: '3:45' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if(action.type !== 'SONG_SELECTED') {
    return selectedSong;
  }

  return action.payload;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});