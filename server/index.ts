import dotenv from "dotenv";
import path from "path";
import express from "express";
import fs from "fs";

dotenv.config({
  path: path.join(__dirname, "../.env"),
});

const app = express();

const get_html = () => {
  const html_path = path.join(__dirname, "../static", "index.html");
  const html = fs.readFileSync(html_path, "utf8");
  return html;
};

let html = get_html();

app.use(express.static(path.join(__dirname, "../static")));
app.use(express.json());

app.get("/", (_req, res) => {
  res.set(html);
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
