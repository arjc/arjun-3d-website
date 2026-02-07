import { useEffect, useRef } from "react";


const Hero = () => {
    const videoRef = useRef();

    useEffect(() => {
        if (videoRef.current) videoRef.current.playbackRate = 2;
    }, []);

    return (
        <section className="flex flex-col items-center text-center justify-center h-screen">
            <h1 className="font-mono text-9xl my-20">
                Arjun M Liji
            </h1>
        </section>
    )
}

export default Hero