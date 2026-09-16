import React from 'react';
import Skill from './skill';
import ReactTooltip from 'react-tooltip';

class Phong extends React.Component {

    render() {
        const { skills, update, he, ngoc } = this.props
        return (
            <div>
                <div className="skill-panel container">
                    {he === 'phong' && ngoc > 1 ? <div className="button is-success is-light is-rounded mb-5">
                        Cần&nbsp;<b>{ngoc}</b>&nbsp;viên Thanh Long (+<b>{skills['thanhlong'].pointRequire}</b>&nbsp;viên)
                    </div> : ''}
                    <h1 className="level-1 rectangle">
                        <Skill type="phong" skill={skills['nguphong']} update={update} />
                        {he === 'phong' ? <div className="skill-logo">
                            <Skill type="phong" skill={skills['thanhlong']} update={update} tooltip={'Cần học thuật Triệu Gọi'} />
                        </div> : <div className="skill-logo"><img className="skill-logo-img" src="./assets/icon/logo-phong.png" alt="logo-brand"></img></div>}
                    </h1>
                    <ol className="level-2-wrapper">
                        <Phong1 skills={skills} update={update} />
                        <Phong2 skills={skills} update={update} />
                    </ol>
                </div>
                {/* <div className="is-mobi">
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
                </div> */}
                <ReactTooltip id="treeTooltip" place="top" effect="solid" />
            </div>
        );
    }
}

export default Phong;

function Phong1(props) {
    const { skills, update } = props
    return (
        <li>
            {/* <h1 className="level-2 rectangle is-mobi">
                <Skill type="phong" skill={skills['nguphong']} update={update} />
            </h1> */}
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
            {/* <h1 className="level-2 rectangle is-mobi">
                <Skill type="phong" skill={skills['nguphong']} update={update} />
            </h1> */}
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