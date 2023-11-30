import React from "react";
import { Route, Switch} from "react-router-dom";

const RouterView = (props) => {
    return (
        <Switch>
            {props.routes.map((item, index) => {
                return (
                    <Route
                        key={index}
                        path={item.path}
                        exact={item.exact}
                        render={(routeProps) => {
                            // 判断是否存在子路由
                            if (item.children) {
                                return <item.component {...routeProps} routes={item.children} />;
                            } else {
                                return <item.component {...routeProps} />;
                            }
                        }}
                    />
                );
            })}
        </Switch>
    );
};
export default RouterView;

