export default function CustomButton(props) {
  const {text, warnMessage, hint} = props;

  const handleWarning = () => {
    if(warnMessage){
      alert("This is warning message");
    }
  }

  return (
    <>
        <button title={hint} onClick={handleWarning} className={`${warnMessage?'bordered' : ''} ${hint?'cursiv' : ''}`}>{text}</button>
    </>
  )
}
