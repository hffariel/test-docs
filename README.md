# Doris Document

* We are using ![Vuepress]{<https://github.com/vuejs/vuepress.git}> as our document site generator. Configurations are in './docs/.vuepress' folder.

## Getting Start

```bash
cd docs && npm install
npm run dev
```

Open your browser and navigate to localhost:8080/en/ or localhost:8080/zh-CN/, pages will be auto refreshed during your writing.

## Start Writing

1. Write markdown files in their own language folders like `./en/` and `./zh-CN/`, and keep them with the same name like:

    ```bash
    .
    ├─ en/
    │  ├─ one.md
    │  └─ two.md
    └─ zh-CN/
    │  ├─ one.md
    │  └─ two.md
    ```

2. Frontmatters like below should always be on the top of each file:

    ```markdown
    ---
    {
        "title": "Backup and Recovery", // sidebar title
        "language": "en" // writing language
    }
    ---
    ```

3. Assets are in `.vuepress/public/`.

    Assuming that there exists a png `.vuepress/public/images/image_x.png`, then it can be used like:

    ```markdown
    ![alter text](/images/image_x.png)
    ```

4. Remember to update the sidebar configurations in `.vuepress/sidebar/` every time you add a new file or a folder.

5. Run `npm run lint` before you start a PR.

## Deployment

Just start a PR, and all the things will be done automatically.

## What Travis Does

Once a PR is accepted, travis ci will be triggerd to build and deploy the whole docs folder on its own branch. Here is what `.travis.yml` do:

1. Prepare nodejs and vuepress enviorment.

2. Use current branch's name as the relative url path in `.vuepress/config.js`(which is the `base` property).

3. Build the documents into a website all by vuepress.

4. Fetch asf-site repo to local directory, and copy `.vupress/dist/` into `{BRANCH}/`.

5. Push the new site to asf-site repo with `GitHub Token`(which is preset in Travis console as a variable used in .travis.yml).
