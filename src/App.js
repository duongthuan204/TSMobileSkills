import React from 'react';
import './App.css';
import Head from './layout/head'
import Main from './layout/main'
import Model from './skill/model'

class App extends React.Component {

  constructor(props) {
    super(props)
    const data = this.loadData()
    this.state = {
      isMobile: false,
      he: data.he,
      nghe: data.nghe,
      diem: data.diem,
      learn: data.learn,
      ball: data.ball,
      skills: data.skills,
      quick: data.quick
    }
  }

  checkMobile() {
    return (/Mobi|Mobile|Android|iPhone|iPad/i.test(navigator.userAgent))
  }

  saveData = () => {
    localStorage.setItem('data', JSON.stringify(this.state))
  }

  loadData() {
    const data = JSON.parse(localStorage.getItem('data')) || Model.getInitData().initData
    localStorage.setItem('char', data.he)
    return data
  }

  updateHe = value => {
    this.setState({ he: value })
    localStorage.setItem('char', value)
  }

  updateNghe = value => {
    this.setState({ nghe: value })
  }

  checkSkillRequire = id => {
    let s = this.state.skills[id]
    if (s.skillRequire === 'khong') return true
    if (typeof s.skillRequire === 'string') {
      let sRequire = this.state.skills[s.skillRequire]
      return sRequire.point > 0
    } else {
      let check = false
      s.skillRequire.forEach(sId => {
        const sRequire = this.state.skills[sId]
        if (sRequire.point > 0) {
          check = true
        }
      });
      return check
    }
  }

  uncheckedSkill = (id, doublePoint, type, isBall) => {
    let { diem, learn, ball, skills } = this.state
    let s = skills[id]
    let check = false
    if (type === 'nghe' && id !== 'daichuthien') {
      if ((ball - learn) < 2) {
        check = true
      }
    }
    for (const i in skills) {
      if (skills[i].skillRequire === id && skills[i].point > 0) {
        check = true
        break
      } else if (typeof skills[i].skillRequire === 'object') {
        let count = 0
        skills[i].skillRequire.forEach(sId => {
          const sRequire = this.state.skills[sId]
          if (sRequire.point > 0) count++
          if (sRequire.id === id) count -= 2
        });
        if (count < 0 && skills[i].point > 0) {
          check = true
          break
        }
      }
    }
    if (!check) {
      diem -= (doublePoint ? s.pointRequire * 2 : s.pointRequire) + (s.point - 1)
      this.setState({ diem: diem })
      s.point = 0
      if (type === 'nghe' && id !== 'daichuthien') {
        ball -= 2
        this.setState({ ball: ball })
      } else if (isBall && type !== 'nghe') {
        learn--
        this.setState({ learn: learn })
      }
    } else {
      diem -= (s.pointMax - 1)
      this.setState({ diem: diem })
      s.point = 1
    }
  }

  updateQuick = (id, doublePoint) => {
    let { diem, skills, quick } = this.state
    let s = skills[id]
    diem += (doublePoint ? s.pointRequire * 2 : s.pointRequire)
    s.point = 1
    quick[id].forEach(i => {
      if (skills[i].point === 0) {
        skills[i].point = 1
        diem += (doublePoint ? skills[i].pointRequire * 2 : skills[i].pointRequire)
      }
    })
    this.setState({ diem: diem })
    this.setState({ skills: skills })
  }

  updateSkill = (id, doublePoint, type, isBall) => {
    let { diem, learn, ball, skills, quick } = this.state
    let s = skills[id]
    if (s.point === 0) {
      if (quick[id] !== undefined) {
        this.updateQuick(id, doublePoint)
      } else if (this.checkSkillRequire(id)) {
        if (isBall && type !== 'nghe') {
          if (learn < ball) {
            learn++
            this.setState({ learn: learn })
          } else return
        }
        diem += (doublePoint ? s.pointRequire * 2 : s.pointRequire)
        this.setState({ diem: diem })
        s.point++
        if (type === 'nghe' && id !== 'daichuthien') {
          ball += 2
          this.setState({ ball: ball })
        }
      }
    } else if (s.point < s.pointMax) {
      diem++
      this.setState({ diem: diem })
      s.point++
    } else if (s.point === s.pointMax) {
      this.uncheckedSkill(id, doublePoint, type, isBall)
    }
    this.setState({ skills: skills })
  }

  resetSkill = () => {
    let { skills } = this.state
    for (var s in skills) {
      skills[s].point = 0
    }
    this.setState({ skills: skills, diem: 0, learn: 0, ball: 0 })
  }

  render() {
    return (
      <div>
        {this.state.isMobile ?
          <article className="message is-danger is-large">
            <div className="message-body">
              Không hỗ trợ di động. Vui lòng xem trên máy tính.
            </div>
          </article> :
          <div>
            <Head he={this.state.he} nghe={this.state.nghe} diem={this.state.diem} updateHe={this.updateHe} updateNghe={this.updateNghe} resetSkill={this.resetSkill} saveData={this.saveData} />
            <div className="point-panel is-mobi">Cần có <span className="point-label">{this.state.diem}</span> điểm kĩ năng</div>
            <Main he={this.state.he} nghe={this.state.nghe} diem={this.state.diem} learn={this.state.learn} ball={this.state.ball} skills={this.state.skills} updateSkill={this.updateSkill} />
          </div>}
      </div>
    );
  }
}

export default App;
