export const Standup = ({users, user}) => {

    var min = 0;
    var usersCount  = Object.keys(users).length;
    var rand = Math.floor(Math.random() * (usersCount));

    var num = -1;
    var ids = [];
    var emails = [];

    /* initial */
    users.map(el => {
        ids.push(el.id);
        emails.push(el.Email);
    })

    var selected = ids[rand];

    function remove() {
        alert('Removed user');
        ids.splice(rand, 1);
        emails.splice(rand,1);
      }

     return (
         <div>
            <h3>Standup</h3>
            <br />
            <h5>Randomise</h5>
            <p>{rand}</p>
            <p>{usersCount}</p>
            <ul> 
                {
                users.map(el => {
                    num++;
                    return (<li>{el.Email}{ids[num]} n{num} s{selected}</li>)
                }) 
            }
            </ul>

            <h5>Selected: {emails[rand]}</h5>

            <button onClick={remove}>Remove Selected</button>
        </div>
     )
}