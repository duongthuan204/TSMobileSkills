import React from 'react';
import './App.css';
import Head from './layout/head'
import Main from './layout/main'
import About from './layout/about';
import Dialog from './layout/dialog'
import Model from './skill/model'

class App extends React.Component {

  constructor(props) {
    super(props)
    const data = this.loadData()
    this.state = {
      isLock: false,
      he: data.he,
      nghe: data.nghe,
      diem: data.diem,
      learn: data.learn,
      ball: data.ball,
      skills: data.skills,
      quick: data.quick,
      ngoc: data.ngoc,
      openAbout: false
    }
  }

  // checkMobile() {
  //   return (/Mobi|Mobile|Android|iPhone|iPad/i.test(navigator.userAgent))
  // }

  saveData = () => {
    localStorage.setItem('data', JSON.stringify(this.state))
  }

  loadData() {
    //const data = JSON.parse(localStorage.getItem('data')) || Model.getInitData().initData
    localStorage.removeItem('data')
    const data = Model.getInitData().initData
    localStorage.setItem('char', data.he)
    return data
  }

  openAboutPage = () => {
    this.setState({ openAbout: true })
  }

  closeAboutPage = () => {
    this.setState({ openAbout: false })
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
    let specialCase = ['hoakhi', 'thuykhi', 'diakhi', 'phongkhi']
    if (specialCase.includes(quick[id][0])) {
      if (!this.checkSkillRequire(quick[id][0])) return
    }
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

  updateSummonSKills = (id) => {
    const each = [0, 2, 4, 8, 14, 21, 29, 40, 52, 67]
    const total = [1, 2, 6, 14, 28, 49, 78, 118, 170, 237]
    // const each = [0, 1.7, 4.3, 8.0, 13.7, 20.7, 29.3, 39.7, 52.3, 66.7]
    // const total = [1, 1.7, 6.0, 14.7, 27.7, 48.3, 77.7, 117.3, 169.7, 236.3]
    let { skills } = this.state
    let s = skills[id]
    if (s.point < 10) {
      this.setState({ ngoc: total[s.point] })
      s.pointRequire = each[s.point]
      s.point++
    } else {
      s.point = 0
      s.pointRequire = 0
      this.setState({ ngoc: 0 })
    }
  }

  updateSkill = (id, doublePoint, type, isBall, isMax) => {
    let { diem, learn, ball, skills, quick } = this.state
    let s = skills[id]
    if (isMax && s.point > 2) return
    if (s.skillRequire === 'trieugoi') {
      this.updateSummonSKills(id)
      return
    }
    let pointIncrease = isMax ? (s.pointMax - s.point) : 1
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
      diem += pointIncrease
      this.setState({ diem: diem })
      s.point += pointIncrease
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
    this.setState({ skills: skills, diem: 0, learn: 0, ball: 0, ngoc: 0 })
  }

  render() {
    return (
      <div>
        <Head he={this.state.he} nghe={this.state.nghe} diem={this.state.diem} ngoc={this.state.ngoc} updateHe={this.updateHe} updateNghe={this.updateNghe} resetSkill={this.resetSkill} saveData={this.saveData} openAboutPage={this.openAboutPage} isLock={this.state.isLock} />
        <Dialog isLock={this.state.isLock} />
        {this.state.openAbout ? <About closeAboutPage={this.closeAboutPage} /> : <Main he={this.state.he} nghe={this.state.nghe} diem={this.state.diem} learn={this.state.learn} ball={this.state.ball} ngoc={this.state.ngoc} skills={this.state.skills} updateSkill={this.updateSkill} />}
      </div>
    );
  }
}

export default App;
