import { useState } from "react"

interface UserProps {
    fname?: string,
    role?: string,
}

const UserCard = ({fname,role}: UserProps)=> {

    return(
        <>
            <div>
                <h1>User Info</h1>
                <p>Fname : {fname} - Role: {role} </p>
            </div>
        </>
    )
}

export default UserCard