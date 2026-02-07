import { Canvas } from "@react-three/fiber"
import { Sphere } from "@react-three/drei"

const ThreeViewer = () => {
  return (
      <Canvas camera={{ position: [-120, 40, 50], fov: 30, near: 0.1, far: 9999 }} className="fixed top-0 left-0 w-full h-full -z-1 pointer-events-none bg-black">
        <Sphere />
      </Canvas>
  )
}

export default ThreeViewer