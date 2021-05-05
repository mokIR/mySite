import './MainOption.scss';

import { textOptions, styleOptions } from './constants';

const MainOption = (props) => {

    return (<div className={`main-option option-${styleOptions[props.option]}`}>
        <div class="main-option--text-container">
            <h2>
                {textOptions[props.option]}
            </h2>
            {
                props.secondaryText && 
                <div class="main-option--secondary-text">
                    { props.secondaryText }
                </div>
            }
        </div>
        {props.childElement}
    </div>)
}

export default MainOption;