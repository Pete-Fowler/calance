// fetch allows you to execute fetches in node.js,
// and fs is a node file system module that allows you
// to write to the file system
import fetch from "node-fetch";
import fs from "fs";

// Create empty array to push rows of data into with first row being column names
let data = [["Date Created", "Release (tag_name)", "Download Url"]];

// Fetch from GitHub API for bootstrap releases
fetch(`https://api.github.com/repos/twbs/bootstrap/releases
`).then((r) => {
  if (r.ok) {
    r.json().then((results) => {
      results.forEach((obj) => {
        // iterate through each release object
        data.push([
          // push the appropriate data into an array
          obj.created_at.slice(0, 10),
          obj.tag_name,
          obj.assets[0].browser_download_url,
        ]);
      });

      // Parse array into CSV format - first join joins rows into a string
      // separated with commas. The second join turns the outer array into a string
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
    // Otherwise console.log any errors if the fetch response was bad
    r.json().then((err) => console.log(err));
  }
});
