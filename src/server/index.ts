import express from "express";
import authorRouter from "./routes/author.routes";
import bookRouter from "./routes/book.routes";
import userRouter from "./routes/user.routes";
import loginRouter from "./routes/login.routes";

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use("/author", authorRouter);
server.use("/book", bookRouter);
server.use("/user", userRouter);
server.use("/login", loginRouter);

export default server;
