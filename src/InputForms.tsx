function OrgForm() {
    return (
        <>
            <h1>Create Organization</h1>
            <form id="OrgInputForm" action="/orgs" method="POST">
                <label htmlFor="OrgName">Organization name:</label>
                <br />
                <input type="text" id="OrgName" name="OrgName" required />
                <br />
                <input type="submit" value="Create" />
            </form>

            <h1>Create Employee</h1>
            <form id="EmployeeInputForm" action="something something" method="POST">
                {/* Employee Name */}
                <label htmlFor="EmployeeName">EmployeeName:</label>
                <br />
                <input type="text" id="EmployeeName" name="EmployeeName" required />
                <br />

                {/* The Employee is in organization */}
                <label htmlFor="EmpOrganization">Organization: </label>
                <br />
                <select id="EmpOrganization">
                    <option value="hej">hej</option>
                    <option value="hallo">hallo</option>
                    <option value="chingchong">chingchong</option>

                </select>
                <br />

                {/* Is the employee manager? */}
                <label htmlFor="IsManager">Manager?:</label>
                <input type="checkbox" id="IsManager" name="IsManager" />
                <br />

                {/* The employee is managed by */}
                <label htmlFor="ManagedBy">Managed by: </label>
                <br />
                <select id="ManagedBy">
                    <option value="hej">hej</option>
                    <option value="hallo">hallo</option>
                    <option value="chingchong">chingchong</option>

                </select>
                <br />
                <input type="submit" value="Create" />
            </form>
        </>
    );
}

export default function Forms() {
    return (
        <section>
            <OrgForm />
        </section>
    );
}