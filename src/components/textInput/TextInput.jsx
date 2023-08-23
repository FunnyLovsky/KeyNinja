import React from "react";

const TextInput = React.forwardRef(({children, ...props}, ref) => {
    return(
        <div ref={ref} className="text_input" {...props} >
            {children}
        </div>
    );
});

export default TextInput;