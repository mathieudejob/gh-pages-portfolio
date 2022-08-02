/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model({ ...props }) {
  // Const definitions
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "./website-anim.gltf"
    // "https://mathieudejob.github.io/portfolio2/website-anim.gltf"
  );
  const { actions } = useAnimations(animations, group);
  const incrementX = useRef(true);
  const incrementY = useRef(true);

  // Global 3D model rotation animation
  useFrame(() => {
    // X axis rotation
    if (incrementX.current == true && group.current.rotation.x < 0.08) {
      group.current.rotation.x += 0.0004;
    } else if (incrementX.current == true && group.current.rotation.x >= 0.08) {
      incrementX.current = false;
    } else if (
      incrementX.current == false &&
      group.current.rotation.x > -0.08
    ) {
      group.current.rotation.x -= 0.0004;
    } else if (
      incrementX.current == false &&
      group.current.rotation.x <= -0.08
    ) {
      incrementX.current = true;
    }

    // Y axis rotation
    if (incrementY.current == true && group.current.rotation.y < 0.08) {
      group.current.rotation.y += 0.0004;
    } else if (incrementY.current == true && group.current.rotation.y >= 0.08) {
      incrementY.current = false;
    } else if (
      incrementY.current == false &&
      group.current.rotation.y > -0.08
    ) {
      group.current.rotation.y -= 0.0004;
    } else if (
      incrementY.current == false &&
      group.current.rotation.y <= -0.08
    ) {
      incrementY.current = true;
    }
  });

  // Sub 3D model animations
  useEffect(() => {
    Object.keys(actions).forEach((key) => {
      actions[key].play();
    });
  }, []);

  // Render
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene" scale={0.4} rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          name="Cube"
          geometry={nodes.Cube.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cylinder004"
          geometry={nodes.Cylinder004.geometry}
          material={materials["Material.003"]}
          position={[0.11, 6.05, 9.23]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.11, 0.04, 0.11]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cylinder005"
          geometry={nodes.Cylinder005.geometry}
          material={materials["Material.005"]}
          position={[0.11, 6.05, 8.13]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.11, 0.04, 0.11]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cylinder006"
          geometry={nodes.Cylinder006.geometry}
          material={materials["Material.004"]}
          position={[0.11, 6.05, 8.71]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.11, 0.04, 0.11]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cylinder"
          geometry={nodes.Cylinder.geometry}
          material={materials["Material.008"]}
          position={[0.9, 3.58, -0.72]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.01, 0, 0.01]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cylinder001"
          geometry={nodes.Cylinder001.geometry}
          material={materials["Material.003"]}
          position={[0.9, 4.39, 3.57]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.11, 0.04, 0.11]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cylinder002"
          geometry={nodes.Cylinder002.geometry}
          material={materials["Material.005"]}
          position={[0.9, 4.39, 2.47]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.11, 0.04, 0.11]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cylinder003"
          geometry={nodes.Cylinder003.geometry}
          material={materials["Material.004"]}
          position={[0.9, 4.39, 3.05]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.11, 0.04, 0.11]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cube013"
          geometry={nodes.Cube013.geometry}
          material={materials["Material.002"]}
          position={[0.76, 3.71, 1.02]}
          scale={0.97}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cube014"
          geometry={nodes.Cube014.geometry}
          material={materials["Material.006"]}
          position={[0.9, 3.39, 2.03]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[1, 4.91, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cube015"
          geometry={nodes.Cube015.geometry}
          material={materials["Material.007"]}
          position={[0.9, 3.77, 2.71]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[1, 4.91, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cube004"
          geometry={nodes.Cube004.geometry}
          material={materials["Material.009"]}
          position={[0.2, 5.31, 0.37]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cube005"
          geometry={nodes.Cube005.geometry}
          material={materials["Material.006"]}
          position={[0.36, 5.32, -1.25]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={[-1.97, -8.95, -0.8]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cube006"
          geometry={nodes.Cube006.geometry}
          material={materials["Material.006"]}
          position={[0.36, 5.32, 3.73]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[1.97, 8.95, 2.11]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cube007"
          geometry={nodes.Cube007.geometry}
          material={materials["Material.006"]}
          position={[0.36, 5.32, 7.97]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={[-1.97, -8.95, -0.36]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cube008"
          geometry={nodes.Cube008.geometry}
          material={materials["Material.010"]}
          position={[0.19, -0.66, -1.32]}
          scale={[0.08, 5.17, 7.19]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cube009"
          geometry={nodes.Cube009.geometry}
          material={materials["Material.012"]}
          position={[1.07, 1.54, 6.35]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cylinder007"
          geometry={nodes.Cylinder007.geometry}
          material={materials["Material.011"]}
          position={[1.07, 3.28, 6.32]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[1.14, 0.08, 1.14]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cube010"
          geometry={nodes.Cube010.geometry}
          material={materials["Material.016"]}
          position={[1.53, -0.12, 7.06]}
          scale={1.71}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cube011"
          geometry={nodes.Cube011.geometry}
          material={materials["Material.014"]}
          position={[1.53, -1.3, 6.27]}
          scale={1.71}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cube012"
          geometry={nodes.Cube012.geometry}
          material={materials["Material.015"]}
          position={[1.53, -2.63, 7.13]}
          scale={1.71}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cube016"
          geometry={nodes.Cube016.geometry}
          material={materials["Material.020"]}
          position={[0.73, 2.04, -5.56]}
          scale={[1, 2.42, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cube017"
          geometry={nodes.Cube017.geometry}
          material={materials["Material.006"]}
          position={[0.87, 3.38, -5.84]}
          rotation={[-Math.PI, 0, -Math.PI / 2]}
          scale={[2.2, 1, 0.51]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cube018"
          geometry={nodes.Cube018.geometry}
          material={materials["Material.007"]}
          position={[0.58, 0.65, -3.84]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[2.23, 0.97, 0.67]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cylinder012"
          geometry={nodes.Cylinder012.geometry}
          material={materials["Material.019"]}
          position={[0.87, 3.2, -3.77]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[-1.15, -0.08, -1.15]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cylinder013"
          geometry={nodes.Cylinder013.geometry}
          material={materials["Material.003"]}
          position={[0.87, 4.36, -3.09]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cylinder014"
          geometry={nodes.Cylinder014.geometry}
          material={materials["Material.005"]}
          position={[0.87, 4.36, -4.19]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cylinder015"
          geometry={nodes.Cylinder015.geometry}
          material={materials["Material.004"]}
          position={[0.87, 4.36, -3.61]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cube001"
          geometry={nodes.Cube001.geometry}
          material={materials["Material.001"]}
          position={[0.58, 2.1, -3.85]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[2.23, 0.97, 0.67]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cube002"
          geometry={nodes.Cube002.geometry}
          material={materials["Material.013"]}
          position={[0.56, 1.47, -5.41]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[2.23, 0.97, 2.33]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cube003"
          geometry={nodes.Cube003.geometry}
          material={materials["Material.017"]}
          position={[0.87, 2.1, -3.87]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[2.23, 0.97, 0.67]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cube019"
          geometry={nodes.Cube019.geometry}
          material={materials["Material.018"]}
          position={[0.58, 0.65, -5.3]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[2.23, 0.97, 0.67]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cube022"
          geometry={nodes.Cube022.geometry}
          material={materials["Material.026"]}
          position={[-0.28, 1.06, 1.35]}
          scale={[0.92, 0.92, 1.02]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cube023"
          geometry={nodes.Cube023.geometry}
          material={materials["Material.022"]}
          position={[-0.14, 1.01, 2.24]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[1.9, 4.91, 0.92]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cylinder020"
          geometry={nodes.Cylinder020.geometry}
          material={materials["Material.023"]}
          position={[-0.14, 1.03, -0.54]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.78, 0.05, 0.78]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cube031"
          geometry={nodes.Cube031.geometry}
          material={materials["Material.021"]}
          position={[1.75, -3.96, -6.34]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[1, 1, 0.49]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cylinder009"
          geometry={nodes.Cylinder009.geometry}
          material={materials["Material.027"]}
          position={[2.04, -1.29, 5.36]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.13, 0.04, 0.13]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cylinder010"
          geometry={nodes.Cylinder010.geometry}
          material={materials["Material.024"]}
          position={[2.04, -1.29, 4.78]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.13, 0.04, 0.13]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cylinder011"
          geometry={nodes.Cylinder011.geometry}
          material={materials["Material.028"]}
          position={[2.04, -1.29, 5.88]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.13, 0.04, 0.13]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cube020"
          geometry={nodes.Cube020.geometry}
          material={materials["Material.030"]}
          position={[1.9, -2.85, 3.18]}
          scale={[1.09, 1.84, 1.09]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cube021"
          geometry={nodes.Cube021.geometry}
          material={nodes.Cube021.material}
          position={[2.06, -3.42, 5.35]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.05, -0.68, -0.26]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cube024"
          geometry={nodes.Cube024.geometry}
          material={nodes.Cube024.material}
          position={[2.06, -3.21, 4.03]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.05, -0.87, -0.26]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cube025"
          geometry={nodes.Cube025.geometry}
          material={nodes.Cube025.material}
          position={[2.06, -3.67, 2.66]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.05, -0.39, -0.26]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cube026"
          geometry={nodes.Cube026.geometry}
          material={nodes.Cube026.material}
          position={[2.06, -3.43, 1.19]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.05, -0.63, -0.26]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cube027"
          geometry={nodes.Cube027.geometry}
          material={materials["Material.034"]}
          position={[1.75, -3.45, -1.6]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[1, 1, 1.56]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cube028"
          geometry={nodes.Cube028.geometry}
          material={materials["Material.033"]}
          position={[1.61, -3.54, -3.03]}
          scale={[1, 1, 1.99]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cube029"
          geometry={nodes.Cube029.geometry}
          material={materials["Material.034"]}
          position={[1.75, -3.96, -1.58]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[1, 1, 2.42]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cube030"
          geometry={nodes.Cube030.geometry}
          material={materials["Material.034"]}
          position={[1.75, -3.96, -6.34]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[1, 1, 0.49]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cube032"
          geometry={nodes.Cube032.geometry}
          material={materials["Material.036"]}
          position={[1.39, -5.81, -0.26]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.46, 4.91, 0.16]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cube033"
          geometry={nodes.Cube033.geometry}
          material={materials["Material.035"]}
          position={[1.82, -5.79, -0.19]}
          scale={[0.47, 0.4, 0.62]}
        />
        <mesh
          castShadow
          receiveShadow
          name="Cube034"
          geometry={nodes.Cube034.geometry}
          material={materials["Material.036"]}
          position={[1.39, -5.81, -0.26]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.46, 4.91, 0.16]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./website-anim.gltf");
// useGLTF.preload("https://mathieudejob.github.io/portfolio2/website-anim.gltf");
