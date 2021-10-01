import React from "react"

import { withRouter } from "react-router"
import ReactGA from "react-ga"

const RouteChangeTracker = ({ history }) => {

    history.listen((location, action) => {
        ReactGA.set({ page: location.pathname });
        ReactGA.pageview(location.pathname);
    })

    return ( 
        <div></div>
     )
}
 
export default withRouter(RouteChangeTracker);