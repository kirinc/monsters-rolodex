import { Component } from "react";
import Card from '../card/card.component';
import './card-list.style.css';

class CardList extends Component{
    render(){
        // console.log(this.props);
        const {monsters} = this.props;
        return(
            <div className = 'card-list'>
                {monsters.map((monster)=>{
                    // const {id, name, email} = monster
                    return(
                        <Card monster={monster} />
                        // <div className = 'card-container' key={id}>
                        //     <img
                        //         alt = {`monster ${name}`}
                        //         src = {`https://robohash.org/${id}?set=set2&size=180x180`}
                        //     />
                        //     <h2>{name}</h2>
                        //     <p>{email}</p>
                        // </div>        
                    )                
                })}
            </div>
        )
    }
}

export default CardList;