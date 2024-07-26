import { useEffect, useState } from "react";
import { getURLCategories, getURLProducts } from "../../services/common/api";
import { Link } from "react-router-dom";

export default function Student() {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();

  // useEffect(() => {
  //   fetchApiCate();
  // }, []);

  useEffect(() => {
    fetchApiProducts();
  }, []);

  // const fetchApiCate = async () => {
  //   try {
  //     const response = await fetch(getURLCategories);
  //     const data = await response.json();
  //     setCategories(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const fetchApiProducts = async () => {
    try {
      const resp = await fetch(getURLProducts);
      const data = await resp.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const check = () => {
    // console.log(categories.data);
    console.log(products.data);
  };

  const renderImage = (s) => {
    return !(s && s.attributes && s.attributes.image && s.attributes.image.data && s.attributes.image.data[0] && s.attributes.image.data[0].attributes && s.attributes.image.data[0].attributes.url) ? <div></div> : <img height={50} src={`http://localhost:1337${s.attributes.image.data[0].attributes.url}`}/>
  }

  // if (!categories) return <div>loading....</div>;
  if (!products) return <div>loading....</div>;

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
            {products.data.map((s) => {
            return (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>
                  {renderImage(s)}
                </td>
                <td>{s.attributes.name}</td>
                <td>{s.attributes.categories.data[0].attributes.name}</td>
              </tr>
            )
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
