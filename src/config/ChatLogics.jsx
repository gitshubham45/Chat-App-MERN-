export const getSender = (loggedUser , users) => {
    // if(loggedUser.email === "guest@example.com") return "";
    return users[0]._id === loggedUser._id ? users[1].name : users[0].name;

}