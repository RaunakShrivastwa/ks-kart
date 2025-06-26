import React from 'react';
import './ProfileDropdown.scss';
import { LogOut, User } from 'react-feather';
import { GrOrderedList } from 'react-icons/gr';

const ProfileDropdown = () => {
  return (
    <div className='user_profile'>
      <div className="profile_header">
        <h6>shubham</h6>
        <span className='email fs-9'>Shubham@gmail.com</span>
      </div>
      <div className="profile_body">
        <div className="item">
          <User className='icon' />
          <span>Profile</span>
        </div>

        <div className="item">
          <GrOrderedList className='icon' />
          <span>My Order</span>
        </div>

        <div className="item">
          <User className='icon' />
          <span>Wistlist</span>
        </div>

         <div className="item">
          <User className='icon' />
          <span>Settings</span>
        </div>

      </div>
      <div className="profile_footer">
        <LogOut className='icon' />
        <span>Logout</span>
      </div>
    </div>
  )
}

export default ProfileDropdown