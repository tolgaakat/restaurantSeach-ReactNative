import axios from "axios";



export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: 'Bearer 9kOLmWjMV-166hINlE08GMJJGHRvVZ1OSdNtErAhTfkPiAekh-COc-OMqAzE_zBmIcNMPWAXVKx56KlNuFi6geJqDLE-vdN5mbcHc_barj6yPZrd6nByUkXT5lWoYnYx'
    }
});

