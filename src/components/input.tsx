import React, { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.RefForwardingComponent<HTMLInputElement, InputProps> = (
  { name, label, ...rest },
  ref
) => {
  return (
    <div className="input-block">
      <div>
        <input ref={ref} type="text" {...rest} />
      </div>
    </div>
  );
};

export default forwardRef(Input);
