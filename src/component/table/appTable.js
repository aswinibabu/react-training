const AppTable=(props)=><div>

    <table>
        <tr>
            <th>Name</th>
            <th>Color</th>
            <th>Gear</th>
        </tr>
        {
            props.vehicle.map((res) => (
                <tr>
                    <td>{res.name}</td>
                    <td>{res.color}</td>
                    <td>{res.gear}</td>
                </tr>
            ))
        }
    </table>
</div>

export default AppTable

