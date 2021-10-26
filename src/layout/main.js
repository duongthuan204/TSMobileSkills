import React from 'react';
import Dia from '../skill/dia';
import Thuy from '../skill/thuy';
import Hoa from '../skill/hoa';
import Phong from '../skill/phong';
import ChuyenSinh from '../skill/chuyensinh';
import TaiSinh from '../skill/taisinh';

class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            select: 'dia',
            he: props.he,
            nghe: props.nghe
        }
    }

    componentWillReceiveProps(props) {
        if (props.he !== this.state.he) {
            this.setState({ he: props.he })
            this.updateSelect(props.he)
        } else if (props.nghe !== this.state.nghe) {
            if (props.nghe == 'khong' && this.state.select == 'ts') {
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

    renderSelect() {
        const { skills, updateSkill } = this.props
        switch (this.state.select) {
            case 'dia':
                return <Dia skills={skills} update={updateSkill} />
            case 'thuy':
                return <Thuy skills={skills} update={updateSkill} />
            case 'hoa':
                return <Hoa skills={skills} update={updateSkill} />
            case 'phong':
                return <Phong skills={skills} update={updateSkill} />
            case 'cs':
                return <ChuyenSinh he={this.props.he} nghe={this.props.nghe} skills={skills} update={updateSkill} />
            case 'ts':
                return <TaiSinh he={this.props.he} nghe={this.props.nghe} skills={skills} update={updateSkill} />
            default:
                return null
        }
    }

    render() {
        const select = this.state.select;
        return (
            <div>
                <div className="tabs is-boxed">
                    <ul>
                        {this.props.he !== 'hoa' ? <li className={select === 'dia' ? 'is-active' : ''}><a onClick={() => this.updateSelect('dia')}>Địa</a></li> : ''}
                        {this.props.he !== 'phong' ? <li className={select === 'thuy' ? 'is-active' : ''}><a onClick={() => this.updateSelect('thuy')}>Thủy</a></li> : ''}
                        {this.props.he !== 'dia' ? <li className={select === 'hoa' ? 'is-active' : ''}><a onClick={() => this.updateSelect('hoa')}>Hỏa</a></li> : ''}
                        {this.props.he !== 'thuy' ? <li className={select === 'phong' ? 'is-active' : ''}><a onClick={() => this.updateSelect('phong')}>Phong</a></li> : ''}
                        <li className={select === 'cs' ? 'is-active' : ''}><a onClick={() => this.updateSelect('cs')}>Chuyển Sinh</a></li>
                        {this.props.nghe !== 'khong' ? <li className={select === 'ts' ? 'is-active' : ''}><a onClick={() => this.updateSelect('ts')}>{this.labelTS()}</a></li> : ''}
                    </ul>
                </div>
                {this.renderSelect()}
            </div>
        );
    }
}

export default Main;