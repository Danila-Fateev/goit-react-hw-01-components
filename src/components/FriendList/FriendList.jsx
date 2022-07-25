import styles from './FriendList.module.css';
import PropTypes from 'prop-types';

export default function FriendList({ props }) {
  return (
    <ul className={styles.friend_list}>
      <FriendListItem props={props} />
    </ul>
  );
}

function FriendListItem({ props }) {
  return (
    <>
      {props.map(el => (
        <li className={styles.item} id={el.id}>
          <span className={el.isOnline ? styles.online : styles.offline}></span>
          <img
            className={styles.avatar}
            src={el.avatar}
            alt={el.name}
            width="48"
          />
          <p className={styles.name}>{el.name}</p>
        </li>
      ))}
    </>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  id: PropTypes.number,
  name: PropTypes.string,
  avatar: PropTypes.string,
};
