import React from 'react';
import Skill from './skill'

class Dia extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { skills, update } = this.props
        return (
            <div className="skill-panel container">
                <div className="is-desktop">
                    <h1 className="level-1 rectangle">
                        <Skill type="dia" skill={skills['muada']} update={update} />
                    </h1>
                    <ol className="level-2-wrapper">
                        <Dia1 skills={skills} update={update} />
                        <Dia2 skills={skills} update={update} />
                    </ol>
                </div>
                <div className="is-mobi">
                    <div className="columns">
                        <div className="column">
                            <ol>
                                <Dia1 skills={skills} update={update} />
                            </ol>
                        </div>
                        <hr />
                        <div className="column">
                            <ol>
                                <Dia2 skills={skills} update={update} />
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dia;

function Dia1(props) {
    const { skills, update } = props
    return (
        <li>
            <h1 className="level-2 rectangle is-mobi">
                <Skill type="dia" skill={skills['muada']} update={update} />
            </h1>
            <h1 className="level-2 rectangle">
                <Skill type="dia" skill={skills['cambay']} update={update} />
            </h1>
            <h1 className="level-1 rectangle">
                <Skill type="dia" skill={skills['nemda']} update={update} />
            </h1>
            <ol className="level-2-wrapper">
                <li>
                    <h1 className="level-1 rectangle">
                        <Skill type="dia" skill={skills['phisa']} update={update} />
                    </h1>
                    <ol className="level-2-wrapper">
                        <li>
                            <h1 className="rectangle">
                                <Skill type="dia" skill={skills['vanma']} update={update} />
                            </h1>
                        </li>
                        <li>
                            <h1 className="rectangle">
                                <Skill type="dia" skill={skills['longtroi']} update={update} />
                            </h1>
                        </li>
                    </ol>
                </li>
                <li>
                    <h1 className="level-2 rectangle">
                        <Skill type="dia" skill={skills['dalan']} update={update} />
                    </h1>
                    <h1 className="rectangle">
                        <Skill type="dia" skill={skills['thaison']} update={update} />
                    </h1>
                </li>
            </ol>
        </li>
    );
}

function Dia2(props) {
    const { skills, update } = props
    return (
        <li>
            <h1 className="level-2 rectangle is-mobi">
                <Skill type="dia" skill={skills['muada']} update={update} />
            </h1>
            <h1 className="level-2 rectangle">
                <Skill type="dia" skill={skills['loimoc']} update={update} />
            </h1>
            <h1 className="level-2 rectangle">
                <Skill type="dia" skill={skills['caytinh']} update={update} />
            </h1>
            <h1 className="level-1 rectangle">
                <Skill type="dia" skill={skills['dianha']} update={update} />
            </h1>
            <ol className="level-2-wrapper">
                <li>
                    <h1 className="level-1 rectangle">
                        <Skill type="dia" skill={skills['ketgioi']} update={update} />
                    </h1>
                    <ol className="level-2-wrapper">
                        <li>
                            <h1 className="rectangle">
                                <Skill type="dia" skill={skills['kinh']} update={update} />
                            </h1>
                        </li>
                        <li>
                            <h1 className="rectangle">
                                <Skill type="dia" skill={skills['giaikinh']} update={update} />
                            </h1>
                        </li>
                    </ol>
                </li>
                <li>
                    <h1 className="rectangle">
                        <Skill type="dia" skill={skills['giaikg']} update={update} />
                    </h1>
                </li>
            </ol>
        </li>
    );
}