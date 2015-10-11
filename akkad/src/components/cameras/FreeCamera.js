import React, {PropTypes} from "react";
import AkkadAbstractComponent from "../AkkadAbstractComponent";
import Babylon from "babylonjs";
import {RenderCamera} from "../systems";
import Entity from "../Entity";

class FreeCamera extends AkkadAbstractComponent {
    static propTypes = {
        initialPosition: PropTypes.arrayOf(PropTypes.number).isRequired,
        target: PropTypes.arrayOf(PropTypes.number).isRequired
    }

    static contextTypes = {
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    render() {
        const {target, initialPosition} = this.props;

        return (
            <Entity>
                <RenderCamera 
                    type="free"
                    target={target}
                    initialPosition={initialPosition}
                />
            </Entity>
        );
    }
}

export default FreeCamera;