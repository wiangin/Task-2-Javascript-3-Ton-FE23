import "../style/CellStyle.css";

export default function Cell(props){
    
    // console.log(props.cell);
    
    const clickHandler = (event) => {
        // console.log( "I min click handler ",props.cell);
        props.onClick(props.cell)
        
        if(props.cell.hasMine === true){
           
            console.log("KAH BOOM!!!");
        }
        else{
        
            console.log("Du överlev!");  
        }
    }

    const showCell = () => {
        let content;

        if(!props.cell.visible){ 
            return content = <p>?</p>
        } else{
             return content = <p>{props.cell.numberOfNeighbouringMines}</p>
        }
    }

    return(
        <>
            <div className="cell-style" onClick={clickHandler}> 
             
                { showCell() }
   
             </div> 

        </>
            
    )
}   

// !props.cell.visible ? <p>?</p> : <p>{{props.cell.numberOfNeighbouringMines}}</p>