import React from 'react';

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
                    <div className="navbar-item logo-brand">
                        <a href="https://www.facebook.com/shunbrvt" target="_blank" rel="noreferrer"><img src="./logo.png" alt="logo" /></a>
                        <a href="https://www.facebook.com/shunbrvt" target="_blank" rel="noreferrer">by duongthuan</a>
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
                                <select value={this.props.he} disabled={this.props.diem > 0 || this.props.ngoc > 0 || this.props.isLock} onChange={e => this.updateHe(e.target.value)}>
                                    <option value="dia">Địa</option>
                                    <option value="thuy">Thủy</option>
                                    <option value="hoa">Hỏa</option>
                                    <option value="phong">Phong</option>
                                </select>
                            </div>
                        </div>
                        <div className="mx-1">
                            <div className="select">
                                <select value={this.props.nghe} disabled={this.props.diem > 0 || this.props.ngoc > 0 || this.props.isLock} onChange={e => this.updateNghe(e.target.value)}>
                                    <option value="khong">CS</option>
                                    <option value="ba">Bá</option>
                                    <option value="hien">Hiền</option>
                                    <option value="tien">Tiên</option>
                                    <option value="hiep">Hiệp</option>
                                </select>
                            </div>
                        </div>
                        <div className="mx-1">
                            <button className="button is-danger" onClick={() => this.props.resetSkill()} disabled={this.props.isLock}>Reset</button>
                        </div>
                    </div>
                    <div className="navbar-item point-panel">
                        Cần có&nbsp;<span className={'point-label color-' + this.props.he}>{this.props.diem}</span>&nbsp;điểm kĩ năng
                        <IconQuestion onClick={() => this.props.openAboutPage()} size={22} className={'is-mobi icon-question color--' + this.props.he} />
                    </div>
                </div>
                <div className="navbar-end is-desktop">
                    <div className="navbar-item">
                        <IconQuestion onClick={() => this.props.openAboutPage()} size={33} className={'icon-question color--' + this.props.he} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Head;

// function IconQuestion2({ className, size = 28, ...props }) {
//     return (
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className={className} width={size} height={size} fill="currentColor" {...props}>
//             <path d="M528 320C528 205.1 434.9 112 320 112C205.1 112 112 205.1 112 320C112 434.9 205.1 528 320 528C434.9 528 528 434.9 528 320zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320zM320 240C302.3 240 288 254.3 288 272C288 285.3 277.3 296 264 296C250.7 296 240 285.3 240 272C240 227.8 275.8 192 320 192C364.2 192 400 227.8 400 272C400 319.2 364 339.2 344 346.5L344 350.3C344 363.6 333.3 374.3 320 374.3C306.7 374.3 296 363.6 296 350.3L296 342.2C296 321.7 310.8 307 326.1 302C332.5 299.9 339.3 296.5 344.3 291.7C348.6 287.5 352 281.7 352 272.1C352 254.4 337.7 240.1 320 240.1zM288 432C288 414.3 302.3 400 320 400C337.7 400 352 414.3 352 432C352 449.7 337.7 464 320 464C302.3 464 288 449.7 288 432z" />
//         </svg>
//     );
// }

function IconQuestion({ className, size, ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={className} width={size} height={size} fill="currentColor" {...props}>
            <path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm0-336c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
        </svg>
    );
}