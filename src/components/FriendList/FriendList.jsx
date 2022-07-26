import styles from './FriendList.module.css';
import FriendListItem from './FriendListItem';

export default function FriendList({ props }) {
  return (
    <ul className={styles.friend_list}>
      {props.map(el => (
        <FriendListItem el={el} />
      ))}
    </ul>
  );
}
