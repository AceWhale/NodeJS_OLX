import {Sequelize} from "sequelize";

export const sequelize = new Sequelize(
    process.env.DB_NAME || 'firstdb',     
    process.env.DB_USER || 'Nik',    
    process.env.DB_PASSWORD || 'gg52ggWhale3169',  
    {
        host: process.env.DB_HOST || 'localhost',    
        port: parseInt(process.env.DB_PORT || '3306', 10),   
        dialect: 'mysql',             
        logging: false,               
    }
);

export const connectDb = async () => {
    try {
        await sequelize.authenticate();
        console.log('The connection was established successfully.');
    } 
    catch (error) {console.error('Failed to connect to the database:', error);}
};

export const syncDb = async () => {
    try {
        await sequelize.sync({ alter: true });
        console.log('The database is synchronized.');
    } 
    catch (error) {console.error('Failed to synchronize database:', error);}
};
