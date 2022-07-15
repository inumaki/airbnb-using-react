import React from "react"

export default function Card(props)
{
    console.log(props.item)
    let displaystatus
    if(props.item.avail===0)
    displaystatus="SOLD OUT"
    else
    displaystatus=`Remaining ${props.item.avail}`


return (

    <div className="makecard">
  <div className="status">
{displaystatus}
  </div>
<img className="displayimg" src={props.item.image}/>

<div className="ratings">
<img  className="starlogo" src="../pimages/star.png"/>
<p> {props.item.rating} </p>
</div>

<h4>{props.title}</h4>
<h5>from {props.item.price}/<span>person</span></h5>
</div>

)

}