const Square = ({colour, gr, gc}) => {
    return (
        <div style={{backgroundColor: colour, gridRowStart: gr, gridColumnStart:gc, height:30, width:30
        ,margin:0}}></div>
    );
}

export default Square;