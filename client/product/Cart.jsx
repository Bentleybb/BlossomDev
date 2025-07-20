import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext"; // <-- Import the context

const ProductCart = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { cartItems } = useCart(); // <-- Access cart items from context

  return (
    <Card
      sx={{
        maxWidth: 900,
        margin: "auto",
        mt: 5,
        p: 2,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: theme.custom?.openTitle || theme.palette.primary.main,
          mb: 2,
        }}
      >
        Items in Cart
      </Typography>

      <CardContent>
        {cartItems.length === 0 ? (
          <Typography variant="body1">Your cart is empty.</Typography>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} style={{ borderBottom: "1px solid #ccc", paddingBottom: 10, marginBottom: 10 }}>
              <Typography variant="subtitle1">{item.name}</Typography>
              <Typography variant="body2">Size: {item.size}</Typography>
              <Typography variant="body2">Color: {item.color}</Typography>
              <Typography variant="body2">Price: ${item.price.toFixed(2)}</Typography>
              {item.image && (
                <img src={item.image} alt={item.name} width="80" style={{ marginTop: 6 }} />
              )}
            </div>
          ))
        )}

        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={() => navigate("/checkout")}
        >
          Checkout
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCart;
