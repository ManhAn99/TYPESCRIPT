import React from 'react'
import { IState as IProps } from '../App'
// interface IProps{
//     people : {
//       name : string
//       age : number
//       url : string
//       note? : string
//     }[]
   
// }
//Typing Props
const List : React.FC <IProps> = ({people}) => {

    //Typing function
    const renderList = () :JSX.Element[] => {
        return people.map(person => (
            <li className = 'List'>
                <div className = 'List-header'>
                    <img className = 'List-img' src = {person.url} alt = 'img' />
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age}</p>
                <p className = 'List-note'>
                    {person.note}
                </p>
            </li>
        ))
    }
    return (
        <ul>
            {renderList()}
        </ul>
    )
}

export default List
