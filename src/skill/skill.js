import React from 'react';

class Skill extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            doublePoint: this.checkDoublePoint(),
            isActive: false
        }
        this.skillRef = React.createRef()
        this.handleOutsideClick = this.handleOutsideClick.bind(this)
    }

    componentDidMount() {
        document.addEventListener('click', this.handleOutsideClick, true)
        document.addEventListener('touchstart', this.handleOutsideClick, true)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleOutsideClick, true)
        document.removeEventListener('touchstart', this.handleOutsideClick, true)
    }

    componentWillReceiveProps() {
        this.setState({ doublePoint: this.checkDoublePoint() })
    }

    handleOutsideClick(e) {
        if (this.skillRef.current && !this.skillRef.current.contains(e.target)) {
            if (this.state.isActive) {
                this.setState({ isActive: false })
            }
        }
    }

    checkDoublePoint() {
        const { skill } = this.props
        const char = localStorage.getItem('char')
        if (skill.type === char || skill.type === 'nghe') {
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

    handleSkillClick() {
        const { skill, update, doublePoint, isBall, learnSlot } = { ...this.props, doublePoint: this.state.doublePoint }
        this.setState({ isActive: true })
        update(skill.id, doublePoint, skill.type, isBall, learnSlot, false)
    }

    render() {
        const { skill, update, isBall, learnSlot } = this.props
        const { doublePoint, isActive } = this.state
        const imgUrl = "./assets/" + skill.type + "/" + skill.id + ".png"
        return <div>
            <div
                className={`skill-item${isActive ? ' active' : ''}`}
                ref={this.skillRef}
                onClick={() => this.handleSkillClick()}
                data-tip={this.renderTooltip()}
                data-for="treeTooltip"
                data-multiline={true}
                data-effect="solid"
                data-delay-show="200"
            >
                {isActive ? <div className="skill-select">
                    <span className="corner tl"></span>
                    <span className="corner tr"></span>
                    <span className="corner bl"></span>
                    <span className="corner br"></span>
                </div> : ''}
                <img className={skill.point < 1 ? 'skill-inactived' : ''} src={imgUrl} width="50" height="50" alt={skill.id} draggable={false}></img>
                {skill.point > 0 ? <div className="point">{skill.point}</div> : <div className="point require">{this.renderPoint()}</div>}
                {skill.point > 0 ? <button className="delete-skill" onClick={(e) => {
                    e.stopPropagation()
                    this.setState({ isActive: false })
                    update(skill.id, doublePoint, skill.type, isBall, learnSlot, true)
                }}>
                    <svg width="10" height="10" viewBox="0 0 20 20" fill="none">
                        <path d="M2 2L18 18M18 2L2 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                    </svg></button> : ''}
            </div>
        </div>
    }
}

export default Skill;