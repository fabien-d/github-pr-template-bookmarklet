// issue tracker constant URL (Leave blank for GitHub)
// e.g. TargetProcess:
// 'https://companyname.tpondemand.com/entity/'
const issueUrl = '';

/**
 * Get the Markdown based template to insert into the GitHub pull request
 *
 * @param  {String} [stories] Stories read from the commit message
 * @return {String}
 */
function getTemplate ( stories ) {

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
${stories}

#### Screenshots:

#### Questions:
`;

    return template;
}

let textbox = document.getElementById( 'pull_request_body' );

if ( textbox ) {

    // retrieve all commits
    let commits = document.querySelectorAll( '.commit-message' );
    let commitStr = [];
    let stories = [];

    // loop over commits and extract the issue #
    [].forEach.call( commits, commit => {
        commitStr.push( commit.textContent.trim() );
    } );

    // extract unique issues
    let commitMatches = commitStr.join( ' ' ).match( /#\d+/g );
    let unique = [];

    if ( commitMatches ) {
        unique = commitMatches.filter( ( issue, idx, issues ) => {
            return issues.indexOf( issue ) === idx;
        } );
    }

    // The story ID is read from the commit messages. This enforces the id
    // to be part of the commit message
    let storiesStr = '';
    unique.forEach( num => {
        storiesStr += '* Fixes ' + issueUrl + num + ' \n';
    } );

    textbox.value = getTemplate( storiesStr );
}
