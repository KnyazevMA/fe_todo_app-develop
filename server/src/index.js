/*
import { User, sequelize } from './db/models' ;

User.findAll( {} ).then( data => console.log( data.map( user => user.toJSON() ) ) );

*/
import {User, Task} from './db/models';

function modelToJs(model) {
    for (let prop in model) {
        if (model[prop] instanceof Model) {
            modelToJs(model[prop]);
            model[prop] = model[prop].get();
        }
    }
    return model.get();
}

async function getTasksWithOwners() {
    try {
        const tasks = await Task.findAll({
            where: {
                isDone: true,
            },
            include: [{
                model: User,
                as: 'owner'
            }]
        });
        return tasks.map(task => modelToJs(Task))
    } catch (e) {

    }
}


async function getUsersWithTasks() {
    try {
        const result = User.findAll({
            limit: 10,
            attributes: {
                exclude: ['password']
            },
            include: [
                {
                    model: Task,
                    as: 'tasks'
                }
            ]
        });

        return result.map(item => modelToJs(Task));
    } catch (e) {

    }
}

getUsersWithTasks()
    .then(console.log);