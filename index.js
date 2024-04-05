const Notification = props => {
  //  Write your code here.
  const {message, className, src} = props

  return (
    <div className={`${className}`}>
      <img src={src} className='img' />
      <p>{message}</p>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div className='bg-container'>
    <h1 className='heading'>Notifications</h1>
    <div>
      <Notification
        message='Information Message'
        className='info-container'
        src='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
      />
      <Notification
        message='Success Message'
        className='success-container'
        src='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
      />
      <Notification
        message='Warning Message'
        className='warning-container'
        src='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
      />
      <Notification
        message='Error Message'
        className='error-container'
        src='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
