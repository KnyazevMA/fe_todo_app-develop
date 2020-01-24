import { User, sequelize } from './db/models' ;

User.findAll( {} ).then( data => console.log( data.map( user => user.toJSON() ) ) );

