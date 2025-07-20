import React from "react";
import { Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DesignImage from "./../assets/images/design1.png"; 
import design from "./../assets/images/design.png";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import NavbarCategory from "../components/NavbarCategory";

const Home = () => {
  const theme = useTheme();

  return (  
    <div>

      {/* Main Content */}
      <Box sx={{ maxWidth: 1000, margin: "auto", p: 3 }}>
        
        {/* Banner Image */}
        <img 
          src={DesignImage}
          alt="How we design our products"
          style={{ width: "100%", borderRadius: "10px", marginBottom: "30px" }}
        />

        

        {/* Image left - Text right (same row) */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 4,
            mt: 2,
            mb: 6,
          }}
        >
          <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
              Welcome to <strong>Blossom Co.</strong> — your go-to store for stylish men's fashion. 
              We offer quality clothing with modern design, perfect for any occasion. 
              Our curated collection includes T-shirts, pants, jackets, shoes, and more. 
              Every piece is chosen to help you express confidence, comfort, and personal style.
            </Typography>

        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
