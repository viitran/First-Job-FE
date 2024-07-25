import { useEffect, useState } from "react";
import { getURL } from "../../services/common/api";

export default function Student() {
  const [students, setStudents] = useState();

  useEffect(() => {
    fetchApi();
  }, [getURL]);

  const fetchApi = async () => {
    try {
      const response = await fetch(getURL);
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.log(error);
    }
  };
  const check = () => {
    console.log(students.data);
  };
  if (!students) return <div>loading...</div>;
  return (
    <>
      <div>
        <h1>Students</h1>
        <button className="btn btn-success" onClick={check}>
          check
        </button>
        <hr />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First_name</th>
              <th scope="col">Last_name</th>
              <th scope="col">point</th>
            </tr>
          </thead>
          <tbody>
            {students.data.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.attributes.firstName}</td>
                <td>{s.attributes.lastName}</td>
                <td>{s.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
