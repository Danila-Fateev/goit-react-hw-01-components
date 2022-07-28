import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

export default function FriendListItem({ myKey, prop }) {
  return (
    <li className={styles.item} key={myKey} id={prop.id}>
      <span className={prop.isOnline ? styles.online : styles.offline}></span>
      <img
        className={styles.avatar}
        src={prop.avatar}
        alt={prop.name}
        width="48"
      />
      <p className={styles.name}>{prop.name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  myKey: PropTypes.string.isRequired,
  prop: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
