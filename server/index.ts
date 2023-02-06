import dotenv from "dotenv";
import path from "path";
import express from "express";
import fs from "fs";
import Contentstack from "contentstack";
import {
  HeaderQueryResponse,
  PersonalDetailsQueryResponse,
  ExperienceQueryResponse,
  header_query_response,
  personal_details_query_response,
  experience_query_response,
  projects_query_response,
  blog_query_response,
  ProjectsQueryResponse,
  BlogQueryResponse,
} from "./types";
import {
  get_blog_html,
  get_experience_html,
  get_header_html,
  get_personal_details_html,
  get_projects_html,
} from "./html";

dotenv.config({
  path: path.join(__dirname, "../.env"),
});

const app = express();

const Stack = new Contentstack.Stack({
  api_key: process.env.STACK_API_KEY!,
  delivery_token: process.env.DELIVERY_TOKEN!,
  environment: process.env.ENVIRONMENT!,
});

const get_html = () => {
  const html_path = path.join(__dirname, "../static", "portfolio.html");
  const html = fs.readFileSync(html_path, "utf8");
  return html;
};

let html = get_html();

app.use(express.static(path.join(__dirname, "../static")));
app.use(express.json());

app.get("/", async (_req, res) => {
  try {
    const header_query_promise = Stack.ContentType("header")
      .Query()
      .toJSON()
      .find();

    const personal_details_query_promise = Stack.ContentType("personal_details")
      .Query()
      .toJSON()
      .find();

    const experience_query_promise = Stack.ContentType("experience")
      .Query()
      .toJSON()
      .ascending("start_date")
      .find();

    const projects_query_promise = Stack.ContentType("project")
      .Query()
      .toJSON()
      .find();

    const blog_query_promise = Stack.ContentType("blog")
      .Query()
      .toJSON()
      .descending("date_of_publish")
      .find();

    const query_responses = await Promise.all([
      header_query_promise,
      personal_details_query_promise,
      experience_query_promise,
      projects_query_promise,
      blog_query_promise,
    ]);

    console.log("successful queries", query_responses.length);

    const [
      header_query_response,
      personal_details_query_response,
      experience_query_response,
      projects_query_response,
      blog_query_response,
    ] = query_responses;

    let final_html = html;

    const header_html = get_header_html(header_query_response);
    const personal_details_html = get_personal_details_html(
      personal_details_query_response
    );
    const experience_html = get_experience_html(experience_query_response);
    const projects_html = get_projects_html(projects_query_response);
    const blog_html = get_blog_html(blog_query_response);

    final_html = final_html.replace("{{header}}", header_html);
    final_html = final_html.replace(
      "{{personal_details}}",
      personal_details_html
    );
    final_html = final_html.replace("{{experience}}", experience_html);
    final_html = final_html.replace("{{projects}}", projects_html);
    final_html = final_html.replace("{{blog}}", blog_html);

    res.send(final_html);
  } catch (err) {
    console.error(err);
    res.send("Error");
  }
});

/* app.get("/temp", async (_req, res) => { */
/*   const resp = await Stack.ContentType("blog").Query().toJSON().find(); */
/*   console.log(resp); */
/*   res.json({ resp }); */
/* }); */

const port = process.env.PORT || 8001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
