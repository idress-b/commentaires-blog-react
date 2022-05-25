import React from "react";

import Blog from "./pages/Blog";

const App = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/blog" element={<Blog />} />
    //     {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
    //     <Route path="*" element={<Home />} />
    //   </Routes>
    // </BrowserRouter>
    <Blog />
  );
};

export default App;
