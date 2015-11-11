import React, {Component, PropTypes} from 'react';
import {Akkad, Scene, shapes, cameras, lights, systems} from "akkad";
import skullMesh from "../meshes/skull.babylon";

const {FreeCamera} = cameras;
const {HemisphericLight} = lights;
const {
    Position,
    Rotate,
    Gravity, 
    ApplyGravity, 
    CheckCollisions,
    CollisionsEnabled
} = systems;

const {
    Box, 
    Sphere,
    Disc,
    Cylinder,
    Torus,
    Ground,
    Lines,
    DashedLines
} = shapes;

class ShapesPage extends Component {
    render() {
        return (
            <div>
                <h2>
                    Mesh Example
                </h2>
                <Akkad>
                    <Scene>
                        <CollisionsEnabled />
                        <Gravity vector={[0, -0.9, 0]} />
                        <FreeCamera 
                            initialPosition={[0, 0, 10]}
                            target={[0, 0, 0]} 
                        >
                            <CheckCollisions />
                            <ApplyGravity />
                        </FreeCamera>
                        <HemisphericLight />
                        <Box>
                            <Position vector={[2, 0, 0]} />
                        </Box>
                        <Sphere 
                            segments={24}
                            diameterX={2}
                            diameterY={2}
                            diameterZ={2}
                        >
                            <Position vector={[-2, 0, 0]} />
                        </Sphere>
                        <Cylinder>
                            <Rotate
                                axis={[1, 1.2, 0]}
                                amount={60}
                                space="LOCAL"
                            />
                        </Cylinder>
                        <Torus
                            diameter={2}
                            thickness={.5}
                            tessellation={30}
                        >
                            <Position vector={[4, 0, 1]} />
                            <Rotate
                                axis={[1, 1.2, 0]}
                                amount={60}
                                space="LOCAL"
                            />
                        </Torus>
                        <Lines 
                            vectors={[[2, 3, 4], [3, 4, 7], [5, 3, 6]]}
                        />
                        <DashedLines 
                            vectors={[[4, 2, 8], [7, 4, 4], [9, 1, 6]]}
                            dashSize={600}
                            gapSize={1000}
                        />
                        <Ground 
                            height={300}
                            width={300}
                        >
                            <Position vector={[0, -2, 0]} />
                            <CheckCollisions />
                        </Ground>
                    </Scene>
                </Akkad>
            </div>
        );
    }
}

export default ShapesPage;
