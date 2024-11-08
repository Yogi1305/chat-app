import {Server} from "socket.io";
import http from "http";
import express from "express";

const app = express();
// creating server 
const server = http.createServer(app);
const io = new Server(server, {
    cors:{
        origin:['http://localhost:3000'],
        methods:['GET', 'POST'],
    },
});