// const express = require("express");
import express from "express";
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
    res.send("Hello World update")
})
app.get("/hello", (req, res) => {
    res.send(`<h1>xin chào cậu.</h1>`)
})

app.listen(PORT, () => {
    console.log(`My app is running on PORT: ${PORT}`)
})