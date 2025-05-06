function UserCard({ user, filters }) {
    return (
      <div className="user-card">
        {filters.picture && <img src={user.picture.medium} alt="user" />}
        {filters.name && <h3>{user.name.first} {user.name.last}</h3>}
        {filters.email && <p>{user.email}</p>}
      </div>
    );
  }
  
  export default UserCard;
  