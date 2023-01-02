import './cards.css';

const Cards = (props) => {
    const classes = 'cards ' + props.className;
    return (
        <div className = {classes}>{props.children}</div>
    );
}

export default Cards;