import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useCart } from "./CartContext"; 

const ProductCheckout = () => {
  const theme = useTheme();
  const { cartItems } = useCart();

   console.log("Cart items in Checkout:", cartItems);

  // Group cart items by productId + size + color
  const groupedItems = cartItems.reduce((acc, item) => {
    const key = `${item.id}-${item.size}-${item.color}`;
    if (!acc[key]) {
      acc[key] = { ...item, quantity: 1 };
    } else {
      acc[key].quantity += 1;
    }
    return acc;
  }, {});

  const groupedArray = Object.values(groupedItems);

  const total = groupedArray.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Card
      sx={{
        maxWidth: 900,
        margin: "auto",
        mt: 5,
        p: 3,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: theme.custom?.openTitle || theme.palette.primary.main,
          mb: 2,
        }}
      >
        Checkout
      </Typography>

      <CardContent>
        {groupedArray.length === 0 ? (
          <Typography variant="body1">No items in cart.</Typography>
        ) : (
          <>
            {groupedArray.map((item, index) => (
              <div key={index} style={{ marginBottom: 15 }}>
                <Typography variant="subtitle1">{item.name}</Typography>
                <Typography variant="body2">Size: {item.size}</Typography>
                <Typography variant="body2">Color: {item.color}</Typography>
                <Typography variant="body2">
                  Price: ${item.price.toFixed(2)} x {item.quantity}
                </Typography>
                <Typography variant="body2">
                  Subtotal: ${(item.price * item.quantity).toFixed(2)}
                </Typography>
              </div>
            ))}

            <Typography variant="h6" sx={{ mt: 2 }}>
              Total: ${total.toFixed(2)}
            </Typography>

            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              onClick={() => alert("Order placed!")}
            >
              Place Order
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCheckout;
