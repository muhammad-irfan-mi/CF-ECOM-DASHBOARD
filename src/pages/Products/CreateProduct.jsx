import { Button, TextField, Card, CardContent, Typography, Grid, Box } from "@mui/material";
import { useState } from "react";
import { createProduct } from '../../_api/products'

const CreateProduct = () => {
  const [state, setState] = useState({});
  const [images, setImages] = useState([]);

  const handleFileChange = (e) => {
    setImages(Array.from(e.target.files));
  };

  const __submit__ = async () => {
    const formData = new FormData();

    if (typeof state.colour === "string") state.colour = state.colour.split(",");
    if (typeof state.size === "string") state.size = state.size.split(",");
    if (typeof state.tags === "string") state.tags = state.tags.split(",");
    if (typeof state.price === "string") state.price = +state.price;

    formData.append("name", String(state.name));
    formData.append("price", String(state.price));
    formData.append("desc", String(state.desc));
    formData.append("size", JSON.stringify(state.size));
    formData.append("colour", JSON.stringify(state.colour));
    formData.append("tags", JSON.stringify(state.tags));

    if (images) {
      images.forEach((image) => {
        formData.append("images", image);
      });
    }

    const response = await createProduct(formData);

    if (response) {
      alert("Product created successfully!");
      setState({});
      setImages([]);
    }
  };

  const __onchange__ = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Box className="bg-[#edeeef] h-[89vh] flex justify-center items-center">
      <Card className="w-[35rem] shadow-lg rounded-lg">
        <CardContent>
          <Typography variant="h5" className="text-center mb-6 font-bold text-gray-700">
            Create New Product
          </Typography>

          <Grid container spacing={2}>
            {/* Name */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                onChange={__onchange__}
                name="name"
                variant="outlined"
                label="Name"
                placeholder="Men's watch"
              />
            </Grid>

            {/* Description */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                onChange={__onchange__}
                name="desc"
                variant="outlined"
                label="Description"
                placeholder="Description about the product"
                multiline
                rows={3}
              />
            </Grid>

            {/* Price and Colour */}
            <Grid item xs={6}>
              <TextField
                fullWidth
                onChange={__onchange__}
                name="price"
                type="number"
                variant="outlined"
                label="Price"
                placeholder="4000"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                onChange={__onchange__}
                name="colour"
                variant="outlined"
                label="Colour"
                placeholder="red,blue,green"
              />
            </Grid>

            {/* Size and Tags */}
            <Grid item xs={6}>
              <TextField
                fullWidth
                onChange={__onchange__}
                name="size"
                variant="outlined"
                label="Size"
                placeholder="S,M,L"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                onChange={__onchange__}
                name="tags"
                variant="outlined"
                label="Tags"
                placeholder="casual,sports"
              />
            </Grid>

            {/* Image Upload */}
            <Grid item xs={12}>
              <Button
                variant="outlined"
                component="label"
                fullWidth
                className="text-gray-600 border-gray-400"
              >
                Upload Images
                <input type="file" multiple hidden onChange={handleFileChange} />
              </Button>
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth
                onClick={__submit__}
                className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CreateProduct;