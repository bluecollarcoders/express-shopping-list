const express = require("express")
const app = express();
const itemsRoutes = ("./routes/items")
const ExpressError = require("./expressorError")

app.use(express.json());
app.use("/items", itemsRoutes)

//404 hadler 

app.use(function(req, res, next ) {
    return new ExpressError("Not Found", 404);
});

// general error handler 

app.use((err, req, res, next) => {
    res.status(err,status || 500);

    return res.json({
        error: err.message,
    });
});

module.exports = app

app.listen(3000, function () {
    console.log('App on port 3000');
  })