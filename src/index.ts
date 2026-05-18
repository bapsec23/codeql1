import express from "express";
import { exec } from "child_process";

const app = express();

app.get("/ping", (_, res) => {
  res.send("pong");
});

app.get("/exec", (req, res) => {
  const cmd = req.query.cmd as string;

  exec(cmd, (err, stdout, stderr) => {
    if (err) {
      return res.status(500).send(stderr);
    }

    res.send(stdout);
  });
});

app.listen(3000, () => {
  console.log("server started");
});
