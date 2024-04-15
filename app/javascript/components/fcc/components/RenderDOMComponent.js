import React     from "react"
import { createRoot } from 'react-dom/client';

const RenderDOMComponent = () => {
  return (
    <React.Fragment>
      <div  className='output'>
        <h5>Hello (to be rendered in the selected node: 'challenge-node')</h5>
        <p>
          With error:<br />
          [react-rails] Cannot find component: 'fcc/components/RenderDOMComponent' for element
        </p>

      </div>
    </React.Fragment>
  );
};

// export default RenderDOMComponent
const root = createRoot(document.getElementById('challenge-node'));
root.render(<RenderDOMComponent />);
