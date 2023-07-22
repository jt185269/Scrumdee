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
        emails.push(el.DisplayName);
    })

    function getRandom() {
        var rand = Math.floor(Math.random() * (usersCount));
        return rand;
    }

    function remove() {
        alert('will remove user');
        ids.splice(rand, 1);
        emails.splice(rand,1);
        /* how to redraw with these new arrays instead */
    }

    function select() {
        rand = getRandom();
        alert(emails[rand]);
    }

     return (
         <div>
            <h3>Standup</h3>
            <br />
            <h5>Randomise</h5>
            <ul> 
                {
                users.map(el => {
                    num++;
                    //return (<li>{el.Email}{ids[num]}</li>)
                    console.log(el.DisplayName);
                    return (<li>{el.DisplayName}</li>);
                }) 
            }
            </ul>

            <h5>Selected: {emails[rand]}</h5>

            <button onClick={remove}>Remove Selected</button>
            <p></p>
            <button onClick={select}>Select Again</button>
        </div>
     )
}