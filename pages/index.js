import React from "react";
import Head from "next/head";

export default () => (
	<div>
		<Head><script src="./static/index.js"/></Head>
		<h1>Hello world</h1>
		<drc-follow data-topic="Trump"></drc-follow>
	</div>
);