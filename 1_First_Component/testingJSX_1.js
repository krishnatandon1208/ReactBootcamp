function GetUserDetails(userDetails) {
    return(userDetails.firstName + " " + userDetails.lastName);
}

const userDetails = {
    firstName : "K",
    lastName : "T",
    avatarUrl : "https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
    //While binding with the backend, the user image when uploaded during the registration form, can be linked here.
};

function Test() {
    return (
    <div>
        <h1>Hello {GetUserDetails(userDetails)}</h1>
        <img src={userDetails.avatarUrl} height="500px" width="800px"></img>    
    </div>
    );
}

ReactDOM.render(<Test />, document.getElementById("root"));