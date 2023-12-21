// Basic Forms

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 1. add a submit event handler here (`handleSubmit`).
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   onSubmitUsername((e.target.elements.usernameInput.value))
  // }

  // return (
  //   <form onSubmit={(e) => handleSubmit(e)}>
  //     <div>
  //       <label htmlFor='usernameInput'>Username:</label>
  //       <input id="usernameInput" type="text" />
  //     </div>
  //     <button type="submit">Submit</button>
  //   </form>
  // )

  // 2. using refs
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   onSubmitUsername((inputRef.current.value))
  // }

  // const inputRef = React.useRef()

  // return (
  //   <form onSubmit={(e) => handleSubmit(e)}>
  //     <div>
  //       <label htmlFor='usernameInput'>Username:</label>
  //       <input id="usernameInput" type="text" ref={inputRef} />
  //     </div>
  //     <button type="submit">Submit</button>
  //   </form>
  // )

  // 3. Validate lower case and 4. controlled input value
  const inputRef = React.useRef()
  const [inputChange, setInputChange] = React.useState('');
  const [error, setError] = React.useState(null);

  const handleChange = () => {
    setError(null)
    setInputChange(inputRef.current.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = inputChange === inputChange.toLowerCase();
    if(isValid){
      onSubmitUsername((inputChange))
      setInputChange('')
    } else {
      setError('all user name characters must be lowercase')
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <small role='alert' style={{color: 'red'}}>{error}</small>
      <div>
        <label htmlFor='usernameInput'>Username:</label>
        <input
          id="usernameInput"
          type="text"
          ref={inputRef}
          onChange={handleChange}
          value={inputChange}
        />
      </div>
      <button type="submit" disabled={!!error || inputChange.length === 0}>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App