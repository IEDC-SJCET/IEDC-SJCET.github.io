'use client'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// GSAP-based hero animation: draws the path and moves the airplane along it.
// Optimizations:
// - Uses transforms (MotionPathPlugin) for smooth GPU-accelerated motion.
// - Pauses animation when the section leaves the viewport via ScrollTrigger.
// - Cleans up tweens and triggers on unmount.

const pathD = `M1 279.361C56.8159 160.506 211.609 58.3054 423.016 269.767C499.347 363.705 782.689 559.976 908.975 309.742C1035.26 59.5074 784.288 -69.2102 714.351 40.3178C644.415 149.846 709.156 357.71 908.975 378.496C1068.83 395.125 1242.14 276.03 1321 207.009`;

const HeroAnimation = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const pathRef = useRef<SVGPathElement | null>(null);
    const planeRef = useRef<SVGImageElement | null>(null);

    useEffect(() => {
        gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

        const path = pathRef.current;
        const plane = planeRef.current as unknown as SVGElement | null;
        const container = containerRef.current;
        if (!path || !plane || !container) return;

        const pathLength = (path as SVGPathElement).getTotalLength();

        // prepare stroke for drawing animation (smoother caps/joins)
        gsap.set(path, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength,
            stroke: 'rgba(0,0,0,0.12)',
            strokeWidth: 2.5,
            fill: 'transparent',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            vectorEffect: 'non-scaling-stroke',
        });

        // draw animation
        const drawTween = gsap.to(path, {
            strokeDashoffset: 0,
            duration: 3,
            ease: 'power2.out',
            paused: true,
        });

        // airplane motion along path (paused initially)
        const planeTween = gsap.to(plane, {
            motionPath: {
                path: path,
                align: path,
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
            },
            duration: 5,
            ease: 'power1.inOut',
            repeat: -1,
            paused: true,
        });

        // Use ScrollTrigger to play/pause the animations when visible
        const st = ScrollTrigger.create({
            trigger: container,
            start: 'top 85%',
            end: 'bottom top',
            onEnter: () => {
                drawTween.play();
                // give draw a small headstart for perceived smoothness
                gsap.delayedCall(0.2, () => planeTween.play());
            },
            onEnterBack: () => {
                drawTween.play();
                gsap.delayedCall(0.2, () => planeTween.play());
            },
            onLeave: () => {
                planeTween.pause();
                drawTween.pause();
            },
            onLeaveBack: () => {
                planeTween.pause();
                drawTween.pause();
            },
        });

        // minor performance hint: ensure will-change set on plane (SVG)
        try {
            if (plane && 'style' in plane) {
                (plane as any).style.willChange = 'transform';
            }
        } catch (e) {
            // ignore
        }

        return () => {
            planeTween.kill();
            drawTween.kill();
            st.kill();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="bottom-0 left-0 top-0 right-0 absolute z-[1] mt-[250px] w-full pointer-events-none overflow-visible"
            style={{ overflow: 'visible' }}
        >
            <div style={{ position: 'relative', overflow: 'visible' }}>
                {/* widen viewBox so the curve has horizontal breathing room on desktop */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={1400}
                    height={420}
                    viewBox="0 0 1400 420"
                    preserveAspectRatio="xMinYMid meet"
                    className="w-full h-auto"
                    style={{ overflow: 'visible' }}
                >
                    <path
                        ref={pathRef}
                        d={pathD}
                        fill="none"
                        stroke="rgba(0,0,0,0.12)"
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                    />
                    {/* airplane as SVG image so it moves in SVG coordinate space and scales responsively */}
                    <image
                        ref={planeRef}
                        href="/smallairplane.png"
                        width={80}
                        height={80}
                        preserveAspectRatio="xMidYMid meet"
                        style={{ transform: 'translate(-40px, -40px)', pointerEvents: 'none' }}
                    />
                </svg>
            </div>
        </div>
    );
};

export default HeroAnimation;