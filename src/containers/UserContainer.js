import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "../redux";
function UserContainer(props) {
    const { users, getUsers } = props;
    useEffect(() => {
        getUsers();
    }, [getUsers])
    return (
        <div>
            {users.length > 0 &&
                users.map(user => {
                    return <h5 key={user.id}>{user.title}</h5>
                })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users: state.users ? state.users : []
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => dispatch(getUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);