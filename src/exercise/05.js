// Styling
import * as React from 'react'
import '../box-styles.css'

// 1. add a className prop to each div and apply the correct class names
// 🐨 add a style prop to each div so their background color
// 🐨 also use the style prop to make the font italic
// const smallBox = <div className='box box--small' style={{ backgroundColor: 'lightblue', fontStyle: 'italic'}}>small lightblue box</div>
// const mediumBox = <div className='box box--medium' style={{ backgroundColor: 'pink', fontStyle: 'italic'}}>medium pink box</div>
// const largeBox = <div className='box box--large' style={{ backgroundColor: 'orange', fontStyle: 'italic'}}>large orange box</div>

// 2. Create a custom component Box with all props + 3. pass size prop
const Box = ({style, size = 'small', className = '', ...props}) => {
  const sizeClassName = size ? `box--${size}` : '';
  return (
    <div
      className={`box ${className} ${sizeClassName}`}
      style={{fontStyle: 'italic', ...style}}
      {...props}  
    >{`${size} ${style.backgroundColor} box`}</div>
  )
}

function App() {
  return (
    <div>
      <Box style={{ backgroundColor: 'lightblue'}} />
      <Box style={{ backgroundColor: 'pink'}} size={'medium'} />
      <Box style={{ backgroundColor: 'orange'}} size={'large'} />
    </div>
  )
}

export default App
