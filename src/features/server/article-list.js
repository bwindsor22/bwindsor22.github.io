export default {
    '001': {
      "key": '001',
      "title": "So Why Include that package-lock.json",
      "date": "2019",
      "docBodyHtml": `
      First, all of the reasons you might be tempted not to:
        1. package-lock.json isn't used by the application to run at all
        2. package-lock.json gets regenerated when you run npm install, which you'll do anyway
        3. package-lock.json can actually make it harder to run an install, if some of your libraries have more recent versions you have to
        remove package-lock.json before an install will work.

      And finally, one really good reason why you should ignore all the above and absolutely include it:
        1. package-lock.json records exactly which package you installed. If you did npm install <package-name>@latest --save-dev,
        it probably looks something like this in your package.json: "<package-name>": "*".
        Six months from now, when all of your build tools have changed, and the app somehow mysteriously stopped working,
        you'll need to know what exact package version was that "*" when it last worked. And you're not going to know that unless you checked in package-lock.json

      `,
      "tags": ["bug report", "application development"]
    },
    '002': {
      "key": '002',
      "title": "Numpy compression formats",
      "date": "2019",
      "docBodyHtml": `
      https://stackoverflow.com/questions/22400652/compress-numpy-arrays-efficiently
      tmp1.pkl, tmp1.npy, tmp.npz
      import pickle
      pickle.dump(arrs, open('/Users/bradwindsor/ms_projects/qd-gen/gameQD/tmp1.pkl', 'wb'))
      `,
      "tags": ["research"] 
    },
    '003': {
      "key": '003',
      "title": "No free lunch",
      "date": "2019",
      "docBodyHtml":`
      There is no algorithm which can efficiently solve a random set of search points.
      Algorithms seem focused on small hills.
      `,
      "tags": ["research"] 
    }
  };