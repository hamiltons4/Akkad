import React, {PropTypes} from "react";
import Entity from "../Entity";
import EntityLoaded from "../EntityLoaded";
import {RenderShape} from "../systems";

class Sphere extends React.Component {
    static propTypes = {
        height: PropTypes.number,
        width: PropTypes.number
    }

    render() {
        const {height, width, children} = this.props;
        return (
            <Entity>
                <RenderShape 
                    type="ground"
                    width={width}
                    height={height}

                />
                <EntityLoaded>
                    {children}
                </EntityLoaded>
            </Entity>
        );
    }
}

export default Sphere;