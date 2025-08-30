// src/pages/Profile.jsx
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    // Fetch user info from localStorage
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result); // Set base64 image
      };
      reader.readAsDataURL(file);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-50 to-orange-100">
        <p className="text-gray-700 text-xl">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-50 to-orange-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-6 text-center text-orange-600">Your Profile</h2>

        {/* Profile Picture */}
        <div className="mb-6">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-orange-300 mb-4">
            {profilePic ? (
              <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-orange-100 text-orange-500 text-4xl font-bold">
                {user.name[0].toUpperCase()}
              </div>
            )}
          </div>
          <label className="cursor-pointer px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
            Change Picture
            <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
          </label>
        </div>

        {/* User Info */}
        <div className="w-full space-y-4">
          <div>
            <h3 className="text-gray-700 font-semibold">Name:</h3>
            <p className="text-gray-900">{user.name}</p>
          </div>

          <div>
            <h3 className="text-gray-700 font-semibold">Email:</h3>
            <p className="text-gray-900">{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
