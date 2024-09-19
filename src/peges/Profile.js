// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import '../csspagas/Profile.css';

// const Profile= () => {
//   const userData = useSelector((state) => state.userProfile); // Assuming user data from Redux
//   const [isEditing, setIsEditing] = useState(false); // To toggle between edit and view modes

//   const handleEditToggle = () => {
//     setIsEditing(!isEditing);
//   };

//   return (
//     <div className="profile-container">
//       <div className="profile-header">
//         <img className="profile-photo" src={userData.photo} alt="User" />
//         <h2 className="profile-name">My Profile</h2>
//         <button className="edit-button" onClick={handleEditToggle}>
//           {isEditing ? "Save" : "Edit Profile"}
//         </button>
//       </div>

//       <div className="profile-details">
//         <div className="profile-field">
//           <label>First Name:</label>
//           {isEditing ? <input type="text" defaultValue={userData.firstName} /> : <p>{userData.firstName}</p>}
//         </div>
//         <div className="profile-field">
//           <label>Last Name:</label>
//           {isEditing ? <input type="text" defaultValue={userData.lastName} /> : <p>{userData.lastName}</p>}
//         </div>
//         <div className="profile-field">
//           <label>City:</label>
//           {isEditing ? <input type="text" defaultValue={userData.city} /> : <p>{userData.city}</p>}
//         </div>
//         <div className="profile-field">
//           <label>Pincode:</label>
//           {isEditing ? <input type="text" defaultValue={userData.pincode} /> : <p>{userData.pincode}</p>}
//         </div>
//         <div className="profile-field">
//           <label>Gender:</label>
//           {isEditing ? <input type="text" defaultValue={userData.gender} /> : <p>{userData.gender}</p>}
//         </div>
//         <div className="profile-field">
//           <label>Number:</label>
//           {isEditing ? <input type="text" defaultValue={userData.number} /> : <p>{userData.number}</p>}
//         </div>
//         <div className="profile-field">
//           <label>Email:</label>
//           {isEditing ? <input type="text" defaultValue={userData.email} /> : <p>{userData.email}</p>}
//         </div>
//         <div className="profile-field">
//           <label>Password:</label>
//           {isEditing ? <input type="password" defaultValue={userData.password} /> : <p>******</p>}
//         </div>
//         <div className="profile-field">
//           <label>State:</label>
//           {isEditing ? <input type="text" defaultValue={userData.state} /> : <p>{userData.state}</p>}
//         </div>
//         <div className="profile-field">
//           <label>Location:</label>
//           {isEditing ? <input type="text" defaultValue={userData.location} /> : <p>{userData.location}</p>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;


import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../csspagas/Profile.css';

const Profile = () => {
  const userData = useSelector((state) => state.userProfile);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <button className="edit-btn" onClick={handleEditToggle}>
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>

        <h2 className="profile-title">My Profile</h2>

        <div className="profile-details">
          <div className="row">
            <div className="profile-field">
              <label>First Name:</label>
              {isEditing ? (
                <input type="text" defaultValue={userData.firstName} />
              ) : (
                <p>{userData.firstName}</p>
              )}
            </div>

            <div className="profile-field">
              <label>Last Name:</label>
              {isEditing ? (
                <input type="text" defaultValue={userData.lastName} />
              ) : (
                <p>{userData.lastName}</p>
              )}
            </div>
          </div>

          <div className="row">
            <div className="profile-field">
              <label>City:</label>
              {isEditing ? (
                <input type="text" defaultValue={userData.city} />
              ) : (
                <p>{userData.city}</p>
              )}
            </div>

            <div className="profile-field">
              <label>Pincode:</label>
              {isEditing ? (
                <input type="text" defaultValue={userData.pincode} />
              ) : (
                <p>{userData.pincode}</p>
              )}
            </div>
          </div>

          <div className="row">
            <div className="profile-field">
              <label>Gender:</label>
              {isEditing ? (
                <input type="text" defaultValue={userData.gender} />
              ) : (
                <p>{userData.gender}</p>
              )}
            </div>

            <div className="profile-field">
              <label>Phone:</label>
              {isEditing ? (
                <input type="text" defaultValue={userData.number} />
              ) : (
                <p>{userData.number}</p>
              )}
            </div>
          </div>

          <div className="profile-field">
            <label>Email:</label>
            {isEditing ? (
              <input type="email" defaultValue={userData.email} />
            ) : (
              <p>{userData.email}</p>
            )}
          </div>

          <div className="profile-field">
            <label>Password:</label>
            {isEditing ? (
              <input type="password" defaultValue={userData.password} />
            ) : (
              <p>******</p>
            )}
          </div>

          <div className="row">
            <div className="profile-field">
              <label>State:</label>
              {isEditing ? (
                <input type="text" defaultValue={userData.state} />
              ) : (
                <p>{userData.state}</p>
              )}
            </div>

            <div className="profile-field">
              <label>Location:</label>
              {isEditing ? (
                <input type="text" defaultValue={userData.location} />
              ) : (
                <p>{userData.location}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;