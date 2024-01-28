function Card({nameField, quoteField, show}) {
    if (!show) {
        return null;
    }

    return (
        <div className="card">
            <p className="name">{nameField}</p>
            <p className="quote">{quoteField}</p>
        </div>
    );
}

export default Card;