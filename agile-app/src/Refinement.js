export const Refinement = ({users, user}) => {
    console.log(user)
    if (user.admin) {
        return (
            <div>
                <h3>Refinement</h3>
                <p>hi, {user.Email}</p>
                <p>you are an admin</p>
            </div>
        )
    }
    else {
        return (
            <div>
                <h3>Refinement</h3>
                <p>hi, {user.Email}</p>
                <p>you are not an admin</p>
            </div>
        )
    }
}