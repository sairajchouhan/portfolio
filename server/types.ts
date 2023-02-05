export const header_query_response = [
  [
    {
      _version: 1,
      locale: "en-us",
      uid: "blt56fdd9f65b1471fd",
      ACL: {},
      _in_progress: false,
      created_at: "2023-02-05T10:30:35.300Z",
      created_by: "bltae6c61d9d110a17c",
      link: [
        {
          label: ["Home"],
          path: ["/"],
          _metadata: {
            uid: "cs0205fcfd0554d168",
          },
        },
        {
          label: ["Experience"],
          path: ["/#experience"],
          _metadata: {
            uid: "cs6eb7fd32b03f7a31",
          },
        },
        {
          label: ["Projects"],
          path: ["/#projects"],
          _metadata: {
            uid: "cse966fc651f74592c",
          },
        },
        {
          label: ["Blog"],
          path: ["/#blog"],
          _metadata: {
            uid: "cs6aaf255a8970e2b2",
          },
        },
      ],
      tags: [],
      title: "header",
      updated_at: "2023-02-05T10:30:35.300Z",
      updated_by: "bltae6c61d9d110a17c",
      publish_details: {
        environment: "bltcfbc84ac492f6de4",
        locale: "en-us",
        time: "2023-02-05T10:31:10.776Z",
        user: "bltae6c61d9d110a17c",
      },
    },
  ],
];

export const personal_details_query_response = [
  [
    {
      _version: 4,
      locale: "en-us",
      uid: "bltb7e5371e4d7602d8",
      ACL: {},
      _in_progress: false,
      about:
        "<span>I am a full stack developer and a tech enthusiast. I love to build things and learn new things. I am currently pursuing my Bachelors in Computer Science Engineering from IIITDM Kancheepuram.</span><p></p><span>I love to build web applications and my primary technology stack is using, <strong>React</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>, <strong>Typescript</strong>, <strong>PostgreSQL</strong>, <strong>GraphQL</strong>, <strong>Docker</strong> and <strong>AWS</strong>. </span><p><p></p></p>",
      created_at: "2023-02-05T10:38:24.861Z",
      created_by: "bltae6c61d9d110a17c",
      fullname: "Sairaj Chouhan",
      image: {
        uid: "blt681de119035bf211",
        created_by: "bltae6c61d9d110a17c",
        updated_by: "bltae6c61d9d110a17c",
        created_at: "2023-02-05T15:29:29.638Z",
        updated_at: "2023-02-05T15:29:29.638Z",
        content_type: "image/png",
        file_size: "312950",
        filename: "me.png",
        title: "me.png",
        ACL: {},
        _version: 1,
        parent_uid: null,
        is_dir: false,
        tags: [],
        publish_details: {
          environment: "bltcfbc84ac492f6de4",
          locale: "en-us",
          time: "2023-02-05T15:30:01.196Z",
          user: "bltae6c61d9d110a17c",
        },
        url: "https://images.contentstack.io/v3/assets/blt91e640d5c25e3998/blt681de119035bf211/63dfcb59cdef8636cd80bfb0/me.png",
      },
      social_links: {
        github: {
          title: "Github",
          href: "https://github.com/sairajchouhan",
        },
        youtube: {
          title: "Youtube",
          href: "https://www.youtube.com/@sairajchouhan",
        },
        twitter: {
          title: "Twitter",
          href: "https://twitter.com/sairajchouhan",
        },
        instagram: {
          title: "Instagram",
          href: "https://www.instagram.com/sairaj.me/",
        },
      },
      tags: [],
      title: "personal_details",
      updated_at: "2023-02-05T15:29:32.085Z",
      updated_by: "bltae6c61d9d110a17c",
      publish_details: {
        environment: "bltcfbc84ac492f6de4",
        locale: "en-us",
        time: "2023-02-05T15:30:01.235Z",
        user: "bltae6c61d9d110a17c",
      },
    },
  ],
];

export type HeaderQueryResponse = typeof header_query_response;
export type PersonalDetailsQueryResponse = typeof personal_details_query_response;
