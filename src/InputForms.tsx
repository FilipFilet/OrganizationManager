function OrgForm() {
    return (
        <>
            <section className="inputForm">
                <h1>Create Organization</h1>
                <form id="OrgInputForm" action="/orgs" method="POST">
                    <label htmlFor="OrgName">Organization name:</label>
                    <br />
                    <input type="text" id="OrgName" name="OrgName" required />
                    <br />
                    <input type="submit" value="Create" className="btn" />
                </form>
            </section>

            <section className="inputForm">
                <h1>Create Employee</h1>
                <form id="EmployeeInputForm" action="something something" method="POST">
                    {/* Employee Name */}
                    <div>
                        <label htmlFor="EmployeeName">EmployeeName:</label>
                        <br />
                        <input type="text" id="EmployeeName" name="EmployeeName" required />
                    </div>

                    {/* The Employee is in organization */}
                    <div>
                        <label htmlFor="EmpOrganization">Organization: </label>
                        <br />
                        <select id="EmpOrganization">
                            <option value="hej">hej</option>
                            <option value="hallo">hallo</option>
                            <option value="chingchong">chingchong</option>

                        </select>
                    </div>

                    {/* Is the employee manager? */}
                    <div>
                        <label htmlFor="IsManager">Manager?:</label>
                        <input type="checkbox" id="IsManager" name="IsManager" />
                    </div>

                    {/* The employee is managed by */}
                    <div>
                        <label htmlFor="ManagedBy">Managed by: </label>
                        <br />
                        <select id="ManagedBy">
                            <option value="hej">hej</option>
                            <option value="hallo">hallo</option>
                            <option value="chingchong">chingchong</option>

                        </select>
                    </div>
                    <input type="submit" value="Create" className="btn" />
                </form>
            </section>
        </>
    );
}

export default function Forms() {
    return (
        <section id="forms">
            <OrgForm />
        </section>
    );
}