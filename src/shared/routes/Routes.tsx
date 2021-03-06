import React, { FC, lazy, Suspense, CSSProperties } from "react";
import { Route, Router, Switch, useHistory } from "react-router-dom";

import PrivateRoute from "@routes/PrivateRoute";
import { Notification } from "@library";
import { useNetworkStatus } from "@hooks";

const Home = lazy(() => import('@modules/Home/Home'));
const UI = lazy(() => import('@modules/UI/UI'))

interface RoutesProps {
  isAuth: boolean;
}

const Routes: FC<RoutesProps> = ({ isAuth }) => {
  const history = useHistory();
  const { networkStatus } = useNetworkStatus();

  const styles: CSSProperties = {
    top: "50%",
    left: "50%",
    width: "10rem",
    height: "10rem",
    position: "fixed",
    transform: "translate(-50%, -50%)",
  };
  const Loading = <img src="/spinner.gif" alt="" style={styles} />;

  return (
    <Router history={history}>
      {/* <Navbar /> */}
      <Notification
        type="error"
        position="bottom-left"
        title="Something went wrong"
        isShow={networkStatus === "offline"}
        message="Internet connection has been lost!"
      />
      <Notification
        type="success"
        title="Congrats"
        position="bottom-left"
        isShow={networkStatus === "online"}
        message="Internet connection has been restored!"
      />

      <Switch>
        <Suspense fallback={Loading}>
          <Route exact path="/fishing-world" component={Home} />
          <Route exact path='/fishing-world/ui' component={UI} />
          {/* <Route path='/ui-components' component={UIComponents} />
          <PrivateRoute exact path="/dashboard" isAuth={isAuth} component={Dashboard} /> */}
        </Suspense>
      </Switch>
    </Router>
  );
};

export default Routes;
