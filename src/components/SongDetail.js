import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  const displaySong = () => {
    if(!song) {
      return <div>Select a song</div>;
    }

    return (
      <div>
        <h3>Song Details</h3>
        <p>
          Title: {song.title}
          <br />
          Duration: {song.duration}
        </p>
      </div>
    );
  };

  return (
    <div>{displaySong()}</div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);