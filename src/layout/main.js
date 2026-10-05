import React from 'react';
import Dia from '../skill/dia';
import Thuy from '../skill/thuy';
import Hoa from '../skill/hoa';
import Phong from '../skill/phong';
import ChuyenSinh from '../skill/chuyensinh';
import TaiSinh from '../skill/taisinh';
// import About from '../layout/about';

class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            select: props.he,
            he: props.he,
            nghe: props.nghe
        }
    }

    componentWillReceiveProps(props) {
        if (props.he !== this.state.he) {
            this.setState({ he: props.he })
            this.updateSelect(props.he)
        } else if (props.nghe !== this.state.nghe) {
            if (props.nghe === 'khong' && this.state.select === 'ts') {
                this.updateSelect(this.state.he)
            }
            this.setState({ nghe: props.nghe })
        }
    }

    updateSelect(value) {
        this.setState({ select: value })
    }

    labelTS() {
        switch (this.props.nghe) {
            case 'ba':
                return 'Bá Vương'
            case 'hien':
                return 'Hiền Sĩ'
            case 'tien':
                return 'Đích Tiên'
            case 'hiep':
                return 'Hiệp Khách'
            default:
                return null
        }
    }

    labelTS2() {
        switch (this.props.nghe) {
            case 'ba':
                return 'Bá'
            case 'hien':
                return 'Hiền'
            case 'tien':
                return 'Tiên'
            case 'hiep':
                return 'Hiệp'
            default:
                return null
        }
    }

    renderSelect() {
        const { skills, updateSkill } = this.props
        switch (this.state.select) {
            case 'dia':
                return <Dia skills={skills}  he={this.props.he} ngoc={this.props.ngoc} update={updateSkill} />
            case 'thuy':
                return <Thuy skills={skills}  he={this.props.he} ngoc={this.props.ngoc} update={updateSkill} />
            case 'hoa':
                return <Hoa skills={skills}  he={this.props.he} ngoc={this.props.ngoc} update={updateSkill} />
            case 'phong':
                return <Phong skills={skills}  he={this.props.he} ngoc={this.props.ngoc} update={updateSkill} />
            case 'cs':
                return <ChuyenSinh he={this.props.he} nghe={this.props.nghe} skills={skills} update={updateSkill} />
            case 'ts':
                return <TaiSinh he={this.props.he} nghe={this.props.nghe} learn={this.props.learn} ball={this.props.ball} skills={skills} update={updateSkill} />
            default:
                return ''
        }
    }

    render() {
        const select = this.state.select;
        return (
            <div className="tabs-main">
                <div className="tabs is-boxed mt-1">
                    <ul>
                        {/* eslint-disable-next-line */}
                        {this.props.he !== 'hoa' ? <li className={select === 'dia' ? 'is-active' : ''}><a onClick={() => this.updateSelect('dia')}><span className={'label-dia-' + select}>Địa</span></a></li> : ''}
                        {/* eslint-disable-next-line */}
                        {this.props.he !== 'phong' ? <li className={select === 'thuy' ? 'is-active' : ''}><a onClick={() => this.updateSelect('thuy')}><span className={'label-thuy-' + select}>Thủy</span></a></li> : ''}
                        {/* eslint-disable-next-line */}
                        {this.props.he !== 'dia' ? <li className={select === 'hoa' ? 'is-active' : ''}><a onClick={() => this.updateSelect('hoa')}><span className={'label-hoa-' + select}>Hỏa</span></a></li> : ''}
                        {/* eslint-disable-next-line */}
                        {this.props.he !== 'thuy' ? <li className={select === 'phong' ? 'is-active' : ''}><a onClick={() => this.updateSelect('phong')}><span className={'label-phong-' + select}>Phong</span></a></li> : ''}
                        {/* eslint-disable-next-line */}
                        <li className={select === 'cs' ? 'is-active' : ''}><a onClick={() => this.updateSelect('cs')}>
                            <span className={'is-desktop label-cs-' + select}>Chuyển Sinh</span>
                            <span className={'is-mobi label-cs-' + select}>CS</span>
                        </a></li>
                        {/* eslint-disable-next-line */}
                        {this.props.nghe !== 'khong' ? <li className={select === 'ts' ? 'is-active' : ''}><a onClick={() => this.updateSelect('ts')}>
                            <span className={'is-desktop label-ts-' + select}>{this.labelTS()}</span>
                            <span className={'is-mobi label-ts-' + select}>{this.labelTS2()}</span>
                        </a></li> : ''}
                        {/* <li className={select === 'about' ? 'is-active' : ''}>
                            <a onClick={() => this.updateSelect('about')}>
                                <span className="icon is-mobi"><img src="./assets/icon/question.svg" alt="info"></img></span>
                                <span className="is-desktop">Giới thiệu</span>
                            </a>
                        </li> */}
                    </ul>
                </div>
                {this.renderSelect()}
            </div >
        );
    }
}

export default Main;