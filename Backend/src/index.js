const {serverConfig,Logger}=require('./config/index.js');

const express= require('express');
const apiRoutes=require('./routes');
const app= express();

app.use('/api',apiRoutes);
app.listen(serverConfig.PORT,()=>{
    console.log(`Server running on port ${serverConfig.PORT}`);
    Logger.info('Successfully started the server',"root",{msg:"something"});
}); 