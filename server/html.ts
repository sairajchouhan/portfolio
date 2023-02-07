import {
  HeaderQueryResponse,
  PersonalDetailsQueryResponse,
  ExperienceQueryResponse,
  ProjectsQueryResponse,
  BlogQueryResponse,
} from "./types";

export const get_header_html = (data: HeaderQueryResponse) => {
  let lis: string[] = [];
  data[0][0].link.forEach((link) => {
    const { label, path } = link;
    const item = `
        <li class="nav_list_item">
          <a class="nav_list_a" href="${path}">${label}</a>
        </li>`;

    lis.push(item);
  });

  return lis.join("");
};

export const get_personal_details_html = (
  data_: PersonalDetailsQueryResponse
) => {
  const data = data_[0][0];
  const html = `
    <div class="home_container">
      <div class="my_img_container">
        <img class="my_img" src="${data.image.url}" />
      </div>

      <div class="home_body">
        <h1>${data.fullname}</h1>

      <div class="home_about_text" >
        ${data.about}
      </div>

        <div class="social_links">
          <a class="social_link" href="${data.social_links.github.href}" target="_blank" rel="noopener noreferer">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path
                  d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
                </path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </span>
            GitHub
          </a>

          <a class="social_link" href="${data.social_links.youtube.href}" target="_blank" rel="noopener noreferer">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path
                  d="M12 19c-2.3 0-6.4-.2-8.1-.6-.7-.2-1.2-.7-1.4-1.4-.3-1.1-.5-3.4-.5-5s.2-3.9.5-5c.2-.7.7-1.2 1.4-1.4C5.6 5.2 9.7 5 12 5s6.4.2 8.1.6c.7.2 1.2.7 1.4 1.4.3 1.1.5 3.4.5 5s-.2 3.9-.5 5c-.2.7-.7 1.2-1.4 1.4-1.7.4-5.8.6-8.1.6 0 0 0 0 0 0z">
                </path>
                <polygon points="10 15 15 12 10 9"></polygon>
              </svg>
            </span>
            Youtube
          </a>

          <a class="social_link" href="${data.social_links.twitter.href}" target="_blank" rel="noopener noreferer">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path
                  d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z">
                </path>
              </svg>
            </span>
            Twitter
          </a>

          <a class="social_link" href="${data.social_links.instagram.href}" target="_blank" rel="noopener noreferer">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </span>

            Instagram
          </a>
        </div>
      </div>
    </div>
`;

  return html;
};

export const get_experience_html = (data_: ExperienceQueryResponse) => {
  const data = data_[0];
  const items: string[] = [];

  data.forEach((experience) => {
    const start_date = new Date(experience.start_date);
    const end_date = new Date(experience.end_date);

    const formated_start_date =
      start_date.toDateString().split(" ")[1] +
      " " +
      start_date.toDateString().split(" ")[3];
    const formated_end_date =
      end_date.toDateString().split(" ")[1] +
      " " +
      end_date.toDateString().split(" ")[3];

    const html = `
    <div class="experience_container">
      <div class="experience_left">
        <p>${formated_start_date}</p>
        <p>${formated_end_date}</p>
      </div>

      <div class="experience_right">
        <div class="experience_card">
          <a href="{${experience.company_url.href}}" target="_blank" rel="noopener noreferer">${experience.company_name}</a>
          <h2>${experience.role}</h2>
          <p>
            ${experience.description}
          </p>
        </div>
      </div>
    </div>
`;
    items.push(html);
  });

  return items.join("");
};

export const get_projects_html = (data_: ProjectsQueryResponse) => {
  const data = data_[0];
  const items: string[] = [];

  data.forEach((project) => {
    const html = `
      <div class="project">
        <div class="project_body">
          <h2>${project.title}</h2>
          <ul>
              ${project.project_tags
                .map((tag) => `<li class="pill" >${tag}</li>`)
                .join("\n")}
          </ul>
          <p>
            ${project.description}
          </p>
        </div>

        <div class="links">
          <a href="${
            project.source_url.href
          }" target="_blank" rel="noopener noreferer">View</a>
          <a href="${
            project.deployed_url.href
          }" target="_blank" rel="noopener noreferer">
            Source</a>
        </div>
      </div>
`;
    items.push(html);
  });

  return items.join("");
};

export const get_blog_html = (data_: BlogQueryResponse) => {
  const data = data_[0];

  const items: string[] = [];

  data.forEach((blog) => {
    const date_of_publish = new Date(blog.date_of_publish);

    const formated_date_of_publish =
      date_of_publish.toDateString().split(" ")[1] +
      " " +
      date_of_publish.toDateString().split(" ")[3];

    const html = `
      <div class="blog_container">
        <div class="blog_left">
          <img
            src="${blog.image.url}"
            alt="${blog.title}" />
        </div>

        <div class="blog_right">
          <a href="${blog.url.href}"
            target="_blank" rel="noopener noreferer">
            ${blog.title}
          </a>
          <span class="blog_date_time">${formated_date_of_publish} &#x2022; ${blog.read_minutes} min read</span>
          <p>
            ${blog.intro}...
          </p>
        </div>
      </div>

`;
    items.push(html);
  });

  return items.join("");
};
