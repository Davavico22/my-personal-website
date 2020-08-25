import ReactGA from "react-ga";

const GA_TRACKING_ID = "UA-176296938-1";

function init(){
    ReactGA.initialize(GA_TRACKING_ID);
    ReactGA.pageview("/");
}

export default{
    init
};