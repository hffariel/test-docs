# Doris Document

[Vuepress](https://github.com/vuejs/vuepress.git}) is used as our document site generator, configurations are in `./docs/.vuepress` folder.

## Getting Start

```bash
cd docs && npm install
npm run dev
```

Open the browser and navigate to `localhost:8080/en/` or `localhost:8080/zh-CN/`.

## Start Writing

1. Write markdown files in multi languages and put them in folders `./en/` and `./zh-CN/`. **Keep them with the same name.**

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

4. Remember to update the sidebar configurations in `.vuepress/sidebar/` each time you add a new file or a folder.

5. Run `npm run lint` before startting a PR.

## Deployment

Just start a PR, and all things will be done automatically.

## What Travis Does

Once a PR accepted, travis ci will be triggerd to build and deploy the whole website within its own branch. Here is what `.travis.yml` does:

1. Prepare nodejs and vuepress enviorment.

2. Use current branch's name as the relative url path in `.vuepress/config.js`(which is the `base` property).

3. Build the documents into a website all by vuepress.

4. Fetch asf-site repo to local directory, and copy `.vupress/dist/` into `{BRANCH}/`.

5. Push the new site to asf-site repo with `GitHub Token`(which is preset in Travis console as a variable used in .travis.yml).
