import fetch from "node-fetch";

let data = [];

fetch(`https://api.github.com/repos/twbs/bootstrap/releases
`).then((r) => {
  if (r.ok) {
    r.json().then((results) => {
      results.forEach((obj) => {
        data.push({
          created_date: obj.created_at,
          tag_name: obj.tag_name,
          browser_download_url: obj.assets[0].browser_download_url,
        });
      });
      console.log(data);
    });
  } else {
    r.json().then((err) => console.log(err));
  }
});

/*
https://api.github.com/repos/twbs/bootstrap/releases



=================================================================

Please create a small program or script that uses the GitHub API to pull information from the Bootstrap repository and write it to a file.

Repo:  twbs/bootstrap using the main branch

Use the GitHub API to retrieve a list of releases
Write the list of releases to a CSV file.  In the file write:
- Created Date
- Tag name
- URL for the distribution zip file
*/
