import React, {PropTypes} from "react";
import AkkadAbstractComponent from "../AkkadAbstractComponent";
import Babylon from "babylonjs";

class Camera extends AkkadAbstractComponent {
    static contextTypes = {
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        const {appState, actions} = nextContext;

        if (appState && appState.has("scene") && !appState.has("camera")) {
            const {id} = this.props;
            actions.setCamera({
                type: "freeCamera"
            });
        }
    }
}

export default Camera;