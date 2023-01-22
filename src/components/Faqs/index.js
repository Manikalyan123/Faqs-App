// Write your code here.
import './index.css'
import FaqItem from '../FaqItem'

const Faqs = props => {
  const {FaqsList} = props

  return (
    <div className="Cont">
      <div className="whiteCont">
        <h1 className="heading">Faqs</h1>
        <ul className="unOrderList">
          {FaqsList.map(each => (
            <FaqItem eachFaq={each} key={each.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Faqs
