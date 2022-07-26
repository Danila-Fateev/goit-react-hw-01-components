import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

export default function FriendListItem({ el }) {
  return (
    <li className={styles.item} id={el.id}>
      <span className={el.isOnline ? styles.online : styles.offline}></span>
      <img className={styles.avatar} src={el.avatar} alt={el.name} width="48" />
      <p className={styles.name}>{el.name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
