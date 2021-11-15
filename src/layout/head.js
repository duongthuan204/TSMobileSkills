import React from 'react';
import ReactTooltip from 'react-tooltip';

class Head extends React.Component {

    updateHe(value) {
        this.props.updateHe(value)
    }

    updateNghe(value) {
        this.props.updateNghe(value)
    }

    render() {
        return (
            <div className="navbar is-dark is-fixed-top">
                <div className="navbar-brand">
                    <div className="navbar-item is-desktop">
                        <a href="https://ts.dzogame.vn/"><img src="https://ts.dzogame.vn/Website/assets/img/web_v2/LogoTS.png" alt="logo" /></a>
                    </div>
                    <div className="navbar-item">
                        {/* <div className="mx-1">
                            <button className="button is-info" onClick={() => this.props.saveData()}>
                                <span class="icon is-small">
                                    <img src="./assets/icon/save.svg" width="50" height="50" alt="save"></img>
                                </span>
                            </button>
                        </div> */}
                        <div className="mx-1">
                            <div className="select">
                                <select value={this.props.he} disabled={this.props.diem !== 0} onChange={e => this.updateHe(e.target.value)}>
                                    <option value="dia">Địa</option>
                                    <option value="thuy">Thủy</option>
                                    <option value="hoa">Hỏa</option>
                                    <option value="phong">Phong</option>
                                </select>
                            </div>
                        </div>
                        <div className="mx-1">
                            <div className="select">
                                <select value={this.props.nghe} disabled={this.props.diem !== 0} onChange={e => this.updateNghe(e.target.value)}>
                                    <option value="khong">CS</option>
                                    <option value="ba">Bá</option>
                                    <option value="hien">Hiền</option>
                                    <option value="tien">Tiên</option>
                                    <option value="hiep">Hiệp</option>
                                </select>
                            </div>
                        </div>
                        <div className="mx-1">
                            <button className="button is-danger" onClick={() => this.props.resetSkill()}>Reset</button>
                        </div>
                        <div className="is-desktop mx-4">
                            Cần có <span className="point-label">{this.props.diem}</span> điểm kĩ năng
                        </div>
                    </div>
                </div>
                <ReactTooltip />
            </div>
        );
    }
}

export default Head;