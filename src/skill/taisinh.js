import React from 'react';
import Skill from './skill'
import ReactTooltip from 'react-tooltip';

class TaiSinh extends React.Component {

    componentDidMount() {
        ReactTooltip.rebuild();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.nghe !== this.props.nghe) {
            ReactTooltip.rebuild();
        }
    }

    tooltip = id => {
        const skill = this.props.skills[id]
        const skillRequire = this.props.skills[skill.skillRequire]
        return skillRequire.name
    }

    message1() {
        const { learn, ball } = this.props
        return (ball < 8 && (ball - learn) === 0) ? <div className="noti-ts button is-danger is-light is-rounded my-2">Học kĩ năng Nghề để mở slot</div> : ''
    }

    message2() {
        const { learn, ball } = this.props
        return (ball - learn) > 0 ? <div className="button is-light is-info is-rounded my-2">Còn&nbsp;<b>{ball - learn}</b>&nbsp;slot có thể học</div> : ''
    }

    message3() {
        const { learn } = this.props
        return (learn === 8) ? <div className="noti-ts button is-light is-warning is-rounded my-2">Đã học full slot kĩ năng</div> : ''
    }

    render() {
        const { he, nghe, learn, ball, skills, update } = this.props
        return (
            <div>
                <div className="skill-panel container">
                    {nghe === 'ba' ? <Ba skills={skills} update={update} /> : ''}
                    {nghe === 'hien' ? <Hien skills={skills} update={update} /> : ''}
                    {nghe === 'tien' ? <Tien skills={skills} update={update} /> : ''}
                    {nghe === 'hiep' ? <Hiep skills={skills} update={update} /> : ''}
                    <hr className="my-2" />
                    <div className="button is-warning is-light is-rounded my-2 mx-1">
                        Cần có&nbsp;<b>{ball / 2 + learn}</b>&nbsp;Ball
                    </div>
                    <br className="is-mobi" />
                    {this.message1()}
                    {this.message2()}
                    {this.message3()}
                    <div>
                        {he !== 'hoa' ? <Dia skills={skills} update={update} tooltip={this.tooltip} /> : ''}
                        {he !== 'phong' ? <Thuy skills={skills} update={update} tooltip={this.tooltip} /> : ''}
                        {he !== 'dia' ? <Hoa skills={skills} update={update} tooltip={this.tooltip} /> : ''}
                        {he !== 'thuy' ? <Phong skills={skills} update={update} tooltip={this.tooltip} /> : ''}
                    </div>
                </div>
                <ReactTooltip id="treeTooltip" place="top" effect="solid" />
            </div>
        );
    }
}

export default TaiSinh;

function SkillTooltip(props) {
    const { type, skill, update, tooltip } = props

    const handleUpdate = (...args) => {
        update(...args)
        if (skill.point === 0) {
            const elements = document.getElementsByClassName('noti-ts')
            if (elements.length > 0) {
                const el = elements[0]
                el.classList.remove('active')
                void el.offsetWidth
                el.classList.add('active')
            }
        }
    }
    return (
        <div className="is-inline-block mx-1">
            <Skill type={type} skill={skill} update={handleUpdate} tooltip={`Cần học ${tooltip(skill.id)}`} isBall={true} />
        </div>
    )
}

function Ba(props) {
    const { skills, update } = props
    return (
        <div className="diagram">
            <div className="square top"><Skill type="nghe" skill={skills['bakhi']} update={update} /></div>
            <div className="square left"><Skill type="nghe" skill={skills['songcuong']} update={update} /></div>
            <div className="square center"><Skill type="nghe" skill={skills['daichuthien']} update={update} tooltip={'Cần học trước 1 kĩ năng Khí'} /></div>
            <div className="square right"><Skill type="nghe" skill={skills['bay']} update={update} /></div>
            <div className="square bottom"><Skill type="nghe" skill={skills['lucbat']} update={update} /></div>

            <div className="line line-v line-top"></div>
            <div className="line line-v line-bottom"></div>
            <div className="line line-h line-left"></div>
            <div className="line line-h line-right"></div>
        </div>
    );
}

function Hien(props) {
    const { skills, update } = props
    return (
        <div className="diagram">
            <div className="square top"><Skill type="nghe" skill={skills['dungke']} update={update} /></div>
            <div className="square left"><Skill type="nghe" skill={skills['sachdong']} update={update} /></div>
            <div className="square center"><Skill type="nghe" skill={skills['daichuthien']} update={update} tooltip={'Cần học trước 1 kĩ năng Khí'} /></div>
            <div className="square right"><Skill type="nghe" skill={skills['trithu']} update={update} /></div>
            <div className="square bottom"><Skill type="nghe" skill={skills['chongdich']} update={update} /></div>

            <div className="line line-v line-top"></div>
            <div className="line line-v line-bottom"></div>
            <div className="line line-h line-left"></div>
            <div className="line line-h line-right"></div>
        </div>
    );
}

function Tien(props) {
    const { skills, update } = props
    return (
        <div className="diagram">
            <div className="square top"><Skill type="nghe" skill={skills['tienkhieu']} update={update} /></div>
            <div className="square left"><Skill type="nghe" skill={skills['cankhon']} update={update} /></div>
            <div className="square center"><Skill type="nghe" skill={skills['daichuthien']} update={update} tooltip={'Cần học trước 1 kĩ năng Khí'} /></div>
            <div className="square right"><Skill type="nghe" skill={skills['hoahuyet']} update={update} /></div>
            <div className="square bottom"><Skill type="nghe" skill={skills['thanhlinh']} update={update} /></div>

            <div className="line line-v line-top"></div>
            <div className="line line-v line-bottom"></div>
            <div className="line line-h line-left"></div>
            <div className="line line-h line-right"></div>
        </div>
    );
}

function Hiep(props) {
    const { skills, update } = props
    return (
        <div className="diagram">
            <div className="square top"><Skill type="nghe" skill={skills['anhkhi']} update={update} /></div>
            <div className="square left"><Skill type="nghe" skill={skills['ngungkhi']} update={update} /></div>
            <div className="square center"><Skill type="nghe" skill={skills['daichuthien']} update={update} tooltip={'Cần học trước 1 kĩ năng Khí'} /></div>
            <div className="square right"><Skill type="nghe" skill={skills['thienthuan']} update={update} /></div>
            <div className="square bottom"><Skill type="nghe" skill={skills['tamnhan']} update={update} /></div>

            <div className="line line-v line-top"></div>
            <div className="line line-v line-bottom"></div>
            <div className="line line-h line-left"></div>
            <div className="line line-h line-right"></div>
        </div>
    );
}

function Dia(props) {
    const { skills, update, tooltip } = props
    return (
        <div>
            <div className="skill-panel-ts my-3">
                <div className="is-inline-block mx-1">
                    <img src="./assets/nghe/icon_dia.png" width="50" height="50" alt="dia"></img>
                </div>
                <div>
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
            </div>
        </div>
    );
}

function Thuy(props) {
    const { skills, update, tooltip } = props
    return (
        <div className="skill-panel-ts my-3">
            <div className="is-inline-block mx-1">
                <img src="./assets/nghe/icon_thuy.png" width="50" height="50" alt="thuy"></img>
            </div>
            <div>
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
        </div>
    );
}

function Hoa(props) {
    const { skills, update, tooltip } = props
    return (
        <div className="skill-panel-ts my-3">
            <div className="is-inline-block mx-1">
                <img src="./assets/nghe/icon_hoa.png" width="50" height="50" alt="hoa"></img>
            </div>
            <div>
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
        </div>

    );
}

function Phong(props) {
    const { skills, update, tooltip } = props
    return (
        <div className="skill-panel-ts my-3">
            <div className="is-inline-block mx-1">
                <img src="./assets/nghe/icon_phong.png" width="50" height="50" alt="phong"></img>
            </div>
            <div>
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
        </div>
    );
}