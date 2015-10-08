import React, {PropTypes} from "react";
import AkkadAbstractComponent from "../AkkadAbstractComponent";
import {Helpers} from "../../classes";

class Position extends AkkadAbstractComponent {
	static contextTypes = {
		entityID: PropTypes.string,
		appState: PropTypes.object,
		actions: PropTypes.object
	}

	componentWillUpdate(nextProps, nextState, nextContext) {
        const {entityID, appState} = nextContext;

        if(appState && appState.has("scene") && appState.hasIn(["meshes", entityID])) {
            const {mesh} = appState.getIn(["meshes", entityID]);
            console.log("mesh", mesh);

            const options = Helpers.convertShapeProps(nextProps);
            console.log("options", options);

            for (let option in options) {
            	if (mesh.position.hasOwnProperty(option)) {
            		mesh.position[option] = options[option];
            	}
            }

        }
    }
}

export default Position;
