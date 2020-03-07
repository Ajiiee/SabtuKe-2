const express = require("express");
const port = 3000;

const app = express();

app.use("/public", express.static(process.cwd() + "/public"));
app.set("view engine", "ejs");

app.get("/", function (ren, res) {
    res.render("pages/index");
});

app.get("/about", function (req, res) {
    res.render("pages/about", {
        about: "Halaman Tentang",
        content: 'What is the "E" for? "Embeded?" Could be. How about "Effectife"'
    });
});

app.get("/contact", function (req, res) {
    res.render("pages/contact", {
        name: "Joko bin Jaka",
        phoneNumber: "0832134214214"
    });
});

app.get("/profile", function (req, res) {
    res.render("pages/profile", {
        nama: "Muhammad Fajriana",
        kelas: "X - RPL ",
        sekolah: "Smk Jakarta Pusat 1"
    });
});

app.listen(port, function () {
    console.log("Server Listening on port $(port)");
});