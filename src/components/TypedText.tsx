import { useRef, useEffect } from 'preact/hooks';
import Typed from 'typed.js';

export default function TypedText({ messages }: { messages: string[] }) {

  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: messages,
      typeSpeed: 50,
      backSpeed: 10,
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