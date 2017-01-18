import Follow from "ce-test";

import "ce-test/src/components/Follow.css";

window.console && console.log("Follow", typeof Follow.default, Follow.default);

window.customElements.define("drc-follow", Follow.default);