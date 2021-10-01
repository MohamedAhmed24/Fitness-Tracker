const express = require("express");
const mongoose = require ("mongoose");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3003;

app.use(morgan("dev"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));


const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI,{  
    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology: true
})



app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));

app.listen(PORT, () => {
    console.log(`App running on port http://localhost:${PORT}`);
});