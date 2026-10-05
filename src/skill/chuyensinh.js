import React from 'react';
import Skill from './skill'
import HotkeyPanel from './hotkey';
import { Tooltip } from 'react-tooltip';

class ChuyenSinh extends React.Component {

    render() {
        const { skills, update, hotkey } = this.props
        return (
            <div className="chuyensinh-page">
                <div className="columns skill-chuyensinh">
                    {this.props.he !== 'hoa' ? <div className="column">
                        <Dia skills={skills} update={update} />
                    </div> : ''}
                    {this.props.he !== 'phong' ? <div className="column">
                        <Thuy skills={skills} update={update} />
                    </div> : ''}

                    {this.props.he !== 'dia' ? <div className="column">
                        <Hoa skills={skills} update={update} />
                    </div> : ''}
                    {this.props.he !== 'thuy' ? <div className="column">
                        <Phong skills={skills} update={update} />
                    </div> : ''}
                    <Tooltip id="treeTooltip" />
                </div>
                {this.props.nghe === "khong" ? <HotkeyPanel skills={skills} hotkey={hotkey} setHotKey={this.props.setHotKey} hotkeySelect={this.props.hotkeySelect} setHotKeySelect={this.props.setHotKeySelect} pageCS={true} /> : ''}
            </div>
        );
    }
}

export default ChuyenSinh;

function Dia(props) {
    const { skills, update } = props
    return (
        <div className="skill-panel container">
            <h1 className="level-1 rectangle">
                <Skill skill={skills['diakhi']} update={update} tooltip={'Cần học xong tuyến hệ Địa'} />
            </h1>
            <ol className="level-2-wrapper">
                <li>
                    <h1 className="level-2 rectangle">
                        <Skill skill={skills['diadong']} update={update} />
                    </h1>
                    <h1 className="level-2 rectangle">
                        <Skill skill={skills['hoangtho']} update={update} />
                    </h1>
                    <h1 className="rectangle">
                        <Skill skill={skills['khutuong']} update={update} />
                    </h1>
                </li>
                <li>
                    <h1 className="level-2 rectangle">
                        <Skill skill={skills['dialiet']} update={update} />
                    </h1>
                    <h1 className="level-2 rectangle">
                        <Skill skill={skills['thobang']} update={update} />
                    </h1>
                    <h1 className="rectangle">
                        <Skill skill={skills['linhkinh']} update={update} />
                    </h1>
                </li>
            </ol>
        </div>
    );
}

function Thuy(props) {
    const { skills, update } = props
    return (
        <div className="skill-panel container">
            <h1 className="level-1 rectangle">
                <Skill skill={skills['thuykhi']} update={update} tooltip={'Cần học xong tuyến hệ Thủy'} />
            </h1>
            <ol className="level-2-wrapper">
                <li>
                    <h1 className="level-2 rectangle">
                        <Skill skill={skills['bangtram']} update={update} />
                    </h1>
                    <h1 className="level-2 rectangle">
                        <Skill skill={skills['bangphach']} update={update} />
                    </h1>
                    <h1 className="rectangle">
                        <Skill skill={skills['bangthuong']} update={update} />
                    </h1>
                </li>
                <li>
                    <h1 className="level-2 rectangle">
                        <Skill skill={skills['dinhthuy']} update={update} />
                    </h1>
                    <h1 className="level-2 rectangle">
                        <Skill skill={skills['tranggiai']} update={update} />
                    </h1>
                    <h1 className="rectangle">
                        <Skill skill={skills['mieuthuy']} update={update} />
                    </h1>
                </li>
            </ol>
        </div>
    );
}

function Hoa(props) {
    const { skills, update } = props
    return (
        <div className="skill-panel container">
            <h1 className="level-1 rectangle">
                <Skill skill={skills['hoakhi']} update={update} tooltip={'Cần học xong tuyến hệ Hỏa'} />
            </h1>
            <ol className="level-2-wrapper">
                <li>
                    <h1 className="level-2 rectangle">
                        <Skill skill={skills['diemvonhi']} update={update} />
                    </h1>
                    <h1 className="level-2 rectangle">
                        <Skill skill={skills['nguloi']} update={update} />
                    </h1>
                    <h1 className="rectangle">
                        <Skill skill={skills['cuongno']} update={update} />
                    </h1>
                </li>
                <li>
                    <h1 className="level-2 rectangle">
                        <Skill skill={skills['cuukiem']} update={update} />
                    </h1>
                    <h1 className="level-2 rectangle">
                        <Skill skill={skills['hoahothan']} update={update} />
                    </h1>
                    <h1 className="rectangle">
                        <Skill skill={skills['cuonglong']} update={update} />
                    </h1>
                </li>
            </ol>
        </div>
    );
}

function Phong(props) {
    const { skills, update } = props
    return (
        <div className="skill-panel container">
            <h1 className="level-1 rectangle">
                <Skill skill={skills['phongkhi']} update={update} tooltip={'Cần học xong tuyến hệ Phong'} />
            </h1>
            <ol className="level-2-wrapper">
                <li>
                    <h1 className="level-2 rectangle">
                        <Skill skill={skills['lietphong']} update={update} />
                    </h1>
                    <h1 className="level-2 rectangle">
                        <Skill skill={skills['huyenanh']} update={update} />
                    </h1>
                    <h1 className="rectangle">
                        <Skill skill={skills['phongthan']} update={update} />
                    </h1>
                </li>
                <li>
                    <h1 className="level-2 rectangle">
                        <Skill skill={skills['dauchuyen']} update={update} />
                    </h1>
                    <h1 className="level-2 rectangle">
                        <Skill skill={skills['phongchi']} update={update} />
                    </h1>
                    <h1 className="rectangle">
                        <Skill skill={skills['vohinh']} update={update} />
                    </h1>
                </li>
            </ol>
        </div>
    );
}