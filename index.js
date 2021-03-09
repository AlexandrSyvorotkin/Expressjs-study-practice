const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const cardRoutes = require('./routes/card')
const homeRoutes = require('./routes/home')
const addRoutes = require('./routes/add')
const coursesRoutes = require('./routes/courses')


const app = express()

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))
app.use('/', homeRoutes)
app.use('/add', addRoutes)
app.use('/courses', coursesRoutes)
app.use('/card', cardRoutes)


async function start() {
    try {
        console.log('MongoDB conncted');
        const url = `mongodb+srv://Alex:Sanek9955@nodejscoursecluster.7c8it.mongodb.net/easycode?retryWrites=true&w=majority`
        await mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology:true})
        app.listen(PORT, ()=> {
            console.log('MongoDB conncted');
            console.log(`Server is running on port ${PORT}`);
        })
    } catch(e) {
        console.log(e);
    }
    
}

start()



const PORT = process.env.PORT || 3000





// mongoose
//     .connect('mongodb+srv://Alex:Sanek9955@nodejscoursecluster.7c8it.mongodb.net/easycode?retryWrites=true&w=majority',
//     {
//         useNewUrlParser: true
//     },
// )
// .then(() => {console.log('MongoDb connected');})
// .catch(err => console.log(err));

// TODO: Разобраться с паролями и урлами
// const url = `mongodb+srv://Alex:<password>@nodejscoursecluster.7c8it.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

// const password ='okso0PKmWUpURgdo'

