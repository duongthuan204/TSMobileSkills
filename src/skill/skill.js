
import React from 'react';
import ReactTooltip from 'react-tooltip';

class Skill extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            doublePoint: this.checkDoublePoint()
        }
    }

    checkDoublePoint() {
        const char = localStorage.getItem('char')
        if (this.props.type === char || this.props.type === 'ts') {
            return false
        } else {
            return true
        }
    }

    getClass() {
        let className = ''
        switch (this.props.type) {
            case 'hoa':
                className = 'is-danger'
                break
            case 'phong':
                className = 'is-success'
                break
            case 'dia':
                className = 'is-brown'
                break
            case 'thuy':
                className = 'is-info'
                break
            case 'ts':
                className = 'is-purple'
                break
            default:
                break
        }
        if (this.props.skill.point === 0) {
            className += ' is-outlined'
        }
        return className
    }

    renderPoint() {
        const { point, pointRequire } = this.props.skill
        const { doublePoint } = this.state
        if (point == 0) {
            return ` (${doublePoint ? pointRequire * 2 : pointRequire})`
        }
        return ` +${point}`
    }

    render() {
        const { skill, update } = this.props
        const { doublePoint } = this.state
        return <div>
            <button onClick={() => update(skill.id, doublePoint)} class="button is-rounded " className={`button is-rounded ${this.getClass()}`}>{skill.name}{this.renderPoint()}</button>
            <ReactTooltip />
        </div>
    }
}

export default Skill;