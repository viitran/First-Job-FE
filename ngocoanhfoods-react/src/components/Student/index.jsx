import { useEffect, useState } from "react";
import { getURLCategories } from "../../services/common/api";
import { Link } from "react-router-dom";

export default function Student() {
  const [categories, setCategories] = useState();
  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    try {
      const response = await fetch(getURLCategories);
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  const check = () => {
    console.log(categories.data);
  };

  if (!categories) return <div>loading....</div>;

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
            {categories.data.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>
                  {" "}
                  <Link to={"/"}>{s.attributes.name}</Link>
                </td>
                {/* <td>{s.attributes.lastName}</td> */}
                {/* <td>{s.result}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
