import React from 'react';
// import PropTypes from 'prop-types';
import classnames from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import s from './Playlist.css';

class PlaylistBar extends React.Component {
  //   static propTypes = {
  // title: PropTypes.string.isRequired,
  // html: PropTypes.string.isRequired,
  //   };

  render() {
    const playlistStyle = classnames(s.playlist, 'fa-4x');
    const playlistRemainingStyle = classnames(s.playlist, s.remaining);
    // const { title, html } = this.props;
    return (
      //   <div className={s.root}>
      //     <div className={s.container}>
      //       <h1>{title}</h1>
      //       <div
      //         // eslint-disable-next-line react/no-danger
      //         dangerouslySetInnerHTML={{ __html: html }}
      //       />
      //     </div>
      //   </div>
      <ul className={s.playlistBar}>
        <li className={playlistStyle} title="Country">
          <FontAwesomeIcon icon="bath" />
        </li>
        <li className={playlistStyle} title="Rock">
          <FontAwesomeIcon icon="coffee" />
        </li>
        <li className={playlistStyle} title="DJ">
          <FontAwesomeIcon icon="bars" />
        </li>
        <li className={playlistStyle} title="Piano">
          <FontAwesomeIcon icon="feather-alt" />
        </li>
        <li className={playlistStyle} title="Soundtrack">
          <FontAwesomeIcon icon="dove" />
        </li>
        <li className={playlistStyle} title="CheerUp">
          <FontAwesomeIcon icon="frown" />
        </li>
        <li className={playlistRemainingStyle} />
      </ul>
    );
  }
}
// className="playlist-icon"
export default withStyles(s)(PlaylistBar);
