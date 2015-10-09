import Babylon from "babylonjs";
import {Helpers} from "../classes";

const lightCreators = {
    hemispheric(scene, entityID, props) {
        return new Babylon.HemisphericLight(entityID, new Babylon.Vector3(0, 1, 0), scene);
    }
};

export default {
    createLight(state, actions, entityID, props) {
        const {type} = props;

        if (type && lightCreators[type] && !state.hasIn(["lights", entityID])) {
            const scene = state.get("scene");
            const light = lightCreators[type](scene, entityID, props);

            state = actions.updateLight({
                id: entityID,
                light
            });
        }

        return state;
    },

    updateLight(state, actions, lightObj) {
        return state.updateIn(["lights", lightObj.id], light => lightObj);
    }
};