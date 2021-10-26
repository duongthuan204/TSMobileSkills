import React from 'react';
import Skill from './skill'

class Thuy extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { skills, update } = this.props
        return (
            <div className="skill-panel container">
                <h1 className="level-1 rectangle">
                    <Skill type="thuy" skill={skills['nuocngap']} update={update} />
                </h1>
                <ol className="level-2-wrapper">
                    <li>
                        <h1 className="level-2 rectangle">
                            <Skill type="thuy" skill={skills['bangkiem']} update={update} />
                        </h1>
                        <h1 className="level-2 rectangle">
                            <Skill type="thuy" skill={skills['dungtuyen']} update={update} />
                        </h1>
                        <h1 className="level-2 rectangle">
                            <Skill type="thuy" skill={skills['hongthuy']} update={update} />
                        </h1>
                        <h1 className="level-1 rectangle">
                            <Skill type="thuy" skill={skills['bangda']} update={update} />
                        </h1>
                        <ol className="level-2-wrapper">
                            <li>
                                <h1 className="rectangle">
                                    <Skill type="thuy" skill={skills['tanbang']} update={update} />
                                </h1>
                            </li>
                            <li>
                                <h1 className="rectangle">
                                    <Skill type="thuy" skill={skills['bangphong']} update={update} />
                                </h1>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <h1 className="level-2 rectangle">
                            <Skill type="thuy" skill={skills['bangtuong']} update={update} />
                        </h1>
                        <h1 className="level-1 rectangle">
                            <Skill type="thuy" skill={skills['thanhluu']} update={update} />
                        </h1>
                        <ol className="level-2-wrapper">
                            <li>
                                <h1 className="level-2 rectangle">
                                    <Skill type="thuy" skill={skills['trilieu']} update={update} />
                                </h1>
                                <h1 className="level-2 rectangle">
                                    <Skill type="thuy" skill={skills['toantrilieu']} update={update} />
                                </h1>
                                <h1 className="rectangle">
                                    <Skill type="thuy" skill={skills['hoisinh']} update={update} />
                                </h1>
                            </li>
                            <li>
                                <h1 className="level-2 rectangle">
                                    <Skill type="thuy" skill={skills['hoima']} update={update} />
                                </h1>
                                <h1 className="level-2 rectangle">
                                    <Skill type="thuy" skill={skills['toanhoima']} update={update} />
                                </h1>
                                <h1 className="rectangle">
                                    <Skill type="thuy" skill={skills['giaitru']} update={update} />
                                </h1>
                            </li>
                        </ol>
                    </li>
                </ol>
            </div>
        );
    }
}

export default Thuy;