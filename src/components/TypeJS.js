import React from 'react';
import Typed from 'typed.js';

function TypeJS() {

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Frontend Developer' , 'Backend Developer' , 'Tailwind CSS' , 'Git VCS' , 'GitHub'],
      typeSpeed: 100,
      loop: true,
      backDelay: 700,
      startDelay:500
    });

    return () => {

      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} className='text-2xl font-bold mb-4'/>
    </div>
  );
}

export default TypeJS