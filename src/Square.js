const Square = ({colour, gr, gc}) => {
    return (
        <div style={{backgroundColor: colour, gridRowStart: gr, gridRowEnd:gr+1, gridColumnStart:gc, gridColumnEnd:gc+1, height:30, width:30
        ,margin:0}}></div>
    );
}

export default Square;