import {useState} from 'react'
import './index.css'

const Solution1 = () => {
  const [number, setNumber] = useState('')
  const [inputs, setInputs] = useState([])

  const onChangeSol = event => {
    setNumber(event.target.value)
  }

  const onAddInput = () => {
    if (number.trim()) {
      setInputs([...inputs, number])
      setNumber('')
    }
  }

  return (
    <div className="BgImg">
      <div className="yellowPage">
        <h1 className="headingEl1">Count the characters like a Boss...</h1>
        {inputs.length === 0 ? (
          <img
            className="imageSizeEl"
            alt="no user inputs"
            src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
          />
        ) : (
          <ul>
            {inputs.map(input => (
              <li className="listEl">
                {input}:{input.length}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="blackPage">
        <h1 className="headingEl2">Character Counter</h1>
        <div>
          <input
            placeholder="Enter the Characters here"
            value={number}
            onChange={onChangeSol}
            type="text"
          />
          <button className="buttonEl2" type="button" onClick={onAddInput}>
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default Solution1
