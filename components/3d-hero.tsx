'use client'

import React, { Suspense, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Torus } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedObjects() {
  const sphereRef = useRef<THREE.Mesh>(null)
  const torusRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += 0.01
      sphereRef.current.rotation.y += 0.01
    }
    if (torusRef.current) {
      torusRef.current.rotation.x -= 0.005
      torusRef.current.rotation.z -= 0.008
    }
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0005
    }
  })

  return (
    <group ref={groupRef}>
      <Sphere ref={sphereRef} args={[1, 100, 100]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#00d4ff"
          wireframe
          emissive="#00d4ff"
          emissiveIntensity={0.5}
        />
      </Sphere>
      <Torus ref={torusRef} args={[2, 0.1, 16, 100]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#a855f7"
          wireframe
          emissive="#a855f7"
          emissiveIntensity={0.3}
        />
      </Torus>
      <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
      <pointLight position={[-10, -10, 10]} intensity={0.5} color="#a855f7" />
      <ambientLight intensity={0.5} />
    </group>
  )
}

function CanvasLoader() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-cyan-400">Loading 3D Scene...</div>
    </div>
  )
}

export default function ThreeDHero() {
  const [isMounted, setIsMounted] = React.useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className="w-full h-full bg-black" />
  }

  return (
    <div className="w-full h-96 rounded-2xl overflow-hidden border border-purple-500/30">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: '#000000' }}
      >
        <Suspense fallback={null}>
          <AnimatedObjects />
          <OrbitControls
            autoRotate
            autoRotateSpeed={2}
            enableZoom={false}
            enablePan={false}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
