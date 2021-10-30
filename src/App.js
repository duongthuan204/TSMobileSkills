import React from 'react';
import './App.css';
import Head from './layout/head'
import Main from './layout/main'
import Skill from './skill/model'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isMobile: false,
      he: 'dia',
      nghe: 'ba',
      diem: 0,
      skills: Skill.getSkills().skills
    }
    this.checkMobile()
    this.updateHe('dia')
  }

  checkMobile() {
    return (/Mobi|Mobile|Android|iPhone|iPad/i.test(navigator.userAgent))
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
    if (s.skillRequire == 'khong') return true
    if (typeof s.skillRequire == 'string') {
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

  updateSkill = (id, doublePoint) => {
    let { diem, skills } = this.state
    let s = skills[id]
    if (s.point == 0) {
      if (this.checkSkillRequire(id)) {
        diem += (doublePoint ? s.pointRequire * 2 : s.pointRequire)
        this.setState({ diem: diem })
        s.point++
      }
    } else if (s.point < s.pointMax) {
      diem++
      this.setState({ diem: diem })
      s.point++
    } else if (s.point === s.pointMax) {
      diem -= (doublePoint ? s.pointRequire * 2 : s.pointRequire) + (s.point - 1)
      this.setState({ diem: diem })
      s.point = 0
    }
    this.setState({ skills: skills })
  }

  resetSkill = () => {
    let { skills } = this.state
    for (var s in skills) {
      skills[s].point = 0
    }
    this.setState({ skills: skills })
    this.setState({ diem: 0 })
  }

  render() {
    return (
      <div>
        {this.state.isMobile ?
          <article class="message is-danger is-large">
            <div class="message-body">
              Không hỗ trợ di động. Vui lòng xem trên máy tính.
            </div>
          </article> :
          <div>
            <Head he={this.state.he} nghe={this.state.nghe} diem={this.state.diem} updateHe={this.updateHe} updateNghe={this.updateNghe} resetSkill={this.resetSkill} />
            <Main he={this.state.he} nghe={this.state.nghe} diem={this.state.diem} skills={this.state.skills} updateSkill={this.updateSkill} />
          </div>}
      </div>
    );
  }
}

export default App;
