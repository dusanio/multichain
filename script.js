const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1.5, stagger: 0.25 });
tl.to("#slider", { y: "-100%", duration: 1, delay: 0.5 });
tl.to("#intro", { y: "-100%", duration: 1 }, "-=0.8");
tl.fromTo("nav", { opacity: 0 }, { y: "0%", opacity: 1, duration: 0.25 });
tl.fromTo("#header-text", { opacity: 0 }, { opacity: 1, duration: 0.25 });
