
const GITHUB_SEARCH_URL = 'https://api.github.com/search/repositories';

function getDataFromApi(username, callback){
    const query = {
        q:`${username} in:name`,
        per_page: 5
    }
    $.getJSON(GITHUB_SEARCH_URL,query, callback)
}

function renderResult(result) {
    return `
      <div>
        <h2>
        <a class="js-result-name" href="${result.html_url}" target="_blank">${result.name}</a> by <a class="js-user-name" href="${result.owner.html_url}" target="_blank">${result.owner.login}</a></h2>
        <p>Number of watchers: <span class="js-watchers-count">${result.watchers_count}</span></p>
        <p>Number of open issues: <span class="js-issues-count">${result.open_issues}</span></p>
      </div>
    `;
  }


function displayGitSearch(data){
    const result  = data.items.map((item,index) => renderResult(item))
    $('.js-search-results').html(result)
}

function watchSubmit(){
    alert("i m clicked")
    $('.js-search-form').submit(event =>{
        event.preventDefault();
        const queryTarget = $(event.currentTaget).find('.js-query');
        const query = queryTarget.val();
        queryTarget.val("");
        getDataFromApi(query,displayGitSearch)
    })
}

$(watchSubmit);



/*
var a  = 10
var b = " my age is "+a

var c = ` my age is ${a}`
*/