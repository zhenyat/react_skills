import React     from "react"

const StatelessFunctional = function() {
    return (
        <React.Fragment>
            <div className='stateless-function'>
                <p className='output'>Stateless Functional Component: output</p>
            </div>
        </React.Fragment>
    );
};

// to export functions, objects, or primitive values from the module so they 
// can be used by other programs with the import statement.
export default StatelessFunctional
