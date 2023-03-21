const _0x2affcf = _0x4462;
function _0x3c4c() {
	const _0x5e8cb4 = [
		"/color-flipper/sw.js",
		"font-size:\x2020px",
		"length",
		"9fcJhng",
		"backgroundColor",
		"%cThank\x20you\x20for\x20checking\x20out\x20my\x20work!",
		"%cHello\x20World!\x20I\x27m\x20Emmanuel.",
		"catch",
		"%cThe\x20README\x20\x20\x20%chttps://bit.ly/3BVUmbr",
		"style",
		"%cLinkedin\x20%chttps://bit.ly/3cygAD4",
		"3503180NRqsAs",
		"getElementById",
		"5WCtBuu",
		"padding:\x2012px",
		"margin:\x206px\x200\x206px\x2014px",
		"font-size:\x2014px",
		"then",
		"10YkulCR",
		"30NsxJvW",
		"width:\x20200px",
		"padding:\x2016px",
		"log",
		"background:\x20linear-gradient(\x20109.6deg,\x20rgba(238,58,136,1)\x2011.2%,\x20rgba(128,162,245,1)\x2091.1%\x20)",
		"%cPortfolio%chttps://bit.ly/3QQr1Ux",
		"scope",
		"btn",
		"color:\x20white",
		"clear",
		"body",
		"serviceWorker",
		"register",
		"background:\x20rgba(238,58,136,1)",
		"floor",
		"color:\x20#fff",
		"margin:\x206px\x200\x206px\x200",
		"join",
		"font-size:\x2018px",
		"4708677NNHyTN",
		"437878JFpMUf",
		"15625630inNnyd",
		"random",
		"12804077cWvOvi",
		"querySelector",
		"%cHave\x20a\x20wonderful\x20day!",
		"border-radius:\x204px",
		"252186YrnHQu",
		".color",
		"8251712CjxMQe",
		"color:\x20rgba(238,58,136,1)",
	];
	_0x3c4c = function () {
		return _0x5e8cb4;
	};
	return _0x3c4c();
}
function _0x4462(_0x8f320f, _0x26a8a0) {
	const _0x3c4ca6 = _0x3c4c();
	return (
		(_0x4462 = function (_0x44624f, _0x1a61ec) {
			_0x44624f = _0x44624f - 0x11f;
			let _0x4a56c0 = _0x3c4ca6[_0x44624f];
			return _0x4a56c0;
		}),
		_0x4462(_0x8f320f, _0x26a8a0)
	);
}
(function (_0x25281d, _0x38dbde) {
	const _0x12792b = _0x4462,
		_0x227799 = _0x25281d();
	while (!![]) {
		try {
			const _0x4847cb =
				(-parseInt(_0x12792b(0x12f)) / 0x1) * (parseInt(_0x12792b(0x14b)) / 0x2) +
				parseInt(_0x12792b(0x143)) / 0x3 +
				(parseInt(_0x12792b(0x128)) / 0x4) * (-parseInt(_0x12792b(0x12a)) / 0x5) +
				(-parseInt(_0x12792b(0x130)) / 0x6) * (parseInt(_0x12792b(0x144)) / 0x7) +
				-parseInt(_0x12792b(0x14d)) / 0x8 +
				(parseInt(_0x12792b(0x120)) / 0x9) * (parseInt(_0x12792b(0x145)) / 0xa) +
				parseInt(_0x12792b(0x147)) / 0xb;
			if (_0x4847cb === _0x38dbde) break;
			else _0x227799["push"](_0x227799["shift"]());
		} catch (_0x65d4b9) {
			_0x227799["push"](_0x227799["shift"]());
		}
	}
})(_0x3c4c, 0xc7042);
const hex = [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, "A", "B", "C", "D", "E", "F"],
	btn = document[_0x2affcf(0x129)](_0x2affcf(0x137)),
	color = document[_0x2affcf(0x148)](_0x2affcf(0x14c));
btn["addEventListener"]("click", function () {
	const _0x46c84e = _0x2affcf;
	let _0x4258e0 = "#";
	for (let _0x273368 = 0x0; _0x273368 < 0x6; _0x273368++) {
		_0x4258e0 += hex[getRandomNumber()];
	}
	(color["textContent"] = _0x4258e0), (document[_0x46c84e(0x13a)][_0x46c84e(0x126)][_0x46c84e(0x121)] = _0x4258e0);
});
function getRandomNumber() {
	const _0xaebf1c = _0x2affcf;
	return Math[_0xaebf1c(0x13e)](Math[_0xaebf1c(0x146)]() * hex[_0xaebf1c(0x11f)]);
}
function swRegistration() {
	const _0x8a5fb6 = _0x2affcf,
		_0x4d71d4 = [_0x8a5fb6(0x150), _0x8a5fb6(0x12b), "margin:\x204px\x200\x204px\x204px", _0x8a5fb6(0x14e)][
			_0x8a5fb6(0x141)
		](";");
	if (_0x8a5fb6(0x13b) in navigator) {
		const _0x3334fd = {};
		(_0x3334fd[_0x8a5fb6(0x136)] = "/color-flipper/"),
			navigator["serviceWorker"]
				[_0x8a5fb6(0x13c)](_0x8a5fb6(0x14f), _0x3334fd)
				[_0x8a5fb6(0x12e)](function (_0x4a8e26) {
					const _0x4438f2 = _0x8a5fb6;
					console[_0x4438f2(0x133)]("%c❤️", _0x4d71d4);
				})
				[_0x8a5fb6(0x124)](function (_0x493796) {
					const _0x314305 = _0x8a5fb6;
					console[_0x314305(0x133)](_0x493796);
				});
	}
}
function consoleText() {
	const _0x5726c8 = _0x2affcf;
	console[_0x5726c8(0x139)]();
	const _0x51ddea = [
			_0x5726c8(0x138),
			_0x5726c8(0x13d),
			_0x5726c8(0x142),
			_0x5726c8(0x12b),
			"margin:\x206px\x200\x206px\x2014px",
		][_0x5726c8(0x141)](";"),
		_0xcb917 = [_0x5726c8(0x12d), _0x5726c8(0x132), _0x5726c8(0x140), _0x5726c8(0x14e)]["join"](";");
	console[_0x5726c8(0x133)](_0x5726c8(0x123), _0x51ddea), console["log"](_0x5726c8(0x122), _0xcb917);
	const _0xfd3507 = [
		_0x5726c8(0x12d),
		_0x5726c8(0x13f),
		_0x5726c8(0x131),
		"padding:\x208px",
		_0x5726c8(0x12c),
		_0x5726c8(0x14a),
		_0x5726c8(0x13d),
		_0x5726c8(0x134),
	]["join"](";");
	console[_0x5726c8(0x133)](_0x5726c8(0x135), _0xfd3507, _0xcb917),
		console[_0x5726c8(0x133)](_0x5726c8(0x127), _0xfd3507, _0xcb917),
		console[_0x5726c8(0x133)]("%cGithub\x20\x20\x20%chttps://bit.ly/3iwQC6U", _0xfd3507, _0xcb917),
		console["log"](_0x5726c8(0x125), _0xfd3507, _0xcb917),
		console["log"](_0x5726c8(0x149), _0xcb917);
}
swRegistration(), consoleText();
