export const getUser =() =>{
    return fetch('https://dummyjson.com/users')
    .then(res => res.json())
   
}