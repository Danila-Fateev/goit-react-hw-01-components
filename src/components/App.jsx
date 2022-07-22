import Profile from "./Profile/Profile"
import user from "./Profile/user.json"

import Statistics from "./Statistics/Statistics"
import data from "./Statistics/data.json"

import FriendList from "./FriendList/FriendList"
import friends from "./FriendList/friends.json"

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        />
      
      <Statistics
        props={data}
      />
      <FriendList
        props={friends}
      />
    </div>
  );
};
