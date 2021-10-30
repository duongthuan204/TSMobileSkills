import React from 'react';
import Skill from './item'

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
        const { he, nghe, ball, skills, update } = this.props
        return (
            <div className="skill-panel container">
                {nghe === 'ba' ? <Ba skills={skills} update={update} /> : ''}
                {nghe === 'hien' ? <Hien skills={skills} update={update} /> : ''}
                {nghe === 'tien' ? <Tien skills={skills} update={update} /> : ''}
                {nghe === 'hiep' ? <Hiep skills={skills} update={update} /> : ''}
                <hr class="my-2" />
                <div class="button is-link is-light is-rounded my-2">
                    Có thể học tối đa&nbsp;<b>{ball}</b>&nbsp;kĩ năng
                </div>
                <div>
                    {he !== 'hoa' ? <Dia skills={skills} update={update} tooltip={this.tooltip} /> : ''}
                    {he !== 'phong' ? <Thuy skills={skills} update={update} tooltip={this.tooltip} /> : ''}
                    {he !== 'dia' ? <Hoa skills={skills} update={update} tooltip={this.tooltip} /> : ''}
                    {he !== 'thuy' ? <Phong skills={skills} update={update} tooltip={this.tooltip} /> : ''}
                </div>
            </div >
        );
    }
}

export default TaiSinh;

function SkillTooltip(props) {
    const { type, skill, update, tooltip } = props
    return (
        <div className="is-inline-block mx-1">
            <Skill type={type} skill={skill} update={update} tooltip={`Cần học trước ${tooltip(skill.id)}`} />
        </div>
    )
}

function Ba(props) {
    const { skills, update } = props
    return (
        <div>
            <Skill type="ts" skill={skills['bakhi']} update={update} />
            <div className="is-inline-block m-1">
                <Skill type="ts" skill={skills['songcuong']} update={update} />
            </div>
            <div className="is-inline-block m-1">
                <Skill type="ts" skill={skills['daichuthien']} update={update} tooltip={'Cần học trước 1 kĩ năng Khí'} />
            </div>
            <div className="is-inline-block m-1">
                <Skill type="ts" skill={skills['bay']} update={update} />
            </div>
            <Skill type="ts" skill={skills['lucbat']} update={update} />
        </div>
    );
}

function Hien(props) {
    const { skills, update } = props
    return (
        <div>
            <Skill type="ts" skill={skills['dungke']} update={update} />
            <div className="is-inline-block m-1">
                <Skill type="ts" skill={skills['sachdong']} update={update} />
            </div>
            <div className="is-inline-block m-1">
                <Skill type="ts" skill={skills['daichuthien']} update={update} tooltip={'Cần học trước 1 kĩ năng Khí'} />
            </div>
            <div className="is-inline-block m-1">
                <Skill type="ts" skill={skills['trithu']} update={update} />
            </div>
            <Skill type="ts" skill={skills['chongdich']} update={update} />
        </div>
    );
}

function Tien(props) {
    const { skills, update } = props
    return (
        <div>
            <Skill type="ts" skill={skills['tienkhieu']} update={update} />
            <div className="is-inline-block m-1">
                <Skill type="ts" skill={skills['cankhon']} update={update} />
            </div>
            <div className="is-inline-block m-1">
                <Skill type="ts" skill={skills['daichuthien']} update={update} tooltip={'Cần học trước 1 kĩ năng Khí'} />
            </div>
            <div className="is-inline-block m-1">
                <Skill type="ts" skill={skills['hoahuyet']} update={update} />
            </div>
            <Skill type="ts" skill={skills['thanhlinh']} update={update} />
        </div>
    );
}

function Hiep(props) {
    const { skills, update } = props
    return (
        <div>
            <Skill type="ts" skill={skills['anhkhi']} update={update} />
            <div className="is-inline-block m-1">
                <Skill type="ts" skill={skills['ngungkhi']} update={update} />
            </div>
            <div className="is-inline-block m-1">
                <Skill type="ts" skill={skills['daichuthien']} update={update} tooltip={'Cần học trước 1 kĩ năng Khí'} />
            </div>
            <div className="is-inline-block m-1">
                <Skill type="ts" skill={skills['thienthuan']} update={update} />
            </div>
            <Skill type="ts" skill={skills['tamnhan']} update={update} />
        </div>
    );
}

function Dia(props) {
    const { skills, update, tooltip } = props
    return (
        <div className="skill-panel my-3">
            <div className="is-inline-block mx-1">
                <img src="./assets/ts/dia.png" width="50" height="50"></img>
            </div>
            <br className="is-mobi" />
            <SkillTooltip type="dia" skill={skills['chanba']} update={update} tooltip={tooltip} />
            <SkillTooltip type="dia" skill={skills['honphu']} update={update} tooltip={tooltip} />
            <SkillTooltip type="dia" skill={skills['thietphao']} update={update} tooltip={tooltip} />
            <SkillTooltip type="dia" skill={skills['tinhphao']} update={update} tooltip={tooltip} />
            <br className="is-mobi" />
            <SkillTooltip type="dia" skill={skills['chungtrao']} update={update} tooltip={tooltip} />
            <SkillTooltip type="dia" skill={skills['xungphong']} update={update} tooltip={tooltip} />
            <SkillTooltip type="dia" skill={skills['boccam']} update={update} tooltip={tooltip} />
            <SkillTooltip type="dia" skill={skills['vuongsat']} update={update} tooltip={tooltip} />
        </div>
    );
}

function Thuy(props) {
    const { skills, update, tooltip } = props
    return (
        <div className="skill-panel my-3">
            <div className="is-inline-block mx-1">
                <img src="./assets/ts/thuy.png" width="50" height="50"></img>
            </div>
            <br className="is-mobi" />
            <SkillTooltip type="thuy" skill={skills['thienbang']} update={update} tooltip={tooltip} />
            <SkillTooltip type="thuy" skill={skills['suongquyen']} update={update} tooltip={tooltip} />
            <SkillTooltip type="thuy" skill={skills['mathuat']} update={update} tooltip={tooltip} />
            <SkillTooltip type="thuy" skill={skills['camlam']} update={update} tooltip={tooltip} />
            <br className="is-mobi" />
            <SkillTooltip type="thuy" skill={skills['giaithuat']} update={update} tooltip={tooltip} />
            <SkillTooltip type="thuy" skill={skills['votuong']} update={update} tooltip={tooltip} />
            <SkillTooltip type="thuy" skill={skills['nhatthiem']} update={update} tooltip={tooltip} />
            <SkillTooltip type="thuy" skill={skills['lucbangvu']} update={update} tooltip={tooltip} />
        </div>
    );
}

function Hoa(props) {
    const { skills, update, tooltip } = props
    return (
        <div className="skill-panel my-3">
            <div className="is-inline-block mx-1">
                <img src="./assets/ts/hoa.png" width="50" height="50"></img>
            </div>
            <br className="is-mobi" />
            <SkillTooltip type="hoa" skill={skills['nhatkich']} update={update} tooltip={tooltip} />
            <SkillTooltip type="hoa" skill={skills['haohoa']} update={update} tooltip={tooltip} />
            <SkillTooltip type="hoa" skill={skills['xichlong']} update={update} tooltip={tooltip} />
            <SkillTooltip type="hoa" skill={skills['trieulam']} update={update} tooltip={tooltip} />
            <br className="is-mobi" />
            <SkillTooltip type="hoa" skill={skills['duongviem']} update={update} tooltip={tooltip} />
            <SkillTooltip type="hoa" skill={skills['phanda']} update={update} tooltip={tooltip} />
            <SkillTooltip type="hoa" skill={skills['liettram']} update={update} tooltip={tooltip} />
            <SkillTooltip type="hoa" skill={skills['chanhe']} update={update} tooltip={tooltip} />
        </div>

    );
}

function Phong(props) {
    const { skills, update, tooltip } = props
    return (
        <div className="skill-panel my-3">
            <div className="is-inline-block mx-1">
                <img src="./assets/ts/phong.png" width="50" height="50"></img>
            </div>
            <br className="is-mobi" />
            <SkillTooltip type="phong" skill={skills['bangloi']} update={update} tooltip={tooltip} />
            <SkillTooltip type="phong" skill={skills['thanly']} update={update} tooltip={tooltip} />
            <SkillTooltip type="phong" skill={skills['phikiem']} update={update} tooltip={tooltip} />
            <SkillTooltip type="phong" skill={skills['soncuong']} update={update} tooltip={tooltip} />
            <br className="is-mobi" />
            <SkillTooltip type="phong" skill={skills['huthon']} update={update} tooltip={tooltip} />
            <SkillTooltip type="phong" skill={skills['loiminh']} update={update} tooltip={tooltip} />
            <SkillTooltip type="phong" skill={skills['thanthuat']} update={update} tooltip={tooltip} />
            <SkillTooltip type="phong" skill={skills['chandien']} update={update} tooltip={tooltip} />
        </div>
    );
}