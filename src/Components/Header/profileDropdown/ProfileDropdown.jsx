import React from 'react';
import './ProfileDropdown.scss';
import { LogOut, Moon, Star, Sun, User } from 'react-feather';
import { GrOrderedList } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../../redux/Slice/ThemeSlice';

const ProfileDropdown = () => {

  const theme = useDispatch();

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

        {/* theme */}
         <div className="item">
          <Sun  onClick={() => theme(toggleTheme('light'))} className='icon' />
          <Moon onClick={() => theme(toggleTheme('dark'))} className='icon' />
            <Star onClick={() => theme(toggleTheme('professional'))} className='icon' />
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