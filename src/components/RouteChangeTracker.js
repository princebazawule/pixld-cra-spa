import React from "react"

import { withRouter } from "react-router"
import ReactGA from "react-ga"

const RouteChangeTracker = ({ history }) => {

    history.listen((location, action) => {
        ReactGA.set({ page: history.location.pathname + history.location.hash });
        ReactGA.pageview(history.location.pathname + history.location.hash);
    })

    return ( 
        <div></div>
     )
}
 
export default withRouter(RouteChangeTracker);