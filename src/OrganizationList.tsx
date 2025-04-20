function Organization() {
    return (
        <section className="Organization">
            <h3>Organization Name</h3>
            <table className="EmployeesTable">
                <tr>
                    <th>Employee Name</th>
                    <th>Is Manager?</th>
                    <th>Managed By</th>
                </tr>
                <tr>
                    <td>Employee 1</td>
                    <td>Yes</td>
                    <td>none</td>
                </tr>
                <tr>
                    <td>Employee 2</td>
                    <td>No</td>
                    <td>Manager 1</td>
                </tr>
            </table>
        </section>
    )
}

export default function OrgList() {
    return (
        <section>
            <h2>Organizations</h2>
            <section id="OrgList">
                <Organization></Organization>
                <Organization></Organization>
                <Organization></Organization>
                <Organization></Organization>
            </section>
        </section>
    );
}