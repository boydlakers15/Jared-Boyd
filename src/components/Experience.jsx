import {
  CameraControls,
  Environment,
  MeshReflectorMaterial,
  RenderTexture,
  Text,
  useFont,
} from "@react-three/drei";
import { useFrame, useThree, extend  } from "@react-three/fiber";
import { useAtom } from "jotai";
import { useEffect, useRef } from "react";
import { Color, Raycaster, Vector2 } from "three";
import { degToRad, lerp } from "three/src/math/MathUtils";
import {Model} from './Billboard';
import { currentPageAtom } from "./UI";
import React from "react";

const bloomColor = new Color("#fff");
bloomColor.multiplyScalar(1.5);

extend({ Raycaster });

export const Experience = () => {
  const controls = useRef();
  const meshFitCameraHome = useRef();
  const meshFitCameraStore = useRef();
  const textMaterial = useRef();
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  const degreesToRadians = (degrees) => (degrees * Math.PI) / 180;
  

  const intro = async () => {
    controls.current.dolly(-26);
    controls.current.smoothTime = 1.6;
    setTimeout(() => {
      setCurrentPage("home");
    }, 1200);
    fitCamera();
  };

  const fitCamera = async () => {
    if (currentPage === "store") {
      controls.current.smoothTime = 0.8;
      controls.current.fitToBox(meshFitCameraStore.current, true);
    } else {
      controls.current.smoothTime = 1.6;
      controls.current.fitToBox(meshFitCameraHome.current, true);
    }
  };

  useEffect(() => {
    intro();
  }, []);

  useEffect(() => {
    fitCamera();
    window.addEventListener("resize", fitCamera);
    return () => window.removeEventListener("resize", fitCamera);
  }, [currentPage]);

  return (
    <>
      <CameraControls ref={controls} />
      <mesh ref={meshFitCameraHome} position={[4.5, 1.5, 8]} rotation={[0, degreesToRadians(17.5), 0]} visible={false}>
        <boxGeometry args={[6, 3, 3]}  rotateZ={1} rotateY={1} rotateX={1}/>
        <meshBasicMaterial color="orange" transparent opacity={0.9} />
      </mesh>
    
        <meshBasicMaterial
          color={bloomColor}
          toneMapped={false}
          ref={textMaterial}
        >
          <RenderTexture attach={"map"}>
            <color attach="background" args={["#fff"]} />
            <Environment preset="sunset" />
            
              <Model
                scale={1.2}
                rotation-y={-degToRad(17.5)}
                position-x={1.23} // Adjust the X position to move it to the right
                position-y={0.61}
                position-z={1.967}
              />
           
          </RenderTexture>
        </meshBasicMaterial>

        <meshBasicMaterial  >
          <RenderTexture attach="map">
            <color attach="background" args={['#fff']} />
            <Environment preset="sunset" />
            
           
           
          </RenderTexture>
        </meshBasicMaterial>
   

     
      <group rotation-y={degToRad(-90)} position-x={4.7} position-y={-.4} position-z={2.1}>
        <Model scale={0.07} html />
       
      </group>
      <mesh position-y={-.48} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          blur={[100, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={5}
          roughness={1}
          depthScale={1.1}
          opacity={0.5}
          transparent
          minDepthThreshold={0.2}
          maxDepthThreshold={1.8}
          color="#333"
          metalness={0.5}
        />
      </mesh>
      <Environment preset="sunset" />
    </>
  );
};

useFont.preload("fonts/Poppins-SemiBoldItalic.ttf");