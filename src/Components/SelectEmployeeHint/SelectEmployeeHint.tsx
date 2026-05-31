import './SelectEmployeeHint.css'
import {faUserCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function SelectEmployeeHint() {
    return (
        <div className="select-hint">
            <div className="select-hint__icon">
                <FontAwesomeIcon icon={faUserCheck}/>
            </div>
            <h3 className="select-hint__title">Select an employee</h3>
            <p className="select-hint__desc">
                Choose a team member from the sidebar to view their performance overview, metrics, and activity.
            </p>
            <div className="select-hint__steps">
                <div className="select-hint__step">
                    <span className="step-num">1</span>
                    <span>Search or browse the employee list</span>
                </div>
                <div className="select-hint__step">
                    <span className="step-num">2</span>
                    <span>Tap any name to load their dashboard</span>
                </div>
                <div className="select-hint__step">
                    <span className="step-num">3</span>
                    <span>Use the back button to return anytime</span>
                </div>
            </div>
        </div>
    )
}

export default SelectEmployeeHint;