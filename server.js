var express = require('express'),
app = express(),
port = process.env.PORT || 3002;
//var multer = require('multer');  //handles form-data used for uploading files
var bodyParser = require('body-parser');
var ejs = require('ejs');
var plato = require('es6-plato') // module to generate reports which includes visual reports stored in the artifacts/plato
let gulp = require('gulp');
//var plato = require('plato');
var path = require('path')
 app.set('view engine', 'ejs')

const GitHubApi = require('github')// npm module to link node api to github

const github = new GitHubApi({
  debug: true
})

const customHeaders = {
  'User-Agent': 'supreet29'
}

github.issues.getForRepo({
  owner: 'octokit',
  repo: 'node-github',
  headers: customHeaders
})

github.repos.getContent({
  owner: 'octokit',
  repo: 'node-github',
  path: ''
})
// token generated from the github account
github.authenticate({
  type: 'oauth',
  token: '3b6da739f3e1a47224ca2646bb316fd8dc9819f7'
})

github.repos.getAll({
  'affiliation': 'owner,organization_member'
},function(err,res){t
  const repositoryName = []
  const repositoryUrl = []
  if(err)
  console.log(err)
  else
  //console.log('******', res.data.length)
  res.data.forEach(repo => {
    repositoryName.push(repo.name)
    repositoryUrl.push(repo.html_url)
    console.log('helloworld',repositoryName);
  })


  let src = './testFile.js'
  let outputDir = './artifacts/plato';
  let complexityRules = {}
  let lintRules = {
    'rules': {
      'indent': [2,'tab'],
      'quotes': [2,'single'],
      'semi': [2,'always'],
      'no-console' : [1],
      'curly': ['error'],
      'no-dupe-keys': 2,
      'func-names': [1, 'always']
    },
    'env': {
      'es6': true
    },
    'globals':['require'],
    'parserOptions' : {
      'sourceType': 'module',
      'ecmaFeatures': {
        'jsx': true,
        'modules': true
      }
    }
  };

let platoArgs = {
  title: 'example',
  eslint: lintRules,
  complexity: complexityRules
};

//you can use the reports in the callback.
function callback(reports){
  let overview = plato.getOverviewReport(reports);

  let {
    total,
    average
  } = overview.summary;

  let output = `total
    ----------------------
    eslint: ${total.eslint}
    sloc: ${total.sloc}
    maintainability: ${total.maintainability}
    average
    ----------------------
    eslint: ${average.eslint}
    sloc: ${average.sloc}
    maintainability: ${average.maintainability}`;

  console.log(output);
}


//usage is plato.inspect
function analysis() {
  return plato.inspect(src, outputDir, platoArgs);
}

gulp.task('analysis', analysis);
console.log("&&&@@@@*******", gulp.task('analysis', analysis))
  console.log('***** repositoryName',repositoryName)
  console.log('***** repositoryUrl', repositoryUrl)
})

github.authenticate({
  type: 'basic',
  username: 'supreet29',
  password: 'ZeAl!)(*1'
})

// oauth


// oauth key/secret (to get a token)
github.authenticate({
  type: 'oauth',
  key: '85cccee1703eeea894aa',
  secret: '43d16d12696429af5f58be4e5fffe2115c5e3818'
})

// user token
github.authenticate({
  type: 'token',
  token: 'userToken'
})

// integration (jwt)
github.authenticate({
  type: 'integration',
  token: 'jwt'
})

// ~/.netrc
github.authenticate({
  type: 'netrc'
})

app.get('/api/file',function(req,res){
  res.render('display')
})

app.post('/api/file', function(req, res) {

})


app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
