# GitHub pull request template bookmarklet
Easily add a template to every GitHub pull request. I plan on creating a site to customize the bookmarklet in the browser.

## Naming convention
The bookmarklet enforces a commit naming convention which allows it to easily link an attached story. Each commit to be linked to an issue must contain the issue not in the following syntax: `#1234`

## Configuration
There are two main configuration to define, a template and an issue tracking base url.

### Template
To edit the template, open `index.js` and modify the markdown inside the `getTemplate` method.

```js
function getTemplate ( story ) {
    let template =
`
{Insert template markdown here}
`;

    return template;
}
```

**Note:** The template is using ES2015 (ES6) template strings and whitespace is **NOT** removed.

### Issue tracking URL
To edit the url, open `index.js` and modify the `issueUrl` variable.

```js
const issueUrl = '';
```

## Install bookmarklet

First time:

1. Clone the repo: `git clone git@github.com:fabien-d/github-pr-template-bookmarklet.git`
2. Install dependencies: `npm install`

To build and install:

1. `gulp`
2. Copy contents of `dist/index.min.js`
3. Create a new bookmarklet, give it a name and paste the content into the "URL" field

## Using the bookmarklet

With a "new pull request" screen open, click the added bookmarklet and the description box will get prefilled with your given template.
