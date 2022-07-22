export default function FriendList({props}) {
    return (
        <ul class="friend_list">
            {props.map(el => <li class="item" id={el.id}>
                <span class="status"></span>
                <img class="avatar" src={el.avatar} alt={el.name} width="48" />
                <p class="name">{el.name}</p>
            </li>)}
    </ul>
)
}