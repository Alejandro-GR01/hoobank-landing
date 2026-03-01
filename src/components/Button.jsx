import { useRef } from "react";
import gsap from "gsap";

const Button = ({ styles }) => {
  const btnRef = useRef(null);

  const handleClick = () => {
    const el = btnRef.current;
    if (!el) return;
    gsap
      .timeline()
      .to(el, {
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out",
      })
      .to(el, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
  };

  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      type="button"
      className={`get-button py-4 px-6 bg-blue-gradient font-medium  font-popins text-[18px] text-primary outline-none ${styles} rounded-[8px] cursor-pointer`}
    >
      Get Starter
    </button>
  );
};

export default Button;
