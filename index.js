// issue tracker constant URL
// e.g. TargetProcess:
// 'https://companyname.tpondemand.com/entity/'
const issueUrl = '';

/**
 * Get the Markdown based template to insert into the GitHub pull request
 *
 * @param  {String} [story] Story is read from the branch name
 * @return {String}
 */
function getTemplate ( story ) {

    // template inserted into the pull request textbox
    // indentation is due to ES2015 (ES6) template strings which support
    // multiline but keep whitespace
    let template =
`
#### What does this PR do?

#### Todos:
* none

#### What are the dependent PRs?
* none

#### How should this be manually tested?

#### Any background context you want to provide?

#### What are the relevant stories?
* ${issueUrl}${story}

#### Screenshots:

#### Questions:
`;

    return template;
}

var textbox = document.getElementById( 'pull_request_body' );

if ( textbox ) {

    // retrieve the branch name
    var branch = document.querySelector( '[title^="compare:"]' );

    // The story ID is read from the branch name. This enforces a naming convention
    // on branches.
    // e.g. {STORY_ID}/{BRANCH_NAME}
    // 1234/my-branch-name
    var story = branch ? branch.innerHTML.split( '/' )[ 0 ] : '';

    textbox.value = getTemplate( story );
}
