import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

export default function FriendListItem({ prop }) {
  return (
    <li className={styles.item} id={prop.id} key={prop.id.toString()}>
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
  prop: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
