import React, { Component } from 'react'
import firebase from './firebase.js' // <--- add this line

export class Homepage extends Component {
  state = {
    items: [],
    notifications: [],
  }

  componentDidMount() {
    const notifRef = firebase.database().ref('Notifications')
    notifRef.on('value', (snapshot) => {
      let notifications = snapshot.val()
      let newState = []
      for (let notification in notifications) {
        newState.push({
          title: notification,
          description: notifications[notification],
        })
      }
      this.setState({
        notifications: newState
      })
    })
  }

  render () {
    const { notifications } = this.state

    return (
      <div>
        <div className="sg-hero">
          <div className="sg-hero__elem">
            <div className="sg-proj-title">
              <h1>SEGMENT CSS</h1>
            </div>
          </div>
        </div>

        {notifications.map(notification => {
          return (
            <div>
              <h2>{notification.title}</h2>
              <p>{notification.description}</p>
            </div>
          )
        })}

        <div>
          <icon-button icon="check" size="sm" material></icon-button>
          <icon-button icon="accessible" material></icon-button>
        </div>

        <div className="app-view">
          <div>
            <h2>The Idea</h2>
            <p>SEGEMENT CSS is a framework that uses a base core and layers on top of it. The idea comes from working inside of a corportate office and hearing the constraints from teams.</p>
            <p>The challenge is there is no single solution when it comes to frameworks. What works for one project will probably not work with another project. But what if we could create a single core framework, and apply levels on top of it to meet a wider range of projects.</p>
            <p>Think of it like Bootstrap themes on steriods. Not only does it change its appearance, but its layout principles, typography, and anything else that would need too. Examples are internal tooling will look and feel different then a user facing landing page. A user facing application will need to be different as from a standard website.</p>
          </div>

          <div className="sg-divider"></div>

          <div>
            <h2>Namespace support</h2>
            <p>The idea is simple, prepend a namespace to all your classes so it becomes more unique. We all have used .btn as a class name before, guilty as charged. Now we do .spx-btn and this is my identifier ".spx-"</p>
          </div>

          <div className="sg-divider"></div>

          <div>
            <h2>Style scoping</h2>
            <p>Using namespace support along with writing in Sass, scoping is handled to its parent element. This allows for easily writing styles that require to be a child of the parent. Following this pattern follows the similiar idea of ITCSS for specificity.</p>
            <p>Keeping specificity as low as possible helps create a better model for scoping, as everything becomes handled at one level higher or modifier classes.</p>
          </div>

          <div className="sg-divider"></div>

          <div>
            <h2>Layout principle</h2>
            <p>The one thing I spend time doing often is working around someones layouts on pure elements. There is the nice idea of global elements could handle more, but with so much design happening this gets tough.</p>
            <p>My solution is to work in the Atomic Design pattern but apply this to code. I extend this to the technical even further by only allowing elements to control there layout once it hits a component or layout level. So my .spx-btn will always have the expectation that it sits flush left to its page level or elements box model.</p>
            <p>Now think of outer containers that control its margins and layout. You get more to pure expected behavior knowing more closely how it aligns.</p>
            <p>With that think of shaping the elements as:</p>
            <ul className="spx-list">
              <li>atom = lowest element (such as buttons & inputs)</li>
              <li>molecule = the element combining multiple atoms(this can control layout with modifier classes)</li>
              <li>organism = the element that uses a combination of atoms and molecules(this can control layout with no additional modifier classes needed, but extending is always nice)</li>
              <li>page = this is what is in your dom all at once</li>
            </ul>
          </div>

          <div className="sg-divider"></div>

          <div>
            <p>SEGMENT was created with the idea to move to an PURE CSS UI framework/pattern lab.</p>
            <p>There are so many amazing frameworks out there that is gets hard to choose which one. A lot of the frameworks under the hood have very complex SASS or LESS being written which can get hard to follow, or just be a bit for someone wanting to customize slightly. A lot of the heavy hitter frameworks also come with a heavy page weight, in instances of 100kb+. That is really not all that bad, but dump a theme on top, write custom css for your project are all real world things. My goal was to create a base framework, that gives you out of the box browser support following the principles laid out by Brad Frost. Atomic Design/Pattern Labs and retrofit that idea to css. With it being small you have just that much more play with custom code before you even reach to base filesize of some of the other frameworks. I also used a single variable file and went with a more readable code approach so it should be easy for you to fork and customize without the need for a theme. You can even fork and create a theme, I will leave the imagination of up to you.</p>
            <p>Here are the key benefits to using SEGMENT CSS</p>

            <div className="sg-divider"></div>

            <div>
              <h2>Current filesize minified: 46kb</h2>
            </div>

            <div className="sg-divider"></div>

            <ul className="spx-list">
              <li>Light weight</li>
              <li>1 variable file for easy customization</li>
              <li>IE support for 11 and above</li>
              <li>Uses no webfonts, only system level fonts</li>
              <li>Built on an atomic level for minimal trumping</li>
              <li>All components are scoped to its component classes</li>
              <li>Optional includes for components</li>
              <li>Namespace support(scss compiling required)</li>
              <li>ZERO JS/External dependancies</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Homepage
