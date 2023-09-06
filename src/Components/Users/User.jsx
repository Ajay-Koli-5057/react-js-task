import React, { useState, useEffect } from "react";
import "./users.css"
import { UserProfile } from "../UserProfile/UserProfile";

export const Users = () => {
    const [usersList, setUsersList] = useState([
        { name: 'Admin', email: 'Admin@gmail.com', avatarUrl: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png' }
    ])
    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        avatarUrl: "",
    })

    const getUserInfo = (event) => {
        setUserDetails({ ...userDetails, [event.target.name]: event.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        let tempList = usersList
        tempList.push(userDetails)
        setUsersList(tempList)
        setUserDetails({
            name: "",
            email: "",
            avatarUrl: "",
        })
    }


    return (
        <>
            <form className="user-details-form" onSubmit={onSubmit}>
                <div className="user-details-input">
                    <label htmlFor="name">Username</label>
                    <input value={userDetails.name} id="name" type="text" name="name" onChange={getUserInfo} />
                </div>
                <div className="user-details-input">
                    <label htmlFor="email">Email</label>
                    <input value={userDetails.email} id="email" type="text" name="email" onChange={getUserInfo} />
                </div>
                <div className="user-details-input">
                    <label htmlFor="avatarUrl">Avatar</label>
                    <input value={userDetails.avatarUrl} id="avatarUrl" type="text" name="avatarUrl" onChange={getUserInfo} />
                </div>
                <input className="form-submit" type="submit" value="Submit" />
            </form>
            {usersList && usersList.map((user, i) => {
                return (
                    <UserProfile name={user.name} email={user.email} avatarUrl={user.avatarUrl} key={i} />
                )
            })}

        </>
    )
}