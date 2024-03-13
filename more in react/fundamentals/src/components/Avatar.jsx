// import React from 'react'

function Avatar(props,children) { //we can pass instead  instead of props then we have to use src in place of props.src
    // we can pass children props also 
    console.log(props);
  return (
      <>
          <img src={props.src} width={props.width} height={props.height}
          {...children} />
      </>
  )
}

export default Avatar