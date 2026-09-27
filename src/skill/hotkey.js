import { useState } from 'react';
import '../hotkey.css';

function HotkeyPanel(props) {


    const { skills, hotkey, setHotKey, hotkeySelect, setHotKeySelect, pageCS } = props
    const [delHotKey, setDelHotKey] = useState(false)
    const isHotKey = !!(hotkeySelect !== null)

    const handleSetHotKey = () => {
        if (isHotKey) {
            setHotKeySelect(null)
        } else {
            setHotKeySelect('khong')
            setDelHotKey(false)
        }
    }

    const handleSetDelHotKey = () => {
        if (delHotKey) {
            setDelHotKey(false)
        } else {
            setHotKeySelect(null)
            setDelHotKey(true)
        }
    }

    const handleAddHotKey = (index) => {
        if (hotkeySelect !== 'khong') {
            const skill = props.skills[hotkeySelect]
            // const type = (skill.type).split('-')[1]
            // if (skill.point === 0 || skill.type === 'nghe' || type === 'ts' || (pageCS && type === 'cs')) {
            //     return
            // } else {
            //     setHotKey(index, hotkeySelect)
            // }
            if (skill.point > 0) {
                setHotKey(index, hotkeySelect)
            }
        }
    }

    return <div className="hotkey-page">
        <div className="banner-logo">
            <a href="https://www.facebook.com/shunbrvt" target="_blank" rel="noreferrer">
                <img src="./logo.png" alt="logo" /></a>
            <a href="https://www.facebook.com/shunbrvt" target="_blank" rel="noreferrer">
                <p className="web-domain">DaiChuThien.web.app</p>
                <p>created by Dương Thuận</p>
            </a>
        </div>
        <div className="hotkey-panel-group">
            <button className={'circle-button ' + (isHotKey ? 'is-active' : '')} onClick={handleSetHotKey}>
                <span className="cross plus"></span>
            </button>
            <div className="hotkey-panel">
                {hotkey.map((skill, i) => {
                    return <div className="hotkey-skill" key={'hotkey-' + i}>
                        {isHotKey ? <div className="skill-overlay" onClick={() => handleAddHotKey(i)}>
                            <svg className="icon" viewBox="0 0 24 24" fill="none">
                                <line x1="12" y1="5" x2="12" y2="19" stroke="#b8b8f5" strokeWidth={4} />
                                <line x1="5" y1="12" x2="19" y2="12" stroke="#b8b8f5" strokeWidth={4} />
                            </svg>
                        </div> : ''}
                        {delHotKey ? <div className="skill-overlay" onClick={() => setHotKey(i, null)}>
                            <svg className="icon" viewBox="0 0 24 24" fill="none">
                                <line x1="5" y1="12" x2="19" y2="12" stroke="#ea1632" strokeWidth={4} />
                            </svg>
                        </div> : ''}
                        {skill === null ? <div className="skill-item">
                            <img src="./assets/nghe/black.png" width="50" height="50" alt="black" draggable={false}></img></div> :
                            <HotkeySkill skill={skills[skill]} setHotKey={setHotKey} index={i} />}
                    </div>
                })}
            </div>
            <button className={'circle-button ' + (delHotKey ? 'is-active' : '')} onClick={handleSetDelHotKey}>
                <span className="cross minus"></span>
            </button>
        </div>
    </div>
}
export default HotkeyPanel;

function HotkeySkill(props) {
    const { skill } = props
    const typePath = (skill.type).split('-')[0]
    const imgUrl = "./assets/" + typePath + "/" + skill.id + ".png"
    return <div className="skill-item" data-tip={skill.name} data-for="treeTooltip" data-effect="solid" data-delay-show="200">
        <img className={skill.point < 1 ? 'skill-inactived' : ''} src={imgUrl} width="50" height="50" alt={skill.id} draggable={false}></img>
        {skill.point > 0 ? <div className="point">{skill.point}</div> : ''}
    </div>
}
