export const selectUser = (user) => {
    console.log("Your clicked: ",user.first);
    return {
        type: "USER_SELECTED",
        payload: user
    }
}