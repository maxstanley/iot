export default new Proxy(process.env, {
	get: (target, prop, _reciever) => {
		if (prop in target) {
			if (typeof(prop) === "string") {
				return target[prop];
			}
		}

		console.error(`${prop.toString()} is not set in process.env`);
		return "null"
	}
});