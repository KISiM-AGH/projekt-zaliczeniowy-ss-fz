import {v4 as uuidv4} from "uuid";

let users = []

export const createUser = (req,res)=>{
    const user = req.body;

    users.push({ ...user, id: uuidv4() });

    res.send(`Userr ${user.firstName} added`);
    console.log('dodano usera');
}

export const getUsers = (req, res) => {
    res.send(users);
    console.log('pobrano userow');
}

export const getUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
    console.log('pobrano usera');
}

export const deleteUser = (req,res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User ${id} deleted`);
    console.log('usunieto usera');
}

export const updateUser = (req,res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id===id);

    if(firstName) {
        user.firstName = firstName;
    }
    if(lastName) {
        user.lastName = lastName;
    }
    if(age) {
        user.age = age;
    }

    res.send(`User ${id} updated`);
    console.log('update usera');
}