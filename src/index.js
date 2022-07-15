import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style.css';
import App from './App';
import Infosection from "./component/Infosection";
import Card from "./component/Card";
import reportWebVitals from './reportWebVitals';
import carddetail  from './carddetail';
const root = ReactDOM.createRoot(document.getElementById('root'));



function DigitalProfile()
{
    
   const cards= carddetail.map(item=>
{ return <Card item={item} />}
)
    
        
     
return (
    <div className="boundary">
<Infosection/>
<div className='cardcontainer'>

{cards}

</div>
</div>
)
}

root.render(<DigitalProfile/>)
reportWebVitals();
