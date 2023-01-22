// Write your code here.
import './index.css'
import {Component} from 'react'

const plusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isPlus: true}

  onClickImage = () => {
    this.setState(prevState => ({isPlay: !prevState.isPlay}))
  }

  onViewAns = () => {
    const {isPlay} = this.state
    const {eachFaq} = this.props
    const {answerText} = eachFaq
    return isPlay ? (
      ''
    ) : (
      <div>
        <p>{answerText}</p>
      </div>
    )
  }

  render() {
    const eachFaq = this.props
    const {questionText} = eachFaq
    const {isPlus} = this.state
    const image = isPlus ? plusImage : minusImage
    const alter = isPlus ? 'plus' : 'minus'
    return (
      <li className="listOrder">
        <div className="questionCont">
          <p>{questionText}</p>
          <img onClick={this.onClickImage} src={image} alt={alter} />
        </div>

        <hr />
        {this.onViewAns()}
      </li>
    )
  }
}
export default FaqItem
