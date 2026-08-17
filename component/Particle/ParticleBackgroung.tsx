"use client";

import { useEffect, useRef } from "react";

export default function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();

        window.addEventListener("resize", resizeCanvas);


        const isMobile = window.innerWidth < 768;
        const particleCount = isMobile ? 20 : 40;

        const particles = Array.from({ length: particleCount }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,

            // Very slow movement
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,

            size: Math.random() * 1.5 + 1.2,
            bright: Math.random() < 0.15,
            pulse: Math.random() * Math.PI * 2,
        }));

        let animationFrameId: number;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                const pulse = particle.bright ? Math.sin(Date.now() * 0.001 + particle.pulse) : 0;

                // Keep particles inside the screen
                if (particle.x < 0 || particle.x > canvas.width) {
                    particle.vx *= -1;
                }

                if (particle.y < 0 || particle.y > canvas.height) {
                    particle.vy *= -1;
                }

                const radius = particle.bright ? particle.size + 1.5 + (pulse + 1) * 0.5 : particle.size;
                // Draw particle
                ctx.beginPath();

                ctx.arc(
                    particle.x,
                    particle.y,
                    radius,
                    0,
                    Math.PI * 2
                );

                ctx.shadowBlur = particle.bright ? 30 + (pulse + 1) * 25 : 20;

                ctx.shadowColor = particle.bright ? "#22D3EE" : "#22D3EE";


                ctx.fillStyle = particle.bright ? "#22D3EE" : "#22D3EE";


                ctx.fill();
                ctx.shadowBlur = 0;


            });

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;

                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 160) {
                        const opacity = 1 - distance / 160;

                        ctx.beginPath();

                        ctx.moveTo(
                            particles[i].x,
                            particles[i].y
                        );

                        ctx.lineTo(
                            particles[j].x,
                            particles[j].y
                        );

                        ctx.shadowBlur = 4;
                        ctx.shadowColor = "rgba(0, 180, 255, 0.35)";

                        ctx.strokeStyle = `rgba(80, 200, 255, ${opacity * 0.2})`;

                        ctx.lineWidth = 0.5;

                        ctx.stroke();

                        ctx.shadowBlur = 0;
                    }
                }
            }

            // requestAnimationFrame(animate);
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();
        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-0"
        />
    );
}