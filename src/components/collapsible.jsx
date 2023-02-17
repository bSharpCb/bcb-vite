import { useState } from "react";

const Collapsible = (props) => {
    const [open, setOPen] = useState(false);
    const toggle = () => {
        setOPen(!open);
      };
      
      return (
        <div>
          <button onClick={toggle}>{props.label}</button>
            {open && (<div className="toggle">
              {props.tools.map(tool => {
                return <span className="tools" key={tool}>{tool}</span>;
              })}
            </div>)}
        </div>
      );
  };

export default Collapsible