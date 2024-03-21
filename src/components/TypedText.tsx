import { useRef, useEffect } from 'preact/hooks';
import Typed from 'typed.js';

export default function TypedText({ messages }: { messages: string[] }) {

  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  console.log(el.current)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: messages,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <span ref={el} />
  );
}