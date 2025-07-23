import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/neet/online-coaching-class-11"
              element={<Class11Program />}
            />
            <Route
              path="/neet/online-coaching-class-12"
              element={<Class12Program />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Layout() {
  return (
    <div style={{ height: "100vh" }}>
      <Header />
      <div style={{ height: "80vh" }}>
        <Outlet />
      </div>
      <div style={{ height: "10vh" }}>
        <Footer />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div>
      <Link to="/">Allen-Home</Link> |
      <Link to="/neet/online-coaching-class-11"> Class 11 </Link> |
      <Link to="/neet/online-coaching-class-12"> Class 12 </Link>
    </div>
  );
}

function Footer() {
  return <div>Contact Us | Careers | Allen Org</div>;
}

function Home() {
  return <div>Home page</div>;
}

function Class11Program() {
  return <div>neet class 11 program</div>;
}

function Class12Program() {
  return <div>neet class 12 program</div>;
}

function PageNotFound() {
  return <div> Page Not found</div>;
}

export default App;
