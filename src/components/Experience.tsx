import { Grid, OrbitControls, Point, Points, Sampler } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import React, { useRef } from "react";
import { InstancedMesh, Mesh } from "three";

type Props = {};

const Experience = (props: Props) => {
  const { scale } = useControls({ scale: -2 });
  const instRef = useRef<InstancedMesh>(null!);
  const geoRef = useRef<Mesh>(null!);

  return (
    <>
      <Perf position={"top-left"} />
      <OrbitControls />
      <Grid cellColor="white" args={[10, 10]} />

      <Sampler count={500}>
        <mesh>
          <boxGeometry args={[5, 5, 5]} />
          <meshNormalMaterial wireframe />
        </mesh>

        {/* <Points
          limit={1000} // Optional: max amount of items (for calculating buffer size)
          range={1000} // Optional: draw-range
        >
          <pointsMaterial vertexColors />
          <Point color="red" />
        </Points> */}

        <instancedMesh args={[null!, null!, 1_000]}>
          <sphereGeometry args={[0.1, 32, 32]} />
          <meshNormalMaterial />
        </instancedMesh>
      </Sampler>

      {/* <mesh scale={scale} ref={geoRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial wireframe />
      </mesh> */}
      {/* <Sampler mesh={mesh} instances={instances}></Sampler> */}
    </>
  );
};

export default Experience;
