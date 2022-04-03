export const action = () => {
  console.log("Hello");
};

import { readFile, writeFile } from "fs/promises";

let template = await readFile(
  new URL("template.html", import.meta.url),
  "utf-8"
);

const data = {
  title: "changing things to something more better",
  body: "everything will be alright",
};

for (const [keys, values] of Object.entries(data)) {
  template = template.replace(`{${keys}}`, values);
}

await writeFile(new URL("index.html", import.meta.url), template);
console.log(template);
