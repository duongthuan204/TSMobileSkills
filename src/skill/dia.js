import React from 'react';
import Skill from './skill';
import { Tooltip } from 'react-tooltip';

class Dia extends React.Component {

    render() {
        const { skills, update, he, ngoc } = this.props
        return (
            <div>
                <div className="skill-panel container skill-dia">
                    {/* {he === 'dia' && ngoc > 1 ? <div className="pop-notification button is-warning is-light is-rounded mb-5">
                        Cần&nbsp;<b>{ngoc}</b>&nbsp;viên Nham Quái (+<b>{skills['nhamquai'].pointRequire}</b>&nbsp;viên)
                    </div> : ''} */}
                    <h1 className="level-1 rectangle">
                        <Skill skill={skills['muada']} update={update} />
                        {he === 'dia' && ngoc > 1 ? <div className="summon-skill">
                            <img src="./assets/icon/ngoc-dia.png" alt="trieu-goi"></img>
                            <span>{ngoc}</span>
                            <span>(+{skills['nhamquai'].pointRequire})</span>
                        </div> : ''}
                        {he === 'dia' ? <div className="skill-logo">
                            <Skill skill={skills['nhamquai']} update={update} />
                        </div> : <div className="skill-logo"><img className="skill-logo-img" src="./assets/icon/logo-dia.png" alt="logo-brand"></img></div>}
                    </h1>
                    <ol className="level-2-wrapper">
                        <Dia1 skills={skills} update={update} />
                        <Dia2 skills={skills} update={update} />
                    </ol>
                </div>
                {/* <div className="is-mobi">
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
                </div> */}
                <Tooltip id="treeTooltip" />
            </div>
        );
    }
}

export default Dia;

function Dia1(props) {
    const { skills, update } = props
    return (
        <li>
            {/* <h1 className="level-2 rectangle is-mobi">
                <Skill skill={skills['muada']} update={update} />
            </h1> */}
            <h1 className="level-2 rectangle">
                <Skill skill={skills['cambay']} update={update} />
            </h1>
            <h1 className="level-1 rectangle">
                <Skill skill={skills['nemda']} update={update} />
            </h1>
            <ol className="level-2-wrapper">
                <li>
                    <h1 className="level-1 rectangle">
                        <Skill skill={skills['phisa']} update={update} />
                    </h1>
                    <ol className="level-2-wrapper">
                        <li>
                            <h1 className="rectangle">
                                <Skill skill={skills['vanma']} update={update} />
                            </h1>
                        </li>
                        <li>
                            <h1 className="rectangle">
                                <Skill skill={skills['longtroi']} update={update} />
                            </h1>
                        </li>
                    </ol>
                </li>
                <li>
                    <h1 className="level-2 rectangle">
                        <Skill skill={skills['dalan']} update={update} />
                    </h1>
                    <h1 className="rectangle">
                        <Skill skill={skills['thaison']} update={update} />
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
            {/* <h1 className="level-2 rectangle is-mobi">
                <Skill skill={skills['muada']} update={update} />
            </h1> */}
            <h1 className="level-2 rectangle">
                <Skill skill={skills['loimoc']} update={update} />
            </h1>
            <h1 className="level-2 rectangle">
                <Skill skill={skills['caytinh']} update={update} />
            </h1>
            <h1 className="level-1 rectangle">
                <Skill skill={skills['dianha']} update={update} />
            </h1>
            <ol className="level-2-wrapper">
                <li>
                    <h1 className="level-1 rectangle">
                        <Skill skill={skills['ketgioi']} update={update} />
                    </h1>
                    <ol className="level-2-wrapper">
                        <li>
                            <h1 className="rectangle">
                                <Skill skill={skills['kinh']} update={update} />
                            </h1>
                        </li>
                        <li>
                            <h1 className="rectangle">
                                <Skill skill={skills['giaikinh']} update={update} />
                            </h1>
                        </li>
                    </ol>
                </li>
                <li>
                    <h1 className="rectangle">
                        <Skill skill={skills['giaikg']} update={update} />
                    </h1>
                </li>
            </ol>
        </li>
    );
}