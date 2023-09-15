import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import BaseLayout from "./layout/baseLayout";
import PageNotFound from "./pages/pageNotFound";
import Cart from "./pages/cart";
import { ThankYouPage } from "./pages/thankYouPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
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
