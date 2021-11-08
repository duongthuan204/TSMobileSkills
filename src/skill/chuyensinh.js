import React from 'react';
import Skill from './skill'

class ChuyenSinh extends React.Component {

    render() {
        const { skills, update } = this.props
        return (
            <div className="columns">
                {this.props.he !== 'hoa' ? <div className="column">
                    <Dia skills={skills} update={update} />
                    <hr className="is-mobi" />
                </div> : ''}
                {this.props.he !== 'phong' ? <div className="column">
                    <Thuy skills={skills} update={update} />
                    <hr className="is-mobi" />
                </div> : ''}

                {this.props.he !== 'dia' ? <div className="column">
                    <Hoa skills={skills} update={update} />
                    <hr className="is-mobi" />
                </div> : ''}
                {this.props.he !== 'thuy' ? <div className="column">
                    <Phong skills={skills} update={update} />
                </div> : ''}
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
                <Skill type="dia" skill={skills['diakhi']} update={update} tooltip={'Cần học xong tuyến hệ Địa'} />
            </h1>
            <ol className="level-2-wrapper">
                <li>
                    <h1 className="level-2 rectangle">
                        <Skill type="dia" skill={skills['diadong']} update={update} />
                    </h1>
                    <h1 className="level-2 rectangle">
                        <Skill type="dia" skill={skills['hoangtho']} update={update} />
                    </h1>
                    <h1 className="rectangle">
                        <Skill type="dia" skill={skills['khutuong']} update={update} />
                    </h1>
                </li>
                <li>
                    <h1 className="level-2 rectangle">
                        <Skill type="dia" skill={skills['dialiet']} update={update} />
                    </h1>
                    <h1 className="level-2 rectangle">
                        <Skill type="dia" skill={skills['thobang']} update={update} />
                    </h1>
                    <h1 className="rectangle">
                        <Skill type="dia" skill={skills['linhkinh']} update={update} />
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
                <Skill type="thuy" skill={skills['thuykhi']} update={update} tooltip={'Cần học xong tuyến hệ Thủy'} />
            </h1>
            <ol className="level-2-wrapper">
                <li>
                    <h1 className="level-2 rectangle">
                        <Skill type="thuy" skill={skills['bangtram']} update={update} />
                    </h1>
                    <h1 className="level-2 rectangle">
                        <Skill type="thuy" skill={skills['bangphach']} update={update} />
                    </h1>
                    <h1 className="rectangle">
                        <Skill type="thuy" skill={skills['bangthuong']} update={update} />
                    </h1>
                </li>
                <li>
                    <h1 className="level-2 rectangle">
                        <Skill type="thuy" skill={skills['dinhthuy']} update={update} />
                    </h1>
                    <h1 className="level-2 rectangle">
                        <Skill type="thuy" skill={skills['tranggiai']} update={update} />
                    </h1>
                    <h1 className="rectangle">
                        <Skill type="thuy" skill={skills['mieuthuy']} update={update} />
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
                    <Skill type="hoa" skill={skills['hoakhi']} update={update} tooltip={'Cần học xong tuyến hệ Hỏa'} />
            </h1>
            <ol className="level-2-wrapper">
                <li>
                    <h1 className="level-2 rectangle">
                        <Skill type="hoa" skill={skills['diemvonhi']} update={update} />
                    </h1>
                    <h1 className="level-2 rectangle">
                        <Skill type="hoa" skill={skills['nguloi']} update={update} />
                    </h1>
                    <h1 className="rectangle">
                        <Skill type="hoa" skill={skills['cuongno']} update={update} />
                    </h1>
                </li>
                <li>
                    <h1 className="level-2 rectangle">
                        <Skill type="hoa" skill={skills['cuukiem']} update={update} />
                    </h1>
                    <h1 className="level-2 rectangle">
                        <Skill type="hoa" skill={skills['hoahothan']} update={update} />
                    </h1>
                    <h1 className="rectangle">
                        <Skill type="hoa" skill={skills['cuonglong']} update={update} />
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
                    <Skill type="phong" skill={skills['phongkhi']} update={update} tooltip={'Cần học xong tuyến hệ Phong'} />
            </h1>
            <ol className="level-2-wrapper">
                <li>
                    <h1 className="level-2 rectangle">
                        <Skill type="phong" skill={skills['lietphong']} update={update} />
                    </h1>
                    <h1 className="level-2 rectangle">
                        <Skill type="phong" skill={skills['huyenanh']} update={update} />
                    </h1>
                    <h1 className="rectangle">
                        <Skill type="phong" skill={skills['phongthan']} update={update} />
                    </h1>
                </li>
                <li>
                    <h1 className="level-2 rectangle">
                        <Skill type="phong" skill={skills['dauchuyen']} update={update} />
                    </h1>
                    <h1 className="level-2 rectangle">
                        <Skill type="phong" skill={skills['phongchi']} update={update} />
                    </h1>
                    <h1 className="rectangle">
                        <Skill type="phong" skill={skills['vohinh']} update={update} />
                    </h1>
                </li>
            </ol>
        </div>
    );
}