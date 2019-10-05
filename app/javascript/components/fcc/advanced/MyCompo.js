import React     from "react"

export default class MyCompo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    };
  }
  render() {
    const usersOnline = this.state.users.filter(user => user.online); // change code here
    const renderOnline = usersOnline.map(user => <li key={user.username.charAt(0)}>{user.username}</li>); // change code here
    return (
       <React.Fragment>
         <h4>Current Online Users:</h4>
         <ul>
           {renderOnline}
         </ul>
       </React.Fragment>
    );
  }
};
