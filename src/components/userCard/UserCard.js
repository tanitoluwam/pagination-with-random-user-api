import React from 'react'

export const UserCard = (props) => {
    const { user } = props;
  return (
    <div className='user_card'>
       <img src={user.picture.medium} alt="" className="user_image"/>
        <p>{"FirstName"}: {user.name.first}</p>
        <p>{"Gender"}: {user.gender}</p>
        <p>{"Age"}: {user.dob.age}</p>
        <p>{"Country"}: {user.location.country}</p>
    </div>
  )
}
