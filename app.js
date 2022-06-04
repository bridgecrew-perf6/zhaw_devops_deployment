const app = require("express")();

const PORT = process.env.PORT || 3000;

app.get("", (req, res) => {
    res.send("Hello DevOps Course, first Deployment on Heroku ");
});

app.listen(PORT, () => {
    console.log(`App up at port ${PORT}`)
    console.log(`App up at port ${PORT}`)

    console.log(`App up at port ${PORT}`)

});

