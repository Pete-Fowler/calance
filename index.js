import fetch from "node-fetch";
import fs from "fs";

// Create empty array to push rows of data into with first row being column names
let data = [["created_at", "tag_name", "download_url"]];

// Fetch from GitHub API for bootstrap releases
fetch(`https://api.github.com/repos/twbs/bootstrap/releases
`).then((r) => {
  if (r.ok) {
    r.json().then((results) => {
      results.forEach((obj) => {
        data.push([
          obj.created_at,
          obj.tag_name,
          obj.assets[0].browser_download_url,
        ]);
      });

      // Parse array into CSV format - first join joins rows into a string
      // with commas. The second join turns the outer array into a string
      // separated by new lines
      const csv = data.map((row) => row.join(",")).join("\n");

      // Use node.js fs.writeFile API to write the data to a .csv
      // Here we specify the path and filename, then what is being
      // written (the string in the csv variable), and then a callback
      // to handle any errors by printing them with console.log() or "done"
      // if no errors
      fs.writeFile("./bootstrap-releases.csv", csv, (err) => {
        console.log(err || "done");
      });
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
