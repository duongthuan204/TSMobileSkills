
import React from 'react';
import ReactTooltip from 'react-tooltip';

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
        const { point, pointRequire } = this.props.skill
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
            data += ('<br/>' + tooltip)
        }
        return data
    }

    render() {
        const { type, skill, update, isBall } = this.props
        const { doublePoint } = this.state
        const imgUrl = "./assets/" + type + "/" + skill.id + ".png"
        return <div>
            <div className="skill-item" onClick={() => update(skill.id, doublePoint, type, isBall)} data-tip={this.renderTooltip()} data-multiline={true} data-effect="solid" data-delay-show="200">
                <img className={skill.point < 1 ? 'skill-inactived' : ''} src={imgUrl} width="50" height="50" alt={skill.id}></img>
                {skill.point < 1 ? <div className="point require">{this.renderPoint()}</div> :
                    <div className="point">{skill.point}</div>}
            </div>
            <ReactTooltip />
        </div>
    }
}

export default Skill;