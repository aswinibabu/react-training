
import { Button, DeleteButton, DisbaledButton,Table } from "./../scssStyles/travel";

const AppTravel = (props) => {
    // console.log (props.todolist)
    function onClickhandle(index) {
        props.onDelete(index)
    }
    return (

        <div>

            <Table>
                < thead>
                    <tr>
                        <th>Title</th>
                        <th>Completed</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.todolist.map((res, index) => (
                            <tr key={index}>
                                <td>{res.title}</td>
                                <td>{res.status ? <DisbaledButton type="button">Completed</DisbaledButton> : <Button type="button">Pending</Button>} </td>
                                <td><DeleteButton onClick={() => onClickhandle(index)}>Delete</DeleteButton></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}
export default AppTravel