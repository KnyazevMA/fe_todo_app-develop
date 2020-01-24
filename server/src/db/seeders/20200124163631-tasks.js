'use strict';
const moment = require('moment');

/**
 *
 *@param{Array} users
 *@return{[]}
 * */
function generateTasks(users) {
    const tasks = [];
    for (let i = 0; i < users.length; i++) {
        const taskCount = Math.round(Math.random() * 10);
        for (let j = 0; j < taskCount; j++) {
            tasks.push({
                userId: users[i].id,
                isDone: Math.random() < 0.5,
                value: `Users#${users[i].id} task value #${j + 1}`,
                deadline: moment("2020-01-20").set('day', Math.round(Math.random() * 10)).toDate(),
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
    }
    return tasks;
}

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.sequelize.query('SELECT id FROM "Users"')
            .then(
                ([result,]) => {
                    return queryInterface.bulkInsert('Tasks', generateTasks(result), {});
                }
            );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Tasks', null, {});

    }
}
;
