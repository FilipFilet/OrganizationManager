function Organization() {
    return (
        <>
            <h2>Organization Name</h2>
            <table id="EmployeesTable">
                <tr>
                    <th>Employee Name</th>
                    <th>Is Manager?</th>
                    <th>Managed By</th>
                </tr>
                <tr>
                    <td>Employee 1</td>
                    <td>Yes</td>
                    <td>Manager 1</td>
                </tr>
            </table>
        </>
    )
}

export default function OrgList() {
    return (
        <section>
            <h2>Organizations</h2>
            <Organization></Organization>
        </section>
    );
}