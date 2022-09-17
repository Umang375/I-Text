import React from 'react'

export default function About(porps) {
    // const [ myStyle,setMyStyle ] = useState({
    //     color: 'white',
    //     backgroundColor: 'black'
    // })

    // const [btntext,setBtntext] = useState('Enable Dark Mode');
    // const toggleStyle = () => {
    //     if(myStyle.color === 'white'){
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtntext('Enable Dark Mode');
    //     }else{
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setBtntext('Enable Light Mode');
    //     }
    // }

    let myStyle = {
      color:porps.mode === 'dark' ? 'white' : '#042743',
      backgroundColor:porps.mode === 'dark' ? 'rgb(36, 74, 104' : 'white',
      border: '2px solid',
      borderColor: porps.mode === 'dark' ? 'white' : '#042743'
    }
  return (
  <div className="accordion" id="accordionExample">
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
          <strong>Analyze Your text</strong>
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={myStyle}>
        <div className="accordion-body">
        I❤️Text gives you a way to analyze your text quickly and efficiently. Be it word count, character count or interconversin between the cases.
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
        <strong>Free to use</strong>
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={myStyle}>
        <div className="accordion-body">
        I❤️Text is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters . Thus it is suitable for writing text with word/ character limit.
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
         <strong> Browser Compatibility</strong>
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style={myStyle}>
        <div className="accordion-body">
          This word counter software works in any web browsers such as Chrome, Firefox, MS Edge, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, ete.
        </div>
      </div>
    </div>
    {/* <div classNameName="container my-3">
        <button type="button" onClick= {toggleStyle} className="btn btn-dark">{btntext}</button>
    </div> */}
  </div>
  )
}
