// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

import * as fs from "fs";

function getContent(err, data) {
  let content = new TextDecoder().decode(data);
  console.log(content);
}

fs.writeFile("./a.txt", "Good News from today", "utf-8", getContent);

// fs.readFile("./a.txt", getContent);
