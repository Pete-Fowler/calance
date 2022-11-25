# Description

This is a simple script using JavaScript and Node.js. It will fetch Bootstrap release data via the GitHub
API from `https://api.github.com/repos/twbs/bootstrap/releases`, and then store the requested data - created date, tag name, and download url - in a .csv file. The .csv file will be titled bootstrap-releases.csv, and it will be created at the root of the repository folder.

# Instructions

- Fork and clone this repository.
- Change directories into the repository folder with `cd calance`.
- Run the `npm install` terminal command (required for the 'node-fetch' library that is used).
- Run the `node index.js` terminal command to run the script.
- Open the `bootstrap-releases.csv` file to view the results.
