import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import BaseLayout from "./layout/baseLayout";
import Counter from "./pages/counter";
import PageNotFound from "./pages/pageNotFound";
import Cart from "./pages/cart";
import User from "./pages/user";
import { ThankYouPage } from "./pages/thankYouPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        {/* The BaseLayout component will wrap all the routes inside this */}
        <Route index element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user" element={<User />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        {/* <Route path="/employee">
          <Route index element={<Employee />} />
          <Route path=":id" element={<EditEmployee />} />
          <Route path="detail/:id" element={<DetailEmployee />} />
        </Route> */}
        {/* <Route path="/employee/detail/:id" element={<DetailEmployee />} /> */}
        {/* <Route path="/add-employee" element={<AddEmployee />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Route>

      {/* For Multi Layout */}
      {/* <Route path="/book" element={<LayoutOne />}>
        <Route index element={<BookList />} />
        <Route path=":id" element={<Book />} />
        <Route path="new" element={<NewBook />} />
      </Route> */}
    </Routes>
  );
}

export default App;
