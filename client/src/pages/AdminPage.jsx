import React, { useState, useEffect } from "react";
import TopBanner from "../components/TopBanner";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Shadow from "../components/Shadow";
import BoxForm from "../components/BoxForm";
import UserForm from "../components/UserForm";
import BoxList from "../components/BoxList";
import UserList from "../components/UserList";

const AdminPage = () => {
  const [activeForm, setActiveForm] = useState("box"); // "box" or "user"
  const [boxes, setBoxes] = useState([]); // State for boxes
  const [users, setUsers] = useState([]); // State for users
  const [selectedBox, setSelectedBox] = useState(null); // Selected box for edit
  const [selectedUser, setSelectedUser] = useState(null); // Selected user for edit

  // Function to handle box item selection
  const handleSelectBox = (box) => {
    setSelectedBox(box);
  };

  // Function to handle user item selection
  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  // Fetch boxes data from your API or database
  useEffect(() => {
    const fetchBoxes = async () => {
      // Replace with your actual fetch request
      const response = await fetch('/api/allboxes');
      const data = await response.json();
      setBoxes(data.data);
    };

    // Fetch users data from your API or database
    const fetchUsers = async () => {
      // Replace with your actual fetch request
      const response = await fetch('/api/users'); // Update the endpoint as needed
      const data = await response.json();
      setUsers(data.data);
    };

    fetchBoxes();
    fetchUsers();
  }, []);

  const tabStyle = {
    padding: '10px 20px',
    cursor: 'pointer',
    borderBottom: activeForm === 'box' ? '3px solid #c0876a' : 'none',
    color: activeForm === 'box' ? '#c0876a' : 'grey'
  };

  const tabStyleUser = {
    padding: '10px 20px',
    cursor: 'pointer',
    borderBottom: activeForm === 'user' ? '3px solid #c0876a' : 'none',
    color: activeForm === 'user' ? '#c0876a' : 'grey'
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <TopBanner />
      <NavBar />
      <Shadow />
      <div className="flex flex-1 items-center justify-center">
        <p className="w-[730px] h-[37px] mx-1 my-4 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#342f19cc] text-[20px] text-center">
            FOR ADMIN USE ONLY
        </p>
      </div>
      <div className="admin-navigation" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <div style={tabStyle} onClick={() => setActiveForm("box")}>Boxes</div>
        <div style={tabStyleUser} onClick={() => setActiveForm("user")}>Users</div>
      </div>
      
      <div className="admin-content" style={{ margin: 'auto', maxWidth: '800px', minWidth: '500px' }}>
        {activeForm === "box" ? (
          <>
            <BoxForm box={selectedBox} />
            <BoxList boxes={boxes} onSelectItem={handleSelectBox} />
          </>
        ) : (
          <>
            <UserForm user={selectedUser} />
            <UserList users={users} onSelectItem={handleSelectUser} />
          </>
        )}
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default AdminPage;
