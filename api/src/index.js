const axios = require("axios");
const express = require("express");
const FormData = require("form-data");

const {
	IOT_IP,
	GATE_USER,
	GATE_PASS
} = process.env;

const app = express();

app.get("/open/:id", async (request, response) => {
	const { id } = request.params;

	const data = new FormData();
	data.append("login", GATE_USER);
	data.append("pass", GATE_PASS);
	data.append("send-login", "Sign+In");

	const config = {
		method: "POST",
		url: `http://${IOT_IP}/index.php`,
		data,
		headers: {
			...data.getHeaders()
		}
	};

	let axios_resposne; 
	try {
		axios_response = await axios(config);
	} catch (e) {
		return response.status(500).send("Error Logging in to Garage.");
	}

	const cookie = axios_response.headers["set-cookie"][0];

	axios_response = await axios({
		url: `http://${IOT_IP}/isg/opendoor.php?numdoor=${id}&status=2`,
		method: "GET",
		headers: {
			Cookie: `${cookie.split("; ")[0]}; Path=/; Domain=${IOT_IP};`
		},
		withCredentials: true
	});

	if (axios_response.status !== 200) {
		return response.status(500).send()
	}
	return response.status(200).send(`${axios_response.data}\n`);
});

app.listen(3000, () => {
	console.log("App listening on port 3000");
});

