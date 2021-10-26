import React from 'react';
import Skill from './skill'

class Hoa extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { skills, update } = this.props
        return (
            <div className="skill-panel container">
                <h1 className="level-1 rectangle">
                    <Skill type="hoa" skill={skills['phonghoa']} update={update} />
                </h1>
                <ol className="level-2-wrapper">
                    <li>
                        <h1 className="level-2 rectangle">
                            <Skill type="hoa" skill={skills['hoatien']} update={update} />
                        </h1>
                        <h1 className="level-2 rectangle">
                            <Skill type="hoa" skill={skills['hoitam']} update={update} />
                        </h1>
                        <h1 className="level-2 rectangle">
                            <Skill type="hoa" skill={skills['hoakiem']} update={update} />
                        </h1>
                        <h1 className="level-2 rectangle">
                            <Skill type="hoa" skill={skills['cuongdiem']} update={update} />
                        </h1>
                        <h1 className="rectangle">
                            <Skill type="hoa" skill={skills['bachhong']} update={update} />
                        </h1>
                    </li>
                    <li>
                        <h1 className="level-1 rectangle">
                            <Skill type="hoa" skill={skills['liethoa']} update={update} />
                        </h1>
                        <ol className="level-2-wrapper">
                            <li>
                                <h1 className="level-2 rectangle">
                                    <Skill type="hoa" skill={skills['hoaluan']} update={update} />
                                </h1>
                                <h1 className="level-2 rectangle">
                                    <Skill type="hoa" skill={skills['phonghoaluan']} update={update} />
                                </h1>
                                <h1 className="level-2 rectangle">
                                    <Skill type="hoa" skill={skills['batdien']} update={update} />
                                </h1>
                                <h1 className="rectangle">
                                    <Skill type="hoa" skill={skills['lieunguyen']} update={update} />
                                </h1>
                            </li>
                            <li>
                                <h1 className="level-2 rectangle">
                                    <Skill type="hoa" skill={skills['hoacau']} update={update} />
                                </h1>
                                <h1 className="level-2 rectangle">
                                    <Skill type="hoa" skill={skills['vudieu']} update={update} />
                                </h1>
                                <h1 className="level-2 rectangle">
                                    <Skill type="hoa" skill={skills['hoalong']} update={update} />
                                </h1>
                                <h1 className="rectangle">
                                    <Skill type="hoa" skill={skills['tamvi']} update={update} />
                                </h1>
                            </li>
                        </ol>
                    </li>
                </ol>
            </div>
        );
    }
}

export default Hoa;