// LandingPage.js

import React from 'react';

import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Suspense } from "react";
import { Experience } from "./Experience";

import { Canvas } from '@react-three/fiber';

const LandingPage = () => {
  return (
    <section className="landing-page 'w-full h-screen bg-transparent'">
       
      <Canvas className='w-full h-screen bg-transparent' shadows camera={{ near: 1.3 , far: 1000, fov: 42 }}>
          <color attach="background" args={["#171720"]} />
            
        <Suspense>,
          <Experience />
        </Suspense>
        <EffectComposer>
          <Bloom mipmapBlur intensity={1.2} />
        </EffectComposer>
      </Canvas>
      
               
    
    </section>
  );
};

export default LandingPage;
