import React from 'react';
import ReactTooltip from 'react-tooltip';

class Head extends React.Component {

    constructor(props) {
        super(props)
    }

    updateHe(value) {
        this.props.updateHe(value)
    }

    updateNghe(value) {
        this.props.updateNghe(value)
    }

    render() {
        return (
            <div className="navbar is-dark">
                <div className="navbar-brand">
                    <div className="navbar-item">
                        <img src="./logoTS.png" />
                    </div>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <div className="navbar-item">
                            <div className="mx-1">
                                <div className="select">
                                    <select disabled={this.props.diem != 0} onChange={e => this.updateHe(e.target.value)}>
                                        <option value="dia" selected>Địa</option>
                                        <option value="thuy">Thủy</option>
                                        <option value="hoa">Hỏa</option>
                                        <option value="phong">Phong</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mx-1">
                                <div className="select">
                                    <select disabled={this.props.diem != 0} onChange={e => this.updateNghe(e.target.value)}>
                                        <option value="khong">Không</option>
                                        <option value="ba" selected>Bá</option>
                                        <option value="hien">Hiền</option>
                                        <option value="tien">Tiên</option>
                                        <option value="hiep">Hiệp</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mx-1">
                                <button className="button is-danger is-light" onClick={() => this.props.resetSkill()}>Reset</button>
                            </div>
                            <div className="mx-4">
                                Cần có <span class="point">{this.props.diem}</span> điểm kĩ năng
                            </div>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <a className="about mx-1" data-tip="Developed by Prosperous (Mã Siêu) - duongthuan204@gmail.com" data-effect="solid" data-type="light" data-place="left" data-delay-show="200">About</a>
                        </div>
                    </div>
                </div>
                <ReactTooltip />
            </div>
        );
    }
}

export default Head;