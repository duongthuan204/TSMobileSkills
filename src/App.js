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
      ball: data.ball,
      skills: data.skills,
      quick: data.quick,
      ngoc: data.ngoc,
      openAbout: false,
      learn: Array(8).fill(null)
    }

    // const test1 = { name: 'liettram', type: 'hoa' }
    // const test2 = { name: 'chandien', type: 'phong' }
    // const test3 = { name: 'giaithuat', type: 'thuy' }
    // const { learn } = this.state
    // learn[0] = test1
    // learn[1] = test2
    // learn[2] = test3
    // this.setState({ learn: learn })

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
    localStorage.setItem('nghe', data.nghe)
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
    localStorage.setItem('nghe', value)
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

  uncheckedSkill = (id, doublePoint, type, isBall, learnSlot) => {
    let { diem, learn, ball, skills } = this.state
    let s = skills[id]
    let check = false
    if (learnSlot != null & type === 'nghe') {
      const i = learnSlot
      if (i === 0 && (learn[0] !== null || learn[1] !== null)) {
        check = true
      } else if (i === 1 & (learn[2] !== null || learn[3] !== null)) {
        check = true
      } else if (i === 2 & (learn[4] !== null || learn[5] !== null)) {
        check = true
      } else if (i === 3 & (learn[6] !== null || learn[7] !== null)) {
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
      if (isBall || (type === 'nghe' && id !== 'daichuthien')) {
        ball--
        this.setState({ ball: ball })
      }
      if (learnSlot != null & type !== 'nghe') {
        learn[learnSlot] = null
        this.setState({ learn: learn })
      }
    } else if (s.point > 1) {
      diem -= (s.point - 1)
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

  updateSummonSKills = (id, isDelete) => {
    const each = [0, 2, 4, 8, 14, 21, 29, 40, 52, 67]
    const total = [1, 2, 6, 14, 28, 49, 78, 118, 170, 237]
    // const each = [0, 1.7, 4.3, 8.0, 13.7, 20.7, 29.3, 39.7, 52.3, 66.7]
    // const total = [1, 1.7, 6.0, 14.7, 27.7, 48.3, 77.7, 117.3, 169.7, 236.3]
    let { skills } = this.state
    let s = skills[id]
    if (isDelete) {
      s.point = 0
      s.pointRequire = 0
      this.setState({ ngoc: 0 })
      return
    }
    if (s.point < 10) {
      this.setState({ ngoc: total[s.point] })
      s.pointRequire = each[s.point]
      s.point++
    }
  }

  updateSkill = (id, doublePoint, type, isBall, learnSlot, isDelete) => {
    let { diem, learn, ball, skills, quick } = this.state
    let s = skills[id]
    if (s.skillRequire === 'trieugoi') {
      this.updateSummonSKills(id, isDelete)
      return
    }
    if (isDelete) {
      this.uncheckedSkill(id, doublePoint, type, isBall, learnSlot)
      return
    }
    if (s.point === 0) {
      if (quick[id] !== undefined) {
        this.updateQuick(id, doublePoint)
      } else if (this.checkSkillRequire(id)) {
        diem += (doublePoint ? s.pointRequire * 2 : s.pointRequire)
        this.setState({ diem: diem })
        s.point++
        if (isBall || (type === 'nghe' && id !== 'daichuthien')) {
          ball++
          this.setState({ ball: ball })
        }
        if (learnSlot !== null && type !== 'nghe') {
          learn[learnSlot] = { name: s.id, type: type }
          this.setState({ learn: learn })
        }
      }
    } else if (s.point < s.pointMax) {
      diem++
      this.setState({ diem: diem })
      s.point++
    }
    this.setState({ skills: skills })
  }

  resetSkill = () => {
    let { skills } = this.state
    for (var s in skills) {
      skills[s].point = 0
    }
    this.setState({ skills: skills, diem: 0, learn: Array(8).fill(null), ball: 0, ngoc: 0 })
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
