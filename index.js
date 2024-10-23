const jsonServer = require('json-server')
const contactServer = jsonServer.create()
const router = jsonServer.router("db.json")
const middleware = jsonServer.defaults()
const PORT = 3000||process.env.PORT
contactServer.use(middleware)
contactServer.use(router)
contactServer.listen(PORT,()=>{
    console.log(`Server is running`);
    
})