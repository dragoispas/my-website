import { useEffect, useRef, useState, type TouchEvent } from "react"
import RoleCard from "../Components/RoleCard";
import { projects, roles } from "../data";
import ExperiencePagination from "../Components/ExperiencePagination";
import Tooltip from "../Components/Tooltip";
import ProjectCard from "../Components/ProjectCard";

export default function ExperienceSection() {
const [activeCardStack, setActiveCardStack] = useState<"left" | "right">("left");
  const [containerHeight, setContainerHeight] = useState<number>(0)
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const touchStartXRef = useRef<number | null>(null);

  const leftCardStackRef = useRef<HTMLDivElement | null>(null);
  const rightCardStackRef = useRef<HTMLDivElement | null>(null);

  function slide(direction: "left" | "right") {
    setActiveCardStack(direction)
  }

  useEffect(() => {
    const currentCardStackRef = activeCardStack === "left" ? leftCardStackRef : rightCardStackRef;

    if (currentCardStackRef.current) {
      setContainerHeight(currentCardStackRef.current.offsetHeight);
    }
  }, [activeCardStack]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        slide("right");
      }

      if (e.key === "ArrowLeft") {
        slide("left");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function handleTouchStart(e: TouchEvent<HTMLDivElement>) {
    touchStartXRef.current = e.touches[0].clientX;
    setIsDragging(true);
    setDragOffset(0);
  }

  function handleTouchMove(e: TouchEvent<HTMLDivElement>) {
    if (touchStartXRef.current === null) return;

    const currentX = e.touches[0].clientX;
    setDragOffset(currentX - touchStartXRef.current);
  }

  function handleTouchEnd() {
    if (touchStartXRef.current === null) return;

    const threshold = 60;

    if (dragOffset <= -threshold) {
      slide("right");
    } else if (dragOffset >= threshold) {
      slide("left");
    }

    touchStartXRef.current = null;
    setIsDragging(false);
    setDragOffset(0);
  }

  const baseTranslate = activeCardStack === "left" ? 0 : -100;
  const translate = `translateX(calc(${baseTranslate}% + ${dragOffset}px))`;
  const title = activeCardStack === "left" ? "Projects & Roles" : "Personal Projects";

  return (
    <section className='experience'>
      <div className="experience-header">
        <div className="experience-eyebrow-row">
          <p className="eyebrow">Experience</p>
          <Tooltip data="You can use arrow keys or swiipe if you have a touchscreen!"/>
        </div>
        <div className="experience-title">
          <h2>{title}</h2>
        </div>
        <ExperiencePagination active={activeCardStack} onChange={slide}/>
      </div>
      <div
        className="slider-viewport"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      >
        <div
          className="slide-container"
          style={{
            transform: translate,
            height: containerHeight,
            transition: isDragging ? "none" : undefined,
          }}
        >
          <div className="card-stack" ref={leftCardStackRef}>
            {roles.map(role => <RoleCard key={role.title} role={role}/>)}
          </div>
          <div className="card-stack" ref={rightCardStackRef}>
            {projects.map(project => <ProjectCard key={project.title} project={project}/>)}
          </div>
        </div>
      </div>
    </section>
  )
}