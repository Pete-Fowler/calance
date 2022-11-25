import fetch from "node-fetch";

let data = [];

fetch(`https://api.github.com/repos/twbs/bootstrap/releases
`).then((r) => {
  if (r.ok) {
    r.json().then((results) => {
      data.push(["created_at", "tag_name", "download_url"]);
      results.forEach((obj) => {
        data.push([
          obj.created_at,
          obj.tag_name,
          obj.assets[0].browser_download_url,
        ]);
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
