import { useEffect, useState } from "react";
import {
  getURLCategories,
  getURLProducts,
} from "../../services/common/api/api-product";
import { Link } from "react-router-dom";
import { getCategories } from "../../services/common/api/api-category";

export default function Student() {
  const [categories, setCategories] = useState();

  useEffect(() => {
    getCategories().then((res) => setCategories(res.data));
  }, []);

  const check = () => {
    // console.log(categories.data);
    console.log(categories);
  };

  const renderImage = (s) => {
    return !(
      s &&
      s.attributes &&
      s.attributes.image &&
      s.attributes.image.data &&
      s.attributes.image.data[0] &&
      s.attributes.image.data[0].attributes &&
      s.attributes.image.data[0].attributes.url
    ) ? (
      <div></div>
    ) : (
      <img
        height={50}
        src={`http://localhost:1337${s.attributes.image.data.attributes.url}`}
      />
    );
  };

  if (!categories) return <div>loading....</div>;

  console.log(categories);

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
              <th scope="col">image</th>
              <th scope="col">name</th>
              <th scope="col">cate</th>
            </tr>
          </thead>
          <tbody>
            {categories?.map((s) => {
              return (
                <tr key={s.id}>
                  <td>{s.id}</td>
                  <td>{renderImage(s)}</td>
                  <td>{s?.attributes.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
