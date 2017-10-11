function displayRepositories(event, data) {
  var repos = JSON.parse(this.responseText)
  const repoList = `<ul>${repos.map(r => '<li>' + r.name + r.html_url + ' - <a href="#" data-repo="' + r.name + '" onclick="getCommits(this)">Get Commits</a></li>').join('')}</ul>`
  document.getElementById("repositories").innerHTML = repoList
}

function getRepositories() {
  let user = document.getElementById('username').value
  const req = new XMLHttpRequest()
  req.addEventListener("load", showRepositories);
  req.open("GET", `${'https://api.github.com/users/' + user + '/repos'}`)
  req.send()
}

function displayBranches(){
  const branches = JSON.parse(this.responseText)
  const commitsList = `<ul>${commits.map(commit => '<li><strong>' + branch.name + '</strong>' + '</li>').join('')}</ul>`
}
function getBranches(el){
  let branch = el.dataset.repository
  let user = document.getElementById('username').value
  const req = new XMLHttpRequest()
  req.addEventListener("load", displayBranches);
  req.open("GET", `${'https://api.github.com/repos/' +user+ '/' +branch+'/branches'}`)
  req.send()
}

function getCommits(el) {
  const name = el.dataset.repo
  const req = new XMLHttpRequest()
  req.addEventListener("load", showCommits)
  req.open("GET", 'https://api.github.com/repos/' + name + '/commits')
  req.send()
}
function displayCommits() {
  const commits = JSON.parse(this.responseText)
  const commitsList = `<ul>${commits.map(commit => '<li><strong>' + commit.author.login + '</strong> - ' + commit.commit.message + '</li>').join('')}</ul>`
  document.getElementById("commits").innerHTML = commitsList
}
