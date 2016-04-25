import React from 'react';
import reactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.state = {data: [
            {id: 1, name: "simon baily"}, {id: 2, name: "daily su"},
            {id: 3, name: "simond baily"}, {id: 4, name: "fsdfsdf"},
            {id: 5, name: "sgd baily"}, {id: 6, name: "daily fgfgggg"},
            {id: 7, name: "dddddd baily"}, {id: 8, name: "daily su"},
            {id: 9, name: "simon baily"}, {id: 10, name: "daily su"},
            {id: 11, name: "simon baily"}, {id: 12, name: "daily su"},
            {id: 13, name: "simon baily"}, {id: 14, name: "daily su"},
        ]}
    }
    render() {
        let rows = this.state.data.map (person => {
            return <PersonRow key={person.id} data ={person} />
        })
        return <table>
            <tbody>
                {rows}
            </tbody>
        </table>
    }
}
const PersonRow = (props) => {
    return <tr>
        <td>{props.data.id}</td>
        <td>{props.data.name}</td>
    </tr>
}
export default App
