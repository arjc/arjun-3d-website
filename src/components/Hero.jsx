import { useEffect, useRef } from "react";


const Hero = () => {
    const videoRef = useRef();

    useEffect(() => {
        if (videoRef.current) videoRef.current.playbackRate = 2;
    }, []);

    return (
        <section className="flex flex-col items-center text-center">
            <div>
                <h1 className="font-mono text-5xl my-20">The amount of thejas and ojas-</h1>
                <p className="text-gray-500">-I recive after completing this project:</p>
            </div>
            <div className="w-170 m-10 border-25 rounded-2xl">
                <video ref={videoRef} src="/videos/counting.mp4" autoPlay muted playsInline></video>

            </div>
        </section>
    )
}

export default Hero