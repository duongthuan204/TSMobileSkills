import React from 'react';
import ReactTooltip from 'react-tooltip';
import Skill from './skill'

class TaiSinh extends React.Component {

    constructor(props) {
        super(props)
    }

    tooltip = id => {
        const skill = this.props.skills[id]
        const skillRequire = this.props.skills[skill.skillRequire]
        return skillRequire.name
    }

    render() {
        const { skills, update } = this.props
        return (
            <div className="columns">
                <div className="column">
                    <div className="skill-panel container ml-5">
                        <h3 className="level-3 rectangle">
                            <div data-tip="Cần học trước 1 kĩ năng Khí" data-effect="solid" data-delay-show="300">
                                <Skill type="ts" skill={skills['daichuthien']} update={update} />
                            </div>
                        </h3>
                        {this.props.nghe === 'ba' ? <Ba skills={skills} update={update} /> : ''}
                        {this.props.nghe === 'hien' ? <Hien skills={skills} update={update} /> : ''}
                        {this.props.nghe === 'tien' ? <Tien skills={skills} update={update} /> : ''}
                        {this.props.nghe === 'hiep' ? <Hiep skills={skills} update={update} /> : ''}
                    </div>
                </div>
                {this.props.he !== 'hoa' ? <div className="column">
                    <Dia skills={skills} update={update} tooltip={this.tooltip} />
                </div> : ''}
                {this.props.he !== 'phong' ? <div className="column">
                    <Thuy skills={skills} update={update} tooltip={this.tooltip} />
                </div> : ''}
                {this.props.he !== 'dia' ? <div className="column">
                    <Hoa skills={skills} update={update} tooltip={this.tooltip} />
                </div> : ''}
                {this.props.he !== 'thuy' ? <div className="column">
                    <Phong skills={skills} update={update} tooltip={this.tooltip} />
                </div> : ''}
                <ReactTooltip />
            </div>
        );
    }
}

export default TaiSinh;

function SkillTooltip(props) {
    const { type, skill, update, tooltip } = props
    return (
        <div className="field">
            <div className="control">
                <div data-tip={`Cần học trước ${tooltip(skill.id)}`} data-effect="solid" data-delay-show="300">
                    <Skill type={type} skill={skill} update={update} />
                </div>
            </div>
        </div>
    )
}

function Ba(props) {
    const { skills, update } = props
    return (
        <ol className="level-4-wrapper">
            <li>
                <h4 className="level-4 rectangle">
                    <Skill type="ts" skill={skills['bakhi']} update={update} />
                </h4>
            </li>
            <li>
                <h4 className="level-4 rectangle">
                    <Skill type="ts" skill={skills['songcuong']} update={update} />
                </h4>
            </li>
            <li>
                <h4 className="level-4 rectangle">
                    <Skill type="ts" skill={skills['bay']} update={update} />
                </h4>
            </li>
            <li>
                <h4 className="level-4 rectangle">
                    <Skill type="ts" skill={skills['lucbat']} update={update} />
                </h4>
            </li>
        </ol>
    );
}

function Hien(props) {
    const { skills, update } = props
    return (
        <ol className="level-4-wrapper">
            <li>
                <h4 className="level-4 rectangle">
                    <Skill type="ts" skill={skills['trithu']} update={update} />
                </h4>
            </li>
            <li>
                <h4 className="level-4 rectangle">
                    <Skill type="ts" skill={skills['sachdong']} update={update} />
                </h4>
            </li>
            <li>
                <h4 className="level-4 rectangle">
                    <Skill type="ts" skill={skills['dungke']} update={update} />
                </h4>
            </li>
            <li>
                <h4 className="level-4 rectangle">
                    <Skill type="ts" skill={skills['chongdich']} update={update} />
                </h4>
            </li>
        </ol>
    );
}

function Tien(props) {
    const { skills, update } = props
    return (
        <ol className="level-4-wrapper">
            <li>
                <h4 className="level-4 rectangle">
                    <Skill type="ts" skill={skills['cankhon']} update={update} />
                </h4>
            </li>
            <li>
                <h4 className="level-4 rectangle">
                    <Skill type="ts" skill={skills['hoahuyet']} update={update} />
                </h4>
            </li>
            <li>
                <h4 className="level-4 rectangle">
                    <Skill type="ts" skill={skills['thanhlinh']} update={update} />
                </h4>
            </li>
            <li>
                <h4 className="level-4 rectangle">
                    <Skill type="ts" skill={skills['tienkhieu']} update={update} />
                </h4>
            </li>
        </ol>
    );
}

function Hiep(props) {
    const { skills, update } = props
    return (
        <ol className="level-4-wrapper">
            <li>
                <h4 className="level-4 rectangle">
                    <Skill type="ts" skill={skills['tamnhan']} update={update} />
                </h4>
            </li>
            <li>
                <h4 className="level-4 rectangle">
                    <Skill type="ts" skill={skills['ngungkhi']} update={update} />
                </h4>
            </li>
            <li>
                <h4 className="level-4 rectangle">
                    <Skill type="ts" skill={skills['anhkhi']} update={update} />
                </h4>
            </li>
            <li>
                <h4 className="level-4 rectangle">
                    <Skill type="ts" skill={skills['thienthuan']} update={update} />
                </h4>
            </li>
        </ol>
    );
}

function Dia(props) {
    const { skills, update, tooltip } = props
    return (
        <div className="skill-panel">
            <SkillTooltip type="dia" skill={skills['thietphao']} update={update} tooltip={tooltip} />
            <SkillTooltip type="dia" skill={skills['tinhphao']} update={update} tooltip={tooltip} />
            <SkillTooltip type="dia" skill={skills['chanba']} update={update} tooltip={tooltip} />
            <SkillTooltip type="dia" skill={skills['xungphong']} update={update} tooltip={tooltip} />
            <SkillTooltip type="dia" skill={skills['chungtrao']} update={update} tooltip={tooltip} />
            <SkillTooltip type="dia" skill={skills['honphu']} update={update} tooltip={tooltip} />
            <SkillTooltip type="dia" skill={skills['boccam']} update={update} tooltip={tooltip} />
            <SkillTooltip type="dia" skill={skills['vuongsat']} update={update} tooltip={tooltip} />
        </div>
    );
}

function Thuy(props) {
    const { skills, update, tooltip } = props
    return (
        <div className="skill-panel">
            <SkillTooltip type="thuy" skill={skills['thienbang']} update={update} tooltip={tooltip} />
            <SkillTooltip type="thuy" skill={skills['suongquyen']} update={update} tooltip={tooltip} />
            <SkillTooltip type="thuy" skill={skills['camlam']} update={update} tooltip={tooltip} />
            <SkillTooltip type="thuy" skill={skills['mathuat']} update={update} tooltip={tooltip} />
            <SkillTooltip type="thuy" skill={skills['nhatthiem']} update={update} tooltip={tooltip} />
            <SkillTooltip type="thuy" skill={skills['lucbangvu']} update={update} tooltip={tooltip} />
            <SkillTooltip type="thuy" skill={skills['votuong']} update={update} tooltip={tooltip} />
            <SkillTooltip type="thuy" skill={skills['giaithuat']} update={update} tooltip={tooltip} />
        </div>
    );
}

function Hoa(props) {
    const { skills, update, tooltip } = props
    return (
        <div className="skill-panel">
            <SkillTooltip type="hoa" skill={skills['nhatkich']} update={update} tooltip={tooltip} />
            <SkillTooltip type="hoa" skill={skills['duongviem']} update={update} tooltip={tooltip} />
            <SkillTooltip type="hoa" skill={skills['haohoa']} update={update} tooltip={tooltip} />
            <SkillTooltip type="hoa" skill={skills['xichlong']} update={update} tooltip={tooltip} />
            <SkillTooltip type="hoa" skill={skills['trieulam']} update={update} tooltip={tooltip} />
            <SkillTooltip type="hoa" skill={skills['phanda']} update={update} tooltip={tooltip} />
            <SkillTooltip type="hoa" skill={skills['chanhe']} update={update} tooltip={tooltip} />
            <SkillTooltip type="hoa" skill={skills['liettram']} update={update} tooltip={tooltip} />
        </div>

    );
}

function Phong(props) {
    const { skills, update, tooltip } = props
    return (
        <div className="skill-panel">
            <SkillTooltip type="phong" skill={skills['thanthuat']} update={update} tooltip={tooltip} />
            <SkillTooltip type="phong" skill={skills['huthon']} update={update} tooltip={tooltip} />
            <SkillTooltip type="phong" skill={skills['phikiem']} update={update} tooltip={tooltip} />
            <SkillTooltip type="phong" skill={skills['chandien']} update={update} tooltip={tooltip} />
            <SkillTooltip type="phong" skill={skills['thanly']} update={update} tooltip={tooltip} />
            <SkillTooltip type="phong" skill={skills['bangloi']} update={update} tooltip={tooltip} />
            <SkillTooltip type="phong" skill={skills['soncuong']} update={update} tooltip={tooltip} />
            <SkillTooltip type="phong" skill={skills['loiminh']} update={update} tooltip={tooltip} />
        </div>
    );
}