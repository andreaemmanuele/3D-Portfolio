import React from "react"
import { Canvas } from "@react-three/fiber"

function Scene() {
  return (
    <Canvas camera={{ position: [5, 2, 0] }}>
      <gridHelper />
      <color attach='background' args={["#111"]} />
      <ambientLight intensity={0.1} />
      <directionalLight color='#FFF' position={[0, 5, 1]} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial wireframe />
      </mesh>
    </Canvas>
  )
}

export default Scene
