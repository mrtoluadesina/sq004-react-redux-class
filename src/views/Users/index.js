import React, {useEffect} from "react";
import { connect } from "react-redux";

import { getUsers } from './redux/action';

const Users = props => {
  
  useEffect(() => {
    props.handleGetUsers();
  }, [])
  
  console.log('props users', props.users);

  return (
    <div>
      <ul>
        {props.users.map((user, index) => <li key={index}>{user.login}</li>)}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ userReducer }) => ({
  isLoading: userReducer.isLoading,
  error: userReducer.error,
  users: userReducer.users
});

const mapDispatchToProps = dispatch => ({
  handleGetUsers: () => dispatch(getUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Users);
