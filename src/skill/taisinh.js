import React, { useState } from 'react';
import Skill from './skill';
import '../tree-ts.css';
import ReactTooltip from 'react-tooltip';

class TaiSinh extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showPanel: false,
            selectIndex: null
        }
    }

    componentDidMount() {
        ReactTooltip.rebuild();
    }

    componentDidUpdate(prevProps) {
        ReactTooltip.rebuild();
    }

    tooltip = (id) => {
        const skill = this.props.skills[id]
        const skillRequire = this.props.skills[skill.skillRequire]
        return skillRequire.name
    }

    getListNghe(nghe) {
        const list = {
            ba: ['bakhi', 'bay', 'lucbat', 'songcuong'],
            hien: ['dungke', 'trithu', 'chongdich', 'sachdong'],
            tien: ['tienkhieu', 'hoahuyet', 'thanhlinh', 'cankhon'],
            hiep: ['anhkhi', 'thienthuan', 'tamnhan', 'ngungkhi']
        }
        return list[nghe]
    }

    render() {
        const { he, nghe, learn, ball, skills, update } = this.props
        const { showPanel, selectIndex } = this.state
        const listNghe = this.getListNghe(nghe)
        const slotNghe = [skills[listNghe[0]].point > 0, skills[listNghe[1]].point > 0, skills[listNghe[2]].point > 0, skills[listNghe[3]].point > 0]
        return (
            <div>
                <div className="skill-panel container">
                    <div className="button is-link is-light is-rounded mb-5">
                        Cần có&nbsp;<b>{ball}</b>&nbsp;Thiên Châu
                    </div>
                    <div className="skill-tree-wrap">
                        <div className="skill-tree">

                            <div className="layer layer--bottom">

                                <span className="line line--h line--row-a" aria-hidden="true"></span>
                                <span className="line line--h line--row-c" aria-hidden="true"></span>
                                <span className="line line--h line--row-w" aria-hidden="true"></span>
                                <span className="line line--h line--to-7" aria-hidden="true"></span>
                                <span className="line line--h line--to-8" aria-hidden="true"></span>
                                <span className="line line--h line--to-3" aria-hidden="true"></span>
                                <span className="line line--h line--to-4" aria-hidden="true"></span>

                                <span className="line line--v line--col-w" aria-hidden="true"></span>
                                <span className="line line--v line--to-1" aria-hidden="true"></span>
                                <span className="line line--v line--to-2" aria-hidden="true"></span>
                                <span className="line line--v line--to-5" aria-hidden="true"></span>
                                <span className="line line--v line--to-6" aria-hidden="true"></span>
                                <span className="line line--v line--trunk-l" aria-hidden="true"></span>
                                <span className="line line--v line--trunk-r" aria-hidden="true"></span>

                                {learn.map((item, i) => (
                                    <div key={'slot-' + i} className={'node node--' + (i + 1)}>
                                        <SlotSkill index={i} skills={skills} skill={item} update={update} slotNghe={slotNghe} setShowPanel={(value) => this.setState({ showPanel: value })} updateIndex={(index) => this.setState({ selectIndex: index })} />
                                    </div>
                                ))}

                                <label className="dot dot--a1"><input className="dot__input" type="checkbox" aria-label="Nối A - 1" disabled checked={!!learn[0]} /><span className="dot__face"></span></label>
                                <label className="dot dot--a2"><input className="dot__input" type="checkbox" aria-label="Nối A - 2" disabled checked={!!learn[1]} /><span className="dot__face"></span></label>
                                <label className="dot dot--aw"><input className="dot__input" type="checkbox" aria-label="Nối W - A" disabled checked={slotNghe[0]} /><span className="dot__face"></span></label>
                                <label className="dot dot--wd"><input className="dot__input" type="checkbox" aria-label="Nối W - D" disabled checked={slotNghe[3]} /><span className="dot__face"></span></label>
                                <label className="dot dot--wb"><input className="dot__input" type="checkbox" aria-label="Nối W - B" disabled checked={slotNghe[1]} /><span className="dot__face"></span></label>
                                <label className="dot dot--wc"><input className="dot__input" type="checkbox" aria-label="Nối W - C" disabled checked={slotNghe[2]} /><span className="dot__face"></span></label>
                                <label className="dot dot--c5"><input className="dot__input" type="checkbox" aria-label="Nối C - 5" disabled checked={!!learn[4]} /><span className="dot__face"></span></label>
                                <label className="dot dot--c6"><input className="dot__input" type="checkbox" aria-label="Nối C - 6" disabled checked={!!learn[5]} /><span className="dot__face"></span></label>
                                <label className="dot dot--d7"><input className="dot__input" type="checkbox" aria-label="Nối D - 7" disabled checked={!!learn[6]} /><span className="dot__face"></span></label>
                                <label className="dot dot--d8"><input className="dot__input" type="checkbox" aria-label="Nối D - 8" disabled checked={!!learn[7]} /><span className="dot__face"></span></label>
                                <label className="dot dot--b3"><input className="dot__input" type="checkbox" aria-label="Nối B - 3" disabled checked={!!learn[2]} /><span className="dot__face"></span></label>
                                <label className="dot dot--b4"><input className="dot__input" type="checkbox" aria-label="Nối B - 4" disabled checked={!!learn[3]} /><span className="dot__face"></span></label>
                            </div>

                            <div className="layer layer--top">
                                <div className="node node--A"><Skill type="nghe" skill={skills[listNghe[0]]} update={update} learnSlot={0} /></div>
                                <div className="node node--B"><Skill type="nghe" skill={skills[listNghe[1]]} update={update} learnSlot={1} /></div>
                                <div className="node node--C"><Skill type="nghe" skill={skills[listNghe[2]]} update={update} learnSlot={2} /></div>
                                <div className="node node--D"><Skill type="nghe" skill={skills[listNghe[3]]} update={update} learnSlot={3} /></div>
                                <div className="node node--W"><Skill type="nghe" skill={skills['daichuthien']} update={update} tooltip={'Cần học trước 1 kĩ năng Khí'} /></div>
                            </div>
                        </div>
                    </div>
                    <SelectSkillPanel showPanel={showPanel} setShowPanel={(value) => this.setState({ showPanel: value })} he={he} ball={ball} skills={skills} update={update} tooltip={this.tooltip} learnSlot={selectIndex} />
                </div>
                <ReactTooltip id="treeTooltip" place="top" effect="solid" />
            </div>
        );
    }
}

export default TaiSinh;

function SelectSkillPanel(props) {
    const { showPanel, setShowPanel, he, ball, skills, update, tooltip, learnSlot } = props
    const [select, setSelect] = useState(null)

    const closePanel = () => {
        setSelect(null)
        setShowPanel(false)
    }
    const handleUpdate = (...args) => {
        const skillName = args[0]
        const skill = skills[skillName]
        if (skill.point > 0 || (skill.point === 0 && select === null)) {
            update(...args)
            if (skill.point === 1) {
                setSelect(args)
            }
        }
    }

    const cancelSelect = () => {
        if (select !== null) {
            const args = select.with(5, true)
            update(...args)
            setSelect(null)
        }
    }

    if (ball > 0 && showPanel) {
        return <div className="skill-panel-taisinh">
            <div className="is-inline-block mb-4">
                {select === null ? <div className="button is-warning is-light is-rounded">Chọn 1 kĩ năng muốn học</div> :
                    <div className="button is-info is-light is-rounded">Đã chọn kĩ năng&nbsp;<span className="bold">{skills[select[0]].name}</span></div>}
            </div>
            {he !== 'hoa' ? <Dia skills={skills} update={handleUpdate} tooltip={tooltip} learnSlot={learnSlot} /> : ''}
            {he !== 'phong' ? <Thuy skills={skills} update={handleUpdate} tooltip={tooltip} learnSlot={learnSlot} /> : ''}
            {he !== 'dia' ? <Hoa skills={skills} update={handleUpdate} tooltip={tooltip} learnSlot={learnSlot} /> : ''}
            {he !== 'thuy' ? <Phong skills={skills} update={handleUpdate} tooltip={tooltip} learnSlot={learnSlot} /> : ''}
            <div className="field mt-4">
                <div className="control columns is-mobile is-centered">
                    <div className="column is-one-third">
                        <button class="button is-warning is-fullwidth" onClick={cancelSelect} disabled={select === null}>Chọn lại</button>
                    </div>
                    <div className="column is-one-third">
                        <button className="button is-info is-fullwidth" onClick={closePanel}>Đã xong</button>
                    </div>
                </div>
            </div>
        </div>
    } else {
        return null
    }
}

function SlotSkill(props) {
    const { index, skill, skills, slotNghe, update, updateIndex, setShowPanel } = props
    const isLearnt = (typeof skill === "object" && skill !== null)
    const checkLearn = () => {
        let check = false
        if ((index === 0 || index === 1) && slotNghe[0]) {
            check = true
        } else if ((index === 2 || index === 3) && slotNghe[1]) {
            check = true
        } else if ((index === 4 || index === 5) && slotNghe[2]) {
            check = true
        } else if ((index === 6 || index === 7) && slotNghe[3]) {
            check = true
        }
        if (check) {
            setShowPanel(true)
            updateIndex(index)
        }
    }
    if (isLearnt) {
        return <Skill type={skill.type} skill={skills[skill.name]} update={update} isBall={true} learnSlot={index} />
    } else {
        return <div className="skill-item" onClick={checkLearn}>
            <img src='./assets/nghe/khong.png' width="50" height="50" draggable={false} />
        </div>
    }
}

function SkillTooltip(props) {
    const { type, skill, update, tooltip, learnSlot } = props
    const handleUpdate = (...args) => {
        update(...args)
        // if (skill.point > 0 || (skill.point === 0 && select === 'khong')) {
        //     update(...args)
        //     if (skill.point === 1) {
        //         setSelect(skill.id)
        //     }
        // }
    }
    return (
        <div className="is-inline-block mx-1">
            <Skill type={type} skill={skill} update={handleUpdate} tooltip={`Cần học ${tooltip(skill.id)}`} isBall={true} learnSlot={learnSlot} />
        </div>
    )
}

function Dia(props) {
    const { skills, update, tooltip, learnSlot } = props
    return (
        <div>
            <div className="skill-panel-ts">
                <div className="is-inline-block mx-1">
                    <img className="disable-user-select" src="./assets/nghe/icon_dia.png" width="50" height="50" alt="dia" draggable={false}></img>
                </div>
                <div>
                    <SkillTooltip type="dia" skill={skills['chanba']} update={update} tooltip={tooltip} learnSlot={learnSlot} />
                    <SkillTooltip type="dia" skill={skills['honphu']} update={update} tooltip={tooltip} learnSlot={learnSlot} />
                    <SkillTooltip type="dia" skill={skills['thietphao']} update={update} tooltip={tooltip} learnSlot={learnSlot} />
                    <SkillTooltip type="dia" skill={skills['tinhphao']} update={update} tooltip={tooltip} learnSlot={learnSlot} />
                    <br className="is-mobi" />
                    <SkillTooltip type="dia" skill={skills['chungtrao']} update={update} tooltip={tooltip} learnSlot={learnSlot} />
                    <SkillTooltip type="dia" skill={skills['xungphong']} update={update} tooltip={tooltip} learnSlot={learnSlot} />
                    <SkillTooltip type="dia" skill={skills['boccam']} update={update} tooltip={tooltip} learnSlot={learnSlot} />
                    <SkillTooltip type="dia" skill={skills['vuongsat']} update={update} tooltip={tooltip} learnSlot={learnSlot} />
                </div>
            </div>
        </div>
    );
}

function Thuy(props) {
    const { skills, update, tooltip, learnSlot } = props
    return (
        <div className="skill-panel-ts">
            <div className="is-inline-block mx-1">
                <img className="disable-user-select" src="./assets/nghe/icon_thuy.png" width="50" height="50" alt="thuy" draggable={false}></img>
            </div>
            <div>
                <SkillTooltip type="thuy" skill={skills['thienbang']} update={update} tooltip={tooltip} learnSlot={learnSlot} />
                <SkillTooltip type="thuy" skill={skills['suongquyen']} update={update} tooltip={tooltip} learnSlot={learnSlot} />
                <SkillTooltip type="thuy" skill={skills['mathuat']} update={update} tooltip={tooltip} learnSlot={learnSlot} />
                <SkillTooltip type="thuy" skill={skills['camlam']} update={update} tooltip={tooltip} learnSlot={learnSlot} />
                <br className="is-mobi" />
                <SkillTooltip type="thuy" skill={skills['giaithuat']} update={update} tooltip={tooltip} learnSlot={learnSlot} />
                <SkillTooltip type="thuy" skill={skills['votuong']} update={update} tooltip={tooltip} learnSlot={learnSlot} />
                <SkillTooltip type="thuy" skill={skills['nhatthiem']} update={update} tooltip={tooltip} learnSlot={learnSlot} />
                <SkillTooltip type="thuy" skill={skills['lucbangvu']} update={update} tooltip={tooltip} learnSlot={learnSlot} />
            </div>
        </div>
    );
}

function Hoa(props) {
    const { skills, update, tooltip, learnSlot } = props
    return (
        <div className="skill-panel-ts">
            <div className="is-inline-block mx-1">
                <img className="disable-user-select" src="./assets/nghe/icon_hoa.png" width="50" height="50" alt="hoa" draggable={false}></img>
            </div>
            <div>
                <SkillTooltip type="hoa" skill={skills['nhatkich']} update={update} tooltip={tooltip} learnSlot={learnSlot} />
                <SkillTooltip type="hoa" skill={skills['haohoa']} update={update} tooltip={tooltip} learnSlot={learnSlot} />
                <SkillTooltip type="hoa" skill={skills['xichlong']} update={update} tooltip={tooltip} learnSlot={learnSlot} />
                <SkillTooltip type="hoa" skill={skills['trieulam']} update={update} tooltip={tooltip} learnSlot={learnSlot} />
                <br className="is-mobi" />
                <SkillTooltip type="hoa" skill={skills['duongviem']} update={update} tooltip={tooltip} learnSlot={learnSlot} />
                <SkillTooltip type="hoa" skill={skills['phanda']} update={update} tooltip={tooltip} learnSlot={learnSlot} />
                <SkillTooltip type="hoa" skill={skills['liettram']} update={update} tooltip={tooltip} learnSlot={learnSlot} />
                <SkillTooltip type="hoa" skill={skills['chanhe']} update={update} tooltip={tooltip} learnSlot={learnSlot} />
            </div>
        </div>

    );
}

function Phong(props) {
    const { skills, update, tooltip, learnSlot } = props
    return (
        <div className="skill-panel-ts">
            <div className="is-inline-block mx-1">
                <img className="disable-user-select" src="./assets/nghe/icon_phong.png" width="50" height="50" alt="phong" draggable={false}></img>
            </div>
            <div>
                <SkillTooltip type="phong" skill={skills['bangloi']} update={update} tooltip={tooltip} learnSlot={learnSlot} />
                <SkillTooltip type="phong" skill={skills['thanly']} update={update} tooltip={tooltip} learnSlot={learnSlot} />
                <SkillTooltip type="phong" skill={skills['phikiem']} update={update} tooltip={tooltip} learnSlot={learnSlot} />
                <SkillTooltip type="phong" skill={skills['soncuong']} update={update} tooltip={tooltip} learnSlot={learnSlot} />
                <br className="is-mobi" />
                <SkillTooltip type="phong" skill={skills['huthon']} update={update} tooltip={tooltip} learnSlot={learnSlot} />
                <SkillTooltip type="phong" skill={skills['loiminh']} update={update} tooltip={tooltip} learnSlot={learnSlot} />
                <SkillTooltip type="phong" skill={skills['thanthuat']} update={update} tooltip={tooltip} learnSlot={learnSlot} />
                <SkillTooltip type="phong" skill={skills['chandien']} update={update} tooltip={tooltip} learnSlot={learnSlot} />
            </div>
        </div>
    );
}