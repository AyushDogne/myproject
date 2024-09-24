import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../csspagas/Profile.css';

const Profile = () => {

  const userData = useSelector((state) => state.userProfile);
  console.log(userData);
  
  console.log(userData.name)
  console.log(userData.number)
  console.log(userData.city)



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
          {userData.map((data,index)=>(
            <form action="">
        <div className="profile-details">
          <div className="row">
            <div className="profile-field">
              <label>First Name:</label>
              {isEditing ? (
                <input type="text" defaultValue={data.name} />
              ) : (
                <p>{data.name}</p>
              )}
            </div>

            <div className="profile-field">
              <label>User Number</label>
              {isEditing ? (
                <input type="text" defaultValue={data.number} />
              ) : (
                <p>{data.number}</p>
              )}
            </div>
          </div>

          <div className="row">
            <div className="profile-field">
              <label>City:</label>
              {isEditing ? (
                <input type="text" defaultValue={data.city} />
              ) : (
                <p>{data.city}</p>
              )}
            </div>

            <div className="profile-field">
              <label>Pincode:</label>
              {isEditing ? (
                <input type="text" defaultValue={data.pincode} />
              ) : (
                <p>{data.pincode}</p>
              )}
            </div>
          </div>

          <div className="row">
            <div className="profile-field">
              <label>Gender:</label>
              {isEditing ? (
                <input type="text" className='inputs-fields' defaultValue={data.gender} />
              ) : (
                <p>{data.gender}</p>
              )}
            </div>

            <div className="profile-field">
              <label>Phone:</label>
              {isEditing ? (
                <input type="text" defaultValue={data.number} />
              ) : (
                <p>{data.number}</p>
              )}
            </div>
          </div>

          <div className="profile-field">
            <label>Email:</label>
            {isEditing ? (
              <input type="email" defaultValue={data.email} />
            ) : (
              <p>{data.email}</p>
            )}
          </div>

          <div className="profile-field">
            <label>Password:</label>
            {isEditing ? (
              <input type="password" defaultValue={data.password} />
            ) : (
              <p>{data.password}</p>
            )}
          </div>

          <div className="row">
            <div className="profile-field">
              <label>State:</label>
              {isEditing ? (
                <input type="text" defaultValue={data.state} />
              ) : (
                <p>{data.state}</p>
              )}
            </div>

            <div className="profile-field">
              <label>Location:</label>
              {isEditing ? (
                <input type="text" defaultValue={data.address} />
              ) : (
                <p>{data.address}</p>
              )}
            </div>
          </div>
        </div>
        </form>
          ))}
     
      </div>
    </div>
  );
};

export default Profile;
