"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 8080;
app.get("/", (req, res) => {
    res.send("Hello World update");
});
app.get("/hello", (req, res) => {
    res.send(`<h1>xin chào cậu.</h1>`);
});
app.listen(PORT, () => {
    console.log(`My app is running on PORT: ${PORT}`);
});
//# sourceMappingURL=app.js.map