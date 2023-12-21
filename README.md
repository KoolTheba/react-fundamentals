<div>
  <h1 align="center"><a href="https://epicreact.dev/fundamentals">React Fundamentals 🚀 EpicReact.Dev</a></h1>
  <strong>
    Learn the foundational concepts necessary for building
    React applications and libraries
  </strong>
  <p>
    ⭐️ Completed exercises by @KoolTheba based on the course challenges ⭐️ 
  </p>

  <a href="https://epicreact.dev">
    <img
      alt="Learn React from Start to Finish"
      src="https://kentcdodds.com/images/epicreact-promo/er-1.gif"
    />
  </a>
</div>

<hr />

<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![GPL 3.0 License][license-badge]][license]
[![All Contributors][all-contributors-badge]](#contributors-)
[![Code of Conduct][coc-badge]][coc]
[![Gitpod ready-to-code][gitpod-badge]](https://gitpod.io/#https://github.com/kentcdodds/react-fundamentals)
<!-- prettier-ignore-end -->

## Prerequisites

- Read through
  ["JavaScript to Know for React"](https://kentcdodds.com/blog/javascript-to-know-for-react)
- Install the React DevTools
  ([Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
  (recommended),
  [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/))

> NOTE: The EpicReact.dev videos were recorded with React version ^16.13 and all
> material in this repo has been updated to React version ^18. Differences are
> minor and any relevant differences are noted in the instructions.

## System Requirements

- [git][git] v2.13 or greater
- [NodeJS][node] `>=16`
- [npm][npm] v8.16.0 or greater

All of these must be available in your `PATH`. To verify things are set up
properly, you can run this:

```shell
git --version
node --version
npm --version
```

If you have trouble with any of these, learn more about the PATH environment
variable and how to fix it here for [windows][win-path] or
[mac/linux][mac-path].

## Setup

> If you want to commit and push your work as you go, you'll want to
> [fork](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo)
> first and then clone your fork rather than this repo directly.

After you've made sure to have the correct things (and versions) installed, you
should be able to just run a few commands to get set up:

```shell
git clone https://github.com/kentcdodds/react-fundamentals.git
cd react-fundamentals
node setup
```

This may take a few minutes. **It will ask you for your email.** This is
optional and just automatically adds your email to the links in the project to
make filling out some forms easier.

A few common issues during `node setup` have involved PATH variables (above
links or [here](https://github.com/kentcdodds/react-fundamentals/issues/27)),
reinstalling git, node, or npm, and clearing npm caches.

If you get any errors, please read through them and see if you can find out what
the problem is. If you can't work it out on your own then please [file an
issue][issue] and provide _all_ the output from the commands you ran (even if
it's a lot).

If you can't get the setup script to work, then just make sure you have the
right versions of the requirements listed above, and run the following commands:

```shell
npm install
npm run validate
```

If you are still unable to fix issues and you know how to use Docker 🐳 you can
setup the project with the following command:

```shell
docker-compose up
```

## Running the app

To get the app up and running (and really see if it worked), run:

```shell
npm start
```

This should start up your browser. If you're familiar, this is a standard
[react-scripts](https://create-react-app.dev/) application.

You can also open
[the deployment of the app on Netlify](https://react-fundamentals.netlify.app/).


