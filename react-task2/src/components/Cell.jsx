import "../style/CellStyle.css";

export default function Cell(props){
    // console.log("Props i Cell komponent ",props.cell);
    
    const clickHandler = () => {
        
        props.onClick(props.cell)
   
    }
    return(
        <>
            <div className="cell-style" onClick={clickHandler}></div>
        </>
    )
}