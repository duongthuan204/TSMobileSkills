
import React from 'react';

class Skill extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            doublePoint: this.checkDoublePoint()
        }
    }

    componentWillReceiveProps() {
        this.setState({ doublePoint: this.checkDoublePoint() })
    }

    checkDoublePoint() {
        const char = localStorage.getItem('char')
        if (this.props.type === char || this.props.type === 'nghe') {
            return false
        } else {
            return true
        }
    }

    renderPoint() {
        const { point, pointRequire, skillRequire } = this.props.skill
        if (skillRequire === 'trieugoi') return null
        const { doublePoint } = this.state
        if (point === 0) {
            return doublePoint ? pointRequire * 2 : pointRequire
        }
        return point
    }

    renderTooltip() {
        const { tooltip, skill } = this.props
        let data = skill.name
        if (tooltip !== undefined) {
            data += '<br/>' + tooltip
        }
        return data
    }

    render() {
        const { type, skill, update, isBall } = this.props
        const { doublePoint } = this.state
        const imgUrl = "./assets/" + type + "/" + skill.id + ".png"
        return <div>
            <div className="skill-item" tabIndex={0} onClick={() => update(skill.id, doublePoint, type, isBall, false)} data-tip={this.renderTooltip()} data-for="treeTooltip" data-multiline={true} data-effect="solid" data-delay-show="200">
                <img className={skill.point < 1 ? 'skill-inactived' : ''} src={imgUrl} width="50" height="50" alt={skill.id} draggable={false}></img>
                {skill.point > 0 ? <div className="point">{skill.point}</div> : <div className="point require">{this.renderPoint()}</div>}
                {skill.point > 0 ? <button className="delete-skill" onClick={(e) => {e.stopPropagation(); update(skill.id, doublePoint, type, isBall, true)}}>
                        <svg width="10" height="10" viewBox="0 0 20 20" fill="none">
                            <path d="M2 2L18 18M18 2L2 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                        </svg></button> : ''}
            </div>
        </div>
    }
}

export default Skill;