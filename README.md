## Quick summary

This is a test task for Frontend Engineer role in CAD Exchanger
https://download.cadexchanger.com/documents/hiring/frontend/CADEX+frontend+developer+assigment+for+probationeers.pdf

## Getting Started

Development server:

```bash
npm run dev
```

Production build:

```bash
npm run build
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

https://main.d21uxun1hn1y66.amplifyapp.com/

Deployed to AWS Amplify using their out-of-the-box support for Next.js apps hosted on GitHub.

Redeployment happens automatically each time new code is pushed to `main` branch

## Description

Implemented using Next.js, MUI and Styled components.

Next.js was chosen because the tasks required backend and deployment.

MUI was chosen because it looks somewhat cool and I wanted to try it out.

For CSS-in-JS library I was initially using Stitches, because wanted to check it out, but eventually migrated to styled components. There was a problem with stitches with content shift on initial render because of styles not being embedded into the generated HTML at the server due to bad SSR support in stitches.

Overall I tried to use good Typescript, with some advanced stuff like usage of `satisfies` and `as const` in `FormField` component.

Also I tried my best to improve loading speeds, remove content shift on initial render, use media queries to achieve acceptable levels of responsiveness and tick as many other boxes from the task description.

However, I didn't try to add super fancy styling due to bad taste in web-design. I believe that designing job should be done by professional designers. However, I've added a fancy `focus` effect to the fields in the form as it was one of the task's requrements. I used some help from ChatGPT though.


## Additional CSS technique used

Added a moving animated border color to input fields in focused state.

## About usage of ChatGPT in this project:
Some parts of the project were written using ChatGPT:
1. SEOHelper and metadata insertion code
2. The animated border described above

## Youtube video optimizations:
Used one of the most popular libraries for insertion of youtube videos as react components found in NPM. The criteria of the decision was number of stars on GitHub and React support
