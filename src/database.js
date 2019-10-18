const mongoose = require ('mongoose');

mongoose.connect('mongodb+srv://imillan:3UiPyhelIcMhUpVQ@cluster0-sh2yg.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser : true,
    useUnifiedTopology : true
})
        .then(()=> console.log('DB is connected'))
        .catch(e => console.log(e));
