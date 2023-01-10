import React from "react";

function Links(user) {
    return (
        <div>
            {/* {console.log(user)} */}
            <h3>Links</h3>
            <a href={user.github}>{user.github}</a>
            <a href={user.linkedin}>{user.linkedin}</a>
        </div>
    );
}

export default Links;