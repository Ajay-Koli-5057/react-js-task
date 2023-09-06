import "./userprofile.css"

export const UserProfile = ({ name, email, avatarUrl }) => {
    return (
        <div className="user-profile-container">
            <div className="user-avatar">
                <img src={avatarUrl} alt={`${name} image`} />
            </div>
            <div>
                <h5>{name}</h5>
                <p>{email}</p>
            </div>
        </div>
    )
}