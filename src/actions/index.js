// action creator
const selectSong = (song) => {
  // returns redux action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};

export { selectSong };