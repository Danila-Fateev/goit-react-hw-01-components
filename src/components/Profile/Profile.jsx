import styles from "./Profile.module.css"

export default function Profile({ username, tag, location, avatar, stats }) {
    
    return <div className={styles.profile} class="profile">
        <div className={styles.description} class="description">
            <img
            src={avatar}
                alt="User avatar"
                className={styles.avatar}
            class="avatar"
            />
            <p className={styles.name} class="name">{username}</p>
            <p className={styles.tag} class="tag">@{tag}</p>
            <p className={styles.location} class="location">{location}</p>
        </div>

        <ul className={styles.stats} class="stats">
            <li>
                <p className={styles.label} class="label">Followers</p>
                <p className={styles.quantity} class="quantity">{stats.followers}</p>
            </li>
            <li>
                <p className={styles.label} class="label">Views</p>
                <p className={styles.quantity} class="quantity">{stats.views}</p>
            </li>
            <li>
                <p className={styles.label} class="label">Likes</p>
                <p className={styles.quantity} class="quantity">{stats.likes}</p>
            </li>
        </ul>
</div>
}