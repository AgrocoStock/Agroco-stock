
import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'

function LogoMesh(){
  const ref = useRef()
  useFrame((state, delta) => {
    if(ref.current) ref.current.rotation.y += delta * 0.35
  })
  return (
    <group ref={ref}>
      <Float rotationIntensity={0.6} floatIntensity={0.4}>
        <mesh position={[0, -0.02, 0]}>
          <torusGeometry args={[0.55, 0.12, 32, 64]} />
          <meshStandardMaterial metalness={0.9} roughness={0.2} color={'#16a34a'} />
        </mesh>

        <mesh position={[0, 0.12, 0.03]}>
          <sphereGeometry args={[0.08, 32, 32]} />
          <meshStandardMaterial color={'#ffffff'} metalness={1} roughness={0.05} />
        </mesh>

        <mesh position={[-0.14, 0.05, 0.02]} rotation={[0,0.4,0]}>
          <boxGeometry args={[0.02,0.45,0.16]} />
          <meshStandardMaterial color={'#ffffff'} metalness={0.6} roughness={0.2} />
        </mesh>
        <mesh position={[0.14, 0.05, 0.02]} rotation={[0,-0.4,0]}>
          <boxGeometry args={[0.02,0.45,0.16]} />
          <meshStandardMaterial color={'#ffffff'} metalness={0.6} roughness={0.2} />
        </mesh>
      </Float>
    </group>
  )
}

export default function Logo3D({size=120}){
  const style = {width:size, height:size}
  return (
    <div style={style}>
      <Canvas camera={{position:[0,0,2.5],fov:45}}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2,2,2]} intensity={0.9} />
        <LogoMesh />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}
