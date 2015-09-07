+ a = moment(1996-9-5)
+ b = moment(nao)
+ nPath = ['watcher','bridge','eagle','berserk','captain','hacker','ninja','knight','float'];
+ while (!a.isEqual(b))
  |---> a.add(1 day)

  |---> fPath = nPath[Math.random(nPath.length()+1)];

  |---> Fs.writeFile(fPath, Math.random().toString(), function(err) {
      if (err) {
        return callback(err);
      }
      |---> repo.add(function(err) {
        if (err) {
          return callback(err);
        }
        |---> repo.commit(message, options, callback);
      });
    });
