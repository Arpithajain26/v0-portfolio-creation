'use client'

import React, { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Torus, Box } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedObjects() {
  const sphereRef = useRef<THREE.Mesh>(null)
  const torusRef1 = useRef<THREE.Mesh>(null)
  const torusRef2 = useRef<THREE.Mesh>(null)
  const boxRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += 0.008
      sphereRef.current.rotation.y += 0.012
    }
    if (torusRef1.current) {
      torusRef1.current.rotation.x -= 0.005
      torusRef1.current.rotation.z -= 0.008
    }
    if (torusRef2.current) {
      torusRef2.current.rotation.y += 0.004
      torusRef2.current.rotation.x += 0.002
    }
    if (boxRef.current) {
      boxRef.current.rotation.x += 0.006
      boxRef.current.rotation.y += 0.009
    }
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.0002
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main Sphere */}
      <Sphere ref={sphereRef} args={[1, 100, 100]} position={[0, 0, 0]}>
        <meshPhongMaterial
          color="#06B6D4"
          wireframe={true}
          emissive="#06B6D4"
          emissiveIntensity={0.6}
          shininess={100}
        />
      </Sphere>

      {/* Primary Torus */}
      <Torus ref={torusRef1} args={[2.2, 0.12, 16, 100]} position={[0, 0, 0]}>
        <meshPhongMaterial
          color="#A855F7"
          wireframe={true}
          emissive="#A855F7"
          emissiveIntensity={0.4}
        />
      </Torus>

      {/* Secondary Torus */}
      <Torus ref={torusRef2} args={[3, 0.1, 16, 100]} position={[0, 0, 0]}>
        <meshPhongMaterial
          color="#06B6D4"
          wireframe={true}
          emissive="#06B6D4"
          emissiveIntensity={0.2}
        />
      </Torus>

      {/* Accent Box */}
      <Box ref={boxRef} args={[0.6, 0.6, 0.6]} position={[1.8, 0.8, 0]}>
        <meshPhongMaterial
          color="#A855F7"
          wireframe={true}
          emissive="#06B6D4"
          emissiveIntensity={0.3}
        />
      </Box>

      {/* Lighting */}
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#06B6D4" />
      <pointLight position={[-10, -10, 10]} intensity={0.8} color="#A855F7" />
      <pointLight position={[0, 10, -10]} intensity={0.6} color="#06B6D4" />
      <ambientLight intensity={0.4} />
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
