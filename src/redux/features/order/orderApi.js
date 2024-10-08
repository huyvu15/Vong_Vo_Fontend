import { apiSlice } from "../../api/apiSlice";
import { set_client_secret } from "./orderSlice";


export const authApi = apiSlice.injectEndpoints({
  overrideExisting:true,
  endpoints: (builder) => ({
    createPaymentIntent: builder.mutation({
      query: (data) => ({
        url: "api/order/create-payment-intent",
        method: "POST",
        body: data,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(set_client_secret(result.clientSecret));
        } catch (err) {
          // do nothing
        }
      },

    }),
    addOrder: builder.mutation({
      query: (data) => ({
        url: "api/order/addOrder",
        method: "POST",
        body: data,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          if(result){
            localStorage.removeItem("couponInfo");
            localStorage.removeItem("cart_products");
            localStorage.removeItem("shipping_info");
          }
        } catch (err) {
          // do nothing
        }
      },

    }),
    cancelOrder: builder.mutation({
      query: (id) => ({
        url: `api/order/update-status/${id}`,
        method: "PATCH",
        body: { status: "cancelled" },
      }),
    }),
    returnOrder: builder.mutation({
      query: (id) => ({
        url: `api/order/update-status/${id}`,
        method: "PATCH",
        body: { status: "return" },
      }),
    }),
    createPaymentUrl: builder.mutation({
      query: (data) => ({
        url: "api/order/create_payment_url",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useCreatePaymentIntentMutation,
  useAddOrderMutation,
  useCancelOrderMutation,
  useCreatePaymentUrlMutation,
  useReturnOrderMutation,
} = authApi;
