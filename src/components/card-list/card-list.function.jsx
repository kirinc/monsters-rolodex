import Card from '../card/card.function'
import './card-list.style.css'

const CardList = ({monsters}) =>{
    // const {monsters} = props;
    
    return(
        <div className = 'card-list'>
            {monsters.map((monster)=>{
                return(<Card monster= {monster}/>)
            })}
        </div>
    )
}

export default CardList