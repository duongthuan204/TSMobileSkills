import React from 'react';
import Skill from './skill'
import { Tooltip } from 'react-tooltip';

class Hoa extends React.Component {

    render() {
        const { skills, update, he, ngoc } = this.props
        return (
            <div>
                <div className="skill-panel container skill-hoa">
                    {/* {he === 'hoa' && ngoc > 1 ? <div className="pop-notification button is-danger is-light is-rounded mb-5">
                        Cần&nbsp;<b>{ngoc}</b>&nbsp;viên Phụng Hoàng (+<b>{skills['phunghoang'].pointRequire}</b>&nbsp;viên)
                    </div> : ''} */}
                    <h1 className="level-1 rectangle">
                        <div>
                            <Skill type="hoa" skill={skills['phonghoa']} update={update} />
                            {he === 'hoa' && ngoc > 1 ? <div className="summon-skill">
                                <div class="button is-danger is-light is-rounded is-medium">
                                    <span class="icon">
                                        <img src="./assets/icon/ngoc-hoa.png" alt="trieu-goi"></img>
                                    </span>
                                    <span className="bold">{ngoc}</span>
                                    <span className="bold is-size-7">&nbsp;(+{skills['phunghoang'].pointRequire})</span>
                                </div>
                            </div> : ''}
                        </div>
                        {he === 'hoa' ? <div className="skill-logo">
                            <Skill type="hoa" skill={skills['phunghoang']} update={update} />
                        </div> : <div className="skill-logo"><img className="skill-logo-img" src="./assets/icon/logo-hoa.png" alt="logo-brand"></img></div>}
                    </h1>
                    <ol className="level-2-wrapper">
                        <Hoa1 skills={skills} update={update} />
                        <Hoa2 skills={skills} update={update} />
                    </ol>
                </div>
                <Tooltip id="treeTooltip" />
            </div>
        );
    }
}

export default Hoa;

function Hoa1(props) {
    const { skills, update } = props
    return (
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
    );
}

function Hoa2(props) {
    const { skills, update } = props
    return (
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
    );
}