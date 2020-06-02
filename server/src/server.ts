import express, { json } from 'express';

const app = express();

const users = [
    'Alan',
    'Clayton',
    'Jose'
];

app.get('/users',(request, response)=>{
    response.json(users);
});

app.get('/users/:id',(request, response)=>{
    const id = Number(request.params.id);
    
    const user = users[id];
    
    response.json(user);
});

app.post('/users',(request, response) => {
    const user = {
        name: 'Alan',
        email: 'Alan@alan.com'
    };

    return response.json(user);
})

app.listen(3333);
