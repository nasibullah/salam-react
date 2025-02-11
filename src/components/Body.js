import { useState, useEffect } from "react";
// import axios from "axios";
import ResCard from "./ResCard";
import Skeleton from "./Skeleton";
const Body = () => {
  const [originalData, setOriginalData] = useState([]);
  const [resdata, setResdata] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  // useState:
  // const arr = useState("");
  // const searchQuery = arr[0];
  // const setSearchQuery = arr[1];

  //--Fetching data using axios
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:4000/resData")
  //     .then((res) => {
  //       setResdata(res.data), setOriginalData(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  //--This code for refreshing the filtered data
  // useEffect(() => {
  //   const storedData = localStorage.getItem("filteredResData");
  //   if (storedData) {
  //     setResdata(JSON.parse(storedData)); // Restore filtered data from localStorage
  //   } else {
  //     fetchData(); // Fetch data from API if localStorage is empty
  //   }
  // }, []);

  //--Fetching data using useEffect
  // useEffect(async () => {
  //   const data = await fetch("http://localhost:4000/resData");
  //   const newData = await data.json();
  //   console.log(newData);
  //   setResdata(newData);
  //   setOriginalData(newData);
  //   // localStorage.setItem("filteredResData", JSON.stringify(newData));
  // }, []);
  // useEffect(async () => {
  //   const timer = setTimeout(async () => {
  //     const fetchData = await fetch("http://localhost:4000/resData").then(
  //       (res) => res.json()
  //     );
  //     setOriginalData(fetchData);
  //     setResdata(fetchData);
  //     setLoading(false);
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/resData");
      const data = await response.json();
      setOriginalData(data);
      setResdata(data);
    } catch {
      console.log("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  //--Fetching data using fetch
  // const fetchData = async () => {
  //   const data = await fetch("http://localhost:4000/resData");
  //   const newData = await data.json();
  //   console.log(newData);
  //   setResdata(newData);
  //   setOriginalData(newData);
  //   localStorage.setItem("filteredResData", JSON.stringify(newData));
  // };

  // const handleSearch = () => {
  //   if (!searchQuery || searchQuery.trim() === "") {
  //     setResdata(originalData);
  //   } else {
  //     const searchedData = originalData.filter((res) =>
  //       res.title?.toLowerCase().includes(searchQuery.toLowerCase())
  //     );
  //     setResdata(searchedData);
  //   }
  // };
  // if (resdata.length === 0) {
  //   return (
  //     <div className="skeleton">
  //       <Skeleton />
  //       <Skeleton />
  //       <Skeleton />
  //       <Skeleton />
  //       <Skeleton />
  //       <Skeleton />
  //     </div>
  //   );
  // }
  // } else {
  //   return (
  //     <div className="skeleton">
  //       <Skeleton />
  //       <Skeleton />
  //       <Skeleton />
  //       <Skeleton />
  //       <Skeleton />
  //       <Skeleton />
  //     </div>
  //   );
  // }

  return (
    <div className="body">
      <div className="bar">
        <div className="search">
          <input
            className="search-field"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              // if (!searchQuery || searchQuery.trim() === "") {
              //   setResdata(originalData);
              // } else {
              const searchedData = originalData.filter((res) =>
                res?.title.toLowerCase().includes(searchQuery.toLowerCase())
              );
              setResdata(searchedData);
              console.log("Searched data");
              // }
            }}
          >
            Search
          </button>
          {/* <button className="search-btn" onClick={handleSearch}>
            Search
          </button> */}
        </div>
        <div className="top-btn">
          <button
            className="top-res-btn"
            onClick={() => {
              console.log("The button is clicked!");
              const filteredData = resdata.filter((res) => res?.rate > 4);
              setResdata(filteredData);
              // localStorage.setItem(
              //   "filteredResData",
              //   JSON.stringify(filteredData)
              // );
            }}
          >
            Top Restaurants
          </button>
          <button
            className="all-res-btn"
            onClick={() => {
              console.log("The button is clicked!");
              setResdata(originalData);
              setSearchQuery("");
            }}
          >
            All Restaurants
          </button>
        </div>
      </div>
      <div className="card-container">
        {/* <Card data={resData[0]} />
          <Card data={resData[1]} />
          <Card data={resData[2]} />
          <Card data={resData[3]} />
          <Card data={resData[4]} />
          <Card data={resData[5]} /> */}
        {/* {resdata.length === 0
          ? // <div className="skeleton">
            //   <Skeleton />
            //   <Skeleton />
            //   <Skeleton />
            //   <Skeleton />
            //   <Skeleton />
            //   <Skeleton />
            // </div>
            Array(6)
              .fill(0) //_ is a placeholder for the array value (0 in this case), but it's unused.
              .map((_, index) => <Skeleton key={index} />) //Since the values in the array (0s from .fill(0)) are not needed, we use _ to indicate that we intentionally ignore it.
          : resdata.map((item) => <ResCard key={item.id} data={item} />)}
        {/* <Card image={food2} title={"Naseeb Resturant"} />
          <Card image={food5} title={"Kunduz Kabab"} />
          <Card image={food4} title={"Spin Cake"} />
          <Card image={food6} title={"Shinvari Karaye"} /> */}
        {loading
          ? Array(6)
              .fill(0)
              .map((_, index) => <Skeleton key={index} />)
          : resdata.map((item) => <ResCard key={item.id} data={item} />)}
      </div>
    </div>
  );
};

export default Body;
