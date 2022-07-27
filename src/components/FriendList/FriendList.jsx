import styles from './FriendList.module.css';
import FriendListItem from './FriendListItem';

export default function FriendList({ props }) {
  return (
    <ul className={styles.friend_list}>
      {props.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          id={id}
        />
      ))}
    </ul>
  );
}
