// /**
//  * NOTE
//  */

// const ColorFull = (WrappedComponent) => {
//   const colors = [
//     "success",
//     "warning",
//     "danger",
//     "info",
//     "primary",
//     "dark",
//     "light"
//   ];
//   let randomColor = colors[Math.floor(Math.random() * 6)]
//   let className = `bg-${randomColor}`
//   return (props) => {
//     return (
//       <div className={className} >
//         <WrappedComponent {...props} />
//       </div >
//     )
//   }
// }

// export default ColorFull;