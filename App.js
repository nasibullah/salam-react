import ReactDOM from "react-dom/client";

const AppLayout = () => {
  return (
    <div>
      <h2>Hello World</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
