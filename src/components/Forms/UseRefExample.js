import React from 'react';

const UseRefExample = () => {
  const ref = React.useRef(null);
  const top = React.useRef(null);

  const handleScroll = () => {
    if (!ref || !ref.current) {
      return;
    }



    ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handleScrollTop = () => {
    if (!top || !top.current) {
      return;
    }



    top.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };


  return (
    <>
      <h3 ref={top} className="mt-5">Use Ref</h3>

      <div className="my-5 mx-auto" style={{ height: '100vh' }}>
        <button onClick={handleScroll} className="btn btn-info text-white">
          Scroll
        </button>
      </div>

      <div style={{ height: '100vh' }}></div>
      <h3 ref={ref} onClick={handleScrollTop}>Torna Sopra</h3>
      <div style={{ height: '30vh' }}></div>
    </>
  );
};

export default UseRefExample;
