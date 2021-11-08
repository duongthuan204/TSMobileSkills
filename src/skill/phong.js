import React from 'react';
import Skill from './skill';

class Phong extends React.Component {

    render() {
        const { skills, update } = this.props
        return (
            <div className="skill-panel container">
                <div className="is-desktop">
                    <h1 className="level-1 rectangle">
                        <Skill type="phong" skill={skills['nguphong']} update={update} />
                    </h1>
                    <ol className="level-2-wrapper">
                        <Phong1 skills={skills} update={update} />
                        <Phong2 skills={skills} update={update} />
                    </ol>
                </div>
                <div className="is-mobi">
                    <div className="columns">
                        <div className="column">
                            <ol>
                                <Phong1 skills={skills} update={update} />
                            </ol>
                        </div>
                        <hr />
                        <div className="column">
                            <ol>
                                <Phong2 skills={skills} update={update} />
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Phong;

function Phong1(props) {
    const { skills, update } = props
    return (
        <li>
            <h1 className="level-2 rectangle is-mobi">
                <Skill type="phong" skill={skills['nguphong']} update={update} />
            </h1>
            <h1 className="level-2 rectangle">
                <Skill type="phong" skill={skills['lantranh']} update={update} />
            </h1>
            <h1 className="level-2 rectangle">
                <Skill type="phong" skill={skills['anminh']} update={update} />
            </h1>
            <h1 className="level-1 rectangle">
                <Skill type="phong" skill={skills['phanthan']} update={update} />
            </h1>
            <ol className="level-2-wrapper">
                <li>
                    <h1 className="level-1 rectangle">
                        <Skill type="phong" skill={skills['phongto']} update={update} />
                    </h1>
                </li>
                <li>
                    <h1 className="level-1 rectangle">
                        <Skill type="phong" skill={skills['thunho']} update={update} />
                    </h1>
                </li>
            </ol>
            <ol className="level-0-wrapper">
                <li>
                    <h1 className="level-0 rectangle">
                        <Skill type="phong" skill={skills['nguyenkhi']} update={update} />
                    </h1>
                </li>
            </ol>
        </li>
    );
}

function Phong2(props) {
    const { skills, update } = props
    return (
        <li>
            <h1 className="level-2 rectangle is-mobi">
                <Skill type="phong" skill={skills['nguphong']} update={update} />
            </h1>
            <h1 className="level-2 rectangle">
                <Skill type="phong" skill={skills['tuyenphong']} update={update} />
            </h1>
            <h1 className="level-1 rectangle">
                <Skill type="phong" skill={skills['cuongphong']} update={update} />
            </h1>
            <ol className="level-2-wrapper">
                <li>
                    <h1 className="level-2 rectangle">
                        <Skill type="phong" skill={skills['huyenkich']} update={update} />
                    </h1>
                    <h1 className="level-2 rectangle">
                        <Skill type="phong" skill={skills['lienkich']} update={update} />
                    </h1>
                    <h1 className="rectangle">
                        <Skill type="phong" skill={skills['loankich']} update={update} />
                    </h1>
                </li>
                <li>
                    <h1 className="level-2 rectangle">
                        <Skill type="phong" skill={skills['baophong']} update={update} />
                    </h1>
                    <h1 className="rectangle">
                        <Skill type="phong" skill={skills['phongcuon']} update={update} />
                    </h1>
                </li>
            </ol>
        </li>
    );
}