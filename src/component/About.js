import React, {useState}from 'react'

export default function About(props) {

    // const [mystyle, setMyStyle] = useState({
    //     color: 'white',
    //     backgroundColor: 'black'
   // });

   let mystyle = {
    color: props.mode === 'dark'?'white':'black',
    backgroundColor: props.mode ==='dark'?'black': 'white',
    border: '2px solid white'

   }

    const [btntext, setBtnText] = useState("Enable white mode");

// const setDarkMode = ()=>{
//    if(mystyle.color === 'white'){
//     setMyStyle({
//         color:'black',
//         backgroundColor:'white'
//     })
//     setBtnText("Enable Dark Mode");
// }else{
//     setMyStyle({
//         color: 'white',
//         backgroundColor: 'black'
//     })
//     setBtnText("Enable White Mode");
//    }
// }
  return (
    <div className='container my-3'>
        <h1>About Us</h1>
      <div className="accordion" style={mystyle} id="accordionExample">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <button className="btn btn-link btn-block text-left text-decoration-none" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Scroll
              </button>
            </h2>
          </div>
          <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div className="card-body" style={mystyle}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
      </div>
        {/* <button className='btn btn-primary my-3' onClick={setDarkMode}>{btntext}</button> */}
    </div>
  )
}
