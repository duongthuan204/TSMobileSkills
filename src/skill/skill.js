
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
            <div className="skill-item" onClick={() => update(skill.id, doublePoint, type, isBall, false)} onDoubleClick={() => update(skill.id, doublePoint, type, isBall, true)} data-tip={this.renderTooltip()} data-for="treeTooltip" data-multiline={true} data-effect="solid" data-delay-show="200">
                <img className={skill.point < 1 ? 'skill-inactived' : ''} src={imgUrl} width="50" height="50" alt={skill.id}></img>
                {skill.point > 0 ? <div className="point">{skill.point}</div> : <div className="point require">{this.renderPoint()}</div>}
            </div>
        </div>
    }
}

export default Skill;