var Fs = require("fs");
var Ul = require("ul");
var Repo = require("gry");

var moment = require('moment');
var start = moment("1996-09-05", "YYYY-MM-DD");
var nao = moment();

var nPath = ['watcher', 'bridge', 'eagle', 'berserk', 'captain', 'hacker', 'ninja', 'knight', 'float'];


var repoId = Math.random().toString(36).substring(3);

var publicDir = Path.resolve(__dirname + "/../public/repos");
var repoPath = publicDir + "/" + repoId;
var numberOfCommits = options.coordinates.length * options.commitsPerDay;


var completedCommits = 0;
var repo = new Repo(repoPath);

function dummyCommit(message, date, callback) {
  var options = date ? "--date " + date : "";

  var filePath = repoPath + "/" + nPath[Math.random(nPath.length() + 1)] + '.md';

  Fs.writeFile(filePath, Math.random().toString(), function(err) {
    if (err) {
      return callback(err);
    }
    repo.add(function(err) {
      if (err) {
        return callback(err);
      }
      repo.commit(message, options, callback);
    });
  });
}

function WriteCallBack(err) {
  if (err) {
    return callback(err);
  }
  repo.add(function(err) {
    if (err) {
      return callback(err);
    }
    repo.commit(message, options, callback);
  });
}

while (start !== nao) {
  start.add(1, 'd');

  var filePath = repoPath + "/" + nPath[Math.random(nPath.length() + 1)] + '.md';

  Fs.writeFile(
    readmeFilePath,
    Math.random().toString(),
    WriteCallBack(err));
}
