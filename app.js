import express from "express";
import path from "node:path";

const app = express();

app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");


app.get("/", (req,res) => res.render("index"));


const PORT = process.env.PORT ?? 3000;

app.listen(PORT, (error) =>{
    if(error){
        throw error;
    }

    console.log(`Listening on port ${PORT}`);
});
