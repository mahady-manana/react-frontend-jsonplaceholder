const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;
const build = path.join(process.cwd(), "build");
app.use(express.static(build));
app.get("*", (req, res) => {
	const html = path.join(build, "index.html");
	res.sendFile(html, (err) => console.log(err));
});

app.listen(port, () => console.log("Server ready to launch"));
